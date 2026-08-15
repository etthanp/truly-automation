import Reveal from "./Reveal";

const features = [
  {
    icon: "⚡",
    title: "Texts back in seconds",
    description:
      "The moment a call goes unanswered, the customer gets a friendly text — long before they think to call the next company.",
  },
  {
    icon: "🌙",
    title: "Works 24/7",
    description:
      "Nights, weekends, holidays, the middle of a heat wave. It never sleeps, never takes lunch, never misses.",
  },
  {
    icon: "🔧",
    title: "Qualifies the job",
    description:
      "Finds out what's wrong, how urgent it is, and whether it's a repair, a tune-up, or a replacement — so you know what's coming.",
  },
  {
    icon: "📅",
    title: "Books into your schedule",
    description:
      "Offers your real open slots, locks one in, and confirms it — turning a missed call into a job on the calendar.",
  },
  {
    icon: "💬",
    title: "Answers the usual questions",
    description:
      "Pricing, service area, hours, 'do you work on my brand?' — it handles the back-and-forth so you don't have to.",
  },
  {
    icon: "📨",
    title: "Hands you every lead",
    description:
      "Booked jobs and customer details land straight in your inbox and phone. Nothing slips through the cracks.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            What it does
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A full-time receptionist, without the payroll
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Everything a great front-desk person does with an inbound call —
            handled automatically, on every single one.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <div className="group h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{f.title}</h3>
                <p className="mt-3 text-navy/70">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
