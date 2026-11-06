import Reveal from "../Reveal";

const rows = [
  {
    big: "AI that answers your phone.",
    text: "Our AI receptionist picks up every call in your business's name, day or night. It answers questions from the info you approve, books the appointment on your real calendar, and gets you when a call needs a person.",
  },
  {
    big: "Automations that follow up.",
    text: "Quote follow-ups, appointment reminders, review requests and callbacks go out on their own, so nothing slips while you're on a job.",
  },
  {
    big: "One dashboard for all of it.",
    text: "Every call, customer, appointment and job in one place, with a short summary of each call. Check it from your phone or computer.",
  },
  {
    big: "Built and run by us.",
    text: "These aren't off-the-shelf tools. We build every system ourselves, test it with you before it takes a real call, and keep it running after. You work with Ethan directly.",
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
