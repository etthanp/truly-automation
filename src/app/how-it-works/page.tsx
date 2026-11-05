import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FrontDeskCta, Handles, Steps } from "@/components/frontdesk/Sections";

export const metadata: Metadata = {
  title: "How It Works | Truly Automation",
  description:
    "How Truly Automation sets up your AI front desk: we learn your business, build your AI receptionist and dashboard, test it with you, and keep running it after launch.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          eyebrow="How it works"
          title="Your AI front desk, set up for you"
          intro="You run your business. We build the front desk, test it with you, and keep it running."
        />
        <Steps />
        <Handles />
        <FrontDeskCta />
      </main>
      <Footer />
    </>
  );
}
