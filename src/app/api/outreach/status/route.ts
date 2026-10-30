import { NextRequest, NextResponse } from "next/server";
import { authorized } from "@/lib/outreach/compliance";
import {
  getLead,
  getLeads,
  getStats,
  getVariantStats,
  isPaused,
  redis,
  saveLead,
  setPaused,
  stopLead,
  type OutreachLead,
  type Variant,
} from "@/lib/outreach/store";

export const maxDuration = 60;

const STATUSES =["active", "replied", "unsubscribed", "bounced", "complained", "done"] as const;

/** Queue and send numbers, plus the last 7 days of activity. */
export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const counts = Object.fromEntries(
    await Promise.all(STATUSES.map(async (s) => [s, await redis.scard(`out:status:${s}`)] as const)),
  );
  const days = Array.from({ length: 7 }, (_, i) => new Date(Date.now() - i * 864e5).toISOString().slice(0, 10));
  const recent = Object.fromEntries(await Promise.all(days.map(async (d) => [d, await getStats(d)] as const)));

  return NextResponse.json({
    paused: await isPaused(),
    dueNow: await redis.zcount("out:due", 0, Date.now()),
    leads: counts,
    // Intro versions compared: "<variant>:intros", ":replied", ":unsubscribed" (counted since the split began).
    variants: await getVariantStats(),
    recent,
  });
}

/** Switches every queued lead that hasn't had its intro yet to one intro version. Returns how many changed. */
async function setQueuedVariant(variant: Variant) {
  const emails = await redis.smembers("out:status:active");
  let changed = 0;
  for (let i = 0; i < emails.length; i += 200) {
    const leads = await getLeads(emails.slice(i, i + 200));
    const unsent = leads.filter((l): l is OutreachLead => !!l && l.step === 0 && l.variant !== variant);
    for (const lead of unsent) lead.variant = variant;
    await Promise.all(unsent.map(saveLead));
    changed += unsent.length;
  }
  return changed;
}

/**
 * { action: "pause" | "resume" } controls sending.
 * { action: "replied" | "stop", email } ends one lead's sequence by hand ("stop" also opts them out).
 * { action: "variant", variant } switches every lead still waiting for its intro to that version.
 */
export async function POST(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { action, email, variant } = (await req.json().catch(() => ({}))) as {
    action?: string;
    email?: string;
    variant?: string;
  };

  if (action === "variant" && (variant === "student" || variant === "standard")) {
    return NextResponse.json({ ok: true, changed: await setQueuedVariant(variant) });
  }
  if (action === "pause") await setPaused("paused by hand");
  else if (action === "resume") await setPaused(null);
  else if ((action === "replied" || action === "stop") && email) {
    const lead = await getLead(email.toLowerCase());
    if (!lead) return NextResponse.json({ error: "no such lead" }, { status: 404 });
    await stopLead(lead, action === "stop" ? "unsubscribed" : "replied");
  } else return NextResponse.json({ error: "unknown action" }, { status: 400 });

  return NextResponse.json({ ok: true, paused: await isPaused() });
}
