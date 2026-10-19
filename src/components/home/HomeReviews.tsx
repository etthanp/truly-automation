// Real client reviews, approved by each client in their own words. Only add reviews a client
// actually gave us. Family or other close connections must be disclosed in `detail`.
const reviews = [
  {
    quote:
      "Between being out on jobs all day, we never had time for marketing, but we knew it mattered. Truly Automation made it easy and handled all of it for us. Great service, and we're very satisfied.",
    business: "Southern Duo Land Solutions",
    detail: "Land clearing & grading, York County, SC",
  },
  {
    quote:
      "Truly Automation was great to work with and really cared about our brand. They helped boost our marketing as we got ready to launch, and we're very happy with the results.",
    business: "Bum Towels",
    detail: "Beach towel brand, made in South Carolina",
  },
  {
    quote:
      "Truly Automation was easy to work with and really valued the relationship with us as a customer. We're very satisfied.",
    business: "NC Soil Perc Solutions",
    name: "Jacob Presley, Owner",
    detail: "Perc tests & septic permits, Dallas, NC. Owned by a family member.",
  },
];

/** A slow rolling strip of client reviews. Pauses on hover; still for reduced motion. */
export default function HomeReviews() {
  // Two copies of the set per half so the strip fills wide screens, then the whole track
  // is doubled so the -50% loop is seamless.
  const half = [...reviews, ...reviews];
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {half.map((r, n) => (
        <li
          key={`${r.business}-${n}`}
          className="flex w-[16rem] shrink-0 flex-col rounded-xl border border-navy/10 bg-white p-4 shadow-sm sm:w-[18rem]"
        >
          <p className="text-sm tracking-widest text-ember" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
          <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-navy/85">&ldquo;{r.quote}&rdquo;</blockquote>
          <p className="mt-3 border-t border-navy/10 pt-3 text-sm font-bold text-navy">
            {r.name ? `${r.name}, ` : ""}
            {r.business}
          </p>
          <p className="mt-0.5 text-xs text-navy/60">{r.detail}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Client reviews" className="px-6 pt-12 lg:px-8">
      <p className="text-center font-[family-name:var(--font-caveat)] text-2xl text-navy/60">what our clients say</p>
      <div className="reviews-roll mx-auto mt-4 max-w-4xl overflow-hidden py-2">
        <div className="reviews-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
