import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import IndustryTicker from "@/components/home/IndustryTicker";
import WhatWeDo from "@/components/home/WhatWeDo";
import Directory from "@/components/home/Directory";
import Founder from "@/components/Founder";
import HomeCta from "@/components/home/HomeCta";
import Footer from "@/components/Footer";
import { categories, industries } from "@/lib/industries";

export default function Home() {
  const items = industries.map(({ slug, name, icon, tagline, category }) => ({ slug, name, icon, tagline, category }));
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <IndustryTicker items={items} />
        <WhatWeDo />
        <Directory items={items} categories={categories} />
        <Founder />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
