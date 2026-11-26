import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import LeadTextDemo from "@/components/LeadTextDemo";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/contact";

// Private prospect demo for Chris at East Coast Water Quality (Hampton Roads). He wants the first
// two to five texts with every new lead automated from his own cell, visible in his normal Messages
// app, and to jump in any time. Shared by link, never indexed. Every customer is made up.
export const metadata: Metadata = {
  title: "Lead texting demo for East Coast Water Quality | Truly Automation",
  robots: { index: false, follow: false },
};

// One lead, the way it usually goes vs. with the assistant. Rough guesses until we time his real
// leads, and the page says so.
const today: [string, string][] = [
  ["The lead lands on your phone while you're on a job", "0 min"],
  ["You get to it between installs", "1 to 3 hrs"],
  ["Same first questions you ask every customer", "10 min"],
  ["Angi and Lowe's sent them to other companies too", "lost?"],
];

const withAssistant: [string, string][] = [
  ["They get a text from your cell", "2 sec"],
  ["Your questions get asked, your videos get sent", "auto"],
  ["You step in when they're ready to buy", "your call"],
];

export default function EastCoastDemo() {
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
            <p className="text-sm font-bold tracking-wide text-sky uppercase">Built for East Coast Water Quality</p>
            <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl">
              The first few texts handled. From your own cell.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Every new lead from Angi, Lowe&apos;s, Facebook, Google or your website gets texted from your
              cell in seconds, the way you&apos;d text them. It asks your questions, sends your videos, and
              hands the conversation to you when they&apos;re ready. No app, no portal. It&apos;s all in
              your normal texts, and you can jump in any time.
            </p>
            <p className="mt-6 inline-block rounded-lg bg-white/10 px-3 py-2 text-[13px] text-white/70">
              Demo only. Every customer on this page is made up, and no real texts are sent.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto -mt-14 max-w-6xl">
            <LeadTextDemo />
          </div>
        </section>

        {/* One lead, before and after */}
        <section className="px-4 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-1">
              <h2
                className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl"
                style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif" }}
              >
                One lead, start to finish.
              </h2>
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
              </div>

              <div className="relative">
                <p className="text-xs font-bold tracking-[0.2em] text-royal uppercase">With your assistant</p>
                <ol className="mt-4 border-t-2 border-royal">
                  {withAssistant.map(([step, time]) => (
                    <li key={step} className="flex items-baseline gap-3 border-b border-navy/10 py-3.5 text-lg font-semibold text-navy">
                      <span className="flex-1">{step}</span>
                      <span className="shrink-0 font-mono text-sm font-normal text-royal">{time}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 max-w-md rotate-1 font-hand text-[26px] leading-tight text-navy">
                  Customers are texting your cell, so they know it&apos;s you. The second you text them yourself, it backs off.
                </p>
              </div>
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
