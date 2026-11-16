import Reveal from "../Reveal";

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
    text: "Once your front desk is live, you and your team sign in to the app and see every call, booking and follow-up from your phone, with an alert when Riley books a job or needs a callback.",
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
