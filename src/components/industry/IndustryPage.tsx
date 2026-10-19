import Link from "next/link";
import Reveal from "../Reveal";
import SamplesBand from "../SamplesBand";
import IndustryTry from "./IndustryTry";
import IndustryFAQ from "./IndustryFAQ";
import type { Industry } from "@/lib/industries/types";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

// Included in every package, on top of the industry's own systems.
const BASICS_1 = [
  "Website built for your business, hosted and kept updated",
  "Local SEO: show up on Google, Google Maps & ChatGPT",
  "Google Business Profile optimized + weekly posts",
  "Automatic review requests after every customer",
  "Facebook & Instagram managed with your real photos",
  "Monthly results report",
];
const BASICS_2 = ["Google & Facebook ads management", "Monthly strategy call", "Priority support"];

function Hero({ ind }: { ind: Industry }) {
  const { lead, side, small } = ind.hero.cards;
  // Long headlines get a smaller size so they stay on two or three lines.
  const long = Math.max(ind.hero.line1.length, ind.hero.line2.length) > 20;
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Marketing for {ind.who}</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`mt-6 text-navy ${long ? "text-5xl sm:text-6xl xl:text-7xl" : "text-6xl sm:text-7xl xl:text-[5.25rem]"}`}>
              {ind.hero.line1}
              <br />
              <span className="text-royal">{ind.hero.line2}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">{ind.hero.sub}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={`/contact?business=${encodeURIComponent(ind.name)}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Get your free marketing checkup <span aria-hidden>→</span>
              </Link>
              <a
                href="#try"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                Try the {ind.estimator.name} <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* What lands on the owner's phone (example cards) */}
        <Reveal delay={200}>
          <div className="relative mx-auto grid w-full max-w-[540px] gap-4 sm:block sm:aspect-[5/4.6]">
            <div className="bg-white p-5 shadow-xl shadow-navy/15 sm:absolute sm:top-[30%] sm:left-0 sm:w-[72%] sm:p-6 lg:w-[66%] xl:w-[70%]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">{lead.label}</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  New lead
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

            <div className="bg-navy p-4 text-white shadow-xl shadow-navy/20 sm:absolute sm:top-0 sm:right-0 sm:w-52 lg:w-48 xl:w-56">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{side.label}</p>
              <p className="mt-1 text-sm font-bold">{side.title}</p>
              <span className="mt-2 block h-0.5 w-6 bg-ember" />
              <ul className="mt-3 space-y-2">
                {side.rows.map(([label, n]) => (
                  <li key={label} className="flex items-center justify-between gap-3 text-xs text-white/80">
                    {label}
                    <span className="font-bold text-white">{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 shadow-xl shadow-navy/10 sm:absolute sm:right-[4%] sm:bottom-[8%] sm:w-56">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">{small.label}</p>
              <p className="mt-1.5 text-sm font-bold text-navy">{small.title}</p>
              <p className="mt-0.5 text-xs text-navy/60">{small.text}</p>
            </div>

            <p className="text-center font-[family-name:var(--font-caveat)] text-xl leading-tight text-navy/60 sm:absolute sm:bottom-0 sm:left-[2%] sm:max-w-[11rem] sm:-rotate-6 sm:text-left">
              What lands on your phone (example)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Problems({ ind }: { ind: Industry }) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Sound familiar?</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">What holds most {ind.who} back</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ind.problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-navy/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Systems({ ind }: { ind: Industry }) {
  const [p1, p2] = ind.packages;
  return (
    <section id="services" className="bg-gradient-to-b from-background to-royal/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">What we do</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">
            {ind.systems.length} systems built only for {ind.who}
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Not a generic marketing package. Each one solves a problem {ind.who} actually
            have, on top of your website, Google profile, reviews, social media and ads.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ind.systems.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-navy/70">{s.text}</p>
                <p
                  className={`mt-5 self-start rounded-full px-2.5 py-1 text-xs font-semibold ${
                    s.tier === 1 ? "bg-royal/10 text-royal" : "bg-ember/10 text-ember"
                  }`}
                >
                  {s.tier === 1 ? p1.name : p2.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages({ ind }: { ind: Industry }) {
  const [p1, p2] = ind.packages;
  const lists = [
    [...ind.systems.filter((s) => s.tier === 1).map((s) => s.title), ...BASICS_1],
    [`Everything in ${p1.name}`, ...ind.systems.filter((s) => s.tier === 2).map((s) => s.title), ...BASICS_2],
  ];
  return (
    <section id="packages" className="bg-gradient-to-b from-royal/5 to-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">Packages</span>
          <h2 className="mt-3 text-4xl text-navy sm:text-5xl">Pick how much you want off your plate</h2>
          <p className="mt-4 text-lg text-navy/70">
            Everything done for you. Get a free checkup and we&apos;ll recommend the right fit.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[p1, p2].map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-3xl bg-white p-8 ${
                  i === 0 ? "border-2 border-ember shadow-xl shadow-ember/15" : "border border-navy/10 shadow-sm"
                }`}
              >
                {i === 0 && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ember px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-sans text-2xl font-extrabold tracking-tight text-navy">{p.name}</h3>
                <p className="mt-4 text-navy/75">{p.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {lists[i].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                      <span className="mt-0.5 text-ember">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                <Link
                  href={`/contact?business=${encodeURIComponent(ind.name)}`}
                  className={`mt-8 block rounded-full px-6 py-3.5 text-center text-base font-semibold transition ${
                    i === 0
                      ? "bg-ember text-white shadow-lg shadow-ember/30 hover:scale-105"
                      : "border border-royal/30 text-royal hover:bg-royal/5"
                  }`}
                >
                  Start with a free checkup
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-navy/60">
          Ad spend is paid directly to Google or Facebook on your own card, so you always see
          exactly where the money goes.
        </p>
      </div>
    </section>
  );
}

function Cta({ ind }: { ind: Industry }) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Is your city still open?</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          We work with one {ind.one} per city. Get a free marketing checkup and we&apos;ll tell
          you if your town is available.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/contact?business=${encodeURIComponent(ind.name)}`}
            className="inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
          >
            Get your free checkup <span aria-hidden>→</span>
          </Link>
          <a href={PHONE_HREF} className="text-base font-semibold text-navy underline-offset-4 hover:underline">
            or call {PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default function IndustryPage({ ind }: { ind: Industry }) {
  return (
    <>
      <Hero ind={ind} />
      <Problems ind={ind} />
      <Systems ind={ind} />
      <IndustryTry ind={ind} />
      {ind.samples && <SamplesBand />}
      <Packages ind={ind} />
      <IndustryFAQ faqs={ind.faqs} />
      <Cta ind={ind} />
    </>
  );
}
