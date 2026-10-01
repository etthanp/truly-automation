import Reveal from "./Reveal";

// Each quote must be approved by the client, in their own words, before it goes live.
const reviews = [
  {
    quote:
      "Truly Automation became our whole marketing team. They built our website, set up our Google listing and reviews, run our social media and ads, and reach out to contractors for us. As a new company that was exactly what we needed. We went from nobody knowing what robotic layout is to having general contractors asking us about it.",
    name: "Owner",
    business: "ABT Automation",
    trade: "Robotic layout for construction",
    url: "https://www.abtautomation.com/",
    image: "/work/abt.jpg",
  },
  {
    quote:
      "Before Truly Automation, all our work came from word of mouth. Now we've got a website, a Google listing that brings in reviews, social media and ads running, and they're out finding us new customers. Ethan handles all of it so we can stay focused on clearing and grading. It's really expanded how many people know about us.",
    name: "Owner",
    business: "Southern Duo Land Solutions",
    trade: "Land clearing & grading, Carolinas",
    url: "https://www.southernduolandsolutions.com/",
    image: "/work/southern-duo.jpg",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            What our clients say
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Real businesses. Real marketing, handled for them.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
