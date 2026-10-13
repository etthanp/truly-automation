import Navbar from "./Navbar";
import Footer from "./Footer";

// A block is a paragraph, or a bulleted list.
export type LegalBlock = string | { list: string[] };
export type LegalSection = { title: string; body: LegalBlock[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-6 pt-14 pb-24 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-5xl text-navy sm:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-navy/60">Last updated {updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">{intro}</p>

          <div className="mt-12 grid gap-10">
            {sections.map((s, i) => (
              <section key={s.title}>
                <h2 className="font-sans text-xl font-bold text-navy">
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-3 grid gap-3 leading-relaxed text-navy/80">
                  {s.body.map((b, j) =>
                    typeof b === "string" ? (
                      <p key={j}>{b}</p>
                    ) : (
                      <ul key={j} className="grid list-disc gap-1.5 pl-6">
                        {b.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
