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

const points = [
  {
    t: "Your staff stop retyping orders",
    d: "One line in, a complete order out, routed to the right pharmacy for that medication. No more logging into three portals and filling the same fields.",
  },
  {
    t: "Problems get caught before a signature",
    d: "Old labs, a missed exam, an early refill or an allergy gets flagged first. A blocked order never reaches your prescriber.",
  },
  {
    t: "Your prescribers sign in seconds",
    d: "They review and sign from their phone with their own two-factor code. They never have to hunt through portals or wait at a desk.",
  },
  {
    t: "You see everything",
    d: "Every order, who it's waiting on and where it is, from your phone. Patients get a text when it ships.",
  },
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

        <section className="px-4 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-4xl text-navy">What changes for you</h2>
              <p className="mt-4 text-navy/70">
                The AI does the busywork. The legal part stays with your prescribers: only they can sign a
                controlled-substance prescription, with their own two-factor code, exactly as DEA rules
                require. Nobody, including us, signs for them.
              </p>
            </div>
            <div className="divide-y divide-navy/10 border-y border-navy/10">
              {points.map((p) => (
                <div key={p.t} className="py-5">
                  <h3 className="font-bold text-navy">{p.t}</h3>
                  <p className="mt-1 text-sm text-navy/70">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl border border-navy/10 bg-white p-6 text-sm text-navy/70 shadow-sm">
            <p className="font-semibold text-navy">To build the real one, we&apos;d set it up around how you work:</p>
            <p className="mt-2">
              your pharmacies and their portals, your medications and protocols (labs, exam windows, refill
              timing), your prescribers and how they sign today, and where your patient charts live. Patient
              data stays on HIPAA-covered services with signed agreements.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl bg-navy px-6 py-10 text-white sm:px-8">
            <h2 className="text-3xl">Questions about the demo?</h2>
            <p className="mt-3 text-white/70">
              Call{" "}
              <a href={PHONE_HREF} className="font-semibold text-sky hover:underline">
                {PHONE_DISPLAY}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${EMAIL}`} className="font-semibold text-sky hover:underline">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
