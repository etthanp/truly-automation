import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Samples: Proposal & Pour Report | Truly Automation",
  description:
    "See the proposal and Pour Report your concrete customers get: good, better, best options signed on their phone, and photos, specs and a warranty after every job.",
};

const samples = [
  {
    title: "The proposal",
    pdf: "/samples/sample-concrete-proposal.pdf",
    image: "/samples/proposal-preview.jpg",
    alt: "Sample concrete driveway proposal with good, better and best options",
    points: [
      "Good, better and best options, so customers pick a bigger job",
      "Concrete-specific terms: cracking, weather, soil, sprinklers, de-icers",
      "Signed and deposit paid on their phone in one step",
    ],
  },
  {
    title: "The Pour Report",
    pdf: "/samples/sample-pour-report.pdf",
    image: "/samples/pour-report-preview.jpg",
    alt: "Sample Pour Report with photos, specs and a care guide",
    points: [
      "Before, prep and after photos with the exact specs poured",
      "Care guide, warranty and an automatic reseal reminder",
      "Proof of what you poured if a customer ever questions it",
    ],
  },
];

const steps = [
  "Proposal",
  "Signature & deposit",
  "Pour-day texts",
  "Change orders",
  "Pour Report",
  "Warranty & reseal reminder",
  "Review request",
];

export default function SamplesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="The Pour Packet"
          title="What your customers get from you"
          intro="Most concrete companies send a price by text. Your customers get a real proposal and a Pour Report after every job, with your logo and your prices."
        />

        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {samples.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                  <a
                    href={s.pdf}
                    target="_blank"
                    rel="noopener"
                    className="group block overflow-hidden rounded-xl border border-navy/10 bg-stone-100"
                  >
                    <img
                      src={s.image}
                      alt={s.alt}
                      width={1224}
                      height={1584}
                      className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                  <h2 className="mt-6 font-sans text-2xl font-bold text-navy">{s.title}</h2>
                  <ul className="mt-3 flex-1 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-navy/80">
                        <span className="mt-0.5 text-ember">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.pdf}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 font-semibold text-white transition hover:bg-royal"
                  >
                    Open the sample PDF <span aria-hidden>→</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 py-12 lg:px-8">
          <Reveal className="mx-auto max-w-5xl rounded-3xl bg-navy p-8 text-white sm:p-10">
            <h2 className="text-4xl sm:text-5xl">Every job, start to finish</h2>
            <ol className="mt-8 flex flex-wrap gap-3">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-xs">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl text-white/70">
              The photos your crew already takes do double duty: they build the
              Pour Report, a Job Site Page on your website, a Google post and
              your social media, and they trigger the review request.
            </p>
          </Reveal>
          <p className="mx-auto mt-6 max-w-5xl text-center text-sm text-navy/50">
            Both samples use our demo company, Granite Ridge Concrete. Yours use
            your logo, prices and photos. Have your own attorney review any
            contract terms before you use them.
          </p>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
