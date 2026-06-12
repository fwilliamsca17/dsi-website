import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

// Each stage carries a concrete SLA or operational detail — not generic
// "we manage it." Servicers compete on turnaround and accuracy; the
// timeline should advertise those, not abstract them.
const steps = [
  {
    number: "01",
    title: "Boarding",
    sla: "48 hours from complete doc package",
    description:
      "Loan boarded, trust account funded, borrower welcome packet sent under RESPA Section 6, payment schedule and broker-fee disbursement rules configured.",
  },
  {
    number: "02",
    title: "Active Servicing",
    sla: "Same-day funding visibility on ACH",
    description:
      "ACH collections, segregated trust accounting, automated SMS + email alerts with TCPA-compliant opt-in, real-time payment tracking, proactive late-payment outreach.",
  },
  {
    number: "03",
    title: "Reporting & Compliance",
    sla: "1098s + 1099-INTs delivered before January 31",
    description:
      "Monthly GAAP-aligned investor statements, K-1 supporting schedules for fund SMAs, audit-trail documentation, state regulatory filings, year-end tax package locked December 28.",
  },
  {
    number: "04",
    title: "Resolution & Payoff",
    sla: "Demand statements turned under 48 hours",
    description:
      "Payoffs, reconveyances, and workouts handled end-to-end — modification structuring, NOD/NOS prep, bankruptcy proof-of-claim packages, REO transition support.",
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
            description="Four stages. Each one with a published SLA — not a wish."
            centered
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="relative">
                  <div className="text-6xl font-heading font-bold text-surface-300 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-700 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-3">
                    {step.sla}
                  </p>
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
