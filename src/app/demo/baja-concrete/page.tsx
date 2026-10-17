import Link from "next/link";
import BajaChat from "@/components/BajaChat";
import { BASE, IMG, PHONE, TEL } from "./data";

const services = [
  { t: "Driveways", d: "Remove & replace, widen & expand, or a brand-new driveway." },
  { t: "Patios", d: "New patios, replacements and decorative finishes." },
  { t: "Decorative", d: "Stamped, colored and exposed aggregate concrete." },
];

export default function BajaHome() {
  return (
    <>
      {/* Hero with the chat already open */}
      <section className="relative isolate overflow-hidden bg-[#11191c] text-white">
        <img
          src={`${IMG}/driveway.jpg`}
          alt="New concrete driveway poured by Baja Concrete"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#11191c] via-[#11191c]/85 to-[#11191c]/40" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8922f] sm:text-sm">
              Charlotte &amp; Lake Norman · Concrete Contractor
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl">
              Beautiful concrete. Built to last.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Driveways, patios, decorative concrete and hardscapes for homes and businesses.
              20+ years of experience. Free estimates.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8922f] px-6 py-3.5 font-bold text-[#11191c] shadow-lg shadow-black/20 transition hover:bg-white"
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
              <li>🏅 A+ BBB Accredited Business</li>
              <li>🛠️ 20+ years · Residential &amp; commercial</li>
              <li>📍 Local to Mount Holly, NC</li>
            </ul>
          </div>

          <BajaChat />
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
            {["curved-patio.jpg", "stamped-fan.jpg", "exposed-aggregate-walkway.jpg"].map((f) => (
              <img key={f} src={`${IMG}/${f}`} alt="Recent Baja Concrete job" className="h-32 w-full rounded-xl object-cover sm:h-56" />
            ))}
          </div>
          <Link
            href={`${BASE}/services`}
            className="mt-6 inline-block font-bold text-[#b8741a] hover:underline"
          >
            All services &amp; recent jobs →
          </Link>
        </div>
      </section>
    </>
  );
}
