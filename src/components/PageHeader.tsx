import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="px-6 pt-16 pb-6 lg:px-8 lg:pt-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-ember">{eyebrow}</span>
        <h1 className="mt-4 text-5xl text-navy sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-navy/70">{intro}</p>
      </Reveal>
    </section>
  );
}
