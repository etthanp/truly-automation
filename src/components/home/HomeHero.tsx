import Link from "next/link";
import Reveal from "../Reveal";
import { SALARY } from "@/lib/frontdesk";

// Example call for the hero panel. Not a real customer.
const call = [
  { who: "ai", text: "Thanks for calling Summit Comfort Heating & Air, this is Ava. How can I help?" },
  { who: "caller", text: "Hi, our AC stopped blowing cold air this afternoon." },
  { who: "ai", text: "I'm sorry, that's no fun in this heat. I can get a tech out tomorrow at 9 or 11. Which works better?" },
  { who: "caller", text: "9 is perfect." },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <p className="font-sans text-sm font-semibold text-navy/60">
              Truly Automation AI Front Desk
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 text-[3.2rem] leading-[0.95] text-navy sm:text-6xl xl:text-[4.3rem]">
              <span className="block">Your front desk,</span>
              <span className="block text-royal">without the {SALARY} salary.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-lg text-navy/75">
              We build AI front desks for local businesses. Yours answers every call 24/7, books
              appointments on your calendar, and saves every customer, call and job in your own
              dashboard. Built and run by Truly Automation, so you never have to touch the tech.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
              >
                Get a free front desk checkup <span aria-hidden>→</span>
              </Link>
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal sm:justify-start"
              >
                See the dashboard <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                <div>
                  <p className="font-bold text-navy">Incoming call, 6:48 PM</p>
                  <p className="text-xs text-navy/50">After hours, answered by your AI</p>
                </div>
                <span className="rounded-full bg-royal/10 px-2.5 py-1 text-xs font-semibold text-royal">On the call</span>
              </div>
              <ul className="space-y-3 pt-4">
                {call.map((m, i) => (
                  <li key={i} className={m.who === "ai" ? "pr-8" : "pl-8 text-right"}>
                    <p
                      className={`inline-block rounded-2xl px-4 py-2.5 text-left text-sm ${
                        m.who === "ai" ? "rounded-tl-sm bg-navy text-white" : "rounded-tr-sm bg-background text-navy"
                      }`}
                    >
                      {m.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/5 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Booked</p>
                <p className="mt-1 text-sm font-semibold text-navy">AC repair, tomorrow 9:00 AM</p>
                <p className="text-xs text-navy/60">Added to your calendar and the customer&apos;s record</p>
              </div>
            </div>
            <p className="mt-4 text-center font-[family-name:var(--font-caveat)] text-2xl text-navy/60 lg:absolute lg:-bottom-12 lg:right-2 lg:mt-0 lg:-rotate-3">
              while you were at dinner ↑ (example)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
