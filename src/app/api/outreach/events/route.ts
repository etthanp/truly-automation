import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { bareEmail, FROM, tagFrom } from "@/lib/outreach/compliance";
import { bumpStat, bumpVariant, getLead, redis, stopLead } from "@/lib/outreach/store";

const OPT_OUT = /\b(stop|unsubscribe|remove me|take me off|not interested|no thanks|don'?t (email|contact) me)\b/i;

/**
 * Resend webhook. Bounces and spam complaints suppress the address for good. Replies (via Resend
 * receiving on OUTREACH_REPLY_TO) end the sequence, count as an opt-out when they say so, and are
 * forwarded to Ethan's inbox.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret || !process.env.RESEND_API_KEY) return NextResponse.json({ error: "not configured" }, { status: 500 });

  const resend = new Resend(process.env.RESEND_API_KEY);
  const payload = await req.text();
  let event;
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        // Resend signs with Svix; accept either header naming.
        id: req.headers.get("svix-id") ?? req.headers.get("webhook-id") ?? "",
        timestamp: req.headers.get("svix-timestamp") ?? req.headers.get("webhook-timestamp") ?? "",
        signature: req.headers.get("svix-signature") ?? req.headers.get("webhook-signature") ?? "",
      },
      webhookSecret: secret,
    });
  } catch {
    return NextResponse.json({ error: "bad signature" }, { status: 401 });
  }

  switch (event.type) {
    case "email.bounced":
    case "email.complained":
    case "email.suppressed": {
      const status = event.type === "email.complained" ? "complained" : "bounced";
      for (const to of event.data.to) {
        const email = bareEmail(to);
        const lead = await getLead(email);
        if (lead && lead.status === "active") await stopLead(lead, status);
        await redis.sadd("out:suppress", email);
        await bumpStat(status);
      }
      break;
    }
    case "email.received": {
      // Match by the reply tag first (owners often answer from a different inbox), then by sender.
      const tag = tagFrom([...event.data.to, ...event.data.received_for]);
      const tagged = tag ? await redis.get<string>(`out:tag:${tag}`) : null;
      const email = tagged ?? bareEmail(event.data.from);
      const lead = await getLead(email);
      const { data: full } = await resend.emails.receiving.get(event.data.email_id);
      const optedOut = OPT_OUT.test(`${event.data.subject}\n${(full?.text ?? "").split(/\n>|\nOn .+wrote:/)[0]}`);
      if (lead && lead.status === "active") {
        await stopLead(lead, optedOut ? "unsubscribed" : "replied");
        await bumpStat(optedOut ? "unsubscribed" : "replied");
        await bumpVariant(lead.variant, optedOut ? "unsubscribed" : "replied");
      } else if (optedOut) {
        await redis.sadd("out:suppress", email);
      }
      if (process.env.OUTREACH_FORWARD_TO) {
        const { error } = await resend.emails.receiving.forward({
          emailId: event.data.email_id,
          to: process.env.OUTREACH_FORWARD_TO,
          from: FROM,
        });
        if (error) console.error("reply forward failed:", error.message);
      }
      break;
    }
  }
  return NextResponse.json({ ok: true });
}
