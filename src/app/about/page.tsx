import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageSeo } from "@/components/seo/JsonLd";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Direct Servicing Initiative is a California-licensed loan servicer built in West Covina by Frank Williams. Institutional-grade servicing for the private lending industry, with Juan N. Williams (DRE# 01115216) as Broker of Record.",
  path: "/about",
});

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Every dollar is tracked to the penny. Every report ties to the trust account. Every commitment is documented and reviewed.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Loan servicing is a deadline business. Demand statements, tax docs, and investor distributions hit their dates — not approximately, exactly.",
  },
  {
    icon: Heart,
    title: "Accountability",
    description:
      "Family-run, founder-accessible. When the work falls short, the call goes to Frank. There is no help-desk shield between you and the answer.",
  },
  {
    icon: Lightbulb,
    title: "Operational Discipline",
    description:
      "Workflows over heroics. Standards over promises. The right outcome happens because the process is built for it — not because someone stayed late.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "DSI Founded",
    description:
      "Frank Williams launches Direct Servicing Initiative in West Covina, CA — purpose-built for California private lenders who outgrew spreadsheet servicing.",
  },
  {
    year: "2024",
    title: "Trust Accounting & Investor Portal Live",
    description:
      "Segregated trust accounts established. Investor portal, ACH collections, and automated borrower alerts go into production.",
  },
  {
    year: "2025",
    title: "Workout & Distressed Servicing Stood Up",
    description:
      "Default management, NOD/NOS coordination, and bankruptcy workflows operationalized — built around California Civil Code §2924 and the Homeowner Bill of Rights.",
  },
  {
    year: "2026",
    title: "Fund + SDIRA Reporting Suite",
    description:
      "GAAP-aligned monthly statements, K-1 supporting schedules, and SDIRA custodian distribution rails added for fund LPs and self-directed IRA holders.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title="About | Direct Servicing Initiative"
        description="DSI is a California-licensed loan servicer built in West Covina by Frank Williams. Institutional-grade servicing for private money lenders, hard money funds, and trust deed investors, with Juan N. Williams (DRE# 01115216) as Broker of Record."
        path="/about"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            {/* CSS entrance, not FadeIn: the h1 is this page's LCP element and
                must never ship as opacity:0 in the SSR HTML. */}
            <div>
              <p className="hero-in eyebrow !text-jade-300 mb-4">About DSI</p>
              <h1 className="hero-in-lcp font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                Family-run.{" "}
                <span className="text-jade-gradient">Institutionally disciplined.</span>
              </h1>
              <p className="hero-in text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Direct Servicing Initiative is a California-licensed loan
                servicer built in West Covina. Founded by Frank Williams to
                bring institutional-grade trust accounting, compliance, and
                reporting to the private lending industry. Juan N. Williams
                (DRE# 01115216) serves as Broker of Record on the California
                brokerage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <div className="bg-surface-100 rounded-2xl p-12 flex items-center justify-center aspect-[4/3]">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 text-jade-600/30 mx-auto mb-4" />
                    <p className="text-sm text-body/80">
                      West Covina, California
                    </p>
                    <p className="text-xs text-body/70 mt-1">
                      Headquarters · San Gabriel Valley
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="eyebrow mb-4">Our Story</p>
                <h2 className="font-heading text-display text-slate-700 mb-6">
                  Built from the lender&apos;s side of the table
                </h2>
                <div className="space-y-4 text-body/80 leading-relaxed">
                  <p>
                    DSI was founded by a California-licensed broker who
                    originated private money loans and watched generic
                    third-party servicers turn clean files into compliance
                    nightmares — late demand statements, missed 1098s,
                    commingled trust funds, and investors who couldn&apos;t
                    show their CPA a clean monthly statement.
                  </p>
                  <p>
                    Rather than tolerate the gap, DSI was built to close it.
                    California Civil Code §2924 and the Homeowner Bill of
                    Rights are baseline workflow, not customization. Trust
                    accounts are segregated by design, not by exception. The
                    tax package is locked December 28, not assembled in
                    February.
                  </p>
                  <p>
                    Today DSI services private-money loans for individual
                    investors, originators, fund managers, and self-directed
                    IRA holders across Southern California — with the
                    discipline of an institution and the accountability of a
                    family-run business.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            <SectionHeading
              eyebrow="Our Values"
              title="What Guides Every File"
              centered
            />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="card flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-jade-50 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-jade-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-body/80 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container max-w-3xl">
            <SectionHeading
              eyebrow="Our Build"
              title="What We've Stood Up — In Order"
              centered
            />
            <div className="mt-14 space-y-8">
              {milestones.map((milestone, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-16 shrink-0 text-right">
                      <span className="font-heading font-bold text-jade-700">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="relative pb-8 border-l-2 border-surface-300 pl-6">
                      <div className="absolute left-0 top-1.5 -translate-x-[5px] w-2 h-2 rounded-full bg-jade-500" />
                      <h3 className="font-heading font-semibold text-slate-700 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-body/80 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-pearl mb-4">
                Ready to put your servicing on a real foundation?
              </h2>
              <p className="text-pearl/60 mb-8 max-w-lg mx-auto">
                Talk to Frank directly. The first call is operational, not
                sales — we map your portfolio and the gaps your current
                servicer is leaving.
              </p>
              <Link href="/contact" className="btn-jade">
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
