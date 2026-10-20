import Link from "next/link";
import RhinoChat from "@/components/RhinoChat";
import { BASE, IMG, PHONE, TEL } from "./data";

const services = [
  { t: "Driveways", d: "New driveways, replacements and extensions, formed, poured and finished on site." },
  { t: "Patios & Stamped", d: "Backyard patios, plain or stamped to look like stone, slate or brick." },
  { t: "Partial Replacement", d: "Only part of it damaged? We replace just that section, not the whole slab." },
];

export default function RhinoHome() {
  return (
    <>
      {/* Hero with the chat already open */}
      <section className="relative isolate overflow-hidden bg-[#0a0e13] text-white">
        <img
          src={`${IMG}/img_0490.webp`}
          alt="Concrete job by Rhino Concrete"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0e13] via-[#0a0e13]/85 to-[#0a0e13]/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6ab0ff] sm:text-sm">
              Charlotte, NC · Concrete Contractor
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl">
              The strongest concrete in Charlotte.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Driveways, patios, stamped concrete and more. Built to last, backed by 80+ five-star
              Google reviews. Free quotes, answered within 24 hours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4080cc] px-6 py-3.5 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-white hover:text-[#0a0e13]"
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
              <li>⭐ 5.0 · 80+ Google reviews</li>
              <li>🛠️ 10+ years · 500+ projects · Licensed &amp; insured</li>
              <li>✅ Quality guaranteed: if it isn&apos;t right, we fix it</li>
            </ul>
          </div>

          <RhinoChat />
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
            {["img_0486.webp", "stamped.webp", "img_0491.webp"].map((f) => (
              <img key={f} src={`${IMG}/${f}`} alt="Recent Rhino Concrete job" className="h-32 w-full rounded-xl object-cover sm:h-56" />
            ))}
          </div>
          <Link
            href={`${BASE}/services`}
            className="mt-6 inline-block font-bold text-[#2a5fa5] hover:underline"
          >
            All services &amp; recent jobs →
          </Link>
        </div>
      </section>
    </>
  );
}
