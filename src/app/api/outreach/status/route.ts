import { NextRequest, NextResponse } from "next/server";
import { authorized } from "@/lib/outreach/compliance";
import { getLead, getStats, getVariantStats, isPaused, redis, setPaused, stopLead } from "@/lib/outreach/store";

const STATUSES = ["active", "replied", "unsubscribed", "bounced", "complained", "done"] as const;

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

/**
 * { action: "pause" | "resume" } controls sending.
 * { action: "replied" | "stop", email } ends one lead's sequence by hand ("stop" also opts them out).
 */
export async function POST(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { action, email } = (await req.json().catch(() => ({}))) as { action?: string; email?: string };

  if (action === "pause") await setPaused("paused by hand");
  else if (action === "resume") await setPaused(null);
  else if ((action === "replied" || action === "stop") && email) {
    const lead = await getLead(email.toLowerCase());
    if (!lead) return NextResponse.json({ error: "no such lead" }, { status: 404 });
    await stopLead(lead, action === "stop" ? "unsubscribed" : "replied");
  } else return NextResponse.json({ error: "unknown action" }, { status: 400 });

  return NextResponse.json({ ok: true, paused: await isPaused() });
}
