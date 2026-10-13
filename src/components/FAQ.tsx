"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you only work with concrete companies?",
    a: "Yes. Concrete is all we do, so everything we build fits how your business runs: quotes by the square foot, busy and slow seasons, builders and general contractors, and crews on the job all day.",
  },
  {
    q: "What's Territory Lock?",
    a: "We only work with one concrete company per city. Once you sign up, we won't take on your competitors in your town. If your city is already taken, we'll tell you on the checkup.",
  },
  {
    q: "How does the Pour Price Calculator work?",
    a: "It lives on your website. A homeowner picks the project, size and finish and gets a price range based on your prices. To get an exact quote they leave their name, number and photos, and the lead texts straight to you. You set the prices, finishes and job minimum.",
  },
  {
    q: "What's in the free marketing checkup?",
    a: "We check where you show up on Google Maps for driveways, patios and slabs, how your website works on a phone, how your reviews compare to other concrete companies near you, and how your calls get answered. You get a one-page report with the three things to fix first, whether you hire us or not.",
  },
  {
    q: "How soon will I see more calls?",
    a: "The Photo Quote Line, Estimate Chaser and review requests start working the week they go live. Google Maps rankings and ads build over the first 60 to 90 days, which is why plans start with a 3-month term.",
  },
  {
    q: "Do you do SEO?",
    a: "Yes, it's built into every plan. You get a page for each service and town you cover, a Job Site Page for every finished pour, an optimized Google Business Profile, and consistent listings on Bing, Apple Maps, Yelp and other directories, all set up so Google's AI and ChatGPT can find and recommend you. Every month we show you where you rank. Nobody can honestly guarantee a #1 spot, but we make you the easiest concrete company in your area to find.",
  },
  {
    q: "Who pays for ads and postcards?",
    a: "You pay Google or Facebook directly for ad spend, on your own card, so you always see exactly where the money goes. Neighbor Drop printing and postage are billed at cost with no markup. Our monthly fee covers setting it all up and running it.",
  },
  {
    q: "Do I own my website and pages?",
    a: "Yes. Your domain, Google Business Profile and social pages are set up in your company's name. If you ever leave, they stay yours and we'll help you move the website.",
  },
  {
    q: "Can I change plans later?",
    a: "Anytime. Most concrete companies start with Foundation and move up to Reinforced once they're ready for builder work and commercial bids. After the first 3 months, everything is month-to-month.",
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
