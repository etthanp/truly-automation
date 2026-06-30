import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-royal/90 px-6 pt-20 pb-28 text-white lg:px-8">
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-royal/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky">
            AI agents, built for small business
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your business, working{" "}
            <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">
              while you sleep.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Truly Automation builds custom AI agents that book appointments,
            answer customer questions, and run your marketing — so you can
            focus on running your business, not chasing it.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-navy shadow-lg shadow-black/10 transition hover:scale-105 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
            >
              See a Demo
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-8 text-sm text-white/60">
            No long-term contracts &middot; Built for your business in days, not months
          </p>
        </Reveal>
      </div>
    </section>
  );
}
