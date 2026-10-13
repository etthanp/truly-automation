import Reveal from "./Reveal";

const work = [
  "Driveways",
  "Patios",
  "Stamped & decorative",
  "Exposed aggregate",
  "Sidewalks & walkways",
  "Garage & shop slabs",
  "Foundations & footings",
  "Pole barn & ag slabs",
  "Pool decks",
  "Steps & porches",
  "Commercial flatwork",
  "Curb & gutter",
  "Retaining walls",
  "Repair & resurfacing",
  "Sealing & coatings",
  "Polished & epoxy floors",
];

export default function Trades() {
  return (
    <section id="trades" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Who we help
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Built for every kind of concrete company
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">
            Residential flatwork, decorative, foundations or commercial. We
            market the jobs you want more of, in the towns you want to work.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {work.map((t) => (
              <li
                key={t}
                className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={250}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-2 border-ember/40 bg-white p-7 text-left shadow-sm sm:flex sm:items-center sm:gap-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-2xl" aria-hidden>
              🔒
            </span>
            <div className="mt-4 sm:mt-0">
              <p className="text-lg font-bold text-navy">Territory Lock: one concrete company per city</p>
              <p className="mt-1 text-navy/70">
                Once you sign up, we won&apos;t work with your competitors in your
                town. Check if your city is still open with a free checkup.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
