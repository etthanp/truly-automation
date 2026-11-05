import Link from "next/link";
import Reveal from "../Reveal";
import { SALARY } from "@/lib/frontdesk";

const hire = [
  `About ${SALARY} a year in pay and payroll taxes`,
  "40 hours a week, then the phone goes to voicemail",
  "One call at a time while the others ring",
  "Sick days, vacations, and starting over when they quit",
  "Notes on sticky pads, if they get written down at all",
];

const ai = [
  "A fraction of that cost",
  "Answers day, night, weekends and holidays",
  "Picks up right away, no hold music",
  "Never calls in sick, never needs to be retrained",
  "Every call, booking and note saved in your dashboard",
];

/** The front desk hire vs. AI front desk comparison. */
export function SalaryCompare() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">Do the math</span>
          <h2 className="mt-4 max-w-3xl text-4xl text-navy sm:text-5xl">
            {`A front desk hire costs about ${SALARY} a year. Yours doesn't have to.`}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border-t-2 border-navy/20 pt-6">
              <p className="font-[family-name:var(--font-anton)] text-2xl text-navy/50">A full-time receptionist</p>
              <ul className="mt-5 space-y-3">
                {hire.map((h) => (
                  <li key={h} className="flex gap-3 text-navy/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/30" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full border-t-2 border-royal pt-6">
              <p className="font-[family-name:var(--font-anton)] text-2xl text-royal">Your Truly AI Front Desk</p>
              <ul className="mt-5 space-y-3">
                {ai.map((h) => (
                  <li key={h} className="flex gap-3 font-medium text-navy">
                    <span className="mt-0.5 text-royal">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <p className="mt-8 text-xs text-navy/45">
          Based on typical U.S. pay for a full-time receptionist plus employer payroll taxes. Your area may be higher or lower.
        </p>
      </div>
    </section>
  );
}

const handles = [
  {
    big: "Answers every call.",
    text: "Your AI receptionist picks up in your business's name, day or night, and talks to callers like a calm, friendly person at your front desk.",
  },
  {
    big: "Books it on your calendar.",
    text: "It checks your real open times and books the appointment, estimate or visit, then shows it on your calendar so nobody double books.",
  },
  {
    big: "Takes the notes for you.",
    text: "Every caller's name, number, what they need and when, saved to their customer record with a short summary of the call.",
  },
  {
    big: "Knows when to get you.",
    text: "Upset customers, big jobs and anything it isn't sure about go straight to you, or land in your dashboard as a callback with the full notes.",
  },
  {
    big: "Shows you everything.",
    text: "Your own front desk dashboard: every call, appointment, customer and job in one place, on your phone or computer.",
  },
];

/** What the AI front desk does, as editorial rows. */
export function Handles({ title = "What your AI front desk does all day." }: { title?: string }) {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-3xl text-navy sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-7 border-t border-navy/15">
          {handles.map((r, i) => (
            <Reveal key={r.big} delay={i * 70}>
              <div className="grid gap-1.5 border-b border-navy/15 py-4 md:grid-cols-[0.8fr_1.2fr] md:items-baseline md:gap-10">
                <p className="font-[family-name:var(--font-anton)] text-xl leading-tight text-navy sm:text-2xl">{r.big}</p>
                <p className="text-[0.95rem] text-navy/70">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { when: "First call", title: "We learn your business", text: "Your services, prices, hours, service area, the questions customers ask, and what you want done with each kind of call." },
  { when: "Setup", title: "We build your front desk", text: "Truly Automation builds your AI receptionist, your calendar booking and your dashboard around how you actually work." },
  { when: "Before launch", title: "We test it with you", text: "We make test calls together until it answers the way you would. Nothing goes live until you're happy with it." },
  { when: "Every day after", title: "We keep running it", text: "We watch the calls, fix anything it got wrong, and update it when your prices, hours or services change." },
];

/** How a business gets set up. */
export function Steps() {
  return (
    <section id="how" className="scroll-mt-24 bg-navy px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl">We build it, test it and run it for you.</h2>
        </Reveal>
        <div className="mt-10 border-t border-white/15">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="grid gap-2 border-b border-white/15 py-5 md:grid-cols-[10rem_0.8fr_1.2fr] md:items-baseline md:gap-8">
                <p className="font-[family-name:var(--font-caveat)] text-2xl text-sky">{s.when}</p>
                <p className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl">{s.title}</p>
                <p className="text-[0.95rem] text-white/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Closing call to action. */
export function FrontDeskCta({ business }: { business?: string }) {
  const href = business ? `/contact?business=${encodeURIComponent(business)}` : "/contact";
  return (
    <section className="px-6 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-5xl text-navy sm:text-6xl">Stop missing calls.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-navy/70">
          Get a free front desk checkup. We&apos;ll look at how your calls get answered today, what it&apos;s
          costing you, and show you exactly what your AI front desk would handle.
        </p>
        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
          >
            Get my free front desk checkup <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
