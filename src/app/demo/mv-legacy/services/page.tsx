import MVLegacyChat from "@/components/MVLegacyChat";
import { IMG, PHONE, TEL } from "../data";

const services = [
  {
    title: "Residential Concrete",
    img: `${IMG}/crew-pour.webp`,
    items: ["Driveways", "Sidewalks & patios", "Foundations", "Repair of cracked or worn concrete"],
  },
  {
    title: "Commercial & Government",
    img: `${IMG}/slab-site.webp`,
    items: ["Commercial slabs", "Structural concrete", "Shop & warehouse floors", "Public works & infrastructure"],
  },
  {
    title: "Masonry, Demo & Excavation",
    img: `${IMG}/masonry.webp`,
    items: ["Brick & block work", "Demolition & tear-out", "Excavation & grading", "Site prep before the pour"],
  },
];

const work = [
  { src: `${IMG}/slab-pour.webp`, cap: "Slab finishing" },
  { src: `${IMG}/roller.webp`, cap: "Site prep & compaction" },
  { src: `${IMG}/driveway-prep.webp`, cap: "Driveway prep" },
  { src: `${IMG}/sidewalk-prep.webp`, cap: "Sidewalk prep" },
];

export default function MVLegacyServices() {
  return (
    <>
      <section className="px-4 pt-12 pb-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#c8191f]">What we do</p>
          <h1 className="mt-2 font-display text-4xl uppercase sm:text-5xl">Services &amp; recent jobs</h1>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <img src={s.img} alt={s.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h2 className="text-lg font-extrabold">{s.title}</h2>
                  <ul className="mt-2 space-y-1 text-[15px] text-black/70">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#c8191f]">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Their own before/after from the same shop floor */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              { src: `${IMG}/floor-before.webp`, cap: "Before: broken commercial floor" },
              { src: `${IMG}/floor-after.webp`, cap: "After: new slab poured" },
            ].map((w) => (
              <figure key={w.src} className="relative overflow-hidden rounded-xl">
                <img src={w.src} alt={w.cap} className="h-56 w-full object-cover sm:h-72" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-8 pb-2 text-[13px] font-semibold text-white">
                  {w.cap}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {work.map((w) => (
              <figure key={w.src} className="relative overflow-hidden rounded-xl">
                <img src={w.src} alt={w.cap} className="h-40 w-full object-cover sm:h-52" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-8 pb-2 text-[13px] font-semibold text-white">
                  {w.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Chat, already open */}
      <section className="bg-[#141414] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Get your free estimate</h2>
            <p className="mt-3 max-w-lg text-white/80">
              Ask Nina anything, any time. Or call Carlos at{" "}
              <a href={TEL} className="font-bold text-[#ff5a52] hover:underline">{PHONE}</a>.
            </p>
            <p className="mt-5 text-sm text-white/60">
              Serving Goldsboro, Dudley and Eastern North Carolina. Free written estimates, a contract
              before we start, and we take cash, checks and credit cards.
            </p>
          </div>
          <MVLegacyChat />
        </div>
      </section>
    </>
  );
}
