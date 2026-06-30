"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const conversation = [
  { from: "bot", text: "Hi there! 👋 I'm the Truly Automation assistant. How can I help your business today?" },
  { from: "user", text: "Do you have any openings this Friday afternoon?" },
  { from: "bot", text: "Yes! I have 2:00 PM and 4:30 PM available this Friday. Want me to book one for you?" },
  { from: "user", text: "4:30 works great." },
  { from: "bot", text: "Booked! ✅ You're all set for Friday at 4:30 PM. I'll send a reminder the day before." },
];

export default function Demo() {
  const [visibleCount, setVisibleCount] = useState(conversation.length);

  return (
    <section id="demo" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            See an agent in action
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            This is a preview of how your customers would chat with your AI
            agent right on your website.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl">
            <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-sm font-bold">
                T
              </span>
              <div>
                <p className="text-sm font-semibold">Truly Automation Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online now
                </p>
              </div>
            </div>

            <div className="flex h-96 flex-col gap-3 overflow-y-auto bg-background p-5">
              {conversation.slice(0, visibleCount).map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      message.from === "user"
                        ? "bg-royal text-white"
                        : "bg-white text-navy shadow-sm"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-navy/10 p-4">
              <div className="flex-1 rounded-full bg-navy/5 px-4 py-2.5 text-sm text-navy/40">
                Type your message…
              </div>
              <button
                onClick={() =>
                  setVisibleCount((c) =>
                    c >= conversation.length ? 0 : c + 1
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-royal text-white transition hover:bg-navy"
                aria-label="Replay demo"
              >
                ↻
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
