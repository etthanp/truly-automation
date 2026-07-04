import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { leads } from "@/lib/leads";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function writeEmail(lead: typeof leads[0]): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 400,
    messages: [
      {
        role: "user",
        content: `Write a short, friendly cold email to a ${lead.industry} called "${lead.businessName}" in ${lead.city}${lead.ownerName ? `, addressed to ${lead.ownerName}` : ""}.

You are Ethan from Truly Automation (trulyautomation.com). You build AI agents and professional websites for local businesses.

The email should:
- Be 4-5 sentences max, conversational, not salesy
- Mention one specific pain point relevant to their industry (e.g. missed calls, no-shows, manual scheduling)
- Briefly mention you build AI agents that handle bookings/customer questions automatically, and professional websites
- End with a simple question like "Would it be worth a quick 10-minute call?"
- Sign off as Ethan from Truly Automation
${lead.website ? `- Reference their website ${lead.website} naturally if possible` : ""}

Do not use subject line or any labels. Just write the email body.`,
      },
    ],
  });

  return response.content[0].type === "text" ? response.content[0].text : "";
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "RESEND_API_KEY not set" }, { status: 500 });
    }
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "ANTHROPIC_API_KEY not set" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const redis = Redis.fromEnv();

    const results: { business: string; status: string }[] = [];
    const errors: { business: string; error: string }[] = [];
    const skipped: { business: string; reason: string }[] = [];

    for (const lead of leads) {
      const alreadyContacted = await redis.sismember("contacted_emails", lead.email);

      if (alreadyContacted) {
        console.log(`⏭️ Skipping ${lead.businessName} — already contacted`);
        skipped.push({ business: lead.businessName, reason: "already contacted" });
        continue;
      }

      try {
        const emailBody = await writeEmail(lead);
        const subject = `Quick idea for ${lead.businessName}`;

        await resend.emails.send({
          from: "Ethan at Truly Automation <ethan@trulyautomation.com>",
          to: lead.email,
          subject,
          text: emailBody,
        });

        // Mark as contacted so we never email them again
        await redis.sadd("contacted_emails", lead.email);
        await redis.hset(`contact:${lead.email}`, {
          business: lead.businessName,
          sentAt: new Date().toISOString(),
        });

        console.log(`✅ Sent to ${lead.businessName} (${lead.email})`);
        results.push({ business: lead.businessName, status: "sent" });

        await new Promise((r) => setTimeout(r, 1000));
      } catch (err) {
        console.error(`❌ Failed for ${lead.businessName}:`, err);
        errors.push({ business: lead.businessName, error: String(err) });
      }
    }

    return NextResponse.json({
      sent: results.length,
      skipped: skipped.length,
      failed: errors.length,
      results,
      skipped,
      errors,
    });
  } catch (err) {
    console.error("Top-level error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
