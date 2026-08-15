"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Reveal from "./Reveal";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const BUSINESS = "Summit Comfort Heating & Air";
const CALLER = "(910) 555-0148";
const GREETING =
  "Hi, this is Ava — the virtual receptionist at Summit Comfort Heating & Air 👋 So sorry we missed your call! I can help you right here by text. What's going on with your system?";

const CHIPS = [
  "My AC stopped cooling 😰",
  "No heat and it's freezing in here",
  "What do you charge for a tune-up?",
];

export default function Demo() {
  const [phase, setPhase] = useState<"ringing" | "chat">("ringing");
  const [ringMissed, setRingMissed] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [aiTyping, setAiTyping] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setMessages([]);
    setInput("");
    setLoading(false);
    setAiTyping(false);
    setRingMissed(false);
    setPhase("ringing");
    timers.current.push(setTimeout(() => setRingMissed(true), 1100));
    timers.current.push(
      setTimeout(() => {
        setPhase("chat");
        setAiTyping(true);
      }, 1800)
    );
    timers.current.push(
      setTimeout(() => {
        setAiTyping(false);
        setMessages([{ role: "assistant", content: GREETING }]);
      }, 2900)
    );
  }, [clearTimers]);

  useEffect(() => {
    start();
    return clearTimers;
  }, [start, clearTimers]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, aiTyping, loading, phase]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || loading || aiTyping || phase !== "chat") return;

    const next: Msg[] = [...messages, { role: "user", content: t }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, bot: "hvac" }),
      });
      const data = await res.json();
      setMessages((p) => [
        ...p,
        {
          role: "assistant",
          content: data.reply || "Sorry, I didn't catch that — say that again?",
        },
      ]);
    } catch {
      setMessages((p) => [
        ...p,
        {
          role: "assistant",
          content: "Sorry, I had trouble sending that. Mind trying again?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const showChips = phase === "chat" && messages.length === 1 && !loading && !aiTyping;

  return (
    <section id="demo" className="bg-gradient-to-b from-background to-royal/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            See it live
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Watch a missed call turn into a booked job
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            This is a real AI, answering live. A customer calls, you can&apos;t
            pick up — so it texts them back in seconds and books the job.{" "}
            <strong className="font-semibold text-navy">
              You&apos;re the customer — text it and see.
            </strong>
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            {/* Phone */}
            <div className="relative w-full max-w-[22rem] shrink-0">
              <div className="overflow-hidden rounded-[2.75rem] border-[10px] border-navy bg-navy shadow-2xl">
                {/* Notch */}
                <div className="relative flex h-7 items-center justify-center bg-navy">
                  <div className="h-1.5 w-24 rounded-full bg-white/20" />
                </div>

                {/* Screen */}
                <div className="bg-[#eceff4]">
                  {/* Status + header */}
                  <div className="flex items-center justify-between bg-white px-5 pt-2 text-[11px] font-semibold text-navy/60">
                    <span>7:42</span>
                    <span className="flex items-center gap-1">▂▄▆ · 5G · 87%</span>
                  </div>

                  <div className="flex items-center gap-3 border-b border-navy/10 bg-white px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-ember to-sky text-sm font-bold text-white">
                      A
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-navy">{BUSINESS}</p>
                      <p className="text-[11px] text-navy/50">
                        Virtual receptionist · replies in seconds
                      </p>
                    </div>
                    <button
                      onClick={start}
                      className="ml-auto rounded-full px-2 py-1 text-[11px] font-semibold text-royal transition hover:bg-royal/10"
                      title="Replay the demo"
                    >
                      ↻ Replay
                    </button>
                  </div>

                  {/* Ringing overlay */}
                  {phase === "ringing" ? (
                    <div className="flex h-[24rem] flex-col items-center justify-center gap-5 bg-navy px-6 text-center text-white">
                      <span
                        className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl ${
                          ringMissed ? "bg-red-500/90" : "animate-ring bg-white/15"
                        }`}
                      >
                        📞
                      </span>
                      <div>
                        <p className="text-lg font-semibold">
                          {ringMissed ? "Missed call" : "Incoming call…"}
                        </p>
                        <p className="mt-1 text-sm text-white/60">{CALLER}</p>
                      </div>
                      <p className="text-xs text-white/40">
                        {ringMissed
                          ? "Nobody free to pick up…"
                          : "Your crew is out on a job"}
                      </p>
                    </div>
                  ) : (
                    /* Chat thread */
                    <div
                      ref={bodyRef}
                      className="flex h-[24rem] flex-col gap-2.5 overflow-y-auto px-4 py-4"
                    >
                      {/* Missed call system chip */}
                      <div className="mx-auto mb-1 flex items-center gap-1.5 rounded-full bg-navy/10 px-3 py-1 text-[11px] font-medium text-navy/60">
                        <span className="text-red-500">📵</span>
                        Missed call · {CALLER} · just now
                      </div>

                      {messages.map((m, i) => (
                        <div
                          key={i}
                          className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`bubble-in max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                              m.role === "user"
                                ? "rounded-br-md bg-royal text-white"
                                : "rounded-bl-md bg-white text-navy shadow-sm"
                            }`}
                          >
                            {m.content}
                          </div>
                        </div>
                      ))}

                      {(aiTyping || loading) && (
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
                  )}

                  {/* Chips */}
                  {showChips && (
                    <div className="flex flex-wrap gap-2 bg-white px-4 pt-3">
                      {CHIPS.map((c) => (
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

                  {/* Input */}
                  <div className="flex items-center gap-2 bg-white px-3 py-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder={
                        phase === "ringing" ? "Ringing…" : "Text your reply…"
                      }
                      disabled={phase !== "chat" || loading || aiTyping}
                      className="flex-1 rounded-full bg-navy/5 px-4 py-2.5 text-[13px] text-navy outline-none placeholder:text-navy/40 focus:ring-2 focus:ring-royal/30 disabled:opacity-50"
                    />
                    <button
                      onClick={() => send(input)}
                      disabled={phase !== "chat" || loading || aiTyping || !input.trim()}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-royal text-white transition hover:bg-navy disabled:opacity-40"
                      aria-label="Send"
                    >
                      ↑
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side explainer */}
            <div className="max-w-sm lg:pt-6">
              <ol className="space-y-6">
                {[
                  {
                    n: "1",
                    t: "The call comes in",
                    d: "A homeowner with a dead AC calls. Your team is on a roof — nobody can grab it.",
                  },
                  {
                    n: "2",
                    t: "It texts back in seconds",
                    d: "Instead of hitting voicemail, they get a friendly text before they can dial the next company.",
                  },
                  {
                    n: "3",
                    t: "It books the job",
                    d: "Ava asks what's wrong, gets their address, and locks in a time slot — then hands you the details.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-sm font-bold text-white">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-bold text-navy">{s.t}</p>
                      <p className="mt-0.5 text-sm text-navy/70">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 rounded-xl border border-navy/10 bg-white p-4 text-sm text-navy/70 shadow-sm">
                No app for your customer to download — it&apos;s just a text.
                This same receptionist runs on{" "}
                <span className="font-semibold text-navy">your</span> business
                number, trained on{" "}
                <span className="font-semibold text-navy">your</span> services,
                pricing, and service area.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
