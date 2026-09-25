import Navbar from "@/components/Navbar";
import AgencyHero from "@/components/AgencyHero";
import Services from "@/components/Services";
import Acquisition from "@/components/Acquisition";
import WhoItsFor from "@/components/WhoItsFor";
import Demo from "@/components/Demo";
import AgencyPricing from "@/components/AgencyPricing";
import Founder from "@/components/Founder";
import FAQ, { agencyFaqs } from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AgencyHero />
        <Services />
        <Acquisition />
        <WhoItsFor />
        <Demo />
        <AgencyPricing />
        <Founder />
        <FAQ items={agencyFaqs} />
        <Contact variant="agency" />
      </main>
      <Footer />
    </>
  );
}
