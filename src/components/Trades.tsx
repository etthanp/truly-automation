import Reveal from "./Reveal";

const trades = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Concrete",
  "Landscaping & lawn care",
  "Fencing",
  "Pressure washing",
  "Painting",
  "Tree service",
  "Pest control",
  "Garage doors",
  "Restaurants & cafés",
  "Salons & spas",
  "Dental & medical",
  "Law firms",
  "Real estate",
  "Retail shops",
  "Fitness studios",
  "Auto repair",
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
            Started in the trades. Built for any business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/70">
            Contractors and home service companies are where we started, and
            still a big part of who we work with. But if you serve customers
            and want more of them, we&apos;re built for you.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {trades.map((t) => (
              <li
                key={t}
                className="rounded-full border border-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
