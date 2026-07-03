"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const automationTiers = [
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

const websiteTiers = [
  {
    name: "Starter Site",
    price: "$500–$800",
    description: "A clean, professional web presence to get you found online.",
    features: [
      "Single landing page",
      "Mobile friendly",
      "Contact form",
      "Basic SEO setup",
    ],
    highlight: false,
    oneTime: true,
  },
  {
    name: "Business Site",
    price: "$1,200–$2,000",
    description: "Everything you need to look like the best option in town.",
    features: [
      "5–7 page website",
      "Contact form & social links",
      "Google Analytics",
      "SEO optimized",
    ],
    highlight: true,
    oneTime: true,
  },
  {
    name: "Premium Site",
    price: "$2,500–$4,000",
    description: "A fully custom site with automation built right in.",
    features: [
      "Full custom design",
      "Blog included",
      "Booking integration",
      "AI automation built in",
    ],
    highlight: false,
    oneTime: true,
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<"automation" | "websites">("automation");
  const tiers = tab === "automation" ? automationTiers : websiteTiers;

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

        {/* Tab toggle */}
        <Reveal delay={80}>
          <div className="mx-auto mt-10 flex w-fit rounded-full border border-navy/15 bg-white p-1">
            <button
              onClick={() => setTab("automation")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                tab === "automation"
                  ? "bg-navy text-white shadow-sm"
                  : "text-navy/60 hover:text-navy"
              }`}
            >
              AI Automation
            </button>
            <button
              onClick={() => setTab("websites")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                tab === "websites"
                  ? "bg-navy text-white shadow-sm"
                  : "text-navy/60 hover:text-navy"
              }`}
            >
              Website Builds
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
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
                  <span className="text-3xl font-extrabold">{tier.price}</span>
                  <span
                    className={`text-sm ${tier.highlight ? "text-white/70" : "text-navy/60"}`}
                  >
                    {"oneTime" in tier && tier.oneTime ? " one-time" : "/mo"}
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
