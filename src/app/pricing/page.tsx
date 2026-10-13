import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing | Truly Automation",
  description:
    "Marketing packages for concrete contractors. Foundation and Reinforced plans, everything done for you, one concrete company per city.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Packages asPage />
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
