"use client";

import { useState, useRef, useEffect } from "react";

// Floating website chat for the Leyva's Concrete & Landscaping demo homepage
// (/demo/leyvas-concrete). Same hidden <lead>{...}</lead> pattern as CasitaDemo: the bot's
// notes are stripped from the bubble and shown in the "lead texted to you" card.
// Any button on the page can open the chat with `openLeyvasChat("optional first message")`.

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
    | "language"
    | "booked"
    | "temperature"
    | "nextStep",
    string
  >
>;

const OPEN_EVENT = "leyvas:open-chat";

export function openLeyvasChat(message?: string) {
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
    <button type="button" onClick={() => openLeyvasChat(message)} className={className}>
      {children}
    </button>
  );
}

const GREETING =
  "Hi! 👋 I'm Sofia with Leyva's Concrete & Landscaping. Need a driveway, patio or yard work? I can answer questions or book your free estimate. ¡También hablamos español!";

const CHIPS = [
  "I need a new driveway",
  "Stamped concrete patio?",
  "¿Hacen limpieza de jardín?",
  "Do you do snow removal?",
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
  { key: "language", label: "Language" },
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

export default function LeyvasChat() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [lead, setLead] = useState<Lead>({});
  const [leadOpen, setLeadOpen] = useState(true);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const run = useRef(0);
  // Latest messages for the open-chat event handler, which is registered once.
  const latest = useRef(messages);
  useEffect(() => {
    latest.current = messages;
  }, [messages]);
  const busy = useRef(false);

  // Little "Hi! Need a free estimate?" bubble a few seconds after the page loads.
  useEffect(() => {
    const show = setTimeout(() => setTeaser(true), 3500);
    const hide = setTimeout(() => setTeaser(false), 13500); // don't cover the page for good
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

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
        body: JSON.stringify({ messages: next, bot: "leyvas" }),
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
      setOpen(true);
      setTeaser(false);
      if (msg) send(msg);
      else setTimeout(() => inputRef.current?.focus(), 50);
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
  // Language alone is known from the first reply; wait for a real detail before showing the card.
  const showLead = FIELDS.some((f) => f.key !== "language" && lead[f.key]) || !!lead.booked;

  return (
    <>
      {/* Lead card: what the owner gets on his phone. */}
      {showLead && (
        <div
          className={`fixed bottom-4 left-4 z-40 w-[18.5rem] max-w-[calc(100vw-2rem)] ${
            open ? "hidden md:block" : ""
          }`}
        >
          {leadOpen ? (
            <div className="bubble-in rounded-2xl border border-black/10 bg-white p-4 text-[#14211a] shadow-2xl">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-[#2f8a3c]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f8a3c] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f8a3c]" />
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
                  ✓ Estimate booked: {lead.booked}
                </p>
              ) : lead.nextStep ? (
                <p className="mt-2 rounded-lg bg-[#f3f1ea] px-3 py-2 text-[13px]">
                  <span className="font-bold">Next:</span> {lead.nextStep}
                </p>
              ) : null}
            </div>
          ) : (
            <button
              onClick={() => setLeadOpen(true)}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#14211a] shadow-xl ring-1 ring-black/10"
            >
              📲 New lead ({filled})
            </button>
          )}
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="bubble-in fixed inset-x-3 bottom-3 z-50 flex max-h-[min(40rem,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl bg-[#f3f1ea] shadow-2xl ring-1 ring-black/10 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[23rem]">
          <div className="flex items-center gap-3 bg-[#10241a] px-4 py-3 text-white">
            <img src="/demo/leyvas/logo.png" alt="" className="h-9 w-12 rounded-md bg-white object-contain p-0.5" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Sofia · Leyva&apos;s</p>
              <p className="flex items-center gap-1.5 text-[11px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9bd14a]" />
                Online 24/7 · English / Español
              </p>
            </div>
            <button
              onClick={restart}
              className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-white/60 transition hover:bg-white/10"
              title="Start over"
            >
              ↻
            </button>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full px-2 py-1 text-lg leading-none text-white/70 transition hover:bg-white/10"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div ref={bodyRef} className="flex min-h-[18rem] flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`bubble-in max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[14px] leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-md bg-[#2f8a3c] text-white"
                      : "rounded-bl-md bg-white text-[#14211a] shadow-sm"
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
                  className="rounded-full border border-[#2f8a3c]/30 bg-[#2f8a3c]/5 px-3 py-1.5 text-[12px] font-medium text-[#1f6b2b] transition hover:bg-[#2f8a3c]/10"
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
              className="flex-1 rounded-full bg-black/5 px-4 py-2.5 text-[14px] text-[#14211a] outline-none placeholder:text-black/40 focus:ring-2 focus:ring-[#2f8a3c]/30 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f8a3c] text-white transition hover:bg-[#10241a] disabled:opacity-40"
              aria-label="Send"
            >
              ↑
            </button>
          </form>
          <p className="bg-white pb-2 text-center text-[10px] text-black/35">
            Demo by Truly Automation
          </p>
        </div>
      )}

      {/* Launcher */}
      {!open && (
        <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-5 sm:bottom-5">
          {teaser && (
            <button
              onClick={() => openLeyvasChat()}
              className="bubble-in max-w-[15rem] rounded-2xl rounded-br-md bg-white px-4 py-3 text-left text-[13px] leading-snug text-[#14211a] shadow-xl ring-1 ring-black/5"
            >
              <span className="font-semibold">Hi! Need a free estimate?</span> I can help right
              now, 24/7. ¡Hablamos español!
            </button>
          )}
          <button
            onClick={() => openLeyvasChat()}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f8a3c] text-2xl text-white shadow-xl ring-4 ring-white transition hover:scale-105"
            aria-label="Open chat"
          >
            💬
          </button>
        </div>
      )}
    </>
  );
}
