import Reveal from "./Reveal";

// Each quote must be approved by the client, in their own words, before it goes live.

// Large card on the left: a client whose website we built (screenshot + link).
const featured = {
  quote:
    "Truly Automation was easy to work with and really valued the relationship with us as a customer. They built us a clean, professional website that explains what we do and makes it easy for customers to reach us. We're very satisfied.",
  name: "Jacob Presley, Owner",
  business: "NC Soil Perc Solutions",
  trade: "Perc tests & septic permitting, North Carolina",
  url: "https://www.ncsoilpercsolutions.com/",
  image: "/work/soil-perc-detail.jpg",
};

// Smaller cards on the right: marketing clients (no website link).
const short: { quote: string; business: string; detail: string; initials: string }[] = [
  {
    quote:
      "Truly Automation was great to work with and really cared about our brand. They helped boost our marketing as we got ready to launch, and we're very happy with the results.",
    business: "Bum Towels",
    detail: "Beach towel brand · Made in South Carolina",
    initials: "BT",
  },
  {
    quote:
      "Great service and easy to work with. They handle our marketing so we can focus on the job. We're very satisfied.",
    business: "Southern Duo Land Solutions",
    detail: "Land clearing & grading · York County, SC",
    initials: "SD",
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

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8">
          {/* Featured client */}
          <Reveal>
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener"
                className="group block overflow-hidden border-b border-navy/10"
              >
                <img
                  src={featured.image}
                  alt={`The ${featured.business} website, built by Truly Automation`}
                  width={960}
                  height={600}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex flex-1 flex-col p-7">
                <blockquote className="flex-1 text-lg leading-relaxed text-navy/85">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-bold text-navy">
                      {featured.name}, {featured.business}
                    </p>
                    <p className="text-sm text-navy/60">{featured.trade}</p>
                  </div>
                  <a
                    href={featured.url}
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

          {/* Shorter reviews */}
          <div className="grid min-w-0 grid-cols-1 gap-6 lg:gap-8">
            {short.map((r, i) => (
              <Reveal key={r.business} delay={(i + 1) * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                  <span className="text-3xl leading-none text-ember" aria-hidden>
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-base leading-relaxed text-navy/85">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-sm font-bold text-white">
                      {r.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-navy">{r.business}</p>
                      <p className="text-sm text-navy/60">{r.detail}</p>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1 rounded-full bg-royal/10 px-2.5 py-1 text-xs font-semibold text-royal sm:inline-flex">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Client
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
