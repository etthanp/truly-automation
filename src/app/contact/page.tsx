import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Free Front Desk Checkup | Truly Automation",
  description:
    "Get a free front desk checkup: see how your calls get answered today and what an AI front desk built by Truly Automation would handle for you.",
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
