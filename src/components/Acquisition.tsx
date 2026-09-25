import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Define your ideal client",
    description:
      "One strategy call to learn what you sell, who your best clients are, and what a great deal looks like. We turn that into a precise target profile.",
  },
  {
    number: "02",
    title: "Build the list",
    description:
      "We research the businesses and decision-makers that fit — facility managers, office managers, owners, operations leads — and verify their contact info.",
  },
  {
    number: "03",
    title: "Reach out everywhere",
    description:
      "Personalized email, LinkedIn, and phone follow-up, run consistently every week. Written to start real conversations — not to spam inboxes.",
  },
  {
    number: "04",
    title: "You show up and close",
    description:
      "When a prospect is interested, we book them onto your calendar with notes on who they are and what they need. You take the meeting.",
  },
];

export default function Acquisition() {
  return (
    <section id="how-it-works" className="bg-navy px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            You run the business. We&apos;ll fill the pipeline.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Four steps from &ldquo;we need more clients&rdquo; to meetings on
            your calendar — with almost nothing required on your end.
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
