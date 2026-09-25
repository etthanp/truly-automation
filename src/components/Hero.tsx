import Reveal from "./Reveal";

const pillars = [
  {
    title: "Get found",
    text: "A real website, a strong Google listing, and reviews that make you the obvious pick.",
  },
  {
    title: "Get calls",
    text: "Social media and ads that put your name in front of people who need you now.",
  },
  {
    title: "Never miss a job",
    text: "An AI receptionist that answers every missed call in seconds, 24/7.",
  },
];

export default function Hero() {
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
            Marketing for home &amp; outdoor service companies
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your marketing team,{" "}
            <span className="bg-gradient-to-r from-ember to-sky bg-clip-text text-transparent">
              without the payroll.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            You&apos;re great at the work. We handle everything that brings the
            work in: your{" "}
            <strong className="font-semibold text-white">
              website, Google listing, reviews, social media, ads
            </strong>
            , and an AI receptionist that answers every call you miss. One
            monthly plan, one point of contact, zero tech headaches.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105 sm:w-auto"
            >
              Get a free marketing checkup
            </a>
            <a
              href="#packages"
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
            >
              See packages
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-8 text-sm text-white/60">
            HVAC &middot; Plumbing &middot; Electrical &middot; Roofing &middot;
            Concrete &middot; Landscaping &middot; and more
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
