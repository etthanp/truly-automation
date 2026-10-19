import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import CasitaDemo from "@/components/CasitaDemo";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/contact";

// Private prospect demo: shared by link on the Maricopa Casitas call, never indexed.
export const metadata: Metadata = {
  title: "AI assistant demo for Maricopa Casitas | Truly Automation",
  robots: { index: false, follow: false },
};

const jobs = [
  {
    t: "Answers 24/7",
    d: "Homeowners research casitas at night and on weekends. Ava answers questions about the new casita laws, sizes, HOAs and your process the moment they ask.",
  },
  {
    t: "Books free site evaluations",
    d: "Every chat moves toward your free site evaluation. Ava offers real times from your calendar and confirms the booking.",
  },
  {
    t: "Texts back missed calls",
    d: "When nobody can pick up 602-921-7071, the caller gets a text in seconds instead of calling the next builder.",
  },
  {
    t: "Hands your team a ready lead",
    d: "Area, home size, casita type, HOA, timeline and anything to check on site, sent to your phone and inbox. No more “who was that?” voicemails.",
  },
];

export default function MaricopaCasitasDemo() {
  return (
    <>
      {/* Plain header: the site-wide Navbar's concrete tagline doesn't fit an ADU builder. */}
      <header className="border-b border-navy/10 bg-white/90 px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Truly Automation" className="h-10 w-auto" />
          </Link>
          <a href={PHONE_HREF} className="text-sm font-semibold text-navy hover:text-royal">
            Call Ethan {PHONE_DISPLAY}
          </a>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-b from-navy to-royal/90 px-6 pt-16 pb-24 text-white lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-sky">
              Private demo · not connected to your real phone or calendar
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-sky">
              Prepared for Maricopa Casitas
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Meet Ava, your casita assistant
            </h1>
            <p className="mt-3 text-white/70">
              Prepared October 13, 2026 by Ethan, Truly Automation
            </p>
            <p className="mt-8 max-w-3xl text-lg text-white/90">
              Ava was trained only on your website and your new blog posts about
              HB 2720 and HB 2928. Ask her what a homeowner would ask, and watch
              the lead card fill in with what your team would get.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-8">
          <div className="mx-auto -mt-12 max-w-5xl">
            <CasitaDemo />
          </div>
        </section>

        <section className="px-6 pt-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-wide text-ember">
              What Ava does for you
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              More booked site evaluations, without more phone time
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {jobs.map((j) => (
                <div key={j.t} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-navy">{j.t}</h3>
                  <p className="mt-1 text-sm text-navy/70">{j.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl border border-navy/10 bg-white p-5 text-sm text-navy/70 shadow-sm">
              <span className="font-semibold text-navy">Before it goes live,</span>{" "}
              we review every answer with you: pricing language, timelines, what Ava
              should never promise, and when she should hand a homeowner straight to
              Jim, Donda or Steve.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-navy px-8 py-10 text-white">
            <h2 className="text-2xl font-extrabold">Questions about the demo?</h2>
            <p className="mt-2 text-white/70">
              Call Ethan at{" "}
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
