import Reveal from "./Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$175",
    description: "Perfect for shops just getting started with automation.",
    features: [
      "1 AI agent (booking or chatbot)",
      "Up to 500 conversations/mo",
      "Website chat widget",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$250",
    description: "Our most popular plan for growing local businesses.",
    features: [
      "2 AI agents of your choice",
      "Up to 2,000 conversations/mo",
      "SMS + website integration",
      "Monthly performance reports",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$400",
    description: "Full automation suite for businesses ready to scale.",
    features: [
      "All 3 AI agents included",
      "Unlimited conversations",
      "Custom integrations",
      "Dedicated account manager",
      "Quarterly strategy calls",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Pick the plan that fits your business today — upgrade anytime as
            you grow.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 120}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  tier.highlight
                    ? "relative border-royal bg-gradient-to-b from-royal to-navy text-white shadow-xl shadow-royal/20 lg:-translate-y-3"
                    : "border-navy/10 bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky px-4 py-1 text-xs font-bold text-navy">
                    MOST POPULAR
                  </span>
                )}
                <h3
                  className={`text-lg font-bold ${
                    tier.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlight ? "text-white/70" : "text-navy/60"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span
                    className={tier.highlight ? "text-white/70" : "text-navy/60"}
                  >
                    /mo
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        tier.highlight ? "text-white/90" : "text-navy/70"
                      }`}
                    >
                      <span
                        className={tier.highlight ? "text-sky" : "text-royal"}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                    tier.highlight
                      ? "bg-white text-navy hover:bg-sky"
                      : "bg-navy text-white hover:bg-royal"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
