import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { leads } from "@/lib/leads";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function writeEmail(lead: typeof leads[0]): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
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

    // Filter out already contacted leads first
    const contactedChecks = await Promise.all(
      leads.map((lead) => redis.sismember("contacted_emails", lead.email))
    );

    const newLeads = leads.filter((_, i) => !contactedChecks[i]);
    const skippedCount = leads.length - newLeads.length;

    if (newLeads.length === 0) {
      return NextResponse.json({
        sent: 0,
        skipped: skippedCount,
        failed: 0,
        message: "No new leads to contact — add more leads to leads.ts",
      });
    }

    // Write all emails in parallel (fast!)
    const emailBodies = await Promise.all(newLeads.map((lead) => writeEmail(lead)));

    // Send all emails in parallel
    const sendResults = await Promise.allSettled(
      newLeads.map(async (lead, i) => {
        const result = await resend.emails.send({
          from: "Ethan at Truly Automation <ethan@trulyautomation.com>",
          to: lead.email,
          subject: `Quick idea for ${lead.businessName}`,
          text: emailBodies[i],
        });

        // Mark as contacted
        await redis.sadd("contacted_emails", lead.email);
        await redis.hset(`contact:${lead.email}`, {
          business: lead.businessName,
          sentAt: new Date().toISOString(),
        });

        return { business: lead.businessName, email: lead.email, result };
      })
    );

    const sent = sendResults.filter((r) => r.status === "fulfilled").map((r) =>
      r.status === "fulfilled" ? { business: r.value.business, status: "sent" } : null
    ).filter(Boolean);

    const failed = sendResults.filter((r) => r.status === "rejected").map((r, i) => ({
      business: newLeads[i].businessName,
      error: r.status === "rejected" ? String(r.reason) : "",
    }));

    console.log(`✅ Sent: ${sent.length} | ⏭️ Skipped: ${skippedCount} | ❌ Failed: ${failed.length}`);

    return NextResponse.json({
      sent: sent.length,
      skipped: skippedCount,
      failed: failed.length,
      results: sent,
      errors: failed,
    });
  } catch (err) {
    console.error("Top-level error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return POST(req);
}
