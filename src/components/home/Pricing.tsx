import Link from "next/link";
import Reveal from "../Reveal";
import { FEATURES, PRICE } from "@/lib/offer";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <h2 className="text-4xl text-navy sm:text-5xl">One price. Everything included.</h2>
          <p className="mt-5 max-w-md text-lg text-navy/70">
            You get the whole front desk, built and run for you, for less than a part-time receptionist.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-xl shadow-navy/5">
            <p className="text-sm font-semibold text-navy/60">Truly Front Desk</p>
            <p className="mt-3 text-navy">
              <span className="font-[family-name:var(--font-anton)] text-5xl">{PRICE.setup}</span>
              <span className="ml-2 text-navy/60">to build and set up</span>
            </p>
            <p className="mt-2 text-navy">
              <span className="font-[family-name:var(--font-anton)] text-3xl">{PRICE.monthly}</span>
              <span className="ml-2 text-navy/60">a month, starting your second month</span>
            </p>
            <ul className="mt-7 space-y-3 border-t border-navy/10 pt-6">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-3 text-[0.95rem] text-navy/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                  <span>
                    <span className="font-semibold text-navy">{f.title}.</span> {f.text}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white transition hover:bg-navy"
            >
              Book a demo <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
