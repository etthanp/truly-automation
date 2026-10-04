import Reveal from "./Reveal";

const marketChecks = [
  {
    label: "Competitors",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Customers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <circle cx="9" cy="8.5" r="3.2" />
        <circle cx="16.5" cy="9.5" r="2.6" />
        <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M14.5 14.6c2.6-.3 4.9 1 5.6 4.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Opportunities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Marketing built around you</span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-6xl text-navy sm:text-7xl xl:text-[5.25rem]">
              Your trade.
              <br />
              Your goals.
              <br />
              <span className="text-royal">Our full attention.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">
              We get to know you, your trade, and your town, then build and run
              marketing that fits your business. Website, Google, reviews,
              social, ads and outreach, handled by people who actually pick up
              the phone.
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
                href="#approach"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                See our approach <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-12 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-navy/60">
              <span className="h-px w-12 bg-navy/50" />
              Built for construction &amp; home service businesses
            </p>
          </Reveal>
        </div>

        {/* Collage of real client work */}
        <Reveal delay={200}>
          <div className="relative mx-auto aspect-[5/4.2] w-full max-w-[560px]">
            <a
              href="https://www.ncsoilpercsolutions.com/"
              target="_blank"
              rel="noopener"
              className="absolute top-[14%] left-0 w-[84%] overflow-hidden border-[6px] border-white bg-white shadow-xl shadow-navy/15 transition hover:-translate-y-1"
            >
              <img
                src="/work/soil-perc.jpg"
                alt="NC Perc Solutions website, built by Truly Automation"
                width={960}
                height={600}
                className="aspect-[4/3] w-full object-cover object-left-top"
              />
            </a>

            {/* "Understand the market" card */}
            <div className="absolute top-0 right-0 w-44 bg-white p-4 shadow-xl shadow-navy/10 sm:w-48">
              <p className="text-base leading-tight font-bold text-navy">
                Understand
                <br />
                the market
              </p>
              <span className="mt-2 block h-0.5 w-6 bg-ember" />
              <ul className="mt-3 space-y-2.5">
                {marketChecks.map((c) => (
                  <li key={c.label} className="flex items-center gap-2.5 text-xs text-navy/80">
                    <span className="text-navy">{c.icon}</span>
                    {c.label}
                  </li>
                ))}
              </ul>
            </div>

            <p className="absolute right-[2%] bottom-0 max-w-[10rem] text-right font-[family-name:var(--font-caveat)] text-xl leading-tight text-navy/60 -rotate-6">
              A real client.
              <br />
              A real website.
            </p>

            <span className="absolute top-[-4%] right-[40%] text-2xl text-ember/50" aria-hidden>
              +
            </span>
            <span className="absolute bottom-[30%] left-[-3%] text-2xl text-ember/50" aria-hidden>
              +
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
