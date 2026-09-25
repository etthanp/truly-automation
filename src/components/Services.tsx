import Reveal from "./Reveal";

const services = [
  {
    icon: "🌐",
    title: "Professional website",
    text: "Fast, mobile-friendly, and built to turn visitors into calls. We build it, host it, and keep it updated.",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    text: "Completed, optimized, and posted to every week so you climb higher on Google Maps in your service area.",
  },
  {
    icon: "⭐",
    title: "Review engine",
    text: "Automatic review requests after every job, so your rating and review count keep climbing without you asking.",
  },
  {
    icon: "📱",
    title: "Social media",
    text: "Your Facebook and Instagram, handled: real job photos, before-and-afters, and seasonal offers.",
  },
  {
    icon: "📣",
    title: "Advertising",
    text: "Google Local Services Ads, Google Ads and Facebook ads aimed at your service area. Ad spend goes straight to Google or Meta.",
  },
  {
    icon: "🤖",
    title: "AI receptionist",
    text: "Texts back every missed call in seconds, answers questions, and books the job, 24/7. Try it live below.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-background to-royal/5 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Everything a marketing team does, handled for you
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            No agencies to juggle, no logins to learn. One team runs the whole
            thing and tells you what it&apos;s bringing in.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-navy/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
