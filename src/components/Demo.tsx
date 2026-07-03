"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type BotKey = "dental" | "restaurant" | "landscaping";

const BOTS: {
  key: BotKey;
  label: string;
  emoji: string;
  name: string;
  agent: string;
  placeholder: string;
  greeting: string;
}[] = [
  {
    key: "dental",
    label: "Dental",
    emoji: "🦷",
    name: "Blue Ridge Dental Care",
    agent: "Maya · Virtual Receptionist",
    placeholder: "e.g. I need a cleaning, what's available?",
    greeting: "Hi! 👋 I'm Maya, the virtual receptionist for Blue Ridge Dental Care. I can answer questions or book you an appointment right now — what can I help you with?",
  },
  {
    key: "restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    name: "Harvest Table Kitchen",
    agent: "Lily · Reservations Host",
    placeholder: "e.g. Do you have a table for 2 on Friday?",
    greeting: "Hey there! 👋 I'm Lily from Harvest Table Kitchen. I'd love to help you grab a table or tell you about our menu — what are you thinking?",
  },
  {
    key: "landscaping",
    label: "Landscaping",
    emoji: "🌿",
    name: "Green Valley Landscaping",
    agent: "Jake · Scheduling Assistant",
    placeholder: "e.g. I need my lawn mowed this week",
    greeting: "Hey! 👋 I'm Jake with Green Valley Landscaping. Looking to get something scheduled or just have a question? I'm here to help!",
  },
];

export default function Demo() {
  const [activeBot, setActiveBot] = useState<BotKey>("dental");
  const [conversations, setConversations] = useState<Record<BotKey, Message[]>>({
    dental: [{ role: "assistant", content: BOTS[0].greeting }],
    restaurant: [{ role: "assistant", content: BOTS[1].greeting }],
    landscaping: [{ role: "assistant", content: BOTS[2].greeting }],
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const bot = BOTS.find((b) => b.key === activeBot)!;
  const messages = conversations[activeBot];

  useEffect(() => {
    const el = chatContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [conversations, loading, activeBot]);

  function switchBot(key: BotKey) {
    setActiveBot(key);
    setInput("");
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setConversations((prev) => ({ ...prev, [activeBot]: newMessages }));
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, bot: activeBot }),
      });
      const data = await res.json();
      setConversations((prev) => ({
        ...prev,
        [activeBot]: [...newMessages, { role: "assistant", content: data.reply || "Sorry, I didn't catch that." }],
      }));
    } catch {
      setConversations((prev) => ({
        ...prev,
        [activeBot]: [...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }],
      }));
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <section id="demo" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            See an agent in action
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            These are real AI agents — pick an industry and chat live. This is
            exactly what we&apos;d build for your business.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl">

            {/* Tabs */}
            <div className="flex border-b border-navy/10">
              {BOTS.map((b) => (
                <button
                  key={b.key}
                  onClick={() => switchBot(b.key)}
                  className={`flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-semibold transition ${
                    activeBot === b.key
                      ? "border-b-2 border-royal text-royal"
                      : "text-navy/50 hover:text-navy"
                  }`}
                >
                  <span>{b.emoji}</span>
                  {b.label}
                </button>
              ))}
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-lg">
                {bot.emoji}
              </span>
              <div>
                <p className="text-sm font-semibold">{bot.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {bot.agent} · Online now
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={chatContainerRef} className="flex h-80 flex-col gap-3 overflow-y-auto bg-background p-5">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-royal text-white"
                        : "bg-white text-navy shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white px-4 py-3 text-sm text-navy shadow-sm">
                    <span className="flex gap-1">
                      <span className="animate-bounce">•</span>
                      <span className="animate-bounce [animation-delay:0.15s]">•</span>
                      <span className="animate-bounce [animation-delay:0.3s]">•</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-navy/10 p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={bot.placeholder}
                disabled={loading}
                className="flex-1 rounded-full bg-navy/5 px-4 py-2.5 text-sm text-navy outline-none placeholder:text-navy/40 focus:ring-2 focus:ring-royal/30 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-royal text-white transition hover:bg-navy disabled:opacity-40"
                aria-label="Send"
              >
                ↑
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
