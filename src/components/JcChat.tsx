"use client";

import { useState, useRef, useEffect } from "react";

// Always-open website chat for the JC Concrete demo (/demo/jc-concrete).
// Same hidden <lead>{...}</lead> pattern as CasitaDemo: the bot's notes are stripped from the
// bubble and shown in the "lead texted to your phone" card.
// Any button on the page can scroll to the chat and send a message with `openJcChat(msg)`.

interface Msg {
  role: "user" | "assistant";
  content: string;
}

type Lead = Partial<
  Record<
    | "name"
    | "phone"
    | "area"
    | "project"
    | "size"
    | "finish"
    | "tearOut"
    | "timeline"
    | "type"
    | "booked"
    | "temperature"
    | "nextStep",
    string
  >
>;

const OPEN_EVENT = "jc:open-chat";

export function openJcChat(message?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: message ?? "" }));
}

// For the (server-rendered) page: a button that opens the chat, optionally sending a message.
export function ChatButton({
  message,
  className,
  children,
}: {
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => openJcChat(message)} className={className}>
      {children}
    </button>
  );
}

const GREETING =
  "Hi! 👋 I'm Ava with JC Concrete. Planning a driveway, patio, shop floor or something else? I can answer questions and book your free quote, any time of day.";

const CHIPS = [
  "I need a new driveway",
  "Shop floor for a pole barn",
  "Decorative patio ideas?",
  "Do you work in Salem?",
];

const FIELDS: { key: keyof Lead; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "area", label: "Where" },
  { key: "project", label: "Job" },
  { key: "size", label: "Size" },
  { key: "finish", label: "Finish" },
  { key: "tearOut", label: "Tear-out" },
  { key: "timeline", label: "When" },
  { key: "type", label: "Type" },
];

const LEAD_RE = /<lead>([\s\S]*?)(<\/lead>|$)/;

function visible(content: string) {
  return content.replace(LEAD_RE, "").replace(/\*\*/g, "").trim();
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
  "Early research": "bg-sky-50 text-sky-700 border-sky-200",
};

export default function JcChat({ className = "" }: { className?: string }) {
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [lead, setLead] = useState<Lead>({});
  // On phones the card would cover the chat, so it starts as a small "New lead" pill.
  const [leadOpen, setLeadOpen] = useState(
    () => typeof window === "undefined" || window.innerWidth >= 768,
  );
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const run = useRef(0);
  // Latest messages for the open-chat event handler, which is registered once.
  const latest = useRef(messages);
  useEffect(() => {
    latest.current = messages;
  }, [messages]);
  const busy = useRef(false);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || busy.current) return;
    busy.current = true;

    const thisRun = run.current;
    const next: Msg[] = [...latest.current, { role: "user", content: t }];
    latest.current = next;
    setMessages(next);
    setInput("");
    setTyping(true);

    let reply = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, bot: "jc" }),
      });
      const data = await res.json();
      reply = data.reply || "";
    } catch {
      reply = "";
    }
    busy.current = false;
    if (thisRun !== run.current) return; // restarted while waiting

    setTyping(false);
    if (!visible(reply)) {
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Sorry, I had trouble with that. Mind trying again?" },
      ]);
      return;
    }
    setMessages((p) => [...p, { role: "assistant", content: reply }]);
    setLead((prev) => ({ ...prev, ...parseLead(reply) }));
  }

  useEffect(() => {
    function onOpen(e: Event) {
      const msg = (e as CustomEvent<string>).detail;
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (msg) send(msg);
      else setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 50);
    }
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  function restart() {
    run.current += 1;
    busy.current = false;
    setMessages([{ role: "assistant", content: GREETING }]);
    setLead({});
    setTyping(false);
    setInput("");
  }

  const filled = FIELDS.filter((f) => lead[f.key]).length;
  const showChips = messages.length === 1 && !typing;
  const showLead = filled > 0 || !!lead.booked;

  return (
    <>
      <div
        ref={panelRef}
        className={`flex flex-col overflow-hidden rounded-2xl bg-[#f1f4f8] text-left shadow-2xl ring-1 ring-black/10 ${className}`}
      >
        <div className="flex items-center gap-3 bg-[#242323] px-4 py-3 text-white">
          <img src="/demo/jc/logo.png" alt="" className="h-9 w-[4.5rem] object-contain" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Ava · JC Concrete</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7FBBF0]" />
              Online 24/7 · Free quotes
            </p>
          </div>
          <button
            onClick={restart}
            className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-white/70 transition hover:bg-white/10"
          >
            ↻ Restart
          </button>
        </div>

        <div ref={bodyRef} className="flex h-[19rem] flex-col gap-2.5 overflow-y-auto px-4 py-4 sm:h-[20rem]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`bubble-in max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[14px] leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-md bg-[#156BB7] text-white"
                    : "rounded-bl-md bg-white text-[#212121] shadow-sm"
                }`}
              >
                {visible(m.content)}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                <span className="flex gap-1 text-black/40">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce [animation-delay:0.15s]">•</span>
                  <span className="animate-bounce [animation-delay:0.3s]">•</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {showChips && (
          <div className="flex flex-wrap gap-2 bg-white px-4 pt-3">
            {CHIPS.map((c) => (
              <button
                key={c}
                onClick={() => send(c)}
                className="rounded-full border border-[#156BB7]/30 bg-[#156BB7]/5 px-3 py-1.5 text-[12px] font-medium text-[#0f4f88] transition hover:bg-[#156BB7]/10"
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
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            disabled={typing}
            className="flex-1 rounded-full bg-black/5 px-4 py-2.5 text-[14px] text-[#212121] outline-none placeholder:text-black/40 focus:ring-2 focus:ring-[#156BB7]/30 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={typing || !input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#156BB7] text-white transition hover:bg-[#242323] disabled:opacity-40"
            aria-label="Send"
          >
            ↑
          </button>
        </form>
      </div>

      {/* Lead card: what the owner gets on his phone. */}
      {showLead && (
        <div className="fixed bottom-4 left-4 z-40 w-[18.5rem] max-w-[calc(100vw-2rem)]">
          {leadOpen ? (
            <div className="bubble-in rounded-2xl border border-black/10 bg-white p-4 text-left text-[#212121] shadow-2xl">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-[#156BB7]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#156BB7] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#156BB7]" />
                  </span>
                  New lead texted to your phone
                </p>
                <button
                  onClick={() => setLeadOpen(false)}
                  className="rounded px-1 text-sm text-black/40 hover:text-black"
                  aria-label="Minimize lead card"
                >
                  –
                </button>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <p className="font-extrabold">{lead.project ? lead.project : "Website chat lead"}</p>
                {lead.temperature && (
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                      tempStyle[lead.temperature] ?? "border-black/10 bg-black/5"
                    }`}
                  >
                    {lead.temperature}
                  </span>
                )}
              </div>
              <dl className="mt-2 divide-y divide-black/5 text-[13px]">
                {FIELDS.filter((f) => f.key !== "project").map((f) => (
                  <div key={f.key} className="flex gap-3 py-1">
                    <dt className="w-16 shrink-0 text-black/45">{f.label}</dt>
                    <dd className={lead[f.key] ? "font-medium" : "text-black/20"}>
                      {lead[f.key] ?? "…"}
                    </dd>
                  </div>
                ))}
              </dl>
              {lead.booked ? (
                <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-[13px] font-semibold text-emerald-800">
                  ✓ Quote visit booked: {lead.booked}
                </p>
              ) : lead.nextStep ? (
                <p className="mt-2 rounded-lg bg-[#f1f4f8] px-3 py-2 text-[13px]">
                  <span className="font-bold">Next:</span> {lead.nextStep}
                </p>
              ) : null}
            </div>
          ) : (
            <button
              onClick={() => setLeadOpen(true)}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#212121] shadow-xl ring-1 ring-black/10"
            >
              📲 New lead ({filled})
            </button>
          )}
        </div>
      )}
    </>
  );
}
