"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkolvvzy";

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
            Let&apos;s build your AI agent
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tell us a bit about your business and we&apos;ll reach out within
            one business day. Or email us directly at{" "}
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
              <h3 className="mt-3 text-xl font-bold">Thanks — message sent!</h3>
              <p className="mt-2 text-white/70">
                We&apos;ll be in touch at the email you provided within one
                business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@business.com"
                    className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-white/80"
                >
                  Business name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  placeholder="Bloom Hair Studio"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky"
                />
              </div>

              <div>
                <label
                  htmlFor="need"
                  className="block text-sm font-medium text-white/80"
                >
                  What do you need help with?
                </label>
                <textarea
                  id="need"
                  name="need"
                  rows={4}
                  required
                  placeholder="Tell us about your business and what you'd like to automate…"
                  className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong — please try again or email us directly
                  at ethan@trulyautomation.com.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 rounded-full bg-sky px-8 py-3.5 text-base font-semibold text-navy transition hover:bg-white disabled:opacity-50"
              >
                {status === "submitting" ? "Sending…" : "Submit Request"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
