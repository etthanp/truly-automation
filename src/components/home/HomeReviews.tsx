"use client";

import { useEffect, useState } from "react";

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
      "Truly Automation was easy to work with and really valued the relationship with us as a customer. They built us a clean, professional website that explains what we do and makes it easy for customers to reach us. We're very satisfied.",
    business: "NC Soil Perc Solutions",
    name: "Jacob Presley, Owner",
    detail: "Perc tests & septic permits, Dallas, NC. Family business and our first website client.",
    url: "https://www.ncsoilpercsolutions.com/",
  },
];

const INTERVAL = 7000;

export default function HomeReviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const r = reviews[i];

  return (
    <section aria-label="Client reviews" className="px-6 pt-16 lg:px-8">
      <div
        className="mx-auto max-w-4xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-caveat)] text-2xl text-navy/60">what our clients say</p>
          <p className="text-lg tracking-widest text-ember" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
        </div>

        <figure key={i} className="review-in mt-4 min-h-[23.5rem] border-l-4 border-ember pl-6 sm:min-h-[13.5rem] sm:pl-8" aria-live="polite">
          <blockquote className="text-xl leading-relaxed text-navy sm:text-2xl">&ldquo;{r.quote}&rdquo;</blockquote>
          <figcaption className="mt-5">
            <p className="font-bold text-navy">
              {r.name ? `${r.name}, ` : ""}
              {r.url ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-royal hover:underline">
                  {r.business}
                </a>
              ) : (
                r.business
              )}
            </p>
            <p className="mt-0.5 text-sm text-navy/60">{r.detail}</p>
          </figcaption>
        </figure>

        <div className="mt-6 flex items-center gap-2 pl-7 sm:pl-9">
          {reviews.map((x, n) => (
            <button
              key={x.business}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show review from ${x.business}`}
              aria-current={n === i}
              className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-navy" : "w-2 bg-navy/25 hover:bg-navy/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
