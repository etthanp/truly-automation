import Reveal from "./Reveal";

type Tier = "Foundation" | "Reinforced";

const systems: { icon: string; title: string; text: string; tier: Tier }[] = [
  {
    icon: "🧮",
    title: "Pour Price Calculator",
    text: "Homeowners get a real price range on your website in 30 seconds. You get their name, number and project.",
    tier: "Foundation",
  },
  {
    icon: "📸",
    title: "Photo Quote Line",
    text: "Missed calls get a text back in seconds. It collects photos, size, town and timeline, then sends you a ready-to-quote lead.",
    tier: "Foundation",
  },
  {
    icon: "🔎",
    title: "SEO & AI search",
    text: "Show up on Google, Google Maps and ChatGPT when homeowners search for concrete, with a page for every service and town you cover.",
    tier: "Foundation",
  },
  {
    icon: "📍",
    title: "Job Site Pages",
    text: "Every finished pour becomes a page like “Stamped patio in Dayton” that helps you rank on Google and ChatGPT in that town.",
    tier: "Foundation",
  },
  {
    icon: "🔁",
    title: "Estimate Chaser",
    text: "Automatic texts and emails follow up on every open quote at day 2, 7 and 14, so bids stop going quiet.",
    tier: "Foundation",
  },
  {
    icon: "🔒",
    title: "Territory Lock",
    text: "We work with one concrete company per city. Once your town is yours, your competitors can't hire us.",
    tier: "Foundation",
  },
  {
    icon: "📡",
    title: "Permit Radar",
    text: "Every week, new home, pool and shop permits in your county. Each one is a future driveway, deck or slab.",
    tier: "Reinforced",
  },
  {
    icon: "🤝",
    title: "Outreach",
    text: "We call and email home builders, general contractors, pool companies and property managers for you to line up steady repeat work.",
    tier: "Reinforced",
  },
  {
    icon: "📋",
    title: "Bid Board",
    text: "Public concrete jobs open for bids in your area, sent to you every week: city, county, school and commercial work.",
    tier: "Reinforced",
  },
  {
    icon: "✉️",
    title: "Neighbor Drop",
    text: "Postcards to the homes around every job: “We just poured your neighbor's driveway.” Concrete sells itself to the street.",
    tier: "Reinforced",
  },
  {
    icon: "❄️",
    title: "Off-Season Engine",
    text: "Pre-book spring pours over the winter, send reseal reminders to past customers, and push indoor work when it rains.",
    tier: "Reinforced",
  },
  {
    icon: "🦺",
    title: "Crew Finder",
    text: "A hiring page and job ads that bring in finishers and laborers, so you can say yes to more work.",
    tier: "Reinforced",
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
            Twelve systems built only for concrete contractors
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Not a generic marketing package. Each one solves a problem concrete
            companies actually have, on top of your website, Google profile,
            reviews, social media and ads.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ember/15 to-sky/20 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-navy/70">{s.text}</p>
                <p
                  className={`mt-5 self-start rounded-full px-2.5 py-1 text-xs font-semibold ${
                    s.tier === "Foundation" ? "bg-royal/10 text-royal" : "bg-ember/10 text-ember"
                  }`}
                >
                  {s.tier}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
