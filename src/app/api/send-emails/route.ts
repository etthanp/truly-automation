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
        content: `Write a short, friendly cold email to ${lead.ownerName ? `${lead.ownerName} at ` : ""}"${lead.businessName}", ${lead.industry ? `a ${lead.industry}` : "an HVAC company"} in ${lead.city}.

You are Ethan, founder of Truly Automation (trulyautomation.com). You help HVAC companies stop losing jobs to missed calls. You set up an AI receptionist that instantly TEXTS BACK any missed call, answers the customer, and books the job — 24/7, including nights and weekends — all on their existing phone number.

Write the email so it:
- Is 4-5 short sentences, conversational and human — like a real person wrote it, NOT a marketing blast. No buzzwords, no "I hope this email finds you well."
- Opens with a specific, relatable hook about missed calls: when the crew is out on jobs the phone goes to voicemail, and most callers don't leave one — they just call the next company.
- Briefly explains the fix: an AI receptionist that texts them back in seconds and books the job automatically.
- Mentions there's a quick live demo on the site (trulyautomation.com) they can try themselves — text it and watch it book a job.
- Ends with a low-pressure question like "Worth a quick 10-minute look?"
- Signs off simply as "Ethan — Truly Automation" followed by trulyautomation.com on the next line.

Rules:
- Do NOT include a subject line or any labels. Just the email body text.
- Do NOT invent statistics, customer names, or fake specifics about their company or website. Keep every claim honest.
- Keep it under 120 words.`,
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
          subject: lead.ownerName
            ? `Quick question, ${lead.ownerName}`
            : `The calls ${lead.businessName} is missing`,
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
