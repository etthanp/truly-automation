import Reveal from "./Reveal";

const included = [
  "AI receptionist running on your existing number",
  "Instant missed-call text-back, 24/7",
  "Qualifies customers & books them into your schedule",
  "Trained on your services, pricing & service area",
  "Answers common questions automatically",
  "Booked jobs & leads sent straight to you",
  "Monthly performance recap",
  "Cancel anytime — no long-term contract",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-royal/5 to-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Simple pricing. One saved job pays for it.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            The average missed call is worth around $300. Catch a single one a
            month and this covers itself — everything after that is money you
            were leaving on the table.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-royal/20 bg-white shadow-xl shadow-royal/10">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-ember px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              Founding partner pricing
            </div>

            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
              {/* Price side */}
              <div className="flex flex-col justify-center border-b border-navy/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
                  Missed-Call Rescue
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-navy">$500</span>
                  <span className="text-navy/60">one-time setup</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-royal">$300</span>
                  <span className="text-navy/60">/ month</span>
                </div>
                <p className="mt-6 rounded-xl bg-royal/5 p-4 text-sm text-navy/70">
                  We&apos;re taking on our first few HVAC partners at founding
                  rates in exchange for a little feedback. Get in now and lock
                  this pricing in.
                </p>
                <a
                  href="#contact"
                  className="mt-6 block rounded-full bg-ember px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105"
                >
                  Book a 10-min demo
                </a>
              </div>

              {/* Included side */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
                  Everything included
                </p>
                <ul className="mt-4 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className="mt-0.5 text-ember">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-navy/50">
            Also build websites for contractors? We do that too —{" "}
            <a href="#contact" className="font-medium text-royal underline underline-offset-2">
              just ask
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
