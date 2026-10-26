import { NextRequest, NextResponse } from "next/server";
import { checkToken } from "@/lib/outreach/compliance";
import { bumpStat, getLead, redis, stopLead } from "@/lib/outreach/store";

function decode(req: NextRequest) {
  const e = req.nextUrl.searchParams.get("e") ?? "";
  const t = req.nextUrl.searchParams.get("t") ?? "";
  const email = Buffer.from(e, "base64url").toString().toLowerCase();
  return email && checkToken(email, t) ? email : null;
}

async function unsubscribe(email: string) {
  const lead = await getLead(email);
  if (lead && lead.status !== "unsubscribed") {
    await stopLead(lead, "unsubscribed");
    await bumpStat("unsubscribed");
  }
  await redis.sadd("out:suppress", email);
}

const page = (msg: string) =>
  new NextResponse(
    `<!doctype html><meta name="viewport" content="width=device-width"><title>Truly Automation</title><body style="font-family:system-ui;max-width:32rem;margin:4rem auto;padding:0 1rem;color:#0b1b3f"><p>${msg}</p></body>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );

/** One-click unsubscribe (RFC 8058), sent by Gmail/Yahoo's unsubscribe button. */
export async function POST(req: NextRequest) {
  const email = decode(req);
  if (!email) return new NextResponse("invalid link", { status: 400 });
  await unsubscribe(email);
  return new NextResponse("unsubscribed");
}

/** Opening the link in a browser shows a confirm button, so link scanners can't unsubscribe people by accident. */
export async function GET(req: NextRequest) {
  const email = decode(req);
  if (!email) return page("This unsubscribe link isn't valid. Reply to the email with \"stop\" and we'll take you off the list.");
  const action = `${req.nextUrl.pathname}${req.nextUrl.search}`;
  return page(
    `Stop emails to ${email}?</p><form method="post" action="${action}"><button style="font:inherit;padding:.6rem 1.2rem">Unsubscribe</button></form><p>`,
  );
}
