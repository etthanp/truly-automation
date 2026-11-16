import Reveal from "../Reveal";
import { FAQS } from "@/lib/offer";

export default function Faq() {
  return (
    <section className="px-6 pt-6 pb-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl text-navy sm:text-4xl">Questions.</h2>
        </Reveal>
        <div className="mt-6 divide-y divide-navy/15 border-y border-navy/15">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy">
                {f.q}
                <span className="text-royal transition group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
