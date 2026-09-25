import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Calculator from "@/components/Calculator";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Truly Automation | Never Lose Another HVAC Job to a Missed Call",
  description:
    "When an HVAC contractor misses a call, the customer calls a competitor. Truly Automation's AI receptionist instantly texts back every missed call, qualifies the customer, and books the job — 24/7, nights and weekends. Setup in days.",
  openGraph: {
    title: "Never lose another HVAC job to a missed call",
    description:
      "Your AI receptionist texts back every missed call in seconds, qualifies the customer, and books the job — 24/7. Built for HVAC contractors by Truly Automation.",
    url: "https://trulyautomation.com/hvac",
    siteName: "Truly Automation",
    type: "website",
  },
};

const links = [
  { href: "#demo", label: "Live Demo" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function HvacPage() {
  return (
    <>
      <Navbar links={links} />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Calculator />
        <Demo />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <Contact variant="hvac" />
      </main>
      <Footer links={[...links, { href: "#contact", label: "Contact" }]} />
    </>
  );
}
