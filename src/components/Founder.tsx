import Reveal from "./Reveal";

// Paste your LinkedIn profile URL here to show the "Connect on LinkedIn" button.
const LINKEDIN_URL = "";

export default function Founder() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-navy/10 bg-white p-8 shadow-sm sm:p-12 md:grid-cols-[auto_1fr]">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-royal to-sky text-5xl font-extrabold text-white shadow-lg shadow-royal/20">
              E
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-ember">
                Who you&apos;ll work with
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">
                Hi, I&apos;m Ethan.
              </h2>
              <p className="mt-4 text-navy/75">
                I started Truly Automation in North Carolina because the best
                tradespeople I know are great at the work and have zero time
                for marketing. Meanwhile, the company with the better website
                and more reviews gets the call, even when their work isn&apos;t
                as good.
              </p>
              <p className="mt-3 text-navy/75">
                We fix that. We build and run your whole online presence, and we
                use AI to handle the busywork so nothing slips through the
                cracks. When you work with Truly Automation, you have one
                person to call: me. No runaround, no jargon. Just a clear report
                every month showing what your marketing brought in.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-royal/30 transition hover:bg-navy"
                >
                  Get your free checkup
                </a>
                {LINKEDIN_URL && (
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy/5"
                  >
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
