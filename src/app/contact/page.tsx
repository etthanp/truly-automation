import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Book a Demo | Truly Front Desk",
  description:
    "Book a demo of Truly Front Desk, the AI front desk built and run by Truly Automation: an AI receptionist that answers every call 24/7 and books appointments, with a dashboard and iPhone app.",
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
