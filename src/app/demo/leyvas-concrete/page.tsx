import type { Metadata } from "next";
import LeyvasChat, { ChatButton } from "@/components/LeyvasChat";

// Private prospect demo: a homepage mockup for Leyva's Concrete & Landscaping (New Castle, DE),
// shared by link at the meeting, never indexed. Photos are their own job photos from
// leyvasconcreteandlandscapedelaware.com; reviews and ratings are from their Google profile.
export const metadata: Metadata = {
  title: "Leyva's Concrete & Landscaping | New Castle, DE | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

const PHONE = "(302) 507-2300";
const TEL = "tel:+13025072300";
const IMG = "/demo/leyvas";

const services = [
  {
    title: "Concrete",
    img: `${IMG}/curved-walkway.jpg`,
    items: [
      "Driveways & tear-out / replacement",
      "Patios, sidewalks & steps",
      "Stamped & decorative concrete",
      "Garage slabs, foundations & curbs",
      "Repair, resurfacing & leveling",
    ],
    ask: "I'd like a quote on concrete work",
  },
  {
    title: "Hardscape & Masonry",
    img: `${IMG}/brick-patio.jpg`,
    items: [
      "Paver patios & pool decks",
      "Flagstone & natural stone",
      "Seat walls & retaining walls",
      "Block walls & brick repointing",
      "Drainage & trench drains",
    ],
    ask: "I'm thinking about a paver patio",
  },
  {
    title: "Landscaping & Lawn",
    img: `${IMG}/mulch-beds.jpg`,
    items: [
      "Weekly mowing & maintenance",
      "Mulch, edging & planting",
      "New sod & lawn installs",
      "Spring & fall cleanups",
      "Tree trimming, fencing & decks",
    ],
    ask: "Do you do lawn maintenance?",
  },
];

const work = [
  { src: `${IMG}/pool-pavers.jpg`, cap: "Paver pool deck", wide: true },
  { src: `${IMG}/stamped-walkway.jpg`, cap: "Stamped walkway & seat wall" },
  { src: `${IMG}/concrete-steps.jpg`, cap: "Poured concrete steps" },
  { src: `${IMG}/flagstone-patio.jpg`, cap: "Flagstone patio" },
  { src: `${IMG}/sidewalk.jpg`, cap: "New sidewalk & landing" },
  { src: `${IMG}/new-sod.jpg`, cap: "Commercial sod install", wide: true },
];

const steps = [
  { n: "1", t: "Free estimate", d: "We come out, measure, and listen to what you want. No pressure." },
  { n: "2", t: "Clear written price", d: "Honest pricing up front, so there are no surprises." },
  { n: "3", t: "Built right", d: "Proper base, forms and finish, with a crew that cleans up after itself." },
  { n: "4", t: "We stand behind it", d: "Something's not right? Call us. We're available 24/7." },
];

const reviews = [
  { q: "Marco and his team was a pleasure to work with.", who: "Rebecca V.", job: "Slab removal & patio" },
  { q: "Marco made time to quote the job on the first contact date.", who: "John C.", job: "Concrete project" },
  { q: "Completely satisfied with the quality of their work.", who: "Google reviewer", job: "" },
];

const towns = [
  "New Castle",
  "Wilmington",
  "Newark",
  "Bear",
  "Middletown",
  "Hockessin",
  "Pike Creek",
  "Claymont",
  "Delaware City",
  "Glasgow",
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#9bd14a] px-6 py-3.5 font-bold text-[#10241a] shadow-lg shadow-black/20 transition hover:bg-white";

export default function LeyvasDemo() {
  return (
    <div className="bg-[#f3f1ea] text-[#14211a]">
      {/* Demo ribbon */}
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo homepage for Leyva&apos;s</span> built by
        Truly Automation · not live yet · try the chat in the bottom corner →
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex items-center">
            <img src={`${IMG}/logo.png`} alt="Leyva's Concrete & Landscaping" className="h-12 w-auto sm:h-14" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-black/70 md:flex">
            <a href="#services" className="hover:text-[#2f8a3c]">Services</a>
            <a href="#work" className="hover:text-[#2f8a3c]">Our Work</a>
            <a href="#reviews" className="hover:text-[#2f8a3c]">Reviews</a>
            <a href="#area" className="hover:text-[#2f8a3c]">Service Area</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-[#10241a]/15 px-4 py-2 text-sm font-bold sm:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free estimate"
              className="rounded-full bg-[#2f8a3c] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#10241a]"
            >
              Free Estimate
            </ChatButton>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#10241a] text-white">
          <img
            src={`${IMG}/pool-pavers.jpg`}
            alt="Paver pool deck installed by Leyva's"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10241a] via-[#10241a]/80 to-[#10241a]/20" />
          <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9bd14a] sm:text-sm">
              New Castle, DE · Concrete · Hardscape · Landscaping
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] uppercase sm:text-7xl">
              Concrete &amp; landscaping, done right the first time
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Driveways, patios, stamped concrete, pavers and lawn care across New Castle County.
              15+ years of experience. Licensed &amp; insured. Free estimates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ChatButton message="I'd like a free estimate" className={btnPrimary}>
                Get my free estimate →
              </ChatButton>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Call {PHONE}
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <li>
                <span className="text-[#f5c542]">★★★★★</span> 4.8 on Google (17 reviews)
              </li>
              <li>🏅 Nextdoor Neighborhood Favorite 2024 &amp; 2025</li>
              <li>🇲🇽 Hablamos Español</li>
              <li>🕑 24/7 emergency service</li>
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#2f8a3c]">What we do</p>
            <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">One crew for the whole yard</h2>
            <p className="mt-3 max-w-2xl text-black/65">
              From the driveway to the back patio to the grass in between. Homes and businesses.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <img src={s.img} alt={s.title} className="h-52 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold">{s.title}</h3>
                    <ul className="mt-3 flex-1 space-y-1.5 text-[15px] text-black/70">
                      {s.items.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#2f8a3c]">✓</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                    <ChatButton
                      message={s.ask}
                      className="mt-5 self-start text-sm font-bold text-[#2f8a3c] hover:underline"
                    >
                      Ask about {s.title.toLowerCase()} →
                    </ChatButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid overflow-hidden rounded-2xl bg-[#10241a] text-white md:grid-cols-[1fr_1.1fr]">
              <img src={`${IMG}/snow-removal.jpg`} alt="Leyva's snow removal trucks" className="h-56 w-full object-cover md:h-full" />
              <div className="p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wide text-[#9bd14a]">Winter is coming</p>
                <h3 className="mt-1 font-display text-3xl uppercase">Snow removal &amp; 24/7 emergencies</h3>
                <p className="mt-3 text-white/75">
                  Plowing and salting for homes, HOAs and businesses. Storm damage or a broken
                  walkway that&apos;s a trip hazard? We pick up day or night.
                </p>
                <ChatButton message="I need snow removal this winter" className={`${btnPrimary} mt-6`}>
                  Get on the snow list
                </ChatButton>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#2f8a3c]">Recent jobs</p>
            <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Our work speaks for itself</h2>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {work.map((w) => (
                <figure
                  key={w.src}
                  className={`group relative overflow-hidden rounded-xl ${w.wide ? "col-span-2" : ""}`}
                >
                  <img src={w.src} alt={w.cap} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pt-10 pb-3 text-sm font-semibold text-white">
                    {w.cap}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#2f8a3c]">How it works</p>
            <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Simple from start to finish</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f8a3c] font-display text-xl text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold">{s.t}</h3>
                  <p className="mt-1 text-[15px] text-black/65">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="scroll-mt-20 bg-[#10241a] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#9bd14a]">From our customers</p>
                <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Neighbors trust Leyva&apos;s</h2>
              </div>
              <p className="text-lg">
                <span className="text-[#f5c542]">★★★★★</span>{" "}
                <span className="font-bold">4.8</span> <span className="text-white/60">· 17 Google reviews</span>
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {reviews.map((r) => (
                <blockquote key={r.q} className="rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                  <p className="text-[#f5c542]">★★★★★</p>
                  <p className="mt-3 text-lg leading-snug">&ldquo;{r.q}&rdquo;</p>
                  <footer className="mt-4 text-sm text-white/60">
                    {r.who}
                    {r.job ? ` · ${r.job}` : ""}
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">
              Excerpts from Google reviews · Nextdoor Neighborhood Favorite 2024 &amp; 2025 · BBB rating A
            </p>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#2f8a3c]">Service area</p>
              <h2 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Proudly local to New Castle County</h2>
              <p className="mt-3 text-black/65">
                Based at 14 S Independence Blvd in New Castle. We work about 50 miles out, including
                nearby Pennsylvania and Maryland.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {towns.map((t) => (
                  <li key={t} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-black/5">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={`${IMG}/stamped-walkway.jpg`}
              alt="Stamped concrete walkway lit at night"
              className="h-80 w-full rounded-2xl object-cover shadow-lg md:h-[26rem]"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#2f8a3c] px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Get your free estimate today</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Chat with us any time, day or night, or give us a call. Se habla español.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ChatButton message="I'd like a free estimate" className={btnPrimary}>
                Start my free estimate
              </ChatButton>
              <a
                href={TEL}
                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                📞 {PHONE}
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">We accept cash, check &amp; Cash App</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1912] px-4 py-12 text-white/70 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 text-sm sm:grid-cols-3">
          <div>
            <img src={`${IMG}/logo.png`} alt="Leyva's Concrete & Landscaping" className="h-14 w-auto rounded-lg bg-white p-1" />
            <p className="mt-3">Concrete, hardscape &amp; landscaping in New Castle, DE. Licensed &amp; insured.</p>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <p className="mt-2">14 S Independence Blvd, New Castle, DE 19720</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-white">{PHONE}</a> · Open 24 hours
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Follow us</p>
            <a
              href="https://www.facebook.com/p/LeyvaS-concrete-and-landscaping-100064061923797/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 Leyva&apos;s Concrete &amp; Landscaping LLC · Demo website by Truly Automation
        </p>
      </footer>

      <LeyvasChat />
    </div>
  );
}
