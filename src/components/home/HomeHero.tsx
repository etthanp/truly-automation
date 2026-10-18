import Link from "next/link";
import Reveal from "../Reveal";

const points = [
  { title: "Built for your industry", text: "Quote tools, follow-up and outreach made for how your kind of business actually makes money." },
  { title: "One company per city", text: "We only work with one business per industry in each city, so we never work for your competitor." },
  { title: "A real person", text: "You work with Ethan directly, not a ticket system or a rotating account manager." },
];

export default function HomeHero() {
  return (
    <section className="px-6 pt-16 pb-12 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="eyebrow">Truly Automation</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mx-auto mt-6 max-w-5xl text-6xl text-navy sm:text-7xl xl:text-[5.5rem]">
            Marketing built for <span className="text-royal">your kind of business.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-navy/75">
            Most agencies sell every business the same package. We build systems around how
            your industry wins work: the way you quote, the calls you miss, and the partners who
            send you jobs. Pick your business below to see yours.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#industries"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-navy"
            >
              Find your business <span aria-hidden>↓</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-b border-navy/40 pb-1 text-base font-medium text-navy transition hover:border-royal hover:text-royal"
            >
              Get a free marketing checkup <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 text-left md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full border-t-2 border-ember pt-5">
                <h2 className="font-sans text-lg font-bold text-navy">{p.title}</h2>
                <p className="mt-2 text-navy/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
