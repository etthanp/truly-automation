import Anthropic from "@anthropic-ai/sdk";
import { PHONE_DISPLAY } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import type { Draft, Variant } from "./store";

const anthropic = new Anthropic();

// Where the fixed text starts in a stored email: the old marketing pitch, then the front desk pitch.
const SERVICES_MARKERS = ["\n\nWe're Truly Automation", "\n\nI'm Ethan with Truly Automation"];

/** The AI-written opening of a stored intro email (everything before the fixed services section). */
export function openingOf(body: string) {
  const at = SERVICES_MARKERS.map((m) => body.indexOf(m)).filter((i) => i >= 0);
  return (at.length ? body.slice(0, Math.min(...at)) : body).trim();
}

const STUDENT_SUBJECT = "quick question from a UNC Pembroke student";

/** Subject for a lead's intro. The student and front desk versions have their own fixed subject lines. */
export function subjectFor(lead: { business: string; variant?: Variant; drafts: Draft[] }) {
  if (lead.variant === "student") return STUDENT_SUBJECT;
  if (lead.variant === "frontdesk") return `missed calls at ${lead.business}`;
  return lead.drafts[0].subject;
}

/**
 * The intro email. Everything after the AI's personal opening is fixed text written here, so the
 * email never claims a service we don't run. It's built at send time, so queued leads always get
 * the current version.
 */
export function introEmail(opening: string, lead: { business: string; industry: string; variant?: Variant }): string {
  if (lead.variant === "student") return studentIntro(opening, lead);
  return frontDeskIntro(opening, lead);
}

/**
 * The student angle: Ethan introduces himself as the student lead of the AI program at UNC Pembroke
 * before the AI's observation about their site, then the Truly Front Desk pitch.
 */
function studentIntro(opening: string, lead: { business: string }): string {
  const [first, ...rest] = opening.trim().split("\n");
  const hasGreeting = /^(hi|hey|hello)\b.*,$/i.test(first.trim());
  const greeting = hasGreeting ? first.trim() : "Hi there,";
  const observation = (hasGreeting ? rest.join("\n") : opening).trim();
  return `${greeting}

I'm Ethan, a student at UNC Pembroke studying business and AI, and I'm the student lead of the AI program there. I also built Truly Front Desk, an AI front desk for local businesses.

${observation}

Riley, the AI receptionist, answers every call 24/7, books appointments on your calendar and gets you when a call needs a person. Everything shows up in a dashboard and our iPhone app. You can hear it yourself by calling ${PHONE_DISPLAY}.

Would a quick 15-minute demo be worth it for ${lead.business}?

Ethan Presley
UNC Pembroke, Business & AI
Truly Automation: ${SITE_URL}
${PHONE_DISPLAY}`;
}

/**
 * The Truly Front Desk pitch: Truly builds and runs its own AI front desk, managed from a desktop
 * dashboard and its own iPhone app. Short on purpose, with one question at the end.
 */
function frontDeskIntro(opening: string, lead: { business: string }): string {
  return `${opening.trim()}

I'm Ethan with Truly Automation. We built Truly Front Desk, an AI front desk we set up and run for local businesses. Riley, the AI receptionist, answers every call 24/7, books appointments on your calendar and saves every caller and job so nothing slips through.

You see it all in one dashboard on your computer and in the Truly Front Desk iPhone app, with an alert the moment it books a job or someone needs a callback. Call ${PHONE_DISPLAY} to hear it yourself.

Would a quick 15-minute demo be worth it for ${lead.business}?

Ethan Presley
Truly Automation
${SITE_URL}
${PHONE_DISPLAY}`;
}

/** Website facts that tie to answering the phone, the only ones the front desk pitch should open with. */
const CALL_FACT = /phone|quote form/;

const INTRO_SCHEMA = {
  type: "object",
  properties: {
    subject: { type: "string", description: "Subject for the email. 2 to 5 words, lowercase is fine, no clickbait." },
    opening: { type: "string" },
  },
  required: ["subject", "opening"],
  additionalProperties: false,
};

const SYSTEM = `You write cold emails for Ethan Presley at Truly Automation, which builds and runs Truly Front Desk, an AI front desk for local businesses. Sound like a real person typing a quick note, not a marketer.

You write the "opening" of one email to a business owner: a greeting line, then 1 to 2 short sentences, under 45 words total. If you are given facts about their website, mention exactly one of them, plainly and briefly. If there are no facts, make one short, honest observation about their kind of business (calls missed while busy with customers, after-hours calls going to voicemail, callers going to whoever answers first). Do not list services, do not sign off, do not ask a question: the services list and the closing are added after your text.

Rules:
- Never invent facts, numbers, results, clients, or anything about their business you weren't given.
- No "I hope this finds you well", no buzzwords, no exclamation points, no emojis.
- Plain text only. Don't use em dashes; use commas or periods.
- Greet the owner by first name if given, otherwise "Hi there,".
- No links or web addresses anywhere (they're added separately). No unsubscribe line.

If you are given something we noticed about their Google reviews, open with that instead of a website fact. Say it plainly and kindly, the way a helpful neighbor would ("I noticed a couple of your Google reviews mention calls going to voicemail"), then one short line that it's an easy thing to fix, not their fault. Never quote a review, name a reviewer, give star ratings, or sound like you're scolding them.`;

/** Writes the intro for one lead with the fast, low-cost model. There are no follow-ups. */
export async function writeIntro(lead: {
  business: string;
  owner?: string;
  industry: string;
  city: string;
  state?: string;
  facts: string[];
  signal?: string;
  variant?: Variant;
}): Promise<Draft[]> {
  const where = lead.state ? `${lead.city}, ${lead.state}` : lead.city;
  // Every email pitches the front desk, so only open with website facts about answering the phone.
  const facts = lead.facts.filter((f) => CALL_FACT.test(f));
  const details = [
    `Business: ${lead.business}`,
    `Type of business: ${lead.industry}`,
    `Location: ${where}`,
    lead.owner ? `Owner's first name: ${lead.owner.split(" ")[0]}` : "Owner's name: unknown",
    facts.length ? `Facts about their website (true, use at most one):\n- ${facts.join("\n- ")}` : "Facts about their website: none",
    ...(lead.signal ? [`What we noticed about their Google reviews (true, open with this): ${lead.signal}`] : []),
  ].join("\n");

  const response = await anthropic.messages.create({
    model: "claude-haiku-5-5",
    max_tokens: 4000,
    output_config: { effort: "low", format: { type: "json_schema", schema: INTRO_SCHEMA } },
    system: SYSTEM,
    messages: [{ role: "user", content: details }],
  });

  if (response.stop_reason === "refusal") throw new Error("The model declined to write this email");
  const text = response.content.find((b) => b.type === "text");
  if (!text || text.type !== "text") throw new Error("No email text returned");
  const out = JSON.parse(text.text) as { subject: string; opening: string };

  return [{ subject: out.subject.trim(), body: introEmail(out.opening, lead) }];
}
