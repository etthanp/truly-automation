import Reveal from "./Reveal";

const facts = [
  {
    stat: "Up to 62%",
    text: "of calls to small home-services businesses go unanswered — because the crew is on a job, not by the phone.",
  },
  {
    stat: "60%",
    text: "of after-hours HVAC calls never get answered. And 68% of those after-hours calls are urgent — no heat, no AC, water everywhere.",
  },
  {
    stat: "85%",
    text: "of people who hit your voicemail hang up and never leave a message. You never even know they called.",
  },
  {
    stat: "67%",
    text: "of callers who can't reach you simply call the next company on Google — and book with them instead.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            The problem
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A missed call isn&apos;t a missed call. It&apos;s a booked job — for
            your competitor.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Every ring you can&apos;t get to is a customer with a broken system
            and a credit card in hand. If you don&apos;t pick up, someone else
            will.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {facts.map((f, i) => (
            <Reveal key={f.stat} delay={i * 100}>
              <div className="flex h-full gap-5 rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <div className="shrink-0">
                  <p className="text-4xl font-extrabold text-ember">{f.stat}</p>
                </div>
                <p className="text-navy/75">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl border border-royal/20 bg-gradient-to-r from-royal/5 to-sky/10 p-8 text-center">
            <p className="text-lg font-semibold text-navy sm:text-xl">
              But reply within 5 minutes and you&apos;re up to{" "}
              <span className="text-royal">100× more likely</span> to win that
              job.
            </p>
            <p className="mt-2 text-navy/70">
              The problem was never the lead. It was the speed. That&apos;s
              exactly what we fix.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
