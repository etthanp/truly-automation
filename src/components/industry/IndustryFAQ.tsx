"use client";

import { useState } from "react";
import Reveal from "../Reveal";

export default function IndustryFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const all = faqs;
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
