import Reveal from "../Reveal";

const rows = [
  {
    big: "Ads that bring real leads.",
    text: "We run your Google, Local Services and Facebook ads and track every call, booked appointment and signed job, so every month you see exactly what came in and what it cost.",
  },
  {
    big: "AI that works your phones.",
    text: "Every missed call gets a text back in seconds. Our AI answers questions, gives price ranges, books the appointment, follows up on quotes and asks for the review. It works nights and weekends so you don't have to.",
  },
  {
    big: "Your plan, your call.",
    text: "No cookie-cutter packages. You pick what you want from us, from just a website and Google profile to ads, outreach and partners, and we scale it up as you hire your next person or open your next location.",
  },
  {
    big: "Straight talk. Real relationships.",
    text: "No jargon, no hiding behind reports, no runaround. You work with Ethan directly. If something isn't working, we tell you and fix it.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="px-6 pt-12 pb-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-3xl text-navy sm:text-4xl">
            What we actually do for you.
          </h2>
        </Reveal>
        <div className="mt-7 border-t border-navy/15">
          {rows.map((r, i) => (
            <Reveal key={r.big} delay={i * 80}>
              <div className="grid gap-1.5 border-b border-navy/15 py-4 md:grid-cols-[0.8fr_1.2fr] md:items-baseline md:gap-10">
                <p className="font-[family-name:var(--font-anton)] text-xl leading-tight text-navy sm:text-2xl">{r.big}</p>
                <p className="text-[0.95rem] text-navy/70">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
