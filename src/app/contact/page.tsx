import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Free Automation Checkup | Truly Automation",
  description:
    "Get a free automation checkup: see how your calls and follow-ups get handled today and what an AI system built by Truly Automation would handle for you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Contact asPage />
      </main>
      <Footer />
    </>
  );
}
