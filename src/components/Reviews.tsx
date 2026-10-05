import Reveal from "./Reveal";

// Each quote must be approved by the client, in their own words, before it goes live.
type Review = {
  quote: string;
  name: string;
  business: string;
  trade: string;
  url: string;
  image: string;
};

const reviews: Review[] = [
  {
    quote:
      "Truly Automation was easy to work with and really valued the relationship with us as a customer. They built us a clean, professional website that explains what we do and makes it easy for customers to reach us. We're very satisfied.",
    name: "Jacob Presley, Owner",
    business: "NC Soil Perc Solutions",
    trade: "Perc tests & septic permitting, North Carolina",
    url: "https://www.ncsoilpercsolutions.com/",
    image: "/work/soil-perc-detail.jpg",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Reviews
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Hear it from our clients
          </h2>
        </Reveal>

        <div className={`mt-12 grid gap-8 ${reviews.length === 1 ? "mx-auto max-w-2xl" : "md:grid-cols-2"}`}>
          {reviews.map((r, i) => (
            <Reveal key={r.business} delay={i * 120}>
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener"
                  className="group block overflow-hidden border-b border-navy/10"
                >
                  <img
                    src={r.image}
                    alt={`The ${r.business} website, built by Truly Automation`}
                    width={960}
                    height={600}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="flex flex-1 flex-col p-7">
                  <blockquote className="flex-1 text-lg leading-relaxed text-navy/85">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="font-bold text-navy">
                        {r.name}, {r.business}
                      </p>
                      <p className="text-sm text-navy/60">{r.trade}</p>
                    </div>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener"
                      className="text-sm font-semibold text-royal hover:text-navy"
                    >
                      See their site →
                    </a>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
