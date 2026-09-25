import Reveal from "./Reveal";

const problems = [
  {
    title: "Invisible on Google Maps",
    text: "When someone searches “plumber near me,” most call one of the first few companies Google shows. If that isn’t you, you never even hear about the job.",
  },
  {
    title: "A website that hurts you",
    text: "No website, or one that’s slow and broken on a phone, tells customers you might not be around next year. They move on to the next result.",
  },
  {
    title: "Not enough reviews",
    text: "Customers compare stars before they call. The company with 180 reviews beats the one with 12, even when your work is better.",
  },
  {
    title: "Calls you can’t answer",
    text: "Up to 62% of calls to small home-services businesses go unanswered because the crew is on a job. Most of those callers just call someone else.",
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
            Good work isn&apos;t enough if customers can&apos;t find you.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Most trade businesses grow on word of mouth, and lose jobs every
            week to competitors who simply show up first online.
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
              <span className="text-royal">You need someone to handle it.</span>
            </p>
            <p className="mt-2 text-navy/70">
              That&apos;s us. You run the jobs; we make sure the phone keeps
              ringing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
