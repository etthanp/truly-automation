import Link from "next/link";
import Reveal from "../Reveal";

// Example activity for the hero panel. Not real client data.
const feed = [
  { time: "9:42 PM", tag: "AI answered", tone: "royal", text: "After-hours call about storm damage. Asked the right questions and booked an inspection for Thursday.", who: "Roofing, Concord" },
  { time: "10:15 AM", tag: "Booked", tone: "green", text: "Family of four looking for a new dentist. Checked insurance and booked the first visit.", who: "Dental, Huntersville" },
  { time: "11:03 AM", tag: "Follow-up sent", tone: "ember", text: "Day 3 check-in on a driveway quote. Customer replied and wants to set a start date.", who: "Concrete, Gastonia" },
  { time: "1:30 PM", tag: "Callback for you", tone: "ember", text: "Caller asked for the owner about a big commercial job. Notes saved, callback set for 2:00.", who: "HVAC, Matthews" },
];

const toneClass: Record<string, string> = {
  royal: "bg-royal/10 text-royal",
  ember: "bg-ember/10 text-ember",
  green: "bg-emerald-500/10 text-emerald-700",
};

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Reveal>
            <p className="font-sans text-sm font-semibold text-navy/60">
              Truly Automation, AI systems for local businesses
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-[3.4rem] leading-[0.95] text-navy sm:text-6xl lg:text-[3.3rem] xl:text-[4.3rem]">
              <span className="block lg:whitespace-nowrap">Real AI systems.</span>
              <span className="block text-royal lg:whitespace-nowrap">Built by us.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">
              {`We build automations that do the work you'd otherwise hire someone for, often a
              $40,000 a year job: an AI receptionist that answers every call and books the
              appointment, follow-ups that go out on their own, and one dashboard where you see
              every call, customer and job. We build it, test it with you, and keep it running.`}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Get a free automation checkup <span aria-hidden>→</span>
              </Link>
              <a
                href="#industries"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                Find your business <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                <p className="font-bold text-navy">Today, handled by your AI</p>
                <span className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
              <ul className="divide-y divide-navy/10">
                {feed.map((f) => (
                  <li key={f.time} className="py-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${toneClass[f.tone]}`}>{f.tag}</span>
                      <span className="text-xs text-navy/45">{f.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-navy">{f.text}</p>
                    <p className="mt-1 text-xs text-navy/50">{f.who}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-center font-[family-name:var(--font-caveat)] text-2xl text-navy/60 lg:absolute lg:-bottom-12 lg:right-2 lg:mt-0 lg:-rotate-3">
              what your AI did today ↑ (example)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
