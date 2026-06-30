"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Demo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm the virtual receptionist for Blue Ridge Dental Care. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply || "Sorry, I didn't get that." }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }]);
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
            Chat live with a real AI receptionist built for{" "}
            <span className="font-semibold text-navy">Blue Ridge Dental Care</span>.
            This is exactly what we&apos;d build for your business.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-sm font-bold">
                🦷
              </span>
              <div>
                <p className="text-sm font-semibold">Blue Ridge Dental Care</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Virtual Receptionist · Online now
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex h-96 flex-col gap-3 overflow-y-auto bg-background p-5">
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
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-navy/10 p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about hours, services, appointments…"
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
