import Link from "next/link";
import Reveal from "./Reveal";

export default function SamplesBand() {
  return (
    <section className="px-6 pb-24 lg:px-8">
      <Reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-ember">The Pour Packet</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">See what your customers get from you</h2>
            <p className="mt-4 max-w-lg text-white/75">
              A proposal they sign and pay on their phone, and a Pour Report with
              photos, specs and a warranty after every job. Your logo, your prices.
            </p>
            <Link
              href="/samples"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-navy transition hover:bg-ember hover:text-white"
            >
              View the samples <span aria-hidden>→</span>
            </Link>
          </div>
          <Link href="/samples" className="relative mx-auto block h-64 w-full max-w-md" aria-label="View the sample proposal and Pour Report">
            <img
              src="/samples/proposal-preview.jpg"
              alt="Sample concrete proposal"
              width={1224}
              height={1584}
              loading="lazy"
              className="absolute top-2 left-[6%] w-[48%] -rotate-3 shadow-2xl"
            />
            <img
              src="/samples/pour-report-preview.jpg"
              alt="Sample Pour Report"
              width={1224}
              height={1584}
              loading="lazy"
              className="absolute top-8 right-[6%] w-[48%] rotate-3 shadow-2xl"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
