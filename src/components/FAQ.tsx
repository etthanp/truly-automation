"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "I've never done any marketing. Do I need to know anything?",
    a: "No. That's the whole point. We handle the website, Google listing, reviews, social media, ads and the AI receptionist. You'll spend about 30 minutes on a setup call telling us about your business, then you just keep doing the work.",
  },
  {
    q: "What's in the free marketing checkup?",
    a: "We check where you show up on Google Maps for your main services, how your website looks and works on a phone, how your reviews stack up against your top competitors, and how your calls get answered. You get a one-page report with the three things to fix first, whether you hire us or not.",
  },
  {
    q: "How soon will I see more calls?",
    a: "The AI receptionist and automatic review requests start working the week they go live. Google Maps rankings and ads build over the first 60 to 90 days, which is why plans start with a 3-month term.",
  },
  {
    q: "Who pays for the ads?",
    a: "You pay Google or Facebook directly for ad spend, on your own card, so you always see exactly where the money goes. Our monthly fee covers setting up and managing the ads. We'll recommend a starting budget that fits your area and goals.",
  },
  {
    q: "Do I own my website and pages?",
    a: "Yes. Your domain, Google Business Profile and social pages are set up in your business's name. If you ever leave, they stay yours and we'll help you move the website.",
  },
  {
    q: "Will the AI receptionist sound like a robot?",
    a: "No. It texts like a friendly, capable front-desk person trained on your services, pricing and service area. Try it yourself in the live demo above.",
  },
  {
    q: "Can I change plans later?",
    a: "Anytime. Most clients start with Growth and move up to the Full Marketing Team once they see what it brings in. After the first 3 months, everything is month-to-month.",
  },
];

export default function FAQ() {
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
          {faqs.map((faq, i) => {
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
