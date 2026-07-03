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
            AI automation &amp; websites for small businesses
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Grow your business with{" "}
            <span className="bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">
              smarter tools.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Truly Automation builds professional websites and custom AI agents
            that book appointments, answer customers, and run your marketing —
            so you can focus on your business, not chasing it.
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

        <Reveal delay={500}>
          <div className="mt-12 flex justify-center">
            <svg width="100" height="86" viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="52,0 65,0 98,95 84,95 58.5,18 33,95 19,95" fill="#2563eb"/>
              <polygon points="36,62 44,62 50,78 42,78" fill="#111318"/>
              <rect x="0" y="0" width="68" height="15" rx="2" fill="white"/>
              <rect x="20" y="0" width="17" height="80" rx="2" fill="white"/>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
