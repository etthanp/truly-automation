import Anthropic from "@anthropic-ai/sdk";
import { industries } from "@/lib/industries";
import type { Industry } from "@/lib/industries/types";
import { SITE_URL } from "@/lib/site";
import type { Draft } from "./store";

const anthropic = new Anthropic();

/** The industry page that matches a lead's free-text industry, e.g. "concrete contractor" -> /concrete. */
function industryFor(text: string): Industry | undefined {
  const t = text.toLowerCase();
  return (
    industries.find((i) => t.includes(i.slug.replace(/-/g, " "))) ??
    industries.find((i) => t.includes(i.name.toLowerCase())) ??
    industries.find((i) => i.who.toLowerCase().split(" and ").some((w) => t.includes(w.replace(/s$/, ""))))
  );
}

/**
 * What we offer, written once here so the email never claims a service we don't run.
 * The AI only writes the personal opening and the two follow-ups.
 */
function servicesBlock(who: string, one: string, link: string) {
  return `We're Truly Automation, a marketing team for ${who}. Here's what we handle:

- Google and Facebook ads that bring in real leads
- An AI receptionist that answers every call 24/7, qualifies the lead and books it on your calendar
- A website chatbot and missed-call text-back, so no lead slips through
- SEO so you show up on Google, Google Maps and ChatGPT
- Your Google profile, social posts and short videos, kept fresh every week
- Review requests after every job, plus outreach that brings in steady work
- A fast website built for your business, if you need one

Every plan is built around your business, and we only work with one ${one} per area. You can see it all here: ${link}`;
}

const SEQUENCE_SCHEMA = {
  type: "object",
  properties: {
    subject: { type: "string", description: "Subject for the first email. 2 to 5 words, lowercase is fine, no clickbait." },
    opening: { type: "string" },
    email2: { type: "string" },
    email3: { type: "string" },
  },
  required: ["subject", "opening", "email2", "email3"],
  additionalProperties: false,
};

const SYSTEM = `You write cold emails for Ethan Presley at Truly Automation, a small marketing agency for local service businesses. Sound like a real person typing a quick note, not a marketer.

You write three pieces for one business owner:

"opening" - the first lines of email 1. A greeting line, then 1 to 2 short sentences, under 45 words total. If you are given facts about their website, mention exactly one of them, plainly and briefly. If there are no facts, make one short, honest observation about their kind of business (missed calls while on a job, slow seasons, leads going to whoever answers first). Do not list services, do not sign off, do not ask a question: the services list and the closing are added after your text.

"email2" - a follow-up sent 3 days later as a reply in the same thread. 2 to 3 sentences, under 60 words. A different angle: what happens to the calls they miss while they're working, and that an AI receptionist can text back and book those jobs. Offer the free marketing checkup. Do not sign off (the link and signature are added after your text).

"email3" - a last note 4 days after that. 1 to 2 sentences, under 40 words. Polite, no guilt. Say this is the last email and the free checkup offer stands. End with "Ethan" on its own line.

Rules:
- Never invent facts, numbers, results, clients, or anything about their business you weren't given.
- No "I hope this finds you well", no buzzwords, no exclamation points, no emojis.
- Plain text only. Don't use em dashes; use commas or periods.
- Greet the owner by first name if given, otherwise "Hi there,".
- No links or web addresses anywhere (they're added separately). No unsubscribe line.`;

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
  const out = JSON.parse(text.text) as { subject: string; opening: string; email2: string; email3: string };

  const ind = industryFor(lead.industry);
  const link = ind ? `${SITE_URL}/${ind.slug}` : SITE_URL;
  const who = ind?.who ?? "local service businesses";
  const one = ind?.one ?? "business in each industry";
  const subject = out.subject.trim();

  const email1 = `${out.opening.trim()}

${servicesBlock(who, one, link)}

Want me to put together a free marketing checkup for ${lead.business}? It's a short, plain-English look at what's costing you calls and jobs.

Ethan`;

  return [
    { subject, body: email1 },
    { subject: `Re: ${subject}`, body: `${out.email2.trim()}\n\nHere's everything we do: ${link}\n\nEthan` },
    { subject: `Re: ${subject}`, body: out.email3.trim() },
  ];
}
