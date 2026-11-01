import Anthropic from "@anthropic-ai/sdk";
import { PHONE_DISPLAY } from "@/lib/contact";
import { industries } from "@/lib/industries";
import type { Industry } from "@/lib/industries/types";
import { SITE_URL } from "@/lib/site";
import type { Draft, Variant } from "./store";

const anthropic = new Anthropic();

const VIDEO_URL = "https://www.youtube.com/shorts/m_Qd10L5ORo";
const SERVICES_MARKER = "\n\nWe're Truly Automation";

/** The industry page that matches a lead's free-text industry, e.g. "concrete contractor" -> /concrete. */
function industryFor(text: string): Industry | undefined {
  const t = text.toLowerCase();
  return (
    industries.find((i) => t.includes(i.slug.replace(/-/g, " "))) ??
    industries.find((i) => t.includes(i.name.toLowerCase())) ??
    industries.find((i) => i.who.toLowerCase().split(" and ").some((w) => t.includes(w.replace(/s$/, ""))))
  );
}

function pageFor(industry: string) {
  const ind = industryFor(industry);
  return { link: ind ? `${SITE_URL}/${ind.slug}` : SITE_URL, who: ind?.who ?? "local service businesses" };
}

/** The AI-written opening of a stored intro email (everything before the fixed services section). */
export function openingOf(body: string) {
  const i = body.indexOf(SERVICES_MARKER);
  return (i >= 0 ? body.slice(0, i) : body).trim();
}

const STUDENT_SUBJECT = "quick question from a UNC Pembroke student";

/** Subject for a lead's intro. The student version has its own fixed subject line. */
export function subjectFor(lead: { variant?: Variant; drafts: Draft[] }) {
  return lead.variant === "student" ? STUDENT_SUBJECT : lead.drafts[0].subject;
}

/**
 * The intro email. Everything after the AI's personal opening is fixed text written here, so the
 * email never claims a service we don't run. It's built at send time, so queued leads always get
 * the current version.
 */
export function introEmail(opening: string, lead: { business: string; industry: string; variant?: Variant }): string {
  if (lead.variant === "student") return studentIntro(opening, lead);
  const { link, who } = pageFor(lead.industry);
  return `${opening.trim()}

We're Truly Automation, a marketing team for ${who}. Here's a quick video on what we do: ${VIDEO_URL}

What we offer:
- An AI receptionist that answers every call 24/7 and books the job
- An AI chatbot on your website that answers questions and captures leads
- A website checkup to find what's costing you calls
- Facebook posts and Google Business Profile posts, done for you automatically
- An automatic review system for your past and future customers
- Cold outreach on the phone to bring in steady work
- Meta (Facebook and Instagram) and Google ads
- Alerts when someone posts in a local Facebook group looking for the work you do

Get your free marketing checkup today, and work with a real team that values real, personal relationships.

See everything here: ${link}
Or call us: ${PHONE_DISPLAY}

Want me to put together a free marketing checkup for ${lead.business}?

Ethan`;
}

/**
 * The student angle: Ethan introduces himself as the student lead of the AI program at UNC Pembroke
 * before the AI's observation about their site, then a shorter offer list.
 */
function studentIntro(opening: string, lead: { business: string; industry: string }): string {
  const { link, who } = pageFor(lead.industry);
  const [first, ...rest] = opening.trim().split("\n");
  const hasGreeting = /^(hi|hey|hello)\b.*,$/i.test(first.trim());
  const greeting = hasGreeting ? first.trim() : "Hi there,";
  const observation = (hasGreeting ? rest.join("\n") : opening).trim();
  return `${greeting}

I'm Ethan, a student at UNC Pembroke studying business and AI, and I'm the student lead of the AI program there. This semester I'm working with a small number of ${who} to help them get more calls and jobs using AI and better marketing.

${observation}

A few things I can help with:
- An AI receptionist that answers every call 24/7 and books the job
- Automatic Google and Facebook posts so you stay visible
- An automatic review system for past and future customers
- A free marketing checkup that shows what's costing you calls

I'm keeping this to a handful of businesses so I can give each one real attention. Would you be open to a free checkup for ${lead.business}?

Ethan Presley
UNC Pembroke, Business & AI
Truly Automation: ${link}
${PHONE_DISPLAY}`;
}

const INTRO_SCHEMA = {
  type: "object",
  properties: {
    subject: { type: "string", description: "Subject for the email. 2 to 5 words, lowercase is fine, no clickbait." },
    opening: { type: "string" },
  },
  required: ["subject", "opening"],
  additionalProperties: false,
};

const SYSTEM = `You write cold emails for Ethan Presley at Truly Automation, a small marketing agency for local service businesses. Sound like a real person typing a quick note, not a marketer.

You write the "opening" of one email to a business owner: a greeting line, then 1 to 2 short sentences, under 45 words total. If you are given facts about their website, mention exactly one of them, plainly and briefly. If there are no facts, make one short, honest observation about their kind of business (missed calls while on a job, slow seasons, leads going to whoever answers first). Do not list services, do not sign off, do not ask a question: the services list and the closing are added after your text.

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
  const details = [
    `Business: ${lead.business}`,
    `Type of business: ${lead.industry}`,
    `Location: ${where}`,
    lead.owner ? `Owner's first name: ${lead.owner.split(" ")[0]}` : "Owner's name: unknown",
    lead.facts.length ? `Facts about their website (true, use at most one):\n- ${lead.facts.join("\n- ")}` : "Facts about their website: none",
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
