import Link from "next/link";
import LeyvasChat from "@/components/LeyvasChat";
import { BASE, IMG, PHONE, TEL } from "./data";

const services = [
  { t: "Concrete", d: "Driveways, patios, sidewalks, steps and stamped concrete." },
  { t: "Hardscape", d: "Paver patios, pool decks, flagstone and stone walls." },
  { t: "Landscaping", d: "Lawn care, mulch, sod, cleanups and snow removal." },
];

export default function LeyvasHome() {
  return (
    <>
      {/* Hero with the chat already open */}
      <section className="relative isolate overflow-hidden bg-[#10241a] text-white">
        <img
          src={`${IMG}/pool-pavers.jpg`}
          alt="Paver pool deck installed by Leyva's"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10241a] via-[#10241a]/85 to-[#10241a]/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9bd14a] sm:text-sm">
              New Castle, DE · Concrete · Landscaping
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl">
              Concrete &amp; landscaping, done right the first time
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              15+ years serving New Castle County. Licensed &amp; insured. Free estimates, and
              we answer 24/7.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9bd14a] px-6 py-3.5 font-bold text-[#10241a] shadow-lg shadow-black/20 transition hover:bg-white"
              >
                📞 Call {PHONE}
              </a>
              <Link
                href={`${BASE}/services`}
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 font-bold transition hover:bg-white/10"
              >
                See our work →
              </Link>
            </div>
            <ul className="mt-8 space-y-1.5 text-sm text-white/85">
              <li>
                <span className="text-[#f5c542]">★★★★★</span> 4.8 on Google (17 reviews)
              </li>
              <li>🏅 Nextdoor Neighborhood Favorite 2024 &amp; 2025</li>
              <li>🇲🇽 Hablamos Español</li>
            </ul>
          </div>

          <LeyvasChat />
        </div>
      </section>

      {/* Short services strip */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-extrabold">{s.t}</h2>
                <p className="mt-1 text-[15px] text-black/65">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {["stamped-walkway.jpg", "flagstone-patio.jpg", "curved-walkway.jpg"].map((f) => (
              <img key={f} src={`${IMG}/${f}`} alt="Recent Leyva's job" className="h-32 w-full rounded-xl object-cover sm:h-56" />
            ))}
          </div>
          <Link
            href={`${BASE}/services`}
            className="mt-6 inline-block font-bold text-[#2f8a3c] hover:underline"
          >
            All services &amp; recent jobs →
          </Link>
        </div>
      </section>
    </>
  );
}
