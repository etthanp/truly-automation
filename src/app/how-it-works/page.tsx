import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How It Works | Truly Automation",
  description:
    "How Truly Automation fills your schedule: a free checkup, a two-week setup, and marketing built for your industry that runs every month.",
};

const steps = [
  {
    title: "Free checkup",
    text: "We look at your Google ranking, website, reviews and calls, and tell you if your city is still open.",
  },
  {
    title: "Pick your plan",
    text: "A 15-minute call to go over the report and pick the package that fits. No pressure.",
  },
  {
    title: "We build it",
    text: "Your website, instant quote tool, Google profile and missed-call text-back, live in about two weeks.",
  },
  {
    title: "We run it monthly",
    text: "Job pages, reviews, quote follow-up, and a simple report of what it brought in.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="How it works"
          title="Four steps to a full schedule"
          intro="You stay on the job site. We handle the rest."
        />

        <section className="px-6 py-12 lg:px-8">
          <ol className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 100} className="h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <span className="font-[family-name:var(--font-anton)] text-5xl text-ember/60">0{i + 1}</span>
                  <h2 className="mt-3 font-sans text-xl font-bold text-navy">{s.title}</h2>
                  <p className="mt-2 text-navy/70">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-ember/40 bg-white p-7 sm:flex sm:items-center sm:gap-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-2xl" aria-hidden>
                🔒
              </span>
              <div className="mt-4 sm:mt-0">
                <p className="text-lg font-bold text-navy">One company per industry per city</p>
                <p className="mt-1 text-navy/70">
                  Once you sign up, we won&apos;t work with your competitors in your town.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
