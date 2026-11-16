import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import WhatWeBuilt from "@/components/home/WhatWeBuilt";
import HowItWorks from "@/components/home/HowItWorks";
import WhatYouGet from "@/components/home/WhatYouGet";
import Faq from "@/components/home/Faq";
import Founder from "@/components/Founder";
import HomeCta from "@/components/home/HomeCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <WhatWeBuilt />
        <HowItWorks />
        <WhatYouGet />
        <Faq />
        <Founder />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
