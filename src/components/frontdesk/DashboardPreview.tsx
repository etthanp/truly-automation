"use client";

import { useState } from "react";
import { STAGES, type DashData } from "@/lib/frontdesk";

// Mirrors the look of the real Truly Front Desk app: light sidebar, blue active item, white panels.
const INK = "text-[#1c2336]";
const MUTED = "text-[#858b99]";

const VIEWS = ["Overview", "Conversations", "Calendar", "Customers & jobs", "Needs attention"] as const;
type View = (typeof VIEWS)[number];

const SUBTITLES: Record<View, string> = {
  Overview: "Every conversation and next step, all in one place.",
  Conversations: "The full story, from the first call to the last message.",
  Calendar: "See the schedule. Keep every commitment clear.",
  "Customers & jobs": "People, progress, and the details worth remembering.",
  "Needs attention": "The right person. The right next step.",
};

const badgeClass: Record<string, string> = {
  Booked: "bg-[#edf1ff] text-[#4b69c4]",
  Answered: "bg-[#f2f3f5] text-[#858c9b]",
  "Follow-up": "bg-[#fdf0e8] text-[#d9864f]",
  Text: "bg-[#eaf4ef] text-[#408569]",
  Urgent: "bg-[#fdf0e8] text-[#d9864f]",
  Normal: "bg-[#f2f3f5] text-[#858c9b]",
  Requested: "bg-[#fdf0e8] text-[#d9864f]",
};

const initials = (name: string) => name.split(" ").slice(0, 2).map((x) => x[0]).join("");

function Badge({ children }: { children: string }) {
  return <span className={`shrink-0 rounded px-1.5 py-1 text-[0.65rem] leading-none font-medium ${badgeClass[children] ?? badgeClass.Answered}`}>{children}</span>;
}

function Avatar({ name }: { name: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf0f6] text-[0.7rem] font-semibold text-[#5b6c91]">
      {initials(name)}
    </span>
  );
}

function Panel({ title, sub, count, children }: { title: string; sub?: string; count?: number; children: React.ReactNode }) {
  return (
    <section className="min-w-0 overflow-hidden rounded-[10px] border border-[#e6e7e9] bg-white">
      <div className="px-5 pt-5 pb-4">
        <h3 className={`flex items-center gap-1.5 text-sm font-semibold ${INK}`}>
          {title}
          {count !== undefined && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#f8eee5] text-[0.65rem] font-semibold text-[#b68c65]">{count}</span>
          )}
        </h3>
        {sub && <p className="mt-1.5 text-[0.7rem] text-[#969ba6]">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

function TaskRows({ d }: { d: DashData }) {
  return (
    <>
      {d.tasks.map((t) => (
        <div key={t.name} className="flex gap-3 border-t border-[#eff0f3] px-5 py-4">
          <span className="mt-0.5 h-4 w-4 shrink-0 rounded-[5px] border border-[#d6d9e0]" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className={`text-xs font-semibold ${INK}`}>{t.title}</p>
              <Badge>{t.priority}</Badge>
            </div>
            <p className={`mt-1 text-[0.7rem] leading-relaxed ${MUTED}`}>
              {t.name}. {t.detail}
            </p>
            <p className="mt-1.5 text-[0.65rem] font-medium text-[#d9864f]">{t.due}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function ApptRows({ d }: { d: DashData }) {
  return (
    <>
      {d.appts.map((a) => (
        <div key={a.name + a.time} className="flex items-center gap-4 border-t border-[#eef0f3] px-5 py-3.5">
          <p className="w-16 shrink-0 text-[0.7rem] text-[#69748c]">
            {a.time}
            <span className="mt-1 block text-[0.6rem] text-[#a8aeba]">{a.day}</span>
          </p>
          <span className="h-8 border-l-[3px] border-[#a4b7ef]" />
          <div className="min-w-0 flex-1">
            <p className={`truncate text-xs font-semibold ${INK}`}>{a.what}</p>
            <p className={`text-[0.7rem] ${MUTED}`}>{a.name}</p>
          </div>
          <Badge>{a.status}</Badge>
        </div>
      ))}
    </>
  );
}

function Overview({ d, compact }: { d: DashData; compact: boolean }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 rounded-[10px] border border-[#e6e7e9] bg-white py-4 sm:grid-cols-4">
        {d.metrics.map(([label, n, sub], i) => (
          <div key={label} className={`border-[#e9ebef] px-4 py-1 ${i % 2 === 0 ? "border-r" : ""} sm:border-r sm:last:border-r-0 ${i < 2 ? "max-sm:mb-3" : ""}`}>
            <p className={`text-[0.7rem] ${MUTED}`}>{label}</p>
            <p className={`mt-1.5 text-2xl font-bold ${INK}`}>{n}</p>
            <p className="text-[0.65rem] text-[#a3a8b3]">{sub}</p>
          </div>
        ))}
      </div>
      <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"}`}>
        <Panel title="Recent activity" sub="Calls and messages your AI handled">
          {d.activity.slice(0, compact ? 3 : 5).map((a) => (
            <div key={a.name + a.time} className="flex items-center gap-3 border-t border-[#f0f1f4] px-5 py-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border text-sm ${
                  a.kind === "call" ? "border-[#e8ecf8] bg-[#f4f6fc] text-[#6584c2]" : "border-[#e9ede3] bg-[#f4f5f0] text-[#829178]"
                }`}
                aria-hidden
              >
                {a.kind === "call" ? "↙" : "✉"}
              </span>
              <div className="min-w-0 flex-1">
                <p className={`truncate text-xs font-semibold ${INK}`}>{a.name}</p>
                <p className={`truncate text-[0.7rem] ${MUTED}`}>{a.title}</p>
              </div>
              <Badge>{a.badge}</Badge>
              <span className="w-12 shrink-0 text-right text-[0.65rem] text-[#a3a8b3]">{a.time}</span>
            </div>
          ))}
        </Panel>
        {!compact && (
          <div className="space-y-4">
            <Panel title="Needs your attention" sub="AI handles the routine. You handle the exceptions." count={d.tasks.length}>
              <TaskRows d={d} />
            </Panel>
            <Panel title="Coming up" sub="Appointments and next conversations">
              <ApptRows d={d} />
            </Panel>
          </div>
        )}
      </div>
    </div>
  );
}

function Conversations({ d }: { d: DashData }) {
  const c = d.convo;
  return (
    <section className="overflow-hidden rounded-[10px] border border-[#e6e7e9] bg-white">
      <div className="flex items-center gap-3 border-b border-[#eef0f3] px-5 py-4">
        <Avatar name={c.name} />
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${INK}`}>{c.name}</p>
          <p className={`text-[0.7rem] ${MUTED}`}>{c.phone}</p>
        </div>
        <span className="ml-auto"><Badge>Booked</Badge></span>
      </div>
      <div className="border-b border-[#eef0f3] bg-[#fafbfe] px-5 py-3">
        <p className="text-[0.65rem] font-semibold tracking-wide text-[#969ba6] uppercase">Call summary</p>
        <p className={`mt-1 text-xs ${INK}`}>{c.summary}</p>
      </div>
      <div className="space-y-2.5 px-5 py-4">
        <p className="text-[0.65rem] font-semibold tracking-wide text-[#969ba6] uppercase">Transcript</p>
        {c.lines.map((l, i) => (
          <div key={i} className={l.ai ? "pr-10" : "pl-10 text-right"}>
            <p
              className={`inline-block rounded-xl px-3 py-2 text-left text-xs ${
                l.ai ? "rounded-tl-sm bg-[#254cf0] text-white" : "rounded-tr-sm bg-[#f2f3f5] text-[#1c2336]"
              }`}
            >
              {l.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Customers({ d }: { d: DashData }) {
  return (
    <section className="overflow-x-auto rounded-[10px] border border-[#e6e7e9] bg-white">
      <table className="w-full min-w-[30rem] text-left text-xs">
        <thead>
          <tr className="text-[0.65rem] tracking-wide text-[#969ba6] uppercase">
            <th className="px-5 py-3 font-semibold">Customer</th>
            <th className="px-3 py-3 font-semibold">Phone</th>
            <th className="px-3 py-3 font-semibold">Job stage</th>
            <th className="px-3 py-3 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {d.customers.map((c) => (
            <tr key={c.name} className="border-t border-[#f0f1f4]">
              <td className="px-5 py-3">
                <span className="flex items-center gap-2.5">
                  <Avatar name={c.name} />
                  <span className={`font-semibold ${INK}`}>{c.name}</span>
                </span>
              </td>
              <td className={`px-3 py-3 whitespace-nowrap ${MUTED}`}>{c.phone}</td>
              <td className="px-3 py-3">
                <span className="rounded bg-[#edf1ff] px-1.5 py-1 text-[0.65rem] whitespace-nowrap text-[#4b69c4]">{c.stage}</span>
              </td>
              <td className={`px-3 py-3 ${MUTED}`}>{c.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-[#f0f1f4] px-5 py-3 text-[0.65rem] text-[#a3a8b3]">Job stages: {STAGES.join(", ")}</p>
    </section>
  );
}

/** Example front desk dashboard with sample data, shown on the homepage and industry pages. */
export default function DashboardPreview({ data, compact = false }: { data: DashData; compact?: boolean }) {
  const [view, setView] = useState<View>("Overview");
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e3e3df] bg-[#f6f5f1] font-[Arial,Helvetica,sans-serif] shadow-2xl shadow-navy/10">
      <div className={compact ? "" : "sm:grid sm:grid-cols-[12.5rem_1fr]"}>
        <aside className={`border-b border-[#e3e3df] bg-[#fbfaf7] p-3 ${compact ? "" : "sm:border-r sm:border-b-0 sm:p-4"}`}>
          <div className={`flex items-center justify-between gap-3 px-2 ${compact ? "" : "sm:block"}`}>
            <p className={`text-3xl leading-none font-black tracking-[-0.12em] ${INK} ${compact ? "" : "sm:text-4xl"}`}>
              truly<span className="text-[#254cf0]">.</span>
            </p>
            <p className={`text-[0.6rem] font-bold tracking-[0.2em] ${INK} ${compact ? "" : "sm:mt-2"}`}>FRONT DESK</p>
          </div>
          <nav
            role="tablist"
            aria-label="Dashboard sections"
            className={`mt-3 flex gap-1 overflow-x-auto ${compact ? "" : "sm:mt-6 sm:flex-col sm:overflow-visible"}`}
          >
            {VIEWS.map((v) => (
              <button
                key={v}
                type="button"
                role="tab"
                aria-selected={view === v}
                onClick={() => setView(v)}
                className={`flex shrink-0 items-center gap-2 rounded-[7px] px-3 py-2 text-left text-xs font-medium transition ${
                  view === v ? "bg-[#254cf0] text-white shadow-md shadow-[#254cf0]/10" : "text-[#737989] hover:bg-[#eeefeb] hover:text-[#1c2336]"
                }`}
              >
                {v}
                {v === "Needs attention" && (
                  <b className={`ml-auto rounded-[5px] px-1.5 py-0.5 text-[0.6rem] font-semibold ${view === v ? "bg-white/20 text-white" : "bg-[#e8e9ed] text-[#676c7b]"}`}>
                    {data.tasks.length}
                  </b>
                )}
              </button>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 p-4 sm:p-5" role="tabpanel">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={`text-xl font-bold tracking-tight ${INK}`}>{view === "Overview" ? "Your front desk." : view}</h3>
              <p className={`mt-1 text-[0.7rem] ${MUTED}`}>{SUBTITLES[view]}</p>
            </div>
            <span className="shrink-0 rounded-md border border-[#dde0e7] bg-white px-2 py-1 text-[0.6rem] font-semibold text-[#69748c]">
              Example: {data.business}
            </span>
          </div>
          <div className="min-h-[20rem]">
            {view === "Overview" && <Overview d={data} compact={compact} />}
            {view === "Conversations" && <Conversations d={data} />}
            {view === "Calendar" && (
              <Panel title="Coming up" sub="Appointments booked by your AI">
                <ApptRows d={data} />
              </Panel>
            )}
            {view === "Customers & jobs" && <Customers d={data} />}
            {view === "Needs attention" && (
              <Panel title="Needs your attention" sub="AI handles the routine. You handle the exceptions." count={data.tasks.length}>
                <TaskRows d={data} />
              </Panel>
            )}
          </div>
          <p className="mt-3 text-[0.65rem] text-[#a3a8b3]">All people, messages, and calls in this example are fictional.</p>
        </div>
      </div>
    </div>
  );
}
