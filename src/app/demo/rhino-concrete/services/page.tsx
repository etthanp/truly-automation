import RhinoChat from "@/components/RhinoChat";
import { IMG, PHONE, TEL } from "../data";

const services = [
  {
    title: "Driveways",
    img: `${IMG}/driveway.webp`,
    items: ["New driveways", "Driveway replacement", "Driveway extensions", "Tear-out & haul away"],
  },
  {
    title: "Patios & Stamped",
    img: `${IMG}/patio.webp`,
    items: ["Backyard patios", "Curved or squared off", "Stamped stone, slate or brick", "Stamped pool decks"],
  },
  {
    title: "Repair & Walkways",
    img: `${IMG}/walkways.webp`,
    items: ["Partial replacement", "Concrete steps", "Sidewalks & walkways", "Plain or stamped"],
  },
];

const work = [
  { src: `${IMG}/img_0492.webp`, cap: "Stamped patio" },
  { src: `${IMG}/img_0491.webp`, cap: "Backyard patio & walkway" },
  { src: `${IMG}/concrete-repair.webp`, cap: "Partial replacement" },
  { src: `${IMG}/img_0490.webp`, cap: "Residential patio" },
];

export default function RhinoServices() {
  return (
    <>
      <section className="px-4 pt-12 pb-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#2a5fa5]">What we do</p>
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
                        <span className="text-[#2a5fa5]">✓</span>
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
      <section className="bg-[#0a0e13] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_24rem]">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">Get your free quote</h2>
            <p className="mt-3 max-w-lg text-white/80">
              Ask Riley anything, any time. Or call us at{" "}
              <a href={TEL} className="font-bold text-[#6ab0ff] hover:underline">{PHONE}</a>.
            </p>
            <p className="mt-5 text-sm text-white/60">
              Serving Charlotte, Huntersville, Concord, Mint Hill, Matthews, Mooresville and the
              surrounding metro. Projects start at $3,500.
            </p>
          </div>
          <RhinoChat />
        </div>
      </section>
    </>
  );
}
