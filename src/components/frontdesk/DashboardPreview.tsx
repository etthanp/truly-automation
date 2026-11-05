"use client";

import { useState } from "react";
import type { DashData } from "@/lib/frontdesk";

const TABS = ["Today", "Calls", "Calendar", "Pipeline", "Customers"] as const;
type Tab = (typeof TABS)[number];

const outcomeClass: Record<string, string> = {
  Booked: "bg-emerald-500/10 text-emerald-700",
  Answered: "bg-royal/10 text-royal",
  Callback: "bg-ember/10 text-ember",
  "Sent to you": "bg-navy/10 text-navy",
};

function Today({ d }: { d: DashData }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {d.stats.map(([label, n]) => (
          <div key={label} className="rounded-xl border border-navy/10 bg-background/60 px-4 py-3">
            <p className="text-2xl font-bold text-navy">{n}</p>
            <p className="text-xs text-navy/55">{label}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">Needs you</p>
        <ul className="mt-2 space-y-2">
          {d.attention.map((a) => (
            <li key={a.who} className="rounded-xl border border-ember/25 bg-ember/5 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-navy">{a.who}</p>
                <p className="text-xs font-semibold text-ember">{a.due}</p>
              </div>
              <p className="mt-1 text-sm text-navy/75">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">What your AI did today</p>
        <ul className="mt-2 divide-y divide-navy/10">
          {d.calls.slice(0, 3).map((c) => (
            <li key={c.time} className="flex items-start justify-between gap-3 py-2.5">
              <p className="text-sm text-navy/80">
                <span className="font-semibold text-navy">{c.who}</span> {c.summary}
              </p>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${outcomeClass[c.outcome]}`}>{c.outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Calls({ d }: { d: DashData }) {
  return (
    <ul className="divide-y divide-navy/10">
      {d.calls.map((c) => (
        <li key={c.time} className="grid gap-1 py-3 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:gap-4">
          <p className="text-xs text-navy/50">{c.time}</p>
          <div>
            <p className="text-sm font-semibold text-navy">
              {c.who} <span className="ml-1 font-normal text-navy/45">{c.length}</span>
            </p>
            <p className="mt-0.5 text-sm text-navy/70">{c.summary}</p>
            <p className="mt-1 text-xs font-semibold text-royal">Summary + transcript →</p>
          </div>
          <span className={`justify-self-start rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${outcomeClass[c.outcome]}`}>{c.outcome}</span>
        </li>
      ))}
    </ul>
  );
}

function Calendar({ d }: { d: DashData }) {
  return (
    <ul className="space-y-2">
      {d.appts.map((a) => (
        <li key={a.who + a.time} className="flex items-center gap-4 rounded-xl border border-navy/10 px-4 py-3">
          <div className="w-20 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy/50">{a.day}</p>
            <p className="text-sm font-bold text-navy">{a.time}</p>
          </div>
          <span className="h-9 w-1 shrink-0 rounded-full bg-royal" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy">{a.what}</p>
            <p className="text-xs text-navy/55">{a.who}, booked by your AI</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Pipeline({ d }: { d: DashData }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {d.pipeline.map((col) => (
        <div key={col.stage} className="rounded-xl bg-background/70 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/55">
            {col.stage} <span className="text-navy/35">{col.items.length}</span>
          </p>
          <ul className="mt-2 space-y-2">
            {col.items.map((it) => (
              <li key={it.who} className="rounded-lg border border-navy/10 bg-white px-3 py-2.5 shadow-sm">
                <p className="text-sm font-semibold text-navy">{it.who}</p>
                <p className="text-xs text-navy/60">{it.what}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Customers({ d }: { d: DashData }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wide text-navy/45">
            <th className="py-2 pr-4 font-semibold">Name</th>
            <th className="py-2 pr-4 font-semibold">Phone</th>
            <th className="py-2 pr-4 font-semibold">Last contact</th>
            <th className="py-2 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {d.customers.map((c) => (
            <tr key={c.name}>
              <td className="py-2.5 pr-4 font-semibold text-navy">{c.name}</td>
              <td className="py-2.5 pr-4 whitespace-nowrap text-navy/70">{c.phone}</td>
              <td className="py-2.5 pr-4 text-navy/70">{c.last}</td>
              <td className="py-2.5 text-navy/70">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Example front desk dashboard with sample data, shown on the homepage and industry pages. */
export default function DashboardPreview({ data, compact = false }: { data: DashData; compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("Today");
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-2xl shadow-navy/10">
      <div className="flex items-center justify-between gap-3 border-b border-navy/10 bg-navy px-5 py-3 text-white">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{data.business}</p>
          <p className="text-xs text-white/55">AI Front Desk dashboard</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-white/80">
          Example with sample data
        </span>
      </div>
      <div className={compact ? "" : "sm:grid sm:grid-cols-[9.5rem_1fr]"}>
        <nav
          role="tablist"
          aria-label="Dashboard sections"
          className={`flex gap-1 overflow-x-auto border-b border-navy/10 p-2 ${
            compact ? "" : "sm:flex-col sm:overflow-visible sm:border-r sm:border-b-0 sm:p-3"
          }`}
        >
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                tab === t ? "bg-royal/10 text-royal" : "text-navy/60 hover:bg-navy/5 hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>
        <div className="min-h-[22rem] p-4 sm:p-5" role="tabpanel">
          {tab === "Today" && <Today d={data} />}
          {tab === "Calls" && <Calls d={data} />}
          {tab === "Calendar" && <Calendar d={data} />}
          {tab === "Pipeline" && <Pipeline d={data} />}
          {tab === "Customers" && <Customers d={data} />}
        </div>
      </div>
    </div>
  );
}
