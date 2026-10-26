#!/usr/bin/env node
// Pushes a lead list into the cold email queue.
//
//   OUTREACH_SECRET=... node scripts/outreach-push.mjs leads.csv --industry "concrete contractor"
//
// Takes a .csv or .json file. Columns it understands (any case): business/name/company,
// email, website/site/url, city, state, owner/contact, industry/trade. --industry fills in
// rows that don't have one. Leads the server didn't get to in time are resent automatically.

import { readFileSync } from "node:fs";

const [file, ...rest] = process.argv.slice(2);
const flag = (name) => {
  const i = rest.indexOf(`--${name}`);
  return i >= 0 ? rest[i + 1] : undefined;
};
const URL_BASE = process.env.OUTREACH_URL ?? "https://trulyautomation.com";
const SECRET = process.env.OUTREACH_SECRET;
if (!file || !SECRET) {
  console.error("usage: OUTREACH_SECRET=... node scripts/outreach-push.mjs <leads.csv|json> [--industry X] [--state NC]");
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((v) => v.trim()));
  const keys = head.map((h) => h.trim().toLowerCase());
  return body.map((r) => Object.fromEntries(keys.map((k, i) => [k, (r[i] ?? "").trim()])));
}

const pick = (row, ...names) => {
  for (const n of names) {
    const hit = Object.keys(row).find((k) => k.toLowerCase() === n);
    if (hit && String(row[hit]).trim()) return String(row[hit]).trim();
  }
  return undefined;
};

const raw = file.endsWith(".json") ? JSON.parse(readFileSync(file, "utf8")) : parseCsv(readFileSync(file, "utf8"));
const leads = raw
  .map((r) => ({
    business: pick(r, "business", "name", "company", "business name"),
    email: pick(r, "email", "e-mail"),
    website: pick(r, "website", "site", "url"),
    city: pick(r, "city", "town"),
    state: pick(r, "state") ?? flag("state"),
    // Our call lists put "Owner" in Contact Name when the real name is unknown.
    owner: [pick(r, "owner", "contact", "owner name", "contact name")].find((o) => o && !/^(owner|manager|office)$/i.test(o)),
    industry: pick(r, "industry", "trade") ?? flag("industry"),
  }))
  .filter((l) => l.business && (l.email || l.website));

console.log(`${leads.length} leads with an email or website`);
let pending = leads;
const totals = { queued: 0, skipped: 0 };
while (pending.length) {
  const chunk = pending.slice(0, 15);
  pending = pending.slice(15);
  const res = await fetch(`${URL_BASE}/api/outreach/leads`, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${SECRET}` },
    body: JSON.stringify({ leads: chunk }),
  });
  const out = await res.json();
  if (!res.ok) {
    console.error(res.status, out);
    process.exit(1);
  }
  totals.queued += out.queued;
  totals.skipped += out.skipped;
  for (const r of out.results) console.log(`${r.result === "queued" ? "✓" : "·"} ${r.business}${r.email ? ` <${r.email}>` : ""}: ${r.result}`);
  pending = [...out.notProcessed, ...pending];
}
console.log(`\nDone. Queued ${totals.queued}, skipped ${totals.skipped}.`);
