import Reveal from "./Reveal";
import ServiceScenes from "./ServiceScenes";

const steps = [
  {
    title: "Study your business",
    text: "We research your market, your competitors, and the customers you want more of before we build anything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <rect x="4" y="3.5" width="12" height="16" rx="1.5" />
        <path d="M7 8h6M7 11.5h4" strokeLinecap="round" />
        <circle cx="16.5" cy="15.5" r="3" />
        <path d="m18.7 17.7 2 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Find the right people",
    text: "Marketing and outreach aimed at the customers and partners who actually hire your kind of business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <circle cx="9" cy="8.5" r="3.2" />
        <circle cx="16.5" cy="9.5" r="2.6" />
        <path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6M14.5 14.6c2.6-.3 4.9 1 5.6 4.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Work with a real person",
    text: "One dedicated contact who knows your business. Clear updates, honest conversations, and a call back when you need one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M4.5 11.5c0-3.9 3.4-6.5 7.5-6.5s7.5 2.6 7.5 6.5S16.1 18 12 18c-.9 0-1.8-.1-2.6-.4L5.5 19l1.2-3.1c-1.4-1.2-2.2-2.7-2.2-4.4Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-navy/10 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-5 max-w-4xl text-5xl text-navy sm:text-6xl">
            We learn your business
            <br className="hidden sm:block" /> before we build your marketing.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ServiceScenes />
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className={`h-full md:px-8 ${i > 0 ? "md:border-l md:border-navy/10" : "md:pl-0"}`}>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-royal">0{i + 1}</span>
                  <span className="h-px flex-1 bg-navy/15" />
                </div>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-navy/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
