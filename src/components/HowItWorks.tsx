import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "We set it up for you",
    description:
      "One quick call so we learn your services, pricing, service area, and hours. You don't touch anything technical — we build and train the whole thing.",
  },
  {
    number: "02",
    title: "We connect it to your number",
    description:
      "Missed calls to your existing business line now trigger an instant text-back. No new hardware, no app, nothing for your customers to install.",
  },
  {
    number: "03",
    title: "You start catching jobs",
    description:
      "Every missed call gets worked automatically, day or night. Booked appointments and customer details land straight in your inbox. Live in days.",
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
            You run the trucks. We&apos;ll catch the calls.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Getting set up takes almost nothing on your end — three steps and
            zero technical headaches.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8">
                <span className="text-5xl font-extrabold text-ember/50">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-white/70">{step.description}</p>
                {i < steps.length - 1 && (
                  <span className="absolute top-1/2 -right-5 hidden -translate-y-1/2 text-2xl text-ember/50 lg:block">
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
