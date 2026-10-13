import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TryIt from "@/components/TryIt";
import SamplesBand from "@/components/SamplesBand";
import Founder from "@/components/Founder";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <TryIt />
        <SamplesBand />
        <Founder />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
