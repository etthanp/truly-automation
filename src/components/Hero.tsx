import Reveal from "./Reveal";

const permits = [
  { label: "New home permits", n: 14 },
  { label: "Pool permits", n: 3 },
  { label: "Shop & pole barn permits", n: 5 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Marketing for concrete contractors</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-6xl text-navy sm:text-7xl xl:text-[5.25rem]">
              You pour the concrete.
              <br />
              <span className="text-royal">We fill the schedule.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">
              Truly Automation is the marketing team built only for concrete
              contractors. Driveways, patios, slabs and commercial flatwork: we
              bring in the calls, screen out the tire-kickers and follow up on
              every quote, so you can stay on the job site.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Get your free marketing checkup <span aria-hidden>→</span>
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                Try the Pour Price Calculator <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* What lands on the owner's phone (example cards) */}
        <Reveal delay={200}>
          <div className="relative mx-auto grid w-full max-w-[540px] gap-4 sm:block sm:aspect-[5/4.6]">
            {/* Photo Quote Line lead */}
            <div className="bg-white p-5 shadow-xl shadow-navy/15 sm:absolute sm:top-[10%] sm:left-0 sm:w-[78%] sm:p-6 lg:w-[68%] xl:w-[76%]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">
                  Photo Quote Line
                </p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  New lead
                </span>
              </div>
              <p className="mt-3 text-xl font-bold text-navy">Driveway replacement</p>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {[
                  ["Size", "About 640 sq ft"],
                  ["Finish", "Broom, tear-out"],
                  ["Town", "Newberg"],
                  ["Timeline", "Before spring"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-navy/50">{k}</dt>
                    <dd className="font-semibold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["front", "side", "street"].map((p) => (
                  <div
                    key={p}
                    className="flex aspect-[4/3] items-end bg-gradient-to-br from-stone-300 to-stone-400 p-1.5 text-[10px] font-medium text-white/90"
                  >
                    {p}.jpg
                  </div>
                ))}
              </div>
            </div>

            {/* Permit Radar */}
            <div className="bg-navy p-4 text-white shadow-xl shadow-navy/20 sm:absolute sm:top-0 sm:right-0 sm:w-48 lg:w-44 xl:w-52">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Permit Radar
              </p>
              <p className="mt-1 text-sm font-bold">This week in your county</p>
              <span className="mt-2 block h-0.5 w-6 bg-ember" />
              <ul className="mt-3 space-y-2">
                {permits.map((p) => (
                  <li key={p.label} className="flex items-center justify-between gap-3 text-xs text-white/80">
                    {p.label}
                    <span className="font-bold text-white">{p.n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estimate Chaser */}
            <div className="bg-white p-4 shadow-xl shadow-navy/10 sm:absolute sm:right-[4%] sm:bottom-[8%] sm:w-56">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/50">
                Estimate Chaser
              </p>
              <p className="mt-1.5 text-sm font-bold text-navy">Day 7 follow-up sent</p>
              <p className="mt-0.5 text-xs text-navy/60">Stamped patio quote, $8,400</p>
            </div>

            <p className="text-center font-[family-name:var(--font-caveat)] text-xl leading-tight text-navy/60 sm:absolute sm:bottom-0 sm:left-[2%] sm:max-w-[11rem] sm:-rotate-6 sm:text-left">
              What lands on your phone (example)
            </p>

            <span className="absolute top-[-4%] right-[44%] hidden text-2xl text-ember/50 sm:block" aria-hidden>
              +
            </span>
            <span className="absolute bottom-[34%] left-[-3%] hidden text-2xl text-ember/50 sm:block" aria-hidden>
              +
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
