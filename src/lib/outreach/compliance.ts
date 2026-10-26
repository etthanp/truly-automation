import { createHmac, timingSafeEqual } from "node:crypto";
import { SITE_URL } from "@/lib/site";

/**
 * CAN-SPAM pieces every cold email carries: the sender's postal address, a way to opt out,
 * and the one-click List-Unsubscribe headers Gmail and Yahoo require from bulk senders.
 */

export const FROM = process.env.OUTREACH_FROM ?? "Ethan Presley <ethan@trulyautomation.com>";
export const REPLY_TO = process.env.OUTREACH_REPLY_TO || undefined;

function token(email: string) {
  return createHmac("sha256", process.env.OUTREACH_SECRET ?? "").update(email).digest("hex").slice(0, 32);
}

export function checkToken(email: string, t: string) {
  const want = Buffer.from(token(email));
  const got = Buffer.from(t);
  return want.length === got.length && timingSafeEqual(want, got);
}

export function unsubscribeUrl(email: string) {
  const e = Buffer.from(email).toString("base64url");
  return `${SITE_URL}/api/unsubscribe?e=${e}&t=${token(email)}`;
}

export function footer() {
  return `\n\n--\nTruly Automation LLC, ${process.env.OUTREACH_ADDRESS}\nNot interested? Reply "stop" and I won't email again.`;
}

export function unsubscribeHeaders(email: string): Record<string, string> {
  const mailto = REPLY_TO ?? FROM.match(/<([^>]+)>/)?.[1] ?? FROM;
  return {
    "List-Unsubscribe": `<${unsubscribeUrl(email)}>, <mailto:${mailto}?subject=unsubscribe>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
}

/** Bearer-token check shared by the outreach routes. Vercel cron sends CRON_SECRET. */
export function authorized(req: Request, allowCron = false) {
  const auth = req.headers.get("authorization") ?? "";
  const ok = (secret?: string) => !!secret && auth === `Bearer ${secret}`;
  return ok(process.env.OUTREACH_SECRET) || (allowCron && ok(process.env.CRON_SECRET));
}

/** Pulls the bare address out of "Name <x@y.com>". */
export function bareEmail(from: string) {
  return (from.match(/<([^>]+)>/)?.[1] ?? from).trim().toLowerCase();
}
