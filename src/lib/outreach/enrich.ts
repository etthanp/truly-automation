import { resolveMx } from "node:dns/promises";

/** Finds a contact email on a business website and notes a few true, checkable problems with the site. */

const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
const JUNK_EMAIL = /\.(png|jpe?g|gif|webp|svg|css|js)$|@(example|domain|email|yourdomain|sentry|wixpress|godaddy|sentry-next)\.|^(user|name|you|your|email|test)@/i;
const FREE_MAIL = /@(gmail|yahoo|outlook|hotmail|aol|icloud|live|msn|comcast|att|bellsouth|ymail)\./i;

async function fetchPage(url: string) {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
      headers: { "user-agent": "Mozilla/5.0 (compatible; TrulyAutomationBot/1.0; +https://trulyautomation.com)" },
    });
    if (!res.ok) return null;
    const html = (await res.text()).slice(0, 600_000);
    return { html, url: res.url };
  } catch {
    return null;
  }
}

function normalizeUrl(site: string) {
  const s = site.trim();
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
}

function emailsIn(html: string) {
  const decoded = html
    .replace(/&#64;|&#x40;|\[at\]|\(at\)/gi, "@")
    .replace(/&#46;|\[dot\]|\(dot\)/gi, ".");
  const found = new Set<string>();
  for (const m of decoded.matchAll(EMAIL_RE)) {
    const e = m[0].toLowerCase().replace(/^mailto:/, "").replace(/\.$/, "");
    if (!JUNK_EMAIL.test(e)) found.add(e);
  }
  return [...found];
}

/** Prefer an address on the site's own domain, then a free-mail address the owner uses, then anything else. */
function pickEmail(emails: string[], siteUrl: string) {
  const host = new URL(siteUrl).hostname.replace(/^www\./, "");
  return (
    emails.find((e) => e.endsWith(`@${host}`)) ??
    emails.find((e) => FREE_MAIL.test(e)) ??
    emails[0] ??
    null
  );
}

/** Only facts we can state with confidence, worded the way the email can use them. */
function siteFacts(html: string, finalUrl: string) {
  const facts: string[] = [];
  const lower = html.toLowerCase();
  // Site builders (Wix, GoDaddy, Squarespace...) draw forms, phone links and analytics with scripts we
  // can't see in the HTML, so we never make those claims about them.
  const builder = /wsimg\.com|wixstatic|static\.wix|squarespace|weebly|duda|godaddy|shopify/.test(lower);
  const hasForm = /<form|<iframe|jotform|hsforms|typeform|wpforms|gravityforms|elementor-form|formspree|leadconnectorhq|calendly/.test(lower);
  if (!builder && !hasForm && lower.includes("mailto:")) {
    facts.push("their website has no quote form, only an email link (on a phone that opens a mail app, and most people just leave)");
  }
  if (!builder && !/href=["']tel:/.test(lower)) {
    facts.push("the phone number on their website isn't tap-to-call on a phone");
  }
  if (!builder && !/googletagmanager|gtag\(|google-analytics|analytics\.js|fbq\(|fbevents\.js/.test(lower)) {
    facts.push("their website has no Google Analytics or Facebook tracking, so they can't see which marketing brings in calls");
  }
  if (finalUrl.startsWith("http://")) {
    facts.push("their website isn't secure (browsers show 'Not secure')");
  }
  const year = new Date().getFullYear();
  const copyright = lower.match(/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(20\d{2})/);
  if (copyright && Number(copyright[1]) <= year - 2) {
    facts.push(`their website footer still says ${copyright[1]}`);
  }
  return facts;
}

export async function researchSite(website: string) {
  const base = normalizeUrl(website);
  const home = await fetchPage(base);
  if (!home) return { email: null, facts: [] as string[] };

  let emails = emailsIn(home.html);
  if (emails.length === 0) {
    for (const path of ["/contact", "/contact-us", "/about"]) {
      const page = await fetchPage(new URL(path, home.url).toString());
      if (page) emails = emailsIn(page.html);
      if (emails.length) break;
    }
  }
  return { email: pickEmail(emails, home.url), facts: siteFacts(home.html, home.url) };
}

/** Basic deliverability check: real syntax and a domain that accepts mail. Bounces hurt the sending domain. */
export async function canReceiveMail(email: string) {
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) return false;
  try {
    const mx = await resolveMx(email.split("@")[1]);
    return mx.length > 0;
  } catch {
    return false;
  }
}
