import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Approach from "@/components/Approach";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Trades from "@/components/Trades";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How It Works | Truly Automation",
  description:
    "How Truly Automation fills the schedule for concrete contractors: a free checkup, a two-week setup, and marketing that runs every month.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="How it works"
          title="From free checkup to a full schedule"
          intro="We learn your concrete business, set everything up in about two weeks, and run it every month while you stay on the job site."
        />
        <Approach />
        <Problem />
        <HowItWorks />
        <Trades />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
