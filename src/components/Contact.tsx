"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkolvvzy";

const TRADES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Concrete",
  "Landscaping / lawn care",
  "Fencing",
  "Pressure washing",
  "Painting",
  "Tree service",
  "Pest control",
  "Garage doors",
  "Other",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky";
const labelClass = "block text-sm font-medium text-white/80";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get your free marketing checkup
          </h2>
          <p className="mt-4 text-lg text-white/70">
            We&apos;ll look at your Google ranking, website, reviews and calls,
            and send you a one-page report with the three things to fix first.
            Free, no strings attached. Or email us directly at{" "}
            <a
              href="mailto:ethan@trulyautomation.com"
              className="text-sky underline underline-offset-2 hover:text-white"
            >
              ethan@trulyautomation.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={150}>
          {status === "success" ? (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-2xl">🎉</p>
              <h3 className="mt-3 text-xl font-bold">Got it — your checkup is on the way!</h3>
              <p className="mt-2 text-white/70">
                We&apos;ll reach out within one business day with your report.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New checkup request — trulyautomation.com"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input id="name" name="name" type="text" required placeholder="Mike Johnson" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input id="phone" name="phone" type="tel" required placeholder="(910) 555-0123" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="business" className={labelClass}>Business name</label>
                  <input id="business" name="business" type="text" required placeholder="Johnson Plumbing & Drain" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" name="email" type="email" required placeholder="mike@johnsonplumbing.com" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="trade" className={labelClass}>Your trade</label>
                  <select
                    id="trade"
                    name="trade"
                    required
                    defaultValue=""
                    className={`${inputClass} [&>option]:text-navy`}
                  >
                    <option value="" disabled>Choose one</option>
                    {TRADES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="area" className={labelClass}>City / service area</label>
                  <input id="area" name="area" type="text" required placeholder="Fayetteville & Hope Mills" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="need" className={labelClass}>
                  Anything we should know? <span className="text-white/40">(optional)</span>
                </label>
                <textarea
                  id="need"
                  name="need"
                  rows={3}
                  placeholder="e.g. 'We don't have a website and most work comes from referrals.'"
                  className={inputClass}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email us directly
                  at ethan@trulyautomation.com.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-ember/30 transition hover:scale-[1.02] disabled:opacity-50"
              >
                {status === "submitting" ? "Sending…" : "Get my free checkup"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
