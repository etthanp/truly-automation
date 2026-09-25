"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Faq = { q: string; a: string };

const hvacFaqs: Faq[] = [
  {
    q: "Will it sound like a robot?",
    a: "No. It texts like a warm, capable front-desk person — trained on your company, your services, and your pricing. To the customer it just feels like they got a fast, helpful reply. You saw it yourself in the demo above.",
  },
  {
    q: "I already have voicemail / an answering service. Why do I need this?",
    a: "85% of people who hit voicemail hang up without leaving a message — you never even know they called. Answering services are slower, charge per call, and still can't book into your schedule. This replies in seconds, 24/7, and actually locks in the job — for one flat monthly rate.",
  },
  {
    q: "Does it work with my current phone number?",
    a: "Yes. It works alongside your existing business line — no porting, no new hardware, and nothing for your customers to download. They just get a text back after a missed call, like normal.",
  },
  {
    q: "What if a customer wants to talk to a real person?",
    a: "You stay in control. It can hand the conversation to you at any point and always passes along the full details, so you or your team can jump in whenever you want.",
  },
  {
    q: "How fast can I be up and running?",
    a: "Usually within a few days. We do one short call to learn your business, we build and connect everything, and then it starts catching missed calls for you. You don't touch anything technical.",
  },
  {
    q: "What if it's not for me?",
    a: "It's month-to-month — cancel anytime, no long-term contract. Founding partners lock in the current rate for as long as they stay. Really the only risk is keeping things the way they are and letting calls keep slipping.",
  },
];

export const agencyFaqs: Faq[] = [
  {
    q: "What counts as a \"qualified meeting\"?",
    a: "A call with a decision-maker at a business that fits the target profile we agree on together — industry, size, location, and need. If they don't fit the profile or don't show up, it doesn't count and you don't pay for it.",
  },
  {
    q: "How is this different from buying a lead list?",
    a: "A lead list is a spreadsheet of cold names — you still have to do all the outreach. We do the outreach, the follow-up, and the back-and-forth, and only hand you people who've agreed to talk. You just show up and close.",
  },
  {
    q: "Does the outreach go out under my name?",
    a: "Usually, yes — prospects respond far better to a business owner than to an agency. We set up separate sending addresses so your main email and reputation stay protected, and you approve the messaging before anything goes out.",
  },
  {
    q: "How long until I see meetings?",
    a: "Setup takes about two weeks — strategy call, list building, and getting the sending set up properly. Replies typically start coming in the first few weeks after launch. Results depend on your offer and market, which is exactly why the pilot is pay-per-meeting: if we don't book, you don't pay.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. Everything is month-to-month. We'd rather earn your business every month than lock you in.",
  },
  {
    q: "What does the AI receptionist have to do with getting clients?",
    a: "Winning new business is half the battle — responding fast is the other half. The AI receptionist instantly answers every missed call and inquiry, 24/7, so the leads you worked hard for never go cold. Add it on, or use it on its own.",
  },
];

export default function FAQ({ items = hvacFaqs }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Questions
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Straight answers
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-navy">{faq.q}</span>
                    <span
                      className={`shrink-0 text-xl text-ember transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-navy/70">{faq.a}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
