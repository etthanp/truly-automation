import { NextRequest, NextResponse } from "next/server";
import { authorized } from "@/lib/outreach/compliance";
import { canReceiveMail, researchSite } from "@/lib/outreach/enrich";
import { addLead, isKnown, type OutreachLead } from "@/lib/outreach/store";
import { writeSequence } from "@/lib/outreach/write";

export const maxDuration = 60;

interface IncomingLead {
  business: string;
  industry: string;
  city: string;
  state?: string;
  email?: string;
  website?: string;
  owner?: string;
}

type Result = { business: string; result: string; email?: string };

/**
 * Adds leads to the outreach queue. For each one: find the email on their website if it's missing,
 * check the address can receive mail, skip anyone already contacted or opted out, note what we found
 * on the site, write the 3-email sequence, and queue it. Leads not reached in time come back in
 * `notProcessed` so the caller can resend them.
 */
async function processLead(input: IncomingLead): Promise<Result> {
  const business = input.business?.trim();
  if (!business || !input.industry || !input.city) return { business: business || "?", result: "missing business, industry or city" };

  let email = input.email?.trim().toLowerCase() || null;
  let facts: string[] = [];
  if (input.website) {
    const site = await researchSite(input.website);
    facts = site.facts;
    email ??= site.email;
  }
  if (!email) return { business, result: "no email found" };
  if (await isKnown(email)) return { business, email, result: "already contacted or opted out" };
  if (!(await canReceiveMail(email))) return { business, email, result: "email domain can't receive mail" };

  const lead: OutreachLead = {
    email,
    business,
    owner: input.owner?.trim() || undefined,
    industry: input.industry.trim(),
    city: input.city.trim(),
    state: input.state?.trim() || undefined,
    website: input.website?.trim() || undefined,
    facts,
    drafts: [],
    status: "active",
    step: 0,
    sent: [],
    addedAt: new Date().toISOString(),
  };
  lead.drafts = await writeSequence(lead);
  await addLead(lead);
  return { business, email, result: "queued" };
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = (await req.json().catch(() => null)) as { leads?: IncomingLead[] } | null;
  const leads = body?.leads ?? [];
  if (!Array.isArray(leads) || leads.length === 0) {
    return NextResponse.json({ error: "send { leads: [...] }" }, { status: 400 });
  }

  const deadline = Date.now() + 45_000;
  const results: Result[] = [];
  const notProcessed: IncomingLead[] = [];
  const queue = [...leads];

  // A few at a time: each lead may fetch up to four pages and call the model once.
  async function worker() {
    for (let next = queue.shift(); next; next = queue.shift()) {
      if (Date.now() > deadline) {
        notProcessed.push(next);
        continue;
      }
      try {
        results.push(await processLead(next));
      } catch (err) {
        results.push({ business: next.business, result: `error: ${String((err as Error)?.message ?? err)}` });
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));

  return NextResponse.json({
    queued: results.filter((r) => r.result === "queued").length,
    skipped: results.filter((r) => r.result !== "queued").length,
    results,
    notProcessed,
  });
}
