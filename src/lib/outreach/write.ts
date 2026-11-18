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
export function introEmail(opening: string, lead: { business: string; industry: string; state?: string; variant?: Variant }): string {
  if (lead.variant === "student") return studentIntro(opening, lead);
  return frontDeskIntro(opening, lead);
}

/** Ethan's own cell, the only number in the student email. */
const ETHAN_CELL = "704-740-9976";

/**
 * The student angle: Ethan is a college student at UNC Pembroke and head of its AI program, helping
 * local businesses put AI to work. "Local" only for North Carolina leads; everyone else hears where he is.
 */
function studentIntro(opening: string, lead: { business: string; state?: string }): string {
  const [first, ...rest] = opening.trim().split("\n");
  const hasGreeting = /^(hi|hey|hello)\b.*,$/i.test(first.trim());
  const greeting = hasGreeting ? first.trim() : "Hi there,";
  const observation = (hasGreeting ? rest.join("\n") : opening).trim();
  const who = /^(nc|north carolina)$/i.test(lead.state?.trim() ?? "")
    ? "a local college student at UNC Pembroke"
    : "a college student at UNC Pembroke in North Carolina";
  return `${greeting}

I'm Ethan, ${who} and head of the AI program there. I help local businesses bring AI into their day-to-day work, like answering calls around the clock, booking appointments and following up with customers.

${observation}

Would you be open to a quick 15-minute call to see if it could help ${lead.business}?

Ethan Presley
UNC Pembroke, AI Program
${ETHAN_CELL}`;
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

Ethan
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

const SYSTEM = `You write cold emails for Ethan at Truly Automation, which builds and runs Truly Front Desk, an AI front desk for local businesses. Sound like a real person typing a quick note, not a marketer.

You write the "opening" of one email to a business owner: a greeting line, then 1 to 2 short sentences, under 45 words total. If you are given facts about their website, mention exactly one of them, plainly and briefly. If there are no facts, make one short, honest observation about their kind of business (calls missed while busy with customers, after-hours calls going to voicemail, callers going to whoever answers first). Do not list services, do not sign off, do not ask a question: the services list and the closing are added after your text.

Rules:
- Never invent facts, numbers, results, clients, or anything about their business you weren't given.
- No "I hope this finds you well", no buzzwords, no exclamation points, no emojis.
- Plain text only. Don't use em dashes; use commas or periods.
- Greet the owner by first name if given, otherwise "Hi there,".
- No links or web addresses anywhere (they're added separately). No unsubscribe line.`;

/** Writes the intro for one lead with the fast, low-cost model. There are no follow-ups. */
export async function writeIntro(lead: {
  business: string;
  owner?: string;
  industry: string;
  city: string;
  state?: string;
  facts: string[];
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

  // Stored in the front desk form so openingOf can always find the opening; the send rebuilds it for the lead's version.
  return [{ subject: out.subject.trim(), body: introEmail(out.opening, { ...lead, variant: "frontdesk" }) }];
}
