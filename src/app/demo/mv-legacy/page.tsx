import Link from "next/link";
import MVLegacyChat from "@/components/MVLegacyChat";
import { BASE, IMG, PHONE, TEL } from "./data";

const services = [
  { t: "Driveways & Patios", d: "New driveways, sidewalks, patios and foundations, plus repair of worn or cracked concrete." },
  { t: "Commercial & Government", d: "Commercial slabs, structural concrete, and public works and infrastructure jobs." },
  { t: "Masonry, Demo & Site Work", d: "Brick and block work, demolition and excavation, so one crew handles the whole job." },
];

export default function MVLegacyHome() {
  return (
    <>
      {/* Hero with the chat already open */}
      <section className="relative isolate overflow-hidden bg-[#141414] text-white">
        <img
          src={`${IMG}/slab-pour.webp`}
          alt="M.V. Legacy crew finishing a concrete slab"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#141414] via-[#141414]/85 to-[#141414]/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a52] sm:text-sm">
              Goldsboro · Wayne County · Eastern NC
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl">
              Concrete &amp; masonry built for the next generation.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Driveways, slabs, brick and block, demolition and excavation for homes, businesses and
              government projects. Free written estimates, and no job too small or too big.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8191f] px-6 py-3.5 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-white hover:text-[#141414]"
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
              <li>🏠 Family-owned in Wayne County · 50+ years combined experience</li>
              <li>🦺 OSHA trained &amp; certified crew · superb safety record</li>
              <li>📝 Written contract before every job · we warranty our work</li>
            </ul>
          </div>

          <MVLegacyChat />
        </div>
      </section>

      {/* Short services strip */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="rounded-2xl border-t-4 border-[#c8191f] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-extrabold">{s.t}</h2>
                <p className="mt-1 text-[15px] text-black/65">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {["crew-pour.webp", "patio-aerial.webp", "masonry.webp"].map((f) => (
              <img key={f} src={`${IMG}/${f}`} alt="Recent M.V. Legacy job" className="h-32 w-full rounded-xl object-cover sm:h-56" />
            ))}
          </div>
          <Link href={`${BASE}/services`} className="mt-6 inline-block font-bold text-[#c8191f] hover:underline">
            All services &amp; recent jobs →
          </Link>
        </div>
      </section>
    </>
  );
}
