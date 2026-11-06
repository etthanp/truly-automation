import Link from "next/link";
import Reveal from "../Reveal";
import Demo from "../Demo";
import IndustryFAQ from "./IndustryFAQ";
import HomeCta from "../home/HomeCta";
import type { Industry } from "@/lib/industries/types";
import { WHY } from "@/lib/industries/why";
import { FAQS } from "@/lib/offer";

function Hero({ ind }: { ind: Industry }) {
  const { lead } = ind.hero.cards;
  const goal = ind.demo.goal.replace(/\s*\(.*\)/, "");
  const did = ["Answered in your business's name", "Asked the right questions", `Booked ${goal}`, "Saved it to your dashboard"];
  // Long headlines get a smaller size so they stay on two or three lines.
  const long = ind.demo.busy.length > 30;
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">AI systems for {ind.who}</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`mt-6 text-navy ${long ? "text-[2.6rem] leading-[1] sm:text-5xl xl:text-6xl" : "text-5xl sm:text-6xl xl:text-7xl"}`}>
              {ind.demo.busy}.
              <br />
              <span className="text-royal">Our AI still picks up.</span>
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
                Get a free automation checkup <span aria-hidden>→</span>
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

        {/* What lands on the owner's phone (example cards) */}
        <Reveal delay={200}>
          <div className="relative mx-auto grid w-full max-w-[540px] gap-4 sm:block sm:aspect-[5/4]">
            <div className="bg-white p-5 shadow-xl shadow-navy/15 sm:absolute sm:top-[4%] sm:left-0 sm:w-[72%] sm:p-6 lg:w-[66%] xl:w-[70%]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">AI answered, 9:42 PM</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Booked
                </span>
              </div>
              <p className="mt-3 text-xl font-bold text-navy">{lead.title}</p>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {lead.fields.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-navy/50">{k}</dt>
                    <dd className="font-semibold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-navy p-4 text-white shadow-xl shadow-navy/20 sm:absolute sm:right-0 sm:bottom-[12%] sm:w-60">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">What our AI did</p>
              <span className="mt-2 block h-0.5 w-6 bg-ember" />
              <ul className="mt-3 space-y-2">
                {did.map((d) => (
                  <li key={d} className="flex gap-2 text-xs text-white/85">
                    <span className="text-ember" aria-hidden>✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-center font-[family-name:var(--font-caveat)] text-xl leading-tight text-navy/60 sm:absolute sm:bottom-0 sm:left-[2%] sm:max-w-[13rem] sm:-rotate-6 sm:text-left">
              What lands on your phone (example)
            </p>
          </div>
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
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Talk to our AI for {ind.who}</h2>
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
      <TryIt ind={ind} />
      <IndustryFAQ faqs={FAQS} />
      <HomeCta business={ind.name} />
    </>
  );
}
