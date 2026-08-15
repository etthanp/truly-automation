import Reveal from "./Reveal";

const stats = [
  { value: "62%", label: "of calls to small contractors go unanswered" },
  { value: "100×", label: "more likely to win the job if you reply in 5 min" },
  { value: "$45k+", label: "a year the average contractor loses to missed calls" },
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
            Built for HVAC contractors
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Never lose another job to a{" "}
            <span className="bg-gradient-to-r from-ember to-sky bg-clip-text text-transparent">
              missed call.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            When your techs are on a job, calls go to voicemail — and most
            callers never leave one. They just call the next company. Truly
            Automation gives you an <strong className="font-semibold text-white">automatic
            receptionist you don&apos;t have to touch</strong> — it instantly texts
            back every missed call, answers questions, and books the job, 24/7,
            nights and weekends included.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="w-full rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-105 sm:w-auto"
            >
              See the live demo
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/15 sm:w-auto"
            >
              Get started
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-8 text-sm text-white/60">
            Works with your existing number &middot; Live in days, not months
            &middot; No long-term contract
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm"
              >
                <p className="text-3xl font-extrabold text-sky">{s.value}</p>
                <p className="mt-1.5 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
