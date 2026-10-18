"use client";

import { useState } from "react";
import Reveal from "../Reveal";

const COMMON = [
  {
    q: "Do I own my website and accounts?",
    a: "Yes. Your domain, Google Business Profile and social pages are set up in your company's name. If you ever leave, they stay yours and we'll help you move the website.",
  },
  {
    q: "Who pays for ads?",
    a: "You pay Google or Facebook directly for ad spend, on your own card, so you always see exactly where the money goes. Our monthly fee covers setting up and running everything.",
  },
  {
    q: "Can I change packages later?",
    a: "Anytime. Most clients start with the first package and move up once they see what it brings in. After the first 3 months, everything is month-to-month.",
  },
];

export default function IndustryFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const all = [...faqs, ...COMMON];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Questions</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Straight answers</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {all.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy">{faq.q}</span>
                  <span className={`shrink-0 text-xl text-ember transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && <p className="px-6 pb-5 text-navy/70">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
