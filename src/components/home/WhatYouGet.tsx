import Link from "next/link";
import Reveal from "../Reveal";
import { FEATURES } from "@/lib/offer";

export default function WhatYouGet() {
  return (
    <section id="included" className="scroll-mt-28 px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <h2 className="text-4xl text-navy sm:text-5xl">Everything your front desk needs.</h2>
          <p className="mt-5 max-w-md text-lg text-navy/70">
            One system, built around your business and run by us, for far less than hiring someone to answer the
            phone. We&apos;ll go over what it would look like for you on a short demo.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-xl shadow-navy/5">
            <p className="text-sm font-semibold text-navy/60">Every Truly Front Desk includes</p>
            <ul className="mt-5 space-y-3">
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
