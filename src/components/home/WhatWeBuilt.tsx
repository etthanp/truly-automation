import Reveal from "../Reveal";
import { APP_STORE_URL } from "@/lib/contact";

const rows = [
  {
    big: "Riley, your AI receptionist.",
    text: "Picks up every call in your business's name, day or night, nights and weekends included. Answers questions from the information you approve, books the appointment on your real calendar, and transfers the call or saves a callback when it needs you.",
  },
  {
    big: "The Truly Front Desk dashboard.",
    text: "Every call with a summary and the full transcript, your customer list, your calendar and your follow-ups, all in one place on your computer.",
  },
  {
    big: "The Truly Front Desk iPhone app.",
    text: "The same front desk in your pocket, with an alert when Riley books a job or needs a callback. It's live on the App Store.",
    link: { href: APP_STORE_URL, label: "Get it on the App Store" },
  },
  {
    big: "Built and run by us.",
    text: "We built every piece of this ourselves. We set it up around your business, test it with you before it takes a real call, and keep it running after. You work with Ethan directly.",
  },
];

export default function WhatWeBuilt() {
  return (
    <section id="built" className="scroll-mt-28 px-6 pt-12 pb-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-3xl text-navy sm:text-4xl">What we built.</h2>
        </Reveal>
        <div className="mt-7 border-t border-navy/15">
          {rows.map((r, i) => (
            <Reveal key={r.big} delay={i * 80}>
              <div className="grid gap-1.5 border-b border-navy/15 py-5 md:grid-cols-[0.8fr_1.2fr] md:items-baseline md:gap-10">
                <p className="font-[family-name:var(--font-anton)] text-xl leading-tight text-navy sm:text-2xl">{r.big}</p>
                <div>
                  <p className="text-[0.95rem] text-navy/70">{r.text}</p>
                  {r.link && (
                    <a
                      href={r.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-royal"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                        <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.15.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.68-1.1 1.77-.96 2.81 1.02.08 2.06-.52 2.69-1.28Z" />
                      </svg>
                      {r.link.label}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
