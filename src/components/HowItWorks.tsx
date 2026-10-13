import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Free marketing checkup",
    description:
      "We check where you show up on Google Maps for driveways, patios and slabs, your website on a phone, your reviews next to other concrete companies, and how your calls get answered. You get a one-page report.",
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
      "Website and Pour Price Calculator, Google profile, Photo Quote Line, review requests and Estimate Chaser. Most clients are fully live in about two weeks. You don't touch anything technical.",
  },
  {
    number: "04",
    title: "We run it every month",
    description:
      "Job Site Pages go up, reviews come in, quotes get followed up, and every missed call gets answered. Each month you get a simple report of what it brought in.",
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
            You run the crews. We&apos;ll keep the schedule full.
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

      </div>
    </section>
  );
}
