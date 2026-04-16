import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ClientsWeServe } from "@/components/sections/ClientsWeServe";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyDSI } from "@/components/sections/WhyDSI";
import { InvestorCTA } from "@/components/sections/InvestorCTA";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { HOME_FAQS } from "@/lib/faqs";

export default function HomePage() {
  return (
    <>
      <FAQJsonLd faqs={HOME_FAQS} />
      <Hero />
      <StatsBar />
      <ClientsWeServe />
      <ServicesOverview />
      <WhyDSI />
      <InvestorCTA />
      <ProcessTimeline />
      <FAQ faqs={HOME_FAQS} />
      <GetInTouch />
    </>
  );
}
