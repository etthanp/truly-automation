import Reveal from "./Reveal";

const problems = [
  {
    title: "Tire-kickers eat your day",
    text: "Half the calls are someone wanting a price on a 10x10 pad. You drive out, measure, write the quote, and never hear from them again.",
  },
  {
    title: "Quotes that go quiet",
    text: "You bid a $14,000 driveway and nobody follows up. A month later you drive by and someone else poured it.",
  },
  {
    title: "Feast or famine",
    text: "Slammed all summer, dead when it rains or freezes, with no plan to fill the slow months or line up spring work early.",
  },
  {
    title: "Calls you can't answer",
    text: "You're finishing a slab when the phone rings. It goes to voicemail, and they call the next concrete company on Google.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            The problem
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Good concrete work isn&apos;t enough if the phone doesn&apos;t ring.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Most concrete companies grow on word of mouth and a few builder
            relationships, then hit a wall.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-navy/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl border border-royal/20 bg-gradient-to-r from-royal/5 to-sky/10 p-8 text-center">
            <p className="text-lg font-semibold text-navy sm:text-xl">
              You don&apos;t need to learn marketing.{" "}
              <span className="text-royal">You need a team that knows concrete.</span>
            </p>
            <p className="mt-2 text-navy/70">
              That&apos;s us. You run the crews; we keep the schedule full.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
