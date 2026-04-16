import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "We collect loan documents, verify data, configure payment schedules, and set up escrow accounts. Your loan is boarding-ready in 48 hours.",
  },
  {
    number: "02",
    title: "Active Servicing",
    description:
      "ACH payment processing, automated borrower alerts, real-time tracking, and proactive late payment management keep your portfolio healthy.",
  },
  {
    number: "03",
    title: "Compliance & Reporting",
    description:
      "Monthly investor statements, regulatory filings, audit trail documentation, and year-end tax reporting — all automated and on schedule.",
  },
  {
    number: "04",
    title: "Resolution & Payoff",
    description:
      "When loans mature, default, or need workout solutions, we manage the process end-to-end — from modification to foreclosure to payoff.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-white py-20 lg:py-section-lg">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="How It Works"
            title="The DSI Servicing Lifecycle"
            description="A systematic, technology-driven approach to loan servicing that protects your investment at every stage."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="relative">
                  <div className="text-6xl font-heading font-bold text-surface-300 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-body/70 leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-surface-300" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
