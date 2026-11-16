import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import OrderDeskDemo from "@/components/OrderDeskDemo";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/contact";

// Private prospect demo for Infused Wellness (mobile wellness medicine, South Florida), shared
// by link after Max's call with the owner. Never indexed. All patients and pharmacies are made up.
export const metadata: Metadata = {
  title: "Order desk demo for Infused Wellness | Truly Automation",
  robots: { index: false, follow: false },
};

// One refill, the way it usually goes vs. with the order desk. Times are rough guesses until we
// time his team's real orders, and the page says so.
const today: [string, string][] = [
  ["Log into the right pharmacy's portal", "2 min"],
  ["Retype the patient, product, directions and shipping", "4 min"],
  ["Text the prescriber and wait for them to get to a computer", "hours"],
  ["Prescriber logs in, finds the order, signs", "3 min"],
  ["Check back on it and answer “where's my order?”", "5 min"],
];

const withDesk: [string, string][] = [
  ["Type one line, or the refill preps itself", "20 sec"],
  ["Prescriber signs from their phone", "20 sec"],
  ["Patient gets the tracking text", "auto"],
];

const needs = [
  "Which pharmacies you order from, and their portals",
  "Your medications and protocols: labs, exam windows, refill timing",
  "Your prescribers and how they sign today",
  "Where your patient charts live",
];

export default function InfusedWellnessDemo() {
  return (
    <>
      <header className="border-b border-navy/10 bg-white/90 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Truly Automation" className="h-10 w-auto" />
          </Link>
          <a href={PHONE_HREF} className="text-sm font-semibold text-navy hover:text-royal">
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-navy px-4 pt-12 pb-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold tracking-wide text-sky uppercase">Built for Infused Wellness</p>
            <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl">
              Your team preps the order. Your prescriber signs in 20 seconds.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              A private order desk for your controlled and compounded medications. Type an order the way
              you&apos;d text it, and watch it get checked, filled into the pharmacy portal and sent to
              your prescriber&apos;s phone.
            </p>
            <p className="mt-6 inline-block rounded-lg bg-white/10 px-3 py-2 text-[13px] text-white/70">
              Demo only. Every patient, pharmacy and number on this page is made up.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto -mt-14 max-w-6xl">
            <OrderDeskDemo />
          </div>
        </section>

        {/* One refill, before and after */}
        <section className="px-4 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-1">
              <h2 className="text-5xl text-navy sm:text-6xl">One refill, start to finish.</h2>
              <p className="-rotate-2 pb-1 font-hand text-2xl text-ember">rough times, we&apos;ll clock yours</p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-navy/45 uppercase">The way it goes now</p>
                <ol className="mt-4 border-t-2 border-navy/15">
                  {today.map(([step, time]) => (
                    <li key={step} className="flex items-baseline gap-3 border-b border-navy/10 py-3.5 text-navy/55">
                      <span className="flex-1">{step}</span>
                      <span className="shrink-0 font-mono text-sm">{time}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 font-mono text-sm text-navy/45">Per order, every order, in every portal you use.</p>
              </div>

              <div className="relative">
                <p className="text-xs font-bold tracking-[0.2em] text-royal uppercase">With the order desk</p>
                <ol className="mt-4 border-t-2 border-royal">
                  {withDesk.map(([step, time]) => (
                    <li key={step} className="flex items-baseline gap-3 border-b border-navy/10 py-3.5 text-lg font-semibold text-navy">
                      <span className="flex-1">{step}</span>
                      <span className="shrink-0 font-mono text-sm font-normal text-royal">{time}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-md rotate-1 font-hand text-[26px] leading-tight text-navy">
                  The signature never moves. Only your prescriber can sign a controlled prescription, with their
                  own two-factor code. Not us, not the AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What the real build needs */}
        <section className="px-4 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 border-t border-navy/15 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl text-navy">To build your real one</h2>
            <div>
              <ul className="space-y-2.5 text-navy/75">
                {needs.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-ember" />
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-navy/55">
                Patient data only runs through HIPAA-covered services we have signed agreements with.
                Controlled prescriptions are signed through a DEA-certified e-prescribing service or your
                pharmacy&apos;s own portal.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-6xl text-lg text-navy/70">
            Questions? Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-navy underline decoration-ember underline-offset-4">
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="font-semibold text-navy underline decoration-ember underline-offset-4">
              {EMAIL}
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
