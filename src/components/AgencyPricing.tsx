import Reveal from "./Reveal";

const acquisitionIncluded = [
  "Strategy call & ideal-client profile",
  "Researched, verified prospect list",
  "Separate sending setup to protect your email",
  "Email + LinkedIn + phone outreach",
  "Meetings booked on your calendar with notes",
  "Monthly pipeline report",
];

const receptionistIncluded = [
  "AI receptionist on your existing number",
  "Instant missed-call text-back, 24/7",
  "Qualifies & books into your schedule",
  "Monthly performance recap",
];

export default function AgencyPricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-royal/5 to-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            You only pay for meetings that happen.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            We&apos;re taking on our first few founding partners on a
            pay-per-meeting pilot. If we don&apos;t book, you don&apos;t pay.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl border border-royal/20 bg-white shadow-xl shadow-royal/10">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-ember px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Founding partner pilot
              </div>
              <div className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
                <div className="flex flex-col">
                  <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
                    Client Acquisition
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-navy">$200</span>
                    <span className="text-navy/60">per qualified meeting</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-royal">$500</span>
                    <span className="text-navy/60">one-time setup</span>
                  </div>
                  <p className="mt-6 rounded-xl bg-royal/5 p-4 text-sm text-navy/70">
                    After the pilot, stay pay-per-meeting or move to a flat
                    monthly retainer (from $1,500/mo) — your call.
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 block rounded-full bg-ember px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105"
                  >
                    Book a strategy call
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
                    Everything included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {acquisitionIncluded.map((item) => (
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

          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-navy/50">
                AI Receptionist
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-navy">$300</span>
                <span className="text-navy/60">/ month</span>
              </div>
              <p className="mt-2 text-sm text-navy/60">+ $500 one-time setup</p>
              <ul className="mt-6 space-y-3">
                {receptionistIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span className="mt-0.5 text-ember">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <a
                href="#contact"
                className="mt-8 block rounded-full border border-royal/30 px-6 py-3 text-center text-base font-semibold text-royal transition hover:bg-royal/5"
              >
                Get started
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-navy/60">
            Month-to-month. No long-term contracts. Cancel anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
