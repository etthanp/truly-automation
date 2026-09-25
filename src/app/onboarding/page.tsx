import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnboardingForm from "@/components/OnboardingForm";

export const metadata: Metadata = {
  title: "Client onboarding | Truly Automation",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#packages", label: "Packages" },
  { href: "/#faq", label: "FAQ" },
];

const next = [
  { title: "Fill this out", text: "About 15 minutes. Skip anything you're unsure of." },
  { title: "Kickoff call", text: "30 minutes within one business day to go over everything." },
  { title: "We build", text: "Website, Google profile, reviews, AI receptionist and social." },
  { title: "You go live", text: "Core services live in about two weeks." },
];

export default function OnboardingPage() {
  return (
    <>
      <Navbar links={links} />
      <main className="flex-1 bg-gradient-to-b from-royal/5 to-background px-6 pt-14 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ember">Welcome aboard</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Let&apos;s get your marketing set up
          </h1>
          <p className="mt-3 text-lg text-navy/70">
            Everything we need to build your website, Google profile, AI receptionist and
            social pages, in one place.
          </p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-4">
            {next.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-navy/10 bg-white p-4">
                <p className="text-xs font-bold text-royal">STEP {i + 1}</p>
                <p className="mt-1 text-sm font-bold text-navy">{s.title}</p>
                <p className="mt-1 text-xs text-navy/60">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <OnboardingForm />
          </div>
        </div>
      </main>
      <Footer links={links} />
    </>
  );
}
