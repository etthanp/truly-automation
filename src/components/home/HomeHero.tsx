import Link from "next/link";
import Reveal from "../Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

// Example activity for the app mockup. Not real client data.
const feed = [
  { time: "9:42 PM", tag: "Riley answered", tone: "royal", text: "After-hours call about a cracked tooth. Asked the right questions and booked the first opening tomorrow.", who: "New patient" },
  { time: "10:15 AM", tag: "Booked", tone: "green", text: "Estimate booked for Thursday at 2:00. Address, details and photos request saved.", who: "Returning customer" },
  { time: "11:03 AM", tag: "Transferred", tone: "royal", text: "Caller asked for the owner about a large commercial job. Sent straight to your phone.", who: "Commercial lead" },
  { time: "1:30 PM", tag: "Callback for you", tone: "ember", text: "Question about a billing change. Notes saved and added to your follow-ups.", who: "Current customer" },
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
            <p className="font-sans text-sm font-semibold text-navy/60">Truly Front Desk, by Truly Automation</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-[3.4rem] leading-[0.95] text-navy sm:text-6xl lg:text-[3.3rem] xl:text-[4.3rem]">
              <span className="block lg:whitespace-nowrap">Every call answered.</span>
              <span className="block text-royal lg:whitespace-nowrap">Every job booked.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">
              Truly Front Desk is the AI front desk we built and run for your business. Riley, your AI
              receptionist, answers every call 24/7 in your business&apos;s name, books appointments on your
              calendar and gets you when a call needs a person. Every call, customer and follow-up lands in
              your own dashboard and app.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Call Riley now: {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                Book a demo <span aria-hidden>→</span>
              </Link>
            </div>
            <p className="mt-5 text-sm text-navy/55">Call Riley to hear exactly what your callers would hear.</p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-[2.5rem] border-[10px] border-navy bg-[#f6f5f1] p-4 shadow-2xl shadow-navy/20">
              <div className="flex items-center justify-between px-1 pt-1 pb-3">
                <div className="leading-none">
                  <p className="text-xl font-extrabold tracking-tight text-navy">
                    truly<span className="text-ember">.</span>
                  </p>
                  <p className="mt-1 text-[0.6rem] font-semibold tracking-[0.2em] text-navy/60">FRONT DESK</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Riley is live
                </span>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-navy">Today</p>
                <ul className="mt-1 divide-y divide-navy/10">
                  {feed.map((f) => (
                    <li key={f.time} className="py-3">
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
              <div className="mt-3 grid grid-cols-4 text-center text-[0.65rem] font-semibold text-navy/50">
                <span className="text-royal">Today</span>
                <span>Calls</span>
                <span>Calendar</span>
                <span>To do</span>
              </div>
            </div>
            <p className="mt-4 text-center font-[family-name:var(--font-caveat)] text-2xl text-navy/60">
              what clients see in their app (example day)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
