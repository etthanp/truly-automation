import Reveal from "./Reveal";

const pillars = [
  {
    title: "Done-for-you prospecting",
    text: "We build the list, write the messages, and handle every follow-up.",
  },
  {
    title: "Only qualified meetings",
    text: "Decision-makers who fit your criteria — not tire-kickers.",
  },
  {
    title: "No lead goes cold",
    text: "Our AI replies to every inquiry and missed call in seconds, 24/7.",
  },
];

export default function AgencyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy to-royal/90 px-6 pt-20 pb-24 text-white lg:px-8">
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-ember/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky">
            <span className="h-2 w-2 rounded-full bg-ember" />
            Client acquisition for B2B service companies
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            We fill your calendar with{" "}
            <span className="bg-gradient-to-r from-ember to-sky bg-clip-text text-transparent">
              qualified sales meetings.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            You&apos;re great at the work — finding new clients is the part that
            never gets done. Truly Automation finds your ideal buyers, reaches
            out for you by{" "}
            <strong className="font-semibold text-white">
              email, LinkedIn and phone
            </strong>
            , and books interested decision-makers straight onto your calendar.
            Then our AI makes sure no lead ever goes cold.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105 sm:w-auto"
            >
              Book a strategy call
            </a>
            <a
              href="#how-it-works"
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
            >
              How it works
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-8 text-sm text-white/60">
            Pay-per-meeting pilot &middot; No long-term contract &middot; You
            only talk to people who want to talk
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-sky">{p.title}</p>
                <p className="mt-1.5 text-sm text-white/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
