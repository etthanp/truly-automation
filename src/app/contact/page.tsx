import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Free Marketing Checkup | Truly Automation",
  description:
    "Get a free marketing checkup for your concrete company and find out if your city is still open.",
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
