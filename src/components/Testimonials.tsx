import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Since Truly Automation set up our booking agent, our no-show rate dropped by half. I get my evenings back and my chair stays full.",
    name: "Maria Gutierrez",
    business: "Owner, Bloom Hair Studio",
    initials: "MG",
  },
  {
    quote:
      "The chatbot answers the same five questions I used to answer twenty times a day. Customers love the instant replies, even at midnight.",
    name: "Dave Whitfield",
    business: "Owner, Whitfield Auto Repair",
    initials: "DW",
  },
  {
    quote:
      "I'm not a marketing person. Now our social posts go out every week like clockwork and I didn't have to learn a single new tool.",
    name: "Priya Nair",
    business: "Owner, Sunnyside Cafe",
    initials: "PN",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sky/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Loved by local businesses
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Real results from real owners who got their time back.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm">
                <div className="text-2xl text-sky">★★★★★</div>
                <p className="mt-4 flex-1 text-navy/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {t.name}
                    </p>
                    <p className="text-xs text-navy/60">{t.business}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
