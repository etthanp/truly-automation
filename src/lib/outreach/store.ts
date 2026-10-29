import { Redis } from "@upstash/redis";

/**
 * Cold email outreach state, kept in Upstash Redis.
 *
 * out:lead:<email>   the lead record (JSON)
 * out:due            sorted set of active leads, scored by when their next email is due (ms)
 * out:status:<s>     one set per status, for counts
 * out:suppress       emails we must never send to (bounced, complained, unsubscribed)
 * out:stats:<day>    daily counters (sent, bounced, complained, replied, unsubscribed)
 * out:paused         set when sending is paused (by hand or by the bounce brake)
 * contacted_emails   leads emailed by the old sender, skipped so nobody gets a second intro
 */

export type LeadStatus = "active" | "replied" | "unsubscribed" | "bounced" | "complained" | "done";

/** Which intro a lead gets: the agency pitch, or the UNC Pembroke student angle. */
export type Variant = "standard" | "student";

export interface Draft {
  subject: string;
  body: string;
}

export interface OutreachLead {
  email: string;
  business: string;
  owner?: string;
  industry: string;
  city: string;
  state?: string;
  website?: string;
  /** True things we found on their website, used to personalize the first email. */
  facts: string[];
  /** The whole sequence, written when the lead is added: intro, follow-up, last note. */
  drafts: Draft[];
  /** Missing on leads added before the student version existed; they're "standard". */
  variant?: Variant;
  status: LeadStatus;
  /** How many emails of the sequence have gone out. */
  step: number;
  sent: { step: number; id: string; at: string }[];
  addedAt: string;
}

/** Days to wait after each email before the next one. */
export const FOLLOW_UP_DAYS = [3, 4];

export const redis = Redis.fromEnv();

const leadKey = (email: string) => `out:lead:${email}`;

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export async function getLead(email: string) {
  return redis.get<OutreachLead>(leadKey(email.toLowerCase()));
}

export async function getLeads(emails: string[]) {
  if (emails.length === 0) return [];
  return redis.mget<(OutreachLead | null)[]>(...emails.map(leadKey));
}

export async function saveLead(lead: OutreachLead) {
  await redis.set(leadKey(lead.email), lead);
}

/** True if we've already emailed this address or must never email it. */
export async function isKnown(email: string) {
  const [lead, suppressed, contacted] = await Promise.all([
    redis.exists(leadKey(email)),
    redis.sismember("out:suppress", email),
    redis.sismember("contacted_emails", email),
  ]);
  return lead === 1 || suppressed === 1 || contacted === 1;
}

/** Queue a new lead so its first email goes out on the next send run. */
export async function addLead(lead: OutreachLead) {
  await saveLead(lead);
  await Promise.all([
    redis.zadd("out:due", { score: Date.now(), member: lead.email }),
    redis.sadd("out:status:active", lead.email),
  ]);
}

/** Move a lead to a final status and stop its sequence. */
export async function stopLead(lead: OutreachLead, status: Exclude<LeadStatus, "active">) {
  const prev = lead.status;
  lead.status = status;
  await saveLead(lead);
  await Promise.all([
    redis.zrem("out:due", lead.email),
    redis.srem(`out:status:${prev}`, lead.email),
    redis.sadd(`out:status:${status}`, lead.email),
    status === "done" || status === "replied" ? null : redis.sadd("out:suppress", lead.email),
  ]);
}

export async function bumpStat(field: string, by = 1) {
  const key = `out:stats:${today()}`;
  await redis.hincrby(key, field, by);
  await redis.expire(key, 60 * 60 * 24 * 90);
}

export async function getStats(day: string) {
  const s = (await redis.hgetall<Record<string, number>>(`out:stats:${day}`)) ?? {};
  return {
    sent: Number(s.sent ?? 0),
    bounced: Number(s.bounced ?? 0),
    complained: Number(s.complained ?? 0),
    replied: Number(s.replied ?? 0),
    unsubscribed: Number(s.unsubscribed ?? 0),
  };
}

/** All-time counters per intro version (intros sent, replies, opt-outs), for comparing them. */
export async function bumpVariant(variant: Variant | undefined, field: string, by = 1) {
  await redis.hincrby("out:variants", `${variant ?? "standard"}:${field}`, by);
}

export async function getVariantStats() {
  return (await redis.hgetall<Record<string, number>>("out:variants")) ?? {};
}

export async function isPaused() {
  return (await redis.get<string>("out:paused")) ?? null;
}

export async function setPaused(reason: string | null) {
  if (reason) await redis.set("out:paused", reason);
  else await redis.del("out:paused");
}
