import Reveal from "./Reveal";

const acquisition = [
  "Ideal-client list researched & verified",
  "Personalized cold email campaigns",
  "LinkedIn outreach to decision-makers",
  "Phone follow-up with interested prospects",
  "Qualified meetings booked on your calendar",
  "Monthly pipeline report",
];

const receptionist = [
  "Instant text-back on every missed call",
  "Answers questions 24/7",
  "Qualifies the lead & books the appointment",
  "Works on your existing number",
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Win more clients. Lose none of them.
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Two services that work together: we go out and find your next
            clients, and make sure every lead that comes in gets an answer.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-3xl border border-royal/20 bg-white p-8 shadow-xl shadow-royal/10 sm:p-10">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-ember px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Core service
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-royal">
                Client Acquisition
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-navy">
                We find, contact, and book your next clients.
              </h3>
              <p className="mt-3 text-navy/70">
                A done-for-you outbound system. We run the prospecting you never
                have time for — and you show up to meetings with people who
                already want to talk.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {acquisition.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span className="mt-0.5 text-ember">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#how-it-works"
                className="mt-8 inline-block text-sm font-semibold text-royal hover:text-navy"
              >
                See how it works ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-navy/10 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-royal">
                AI Receptionist
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-navy">
                Never lose an inbound lead again.
              </h3>
              <p className="mt-3 text-navy/70">
                When you can&apos;t pick up, it texts back in seconds, answers
                questions, and books the appointment.
              </p>
              <ul className="mt-6 space-y-3">
                {receptionist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <span className="mt-0.5 text-ember">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <a href="#demo" className="text-royal hover:text-navy">
                  Try the live demo ↓
                </a>
                <a href="/hvac" className="text-royal hover:text-navy">
                  Built for HVAC →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
