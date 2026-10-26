import Anthropic from "@anthropic-ai/sdk";
import type { Draft } from "./store";

const anthropic = new Anthropic();

const SEQUENCE_SCHEMA = {
  type: "object",
  properties: {
    subject: { type: "string", description: "Subject for the first email. 2 to 5 words, lowercase is fine, no clickbait." },
    email1: { type: "string" },
    email2: { type: "string" },
    email3: { type: "string" },
  },
  required: ["subject", "email1", "email2", "email3"],
  additionalProperties: false,
};

const SYSTEM = `You write cold emails for Ethan Presley, founder of Truly Automation, a small marketing agency for local service businesses. Truly Automation runs their ads, Google profile, reviews, outreach and SEO, and sets up an AI receptionist that answers missed calls, qualifies leads and books jobs. Every plan is built around the business.

Write a 3-email sequence to one business owner. Sound like a real person typing a quick note, not a marketer.

Email 1 (the intro):
- 3 to 5 short sentences, under 90 words.
- If you are given facts about their website, open with exactly one of them, stated plainly and briefly. Never use more than one. If there are no facts, open with a short, honest observation about their kind of business (missed calls while on a job, slow seasons, leads going to whoever answers first).
- Offer a free marketing checkup: a short, plain-English look at what's costing them calls and jobs. No pitch beyond that.
- End with a simple yes/no question, like "Want me to send it over?"
- No links, no website address, no phone number.

Email 2 (follow-up, sent 3 days later as a reply in the same thread):
- 2 to 3 sentences, under 60 words. A different angle: what happens to calls they miss while working, and that an AI receptionist can text back and book those jobs.
- You may mention trulyautomation.com once.

Email 3 (last note, 4 days after that):
- 1 to 2 sentences, under 40 words. Polite, no guilt. Say this is the last email and the checkup offer stands.

Rules for all three:
- Never invent facts, numbers, results, clients, or anything about their business you weren't given.
- No "I hope this finds you well", no buzzwords, no exclamation points, no emojis, no bullet points.
- Plain text only. Don't use em dashes; use commas or periods.
- Greet the owner by first name if given, otherwise no name ("Hi there" is fine).
- End every email with just "Ethan" on its own line. No title, no footer, no unsubscribe line (that is added separately).`;

/** Writes the whole sequence for one lead in a single call to the fast, low-cost model. */
export async function writeSequence(lead: {
  business: string;
  owner?: string;
  industry: string;
  city: string;
  state?: string;
  facts: string[];
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
    output_config: { effort: "low", format: { type: "json_schema", schema: SEQUENCE_SCHEMA } },
    system: SYSTEM,
    messages: [{ role: "user", content: details }],
  });

  if (response.stop_reason === "refusal") throw new Error("The model declined to write this sequence");
  const text = response.content.find((b) => b.type === "text");
  if (!text || text.type !== "text") throw new Error("No email text returned");
  const out = JSON.parse(text.text) as { subject: string; email1: string; email2: string; email3: string };

  const subject = out.subject.trim();
  return [
    { subject, body: out.email1.trim() },
    { subject: `Re: ${subject}`, body: out.email2.trim() },
    { subject: `Re: ${subject}`, body: out.email3.trim() },
  ];
}
