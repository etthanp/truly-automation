import Reveal from "../Reveal";
import { PHONE_DISPLAY } from "@/lib/contact";

const steps = [
  { n: "1", title: "Hear it and book a demo.", text: `Call Riley at ${PHONE_DISPLAY} and hear what your callers would hear. Then we walk you through the dashboard and app on a short call.` },
  { n: "2", title: "We build your front desk.", text: "We set Riley up with your services, hours, prices and booking rules, connect your calendar, and test it with you before it takes a single real call." },
  { n: "3", title: "Forward your calls and go live.", text: "Your customers keep calling the same number. Riley answers, books and hands off, and you watch it all from the app." },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl text-navy sm:text-4xl">How it works.</h2>
        </Reveal>
        <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li>
                <p className="font-[family-name:var(--font-anton)] text-5xl text-royal">{s.n}</p>
                <p className="mt-3 text-lg font-bold text-navy">{s.title}</p>
                <p className="mt-2 text-[0.95rem] text-navy/70">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
