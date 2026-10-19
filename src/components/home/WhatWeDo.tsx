import Reveal from "../Reveal";

const rows = [
  {
    big: "Real leads, not likes.",
    text: "We don't sell impressions or follower counts. We track calls, booked appointments and signed jobs, and every month you see exactly what came in and where it came from.",
  },
  {
    big: "AI that works your phones.",
    text: "Every missed call gets a text back in seconds. Our AI answers questions, gives price ranges, books the appointment, follows up on quotes and asks for the review. It works nights and weekends so you don't have to.",
  },
  {
    big: "Built to scale with you.",
    text: "Start with the basics that bring in work right away. As you grow, we add ads, outreach and referral partners, so the system is ready when you hire your next person or open your next location.",
  },
  {
    big: "Straight talk. Real relationships.",
    text: "No jargon, no hiding behind reports, no runaround. You work with Ethan directly. If something isn't working, we tell you and fix it.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-5xl text-navy sm:text-6xl">
            What we actually do for you.
          </h2>
        </Reveal>
        <div className="mt-12 border-t border-navy/15">
          {rows.map((r, i) => (
            <Reveal key={r.big} delay={i * 80}>
              <div className="grid gap-4 border-b border-navy/15 py-9 md:grid-cols-[1fr_1.1fr] md:gap-12">
                <p className="font-[family-name:var(--font-anton)] text-3xl leading-tight text-navy sm:text-4xl">{r.big}</p>
                <p className="text-lg text-navy/70 md:pt-1">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
