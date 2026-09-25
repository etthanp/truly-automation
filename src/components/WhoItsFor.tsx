import Reveal from "./Reveal";

const industries = [
  {
    icon: "🧽",
    title: "Commercial cleaning & janitorial",
    text: "Offices, medical practices, schools, and property managers — recurring contracts that pay every month.",
  },
  {
    icon: "💻",
    title: "IT & managed services",
    text: "Small and mid-sized businesses that need a tech partner and don't know you exist yet.",
  },
  {
    icon: "🤝",
    title: "Staffing agencies",
    text: "Hiring managers and HR leads who need people now and would take your call.",
  },
  {
    icon: "🏗️",
    title: "Commercial contractors",
    text: "Roofing, HVAC, landscaping, and facility services selling to businesses and property managers.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-ember">
            Who it&apos;s for
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Built for companies where one new client is worth thousands
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl border border-royal/20 bg-gradient-to-r from-royal/5 to-sky/10 p-8 text-center">
            <p className="text-lg font-semibold text-navy sm:text-xl">
              If a new client is worth{" "}
              <span className="text-royal">$5,000+ a year</span> to you and
              you&apos;re not doing outbound yet — we should talk.
            </p>
            <p className="mt-2 text-navy/70">
              Most owners grow by referrals alone. That works — until it
              doesn&apos;t. Outbound puts growth back in your control.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
