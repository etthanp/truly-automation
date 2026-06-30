import Reveal from "./Reveal";

const services = [
  {
    icon: "📅",
    title: "Appointment Booking & Follow-Up Agents",
    description:
      "AI that books, confirms, and follows up with customers automatically — no more no-shows, no more double bookings, no more phone tag.",
    points: [
      "24/7 online & SMS booking",
      "Automatic reminders & confirmations",
      "Smart follow-ups to fill cancellations",
    ],
  },
  {
    icon: "💬",
    title: "Customer Service & Chatbot Agents",
    description:
      "A 24/7 AI assistant that answers questions, handles support requests, and knows your business inside and out.",
    points: [
      "Instant answers on your website",
      "Handles FAQs, pricing & hours",
      "Escalates to a human when needed",
    ],
  },
  {
    icon: "📣",
    title: "Social Media & Marketing Agents",
    description:
      "AI that creates and schedules content automatically, keeping your business visible without eating up your week.",
    points: [
      "Auto-generated posts & captions",
      "Consistent posting schedule",
      "On-brand voice, every time",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            AI agents that do the work for you
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Three ways Truly Automation helps your business run smoother and
            grow faster.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-royal/10 to-sky/20 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-navy/70">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-navy/70"
                    >
                      <span className="mt-0.5 text-royal">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
