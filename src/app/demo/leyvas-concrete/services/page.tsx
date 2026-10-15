import LeyvasChat from "@/components/LeyvasChat";
import { IMG, PHONE, TEL } from "../data";

const services = [
  {
    title: "Concrete",
    img: `${IMG}/curved-walkway.jpg`,
    items: ["Driveways & replacements", "Patios, sidewalks & steps", "Stamped & decorative", "Repair & leveling"],
  },
  {
    title: "Hardscape & Masonry",
    img: `${IMG}/brick-patio.jpg`,
    items: ["Paver patios & pool decks", "Flagstone & natural stone", "Seat & retaining walls", "Brick repointing"],
  },
  {
    title: "Landscaping & Lawn",
    img: `${IMG}/mulch-beds.jpg`,
    items: ["Mowing & maintenance", "Mulch, edging & sod", "Spring & fall cleanups", "Snow removal"],
  },
];

const work = [
  { src: `${IMG}/pool-pavers.jpg`, cap: "Paver pool deck" },
  { src: `${IMG}/concrete-steps.jpg`, cap: "Poured concrete steps" },
  { src: `${IMG}/sidewalk.jpg`, cap: "New sidewalk & landing" },
  { src: `${IMG}/snow-removal.jpg`, cap: "Snow removal" },
];

export default function LeyvasServices() {
  return (
    <>
      <section className="px-4 pt-12 pb-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#2f8a3c]">What we do</p>
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
                        <span className="text-[#2f8a3c]">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
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
      <section className="bg-[#10241a] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Get your free estimate</h2>
            <p className="mt-3 max-w-lg text-white/80">
              Ask Sofia anything, any time, in English or Spanish. Or call us at{" "}
              <a href={TEL} className="font-bold text-[#9bd14a] hover:underline">{PHONE}</a>.
            </p>
            <p className="mt-5 text-sm text-white/60">
              Serving New Castle, Wilmington, Newark, Bear, Middletown, Hockessin and about 50
              miles around, including nearby PA and MD. Cash, check &amp; Cash App accepted.
            </p>
          </div>
          <LeyvasChat />
        </div>
      </section>
    </>
  );
}
