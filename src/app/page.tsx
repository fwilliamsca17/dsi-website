import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { ClientsWeServe } from "@/components/sections/ClientsWeServe";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyDSI } from "@/components/sections/WhyDSI";
import { InvestorCTA } from "@/components/sections/InvestorCTA";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { FAQ } from "@/components/sections/FAQ";
import {
  FAQJsonLd,
  ServicingProcessJsonLd,
  PageSeo,
} from "@/components/seo/JsonLd";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { HOME_FAQS } from "@/lib/faqs";

// Title/description come from the root layout defaults; the homepage only
// needs to pin its own canonical since the root layout no longer sets one.
export const metadata: Metadata = {
  alternates: { canonical: "https://trustdsi.com" },
};

export default function HomePage() {
  return (
    <>
      <PageSeo
        title="Direct Servicing Initiative | Private Loan Servicing in Southern California"
        description="California-licensed private money loan servicer of record. Trust accounting, RESPA/TILA compliance, 48-hour demand turnaround, GAAP-aligned investor reporting, tax docs by January 31."
        path="/"
      />
      <FAQJsonLd faqs={HOME_FAQS} />
      <ServicingProcessJsonLd />
      <Hero />
      <StatsBar />
      <QuickFacts />
      <ClientsWeServe />
      <ServicesOverview />
      <WhyDSI />
      <Testimonials />
      <InvestorCTA />
      <ProcessTimeline />
      <TeamPreview />
      <FAQ faqs={HOME_FAQS} />
      <GetInTouch />
    </>
  );
}
