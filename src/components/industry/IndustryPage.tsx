import Link from "next/link";
import Reveal from "../Reveal";
import Demo from "../Demo";
import IndustryFAQ from "./IndustryFAQ";
import DashboardPreview from "../frontdesk/DashboardPreview";
import { FrontDeskCta, Handles, SalaryCompare, Steps } from "../frontdesk/Sections";
import type { Industry } from "@/lib/industries/types";
import { WHY } from "@/lib/industries/why";
import { dashFor, FRONT_DESK_FAQS } from "@/lib/frontdesk";

function Hero({ ind }: { ind: Industry }) {
  // Long headlines get a smaller size so they stay on two or three lines.
  const long = ind.demo.busy.length > 30;
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">AI front desk for {ind.who}</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`mt-6 text-navy ${long ? "text-[2.6rem] leading-[1] sm:text-5xl xl:text-6xl" : "text-5xl sm:text-6xl xl:text-7xl"}`}>
              {ind.demo.busy}.
              <br />
              <span className="text-royal">Your front desk still picks up.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">{WHY[ind.slug]}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={`/contact?business=${encodeURIComponent(ind.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Get a free front desk checkup <span aria-hidden>→</span>
              </Link>
              <a
                href="#try"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                Try it yourself <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <DashboardPreview data={dashFor(ind)} compact />
          <p className="mt-3 text-center font-[family-name:var(--font-caveat)] text-xl text-navy/60">
            what you&apos;d see every morning (example)
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** The industry's own example: what a missed call turns into, and the questions it handles. */
function ForYou({ ind }: { ind: Industry }) {
  const d = ind.demo;
  const lead = ind.hero.cards.lead;
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Built for {ind.who}</span>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What a call looks like for you.</h2>
          <p className="mt-5 text-lg text-navy/75">
            We set up your AI front desk with your services, prices, hours and open times, so it answers
            the way you would and books {d.goal}.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-navy/50">Questions it handles</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {d.chips.map((c) => (
              <li key={c} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy">
                &ldquo;{c}&rdquo;
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <ol className="border-t border-navy/15">
            <li className="border-b border-navy/15 py-4">
              <p className="font-bold text-navy">A customer calls</p>
              <p className="mt-1 text-[0.95rem] text-navy/70">
                {d.busy} when a customer calls: &ldquo;{d.chips[0]}&rdquo;
              </p>
            </li>
            <li className="border-b border-navy/15 py-4">
              <p className="font-bold text-navy">Your AI front desk answers</p>
              <p className="mt-1 text-[0.95rem] text-navy/70">
                It picks up in your business&apos;s name, answers from the info you approved, asks the right
                questions and books {d.goal}.
              </p>
            </li>
            <li className="border-b border-navy/15 py-4">
              <p className="font-bold text-navy">It shows up in your dashboard</p>
              <p className="mt-1 text-[0.95rem] text-navy/70">
                {lead.title}, with the details already filled in:
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {lead.fields.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-navy/50">{k}</dt>
                    <dd className="font-semibold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function TryIt({ ind }: { ind: Industry }) {
  const d = ind.demo;
  return (
    <section id="try" className="scroll-mt-24 bg-gradient-to-b from-background to-royal/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Try it yourself</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Talk to an AI front desk for {ind.who}</h2>
          <p className="mt-4 text-lg text-navy/70">
            This demo is for {d.business}, a made-up business, and runs by text so you can try it here. Ask it what your customers ask you.
          </p>
        </Reveal>
        <div className="mt-12">
          <Demo bare bot={ind.slug} business={d.business} greeting={d.greeting} chips={d.chips} busy={d.busy} steps={d.steps} />
        </div>
      </div>
    </section>
  );
}

export default function IndustryPage({ ind }: { ind: Industry }) {
  return (
    <>
      <Hero ind={ind} />
      <ForYou ind={ind} />
      <SalaryCompare />
      <TryIt ind={ind} />
      <Handles title={`Everything it does for ${ind.who}.`} />
      <Steps />
      <IndustryFAQ faqs={FRONT_DESK_FAQS} />
      <FrontDeskCta business={ind.name} />
    </>
  );
}
