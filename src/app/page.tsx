import Script from "next/script";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/home/HomeHero";
import IndustryTicker from "@/components/home/IndustryTicker";
import WhatWeDo from "@/components/home/WhatWeDo";
import HomeReviews from "@/components/home/HomeReviews";
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
        <HomeReviews />
        <WhatWeDo />
        <Directory items={items} categories={categories} />
        <Founder />
        <HomeCta />
      </main>
      <Footer />
      {/* GoHighLevel chat widget: the only SMS opt-in form on this page (A2P requirement) */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6ad68732e19e4c46e8d80e21"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  );
}
