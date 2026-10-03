import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Trades from "@/components/Trades";
import Demo from "@/components/Demo";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Approach />
        <Founder />
        <Problem />
        <Services />
        <Trades />
        <Demo />
        <HowItWorks />
        <Packages />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
