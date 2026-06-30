import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "We learn your business",
    description:
      "We hop on a quick call to understand how you work, what your customers ask, and where you're losing time.",
  },
  {
    number: "02",
    title: "We build your agent",
    description:
      "Our team builds and trains your custom AI agent on your business, your tone, and your workflows — ready in days.",
  },
  {
    number: "03",
    title: "You sit back and grow",
    description:
      "Your agent goes live, handling bookings, questions, and marketing around the clock while you focus on customers.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-navy px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Getting your AI agent up and running is simple — three steps,
            zero technical headaches.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="text-5xl font-extrabold text-sky/40">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-white/70">{step.description}</p>
                {i < steps.length - 1 && (
                  <span className="absolute top-1/2 -right-5 hidden -translate-y-1/2 text-2xl text-sky/50 lg:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
