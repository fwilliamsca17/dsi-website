import {
  UserCheck,
  Clock,
  Calendar,
  FileBarChart,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

// Real differentiators, not virtues. Each one is a commitment we live by
// and a proof of how. Generic "compliance-first" / "family-owned" copy
// reads as marketing — these read as operational standards.
const reasons = [
  {
    icon: UserCheck,
    title: "A Named Account Manager",
    proof:
      "Every client gets a dedicated account manager with a direct line — and Frank Williams on the escalation path. No ticket queues.",
  },
  {
    icon: Clock,
    title: "48-Hour Demand Turnaround",
    proof:
      "Payoff demands, beneficiary statements, and demand letters target sub-48-hour turnaround with per-diem interest grids included.",
  },
  {
    icon: Calendar,
    title: "Tax Docs by January 31",
    proof:
      "1098s and 1099-INTs delivered to investors and borrowers before January 31, every year — locked December 28.",
  },
  {
    icon: FileBarChart,
    title: "GAAP-Aligned Statements",
    proof:
      "Monthly statements your auditor will accept. Direct read access for auditors and fund admins during fieldwork.",
  },
  {
    icon: MapPin,
    title: "California-Native Compliance",
    proof:
      "Civil Code §2924, Homeowner Bill of Rights, SB91, RESPA, and TILA are the baseline — not a customization. Built by California-licensed brokers.",
  },
  {
    icon: ShieldCheck,
    title: "Segregated Trust Accounting",
    proof:
      "Escrow, impound, and investor funds held in segregated trust accounts. Audit-trail receipts on every distribution. Never commingled.",
  },
];

export function WhyDSI() {
  return (
    <section className="bg-white py-20 lg:py-section-lg">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="Why DSI"
            title="The Standards. The Proof."
            description="Six commitments we live by — and the operational evidence behind each one."
            centered
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <FadeIn key={reason.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center shrink-0">
                    <reason.icon className="w-5 h-5 text-jade-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-700 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-body/80 leading-relaxed">
                      {reason.proof}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
