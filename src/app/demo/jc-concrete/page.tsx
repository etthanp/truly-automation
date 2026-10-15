import type { Metadata } from "next";
import JcChat, { ChatButton } from "@/components/JcChat";

// Private prospect demo for JC Concrete LLC (McMinnville, OR), shared by link at the meeting,
// never indexed. One page with the chat open in the hero. Photos and logo are from
// jcconcretellcor.com; the rating is from their Google profile.
export const metadata: Metadata = {
  title: "JC Concrete LLC | McMinnville, OR | Demo by Truly Automation",
  robots: { index: false, follow: false },
};

const IMG = "/demo/jc";
const PHONE = "(503) 857-7622";
const TEL = "tel:+15038577622";

const services = [
  { t: "Driveways", d: "New, extended, upgraded or repaired.", img: "driveways.webp" },
  { t: "Patios", d: "Colors, patterns and finishes to match your home.", img: "patios.webp" },
  { t: "Decorative", d: "Colored, patterned and textured concrete.", img: "decorative.webp" },
  { t: "Shop floors", d: "Built for heavy equipment and traffic.", img: "shop.webp" },
  { t: "Pole barns", d: "Slabs for barns and outbuildings.", img: "polebarns.webp" },
  { t: "Sidewalks & steps", d: "Plus curbs, ramps and roadways.", img: "sideways.webp" },
];

const areas = ["McMinnville", "Salem", "Keizer", "Dallas", "Albany", "Corvallis", "Lebanon", "Eugene"];

export default function JcConcreteDemo() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f1f4f8] text-[#212121]">
      <div className="bg-black px-4 py-2 text-center text-[12px] text-white/80">
        <span className="font-semibold text-white">Demo for JC Concrete</span> built by Truly
        Automation · not live yet
      </div>

      <header className="sticky top-0 z-30 bg-[#242323]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <img src={`${IMG}/logo.png`} alt="JC Concrete LLC" className="h-9 w-auto sm:h-11" />
          <div className="flex items-center gap-2">
            <a
              href={TEL}
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white sm:inline-flex"
            >
              📞 {PHONE}
            </a>
            <ChatButton
              message="I'd like a free quote"
              className="rounded-full bg-[#156BB7] px-4 py-2 text-sm font-bold whitespace-nowrap text-white transition hover:bg-[#7FBBF0] hover:text-[#242323]"
            >
              Free Quote
            </ChatButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero with the chat already open */}
        <section className="relative isolate overflow-hidden bg-[#242323] text-white">
          <img
            src={`${IMG}/hero-pour.jpg`}
            alt="Crew pouring a new driveway"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#242323] via-[#242323]/85 to-[#242323]/30" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_24rem] lg:py-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7FBBF0] sm:text-sm">
                McMinnville, OR · Residential &amp; Commercial
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl">
                Oregon concrete, poured right
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/85">
                Driveways, patios, shop floors and decorative concrete across the Willamette
                Valley. Locally owned. Free quotes, and you get an answer any time of day.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#156BB7] px-6 py-3.5 font-bold shadow-lg shadow-black/20 transition hover:bg-[#7FBBF0] hover:text-[#242323]"
                >
                  📞 Call {PHONE}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 font-bold transition hover:bg-white/10"
                >
                  What we pour →
                </a>
              </div>
              <ul className="mt-8 space-y-1.5 text-sm text-white/85">
                <li>
                  <span className="text-[#f5c542]">★★★★★</span> 5.0 on Google (14 reviews)
                </li>
                <li>✔ Licensed, bonded &amp; insured · CCB #241885</li>
                <li>📍 Locally owned &amp; operated in McMinnville</li>
              </ul>
            </div>

            <JcChat />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl uppercase sm:text-5xl">What we pour</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ChatButton
                  key={s.t}
                  message={`I'm interested in ${s.t.toLowerCase()}`}
                  className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
                >
                  <img src={`${IMG}/${s.img}`} alt={s.t} className="h-40 w-full object-cover" />
                  <span className="block p-5">
                    <span className="block text-xl font-extrabold">{s.t}</span>
                    <span className="mt-1 block text-[15px] text-black/65">{s.d}</span>
                    <span className="mt-3 block text-sm font-bold text-[#156BB7] group-hover:underline">
                      Get a free quote →
                    </span>
                  </span>
                </ChatButton>
              ))}
            </div>
            <p className="mt-8 text-sm text-black/60">
              <span className="font-bold text-black/80">Serving:</span> {areas.join(" · ")} and
              nearby communities.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#242323] px-4 pt-10 pb-24 text-sm text-white/70 sm:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-6">
          <div>
            <img src={`${IMG}/logo.png`} alt="JC Concrete LLC" className="h-10 w-auto" />
            <p className="mt-3">728 SW Magnolia Ct, McMinnville, OR 97128</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-white">{PHONE}</a> · info@jcconcretellcor.com ·
              CCB #241885
            </p>
          </div>
          <p className="text-xs text-white/40">
            © 2026 JC Concrete LLC
            <br />
            Demo website by Truly Automation
          </p>
        </div>
      </footer>
    </div>
  );
}
