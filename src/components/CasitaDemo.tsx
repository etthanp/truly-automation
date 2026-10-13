"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Live AI assistant demo for the Maricopa Casitas prospect (/demo/maricopa-casitas).
// The bot ends every reply with a hidden <lead>{...}</lead> block; we strip it from the
// bubble and merge it into the lead card so the prospect sees what their team would get.

interface Msg {
  role: "user" | "assistant";
  content: string;
}

type Mode = "web" | "text";

type Lead = Partial<
  Record<
    | "name"
    | "phone"
    | "area"
    | "homeSize"
    | "casita"
    | "purpose"
    | "hoa"
    | "timeline"
    | "budget"
    | "booked"
    | "flags"
    | "temperature"
    | "nextStep",
    string
  >
>;

const MODES: Record<
  Mode,
  { label: string; bot: string; greeting: string; chips: string[] }
> = {
  web: {
    label: "Website chat",
    bot: "casita",
    greeting:
      "Hi! I'm Ava with Maricopa Casitas. Thinking about a casita or ADU? I can tell you what Arizona's new casita laws allow on your lot, or set up a free site evaluation. What are you picturing?",
    chips: [
      "Can I build a casita on my lot?",
      "How much does a casita cost?",
      "Can I rent it out?",
    ],
  },
  text: {
    label: "Missed call text-back",
    bot: "casita_text",
    greeting:
      "Hi, this is Ava with Maricopa Casitas. Sorry we missed your call! I can help right here by text. Are you thinking about building a casita?",
    chips: [
      "Yes, for my mom to live in",
      "Does the new law help if I have an HOA?",
      "Mostly want rental income",
    ],
  },
};

const FIELDS: { key: keyof Lead; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "area", label: "Area" },
  { key: "homeSize", label: "Main home" },
  { key: "casita", label: "Casita" },
  { key: "purpose", label: "For" },
  { key: "hoa", label: "HOA" },
  { key: "timeline", label: "Timeline" },
  { key: "budget", label: "Budget" },
];

const LEAD_RE = /<lead>([\s\S]*?)(<\/lead>|$)/;

function visible(content: string) {
  return content.replace(LEAD_RE, "").trim();
}

function parseLead(content: string): Lead {
  const m = content.match(LEAD_RE);
  if (!m) return {};
  try {
    const raw = JSON.parse(m[1].trim()) as Record<string, unknown>;
    const out: Lead = {};
    for (const [k, v] of Object.entries(raw)) {
      if (typeof v === "string" && v.trim()) out[k as keyof Lead] = v.trim();
    }
    return out;
  } catch {
    return {};
  }
}

const tempStyle: Record<string, string> = {
  Hot: "bg-red-50 text-red-700 border-red-200",
  Warm: "bg-amber-50 text-amber-700 border-amber-200",
  "Early research": "bg-sky/10 text-royal border-sky/30",
};

export default function CasitaDemo() {
  const [mode, setMode] = useState<Mode>("web");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [lead, setLead] = useState<Lead>({});
  const [typing, setTyping] = useState(true);
  const [input, setInput] = useState("");

  const bodyRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = useRef(0);

  const start = useCallback((m: Mode) => {
    run.current += 1;
    if (timer.current) clearTimeout(timer.current);
    setMode(m);
    setMessages([]);
    setLead({});
    setInput("");
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages([{ role: "assistant", content: MODES[m].greeting }]);
    }, 900);
  }, []);

  // First load: the typing dots are already showing (initial state), then Ava says hi.
  useEffect(() => {
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages([{ role: "assistant", content: MODES.web.greeting }]);
    }, 900);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || typing || messages.length === 0) return;

    const thisRun = run.current;
    const next: Msg[] = [...messages, { role: "user", content: t }];
    setMessages(next);
    setInput("");
    setTyping(true);

    let reply = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, bot: MODES[mode].bot }),
      });
      const data = await res.json();
      reply = data.reply || "";
    } catch {
      reply = "";
    }
    if (thisRun !== run.current) return; // reset while waiting

    setTyping(false);
    if (!visible(reply)) {
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Sorry, I had trouble with that. Mind trying again?" },
      ]);
      return;
    }
    setMessages((p) => [...p, { role: "assistant", content: reply }]);
    const update = parseLead(reply);
    setLead((prev) => ({ ...prev, ...update }));
  }

  const showChips = messages.length === 1 && !typing;
  const filled = FIELDS.filter((f) => lead[f.key]).length;
  const isText = mode === "text";

  const thread = (
    <div ref={bodyRef} className="flex h-[26rem] flex-col gap-2.5 overflow-y-auto px-4 py-4">
      {isText && (
        <div className="mx-auto mb-1 flex items-center gap-1.5 rounded-full bg-navy/10 px-3 py-1 text-[11px] font-medium text-navy/60">
          <span className="text-red-500">📵</span>
          Missed call to 602-921-7071 · just now
        </div>
      )}
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`bubble-in max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[13.5px] leading-relaxed ${
              m.role === "user"
                ? "rounded-br-md bg-royal text-white"
                : "rounded-bl-md bg-white text-navy shadow-sm"
            }`}
          >
            {visible(m.content)}
          </div>
        </div>
      ))}
      {typing && (
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
            <span className="flex gap-1 text-navy/40">
              <span className="animate-bounce">•</span>
              <span className="animate-bounce [animation-delay:0.15s]">•</span>
              <span className="animate-bounce [animation-delay:0.3s]">•</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );

  const composer = (
    <>
      {showChips && (
        <div className="flex flex-wrap gap-2 bg-white px-4 pt-3">
          {MODES[mode].chips.map((c) => (
            <button
              key={c}
              onClick={() => send(c)}
              className="rounded-full border border-royal/30 bg-royal/5 px-3 py-1.5 text-[12px] font-medium text-royal transition hover:bg-royal/10"
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 bg-white px-3 py-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isText ? "Text your reply…" : "Ask about your casita…"}
          disabled={typing || messages.length === 0}
          className="flex-1 rounded-full bg-navy/5 px-4 py-2.5 text-[13.5px] text-navy outline-none placeholder:text-navy/40 focus:ring-2 focus:ring-royal/30 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={typing || !input.trim()}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-royal text-white transition hover:bg-navy disabled:opacity-40"
          aria-label="Send"
        >
          ↑
        </button>
      </form>
    </>
  );

  return (
    <div>
      {/* Mode switch */}
      <div className="mx-auto flex w-fit rounded-full border border-navy/10 bg-white p-1 shadow-sm">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => start(m)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
              mode === m ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
            }`}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {/* Chat */}
        {isText ? (
          <div className="mx-auto w-full max-w-[23rem]">
            <div className="overflow-hidden rounded-[2.75rem] border-[10px] border-navy bg-navy shadow-2xl">
              <div className="flex h-7 items-center justify-center bg-navy">
                <div className="h-1.5 w-24 rounded-full bg-white/20" />
              </div>
              <div className="bg-[#eceff4]">
                <div className="flex items-center gap-3 border-b border-navy/10 bg-white px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ember to-sky text-sm font-bold text-white">
                    MC
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-navy">Maricopa Casitas</p>
                    <p className="text-[11px] text-navy/50">Text message · replies in seconds</p>
                  </div>
                  <button
                    onClick={() => start("text")}
                    className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-royal transition hover:bg-royal/10"
                  >
                    ↻ Restart
                  </button>
                </div>
                {thread}
                {composer}
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-navy/10 bg-navy/[0.04] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-navy/50">
                maricopacasitas.com
              </span>
            </div>
            <div className="grid sm:grid-cols-[1fr_minmax(0,22rem)]">
              {/* Faded site behind the widget */}
              <div className="hidden flex-col justify-center gap-3 bg-gradient-to-br from-[#f3ece2] to-[#e8dccb] p-8 sm:flex">
                <p className="text-xs font-bold uppercase tracking-wide text-[#8a5a32]">
                  Maricopa Casitas
                </p>
                <p className="text-2xl font-extrabold leading-tight text-[#3d2a1a]">
                  Premier ADU builders in Arizona
                </p>
                <p className="text-sm text-[#3d2a1a]/60">
                  Custom casitas, permits and construction, from one accountable team.
                </p>
                <div className="mt-2 h-24 rounded-xl bg-[#3d2a1a]/10" />
                <div className="h-3 w-3/4 rounded bg-[#3d2a1a]/10" />
                <div className="h-3 w-1/2 rounded bg-[#3d2a1a]/10" />
              </div>
              {/* Widget */}
              <div className="flex flex-col border-l border-navy/10 bg-[#eceff4]">
                <div className="flex items-center gap-3 bg-[#3d2a1a] px-4 py-3 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ember to-sky text-xs font-bold">
                    MC
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Ava · Maricopa Casitas</p>
                    <p className="flex items-center gap-1.5 text-[11px] text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Online 24/7
                    </p>
                  </div>
                  <button
                    onClick={() => start("web")}
                    className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-white/70 transition hover:bg-white/10"
                  >
                    ↻ Restart
                  </button>
                </div>
                {thread}
                {composer}
              </div>
            </div>
          </div>
        )}

        {/* Lead card */}
        <aside className="rounded-2xl border border-navy/10 bg-white p-5 shadow-lg shadow-navy/5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wide text-ember">
              What your team receives
            </p>
            <span className="text-xs font-semibold text-navy/40">
              {filled}/{FIELDS.length}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <p className="text-lg font-extrabold text-navy">New casita lead</p>
            {lead.temperature && (
              <span
                className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${
                  tempStyle[lead.temperature] ?? "border-navy/10 bg-navy/5 text-navy/70"
                }`}
              >
                {lead.temperature}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-navy/50">
            Fills in live as the homeowner talks to Ava.
          </p>

          <dl className="mt-4 divide-y divide-navy/5 text-sm">
            {FIELDS.map((f) => (
              <div key={f.key} className="flex gap-3 py-1.5">
                <dt className="w-20 shrink-0 text-navy/50">{f.label}</dt>
                <dd className={lead[f.key] ? "font-medium text-navy" : "text-navy/25"}>
                  {lead[f.key] ?? "…"}
                </dd>
              </div>
            ))}
          </dl>

          {lead.flags && (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] text-amber-800">
              <span className="font-bold">Check at site visit:</span> {lead.flags}
            </div>
          )}

          {lead.booked ? (
            <div className="mt-4 rounded-xl bg-emerald-50 px-3 py-3 text-[13px] text-emerald-800">
              <p className="font-bold">✓ Site evaluation booked</p>
              <p className="mt-0.5">{lead.booked}</p>
              <p className="mt-2 rounded-lg bg-white px-3 py-2 text-navy/80 shadow-sm">
                <span className="font-semibold text-navy">Text to Donda:</span> New site
                evaluation{lead.name ? ` with ${lead.name}` : ""}, {lead.booked}
                {lead.area ? ` in ${lead.area}` : ""}. Full notes are in your inbox.
              </p>
            </div>
          ) : lead.nextStep ? (
            <div className="mt-4 rounded-xl bg-royal/5 px-3 py-2 text-[13px] text-navy/80">
              <span className="font-bold text-navy">Next step:</span> {lead.nextStep}
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
