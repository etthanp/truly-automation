import Reveal from "./Reveal";

// Paste your LinkedIn profile URL here to show the "Connect on LinkedIn" button.
const LINKEDIN_URL = "";
// Drop a real photo of Ethan at /public/ethan.jpg and set this to "/ethan.jpg".
const PHOTO_URL = "";

const promises = [
  "You talk to me, not a ticket system",
  "I learn your trade, your town and your customers",
  "Straight answers and a simple monthly report",
  "If something isn't working, I'll tell you and fix it",
];

export default function Founder() {
  return (
    <section id="about" className="bg-navy px-6 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <span className="eyebrow">A more personal approach</span>
          <h2 className="mt-5 text-5xl sm:text-6xl">
            A marketing team
            <br />
            that <span className="text-[#5b7cff]">knows your name.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg text-white/80">
            Hi, I&apos;m Ethan. I started Truly Automation in North Carolina
            because the best tradespeople I know are great at the work and have
            zero time for marketing, and most agencies treat them like an
            account number.
          </p>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Smart tools handle the busywork. I focus on your business: who your
            customers are, what jobs you want more of, and what&apos;s actually
            bringing in calls.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-royal px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
            >
              Let&apos;s talk about your business <span aria-hidden>→</span>
            </a>
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            {PHOTO_URL ? (
              <img
                src={PHOTO_URL}
                alt="Ethan, founder of Truly Automation"
                className="aspect-[4/3] w-full object-cover shadow-2xl"
              />
            ) : (
              <div className="bg-white p-8 text-navy shadow-2xl sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-royal text-2xl font-bold text-white">
                    E
                  </div>
                  <div>
                    <p className="text-lg font-bold">Ethan</p>
                    <p className="text-sm text-navy/60">Founder · your direct contact</p>
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-navy/50">
                  When you work with us
                </p>
                <ul className="mt-4 space-y-3">
                  {promises.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-navy/85">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="absolute -top-10 right-4 rotate-[-4deg] font-[family-name:var(--font-caveat)] text-2xl leading-tight text-white/70">
              People. Strategy. Progress.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
