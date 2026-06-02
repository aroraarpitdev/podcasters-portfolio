import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { FloatingFAB } from "@/components/ui/FloatingFAB";

import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";

import { getPageData } from "@/lib/api";

export default async function Home() {
  const pageData = await getPageData();

  return (
    <>
      <NoiseOverlay />
      <Header data={pageData.header} />
      <main>
        <Hero data={pageData.hero} />
        <Showcase data={pageData.transformation} />
        <Portfolio data={pageData.latestProjects} />
        <Services data={pageData.services} />
        <Process data={pageData.workflow} />
        <Stats data={pageData.stats} />
        <Testimonials data={pageData.testimonials} />
        <Pricing data={pageData.pricing} />
        <FAQ data={pageData.faq} />
        <LeadForm data={pageData.leadForm} />
      </main>
      <Footer data={pageData.footer} />
      <FloatingFAB />
    </>
  );
}
