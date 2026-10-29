import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { authorized, footer, FROM, replyTag, replyToFor, unsubscribeHeaders } from "@/lib/outreach/compliance";
import {
  bumpStat,
  bumpVariant,
  FOLLOW_UP_DAYS,
  getLeads,
  getStats,
  isPaused,
  redis,
  saveLead,
  stopLead,
  today,
  type OutreachLead,
} from "@/lib/outreach/store";
import { introEmail, openingOf, subjectFor } from "@/lib/outreach/write";

export const maxDuration = 60;

const DAY = 24 * 60 * 60 * 1000;

/** Pauses sending if bounces or spam complaints climb, before they get the Resend account or domain flagged. */
async function checkBrake() {
  const yesterday = new Date(Date.now() - DAY).toISOString().slice(0, 10);
  const [a, b] = await Promise.all([getStats(today()), getStats(yesterday)]);
  const sent = a.sent + b.sent;
  const bounced = a.bounced + b.bounced;
  const complained = a.complained + b.complained;
  if (sent >= 50 && bounced / sent > 0.05) return `bounce rate ${Math.round((bounced / sent) * 100)}% over the last 2 days`;
  if (complained >= 3) return `${complained} spam complaints over the last 2 days`;
  return null;
}

/**
 * Daily send run (Vercel cron, weekdays). Sends every email that's due: first emails for new leads
 * and follow-ups for leads who haven't replied, 100 per Resend batch call, until time runs out.
 * Anything left over stays due and goes out on the next run.
 */
export async function GET(req: NextRequest) {
  if (!authorized(req, true)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "RESEND_API_KEY not set" }, { status: 500 });

  // A manual pause holds until resumed. The bounce/complaint brake is re-checked every run, so it
  // lifts by itself once the last two days look healthy again. ?force=1 skips the brake for one run.
  const force = req.nextUrl.searchParams.get("force") === "1" && authorized(req);
  const paused = (await isPaused()) ?? (force ? null : await checkBrake());
  if (paused) return NextResponse.json({ sent: 0, paused });

  const resend = new Resend(process.env.RESEND_API_KEY);
  const deadline = Date.now() + 45_000;
  let sent = 0;
  const errors: string[] = [];

  // Daily cap matched to the Resend plan: Pro is 50,000 a month with no daily limit, which is about
  // 2,200 per weekday. Resend rejects a whole batch that would go over the plan, so we stop at the cap
  // and the rest go out on the next run. Override with OUTREACH_DAILY_LIMIT.
  const planLimit = Number(process.env.OUTREACH_DAILY_LIMIT) || 2200;
  let room = planLimit - (await getStats(today())).sent;

  // ?only=<email> sends just that lead's next email (for testing without touching the rest of the queue).
  const only = req.nextUrl.searchParams.get("only")?.toLowerCase();

  while (Date.now() < deadline && room > 0) {
    const due = only
      ? (await redis.zscore("out:due", only)) !== null ? [only] : []
      : await redis.zrange<string[]>("out:due", 0, Date.now(), { byScore: true, offset: 0, count: Math.min(100, room) });
    if (due.length === 0) break;

    const leads = (await getLeads(due)).filter((l): l is OutreachLead => !!l && l.status === "active" && !!l.drafts[l.step]);
    const stale = due.filter((e) => !leads.some((l) => l.email === e));
    if (stale.length) await redis.zrem("out:due", ...stale);
    if (leads.length === 0) continue;

    // Map each lead's reply tag back to its email, so replies from any inbox can be matched.
    await redis.mset(Object.fromEntries(leads.map((l) => [`out:tag:${replyTag(l.email)}`, l.email])));

    const { data, error } = await resend.batch.send(
      leads.map((lead) => {
        const draft = lead.drafts[lead.step];
        // The intro is rebuilt from the AI opening so queued leads always get the current template.
        const body = lead.step === 0 ? introEmail(openingOf(draft.body), lead) : draft.body;
        return {
          from: FROM,
          to: lead.email,
          replyTo: replyToFor(lead.email),
          subject: subjectFor(lead),
          text: body + footer(),
          headers: unsubscribeHeaders(lead.email),
        };
      }),
    );
    if (error || !data) {
      errors.push(error?.message ?? "batch send failed");
      break;
    }

    const at = new Date().toISOString();
    await Promise.all(
      leads.map(async (lead, i) => {
        lead.sent.push({ step: lead.step, id: data.data[i]?.id ?? "", at });
        if (lead.step === 0 && !only) await bumpVariant(lead.variant, "intros");
        lead.step += 1;
        if (lead.step >= lead.drafts.length) return stopLead(lead, "done");
        await saveLead(lead);
        await redis.zadd("out:due", { score: Date.now() + FOLLOW_UP_DAYS[lead.step - 1] * DAY, member: lead.email });
      }),
    );
    sent += leads.length;
    room -= leads.length;
    if (only) break;
    await bumpStat("sent", leads.length);
    // Stay under Resend's default API rate limit.
    await new Promise((r) => setTimeout(r, 600));
  }

  const stillDue = await redis.zcount("out:due", 0, Date.now());
  return NextResponse.json({ sent, stillDue, errors });
}

export async function POST(req: NextRequest) {
  return GET(req);
}
