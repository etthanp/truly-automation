import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import HomeHero from "@/components/home/HomeHero";
import Directory from "@/components/home/Directory";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import DashboardPreview from "@/components/frontdesk/DashboardPreview";
import { FrontDeskCta, Handles, SalaryCompare, Steps } from "@/components/frontdesk/Sections";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import { categories, getIndustry, industries } from "@/lib/industries";
import { dashFor, FRONT_DESK_FAQS } from "@/lib/frontdesk";

export default function Home() {
  const items = industries.map(({ slug, name, icon, tagline, category }) => ({ slug, name, icon, tagline, category }));
  const example = dashFor(getIndustry("hvac")!);
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HomeHero />
        <SalaryCompare />
        <Handles />
        <section id="dashboard" className="scroll-mt-24 bg-gradient-to-b from-background to-royal/5 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <span className="eyebrow">Your dashboard</span>
              <h2 className="mt-4 max-w-3xl text-4xl text-navy sm:text-5xl">
                See everything your AI receptionist does.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-navy/70">
                Every business gets its own dashboard and customer list, built by us. Calls with summaries,
                your calendar, your jobs and every customer, in one place. Click around the example below.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-10">
              <DashboardPreview data={example} />
            </Reveal>
          </div>
        </section>
        <Steps />
        <IndustryFAQ faqs={FRONT_DESK_FAQS} />
        <Founder />
        <Directory items={items} categories={categories} />
        <FrontDeskCta />
      </main>
      <Footer />
      {/* GoHighLevel chat widget: the only SMS opt-in form on this page (A2P requirement) */}
      <ChatWidget />
    </>
  );
}
