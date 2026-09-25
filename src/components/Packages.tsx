import Reveal from "./Reveal";
import { packages, usd } from "@/lib/packages";

export default function Packages() {
  return (
    <section id="packages" className="bg-gradient-to-b from-royal/5 to-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Packages
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Pick how much you want off your plate
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Founding-partner pricing for our first few clients. Lock it in
            now and keep it for as long as you stay.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-3xl bg-white p-8 ${
                  p.popular
                    ? "border-2 border-ember shadow-xl shadow-ember/15"
                    : "border border-navy/10 shadow-sm"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ember px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <p className="text-sm font-semibold uppercase tracking-wide text-royal">
                  {p.name}
                </p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold text-navy">
                    {usd(p.monthly)}
                  </span>
                  <span className="text-navy/60">/ month</span>
                </div>
                <p className="mt-1 text-sm text-navy/60">
                  + {usd(p.setup)} one-time setup
                </p>
                <p className="mt-4 text-navy/75">{p.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className="mt-0.5 text-ember">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <a
                  href="#contact"
                  className={`mt-8 block rounded-full px-6 py-3.5 text-center text-base font-semibold transition ${
                    p.popular
                      ? "bg-ember text-white shadow-lg shadow-ember/30 hover:scale-105"
                      : "border border-royal/30 text-royal hover:bg-royal/5"
                  }`}
                >
                  Start with a free checkup
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-navy/60">
            3-month starting term, then month-to-month. Ad spend (Google, Local
            Services Ads, Facebook) is paid directly to the platform on your
            own card, so you always see exactly where it goes. Switch plans
            anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
