import Reveal from "./Reveal";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free marketing checkup",
    description:
      "We look at where you show up on Google Maps, your website on a phone, your reviews next to your competitors, and how your calls get answered. You get a one-page report.",
  },
  {
    number: "02",
    title: "Pick your plan",
    description:
      "A 15-minute call to walk through the report and choose the package that fits. No pressure. The report is yours either way.",
  },
  {
    number: "03",
    title: "We build everything",
    description:
      "Website, Google listing, review requests, AI receptionist, social pages, ads. Most clients are fully live in about two weeks. You don't touch anything technical.",
  },
  {
    number: "04",
    title: "We run it every month",
    description:
      "Posts go out, reviews come in, ads get tuned, and every missed call gets answered. Each month you get a simple report of what it brought in.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            You run the jobs. We&apos;ll keep the phone ringing.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Four steps from &ldquo;we should do something about
            marketing&rdquo; to a system that runs without you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <span className="text-5xl font-extrabold text-ember/50">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-white/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center">
            <Link
              href="/checkup/example-plumbing"
              className="text-sm font-semibold text-sky underline underline-offset-4 hover:text-white"
            >
              See a sample marketing checkup →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
