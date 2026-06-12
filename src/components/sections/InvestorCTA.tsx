import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Layers,
  FileText,
  Calendar,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    icon: Landmark,
    title: "SDIRA-Compliant",
    desc: "Distributions routed to Equity Trust, Quest, Madison, and other custodians with correct coding",
  },
  {
    icon: Layers,
    title: "Fractional Notes",
    desc: "Pro-rata distributions to the penny — three investors on one note or thirty",
  },
  {
    icon: FileText,
    title: "K-1 Supporting Schedules",
    desc: "Loan-level detail your fund admin and auditor will accept on first review",
  },
  {
    icon: Calendar,
    title: "Tax Docs by January 31",
    desc: "1098s and 1099-INTs locked December 28 — file your return on time, every year",
  },
];

export function InvestorCTA() {
  return (
    <section className="hero-atmosphere section-padding-y relative overflow-hidden">
      <div className="hairline-jade absolute inset-x-0 top-0 h-px" />
      <div className="hero-glow pointer-events-none absolute -left-[10%] top-1/4 h-[55vw] w-[55vw] motion-safe:animate-glow-drift" />

      <div className="relative z-10 section-padding">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <p className="eyebrow !text-jade-300 mb-4">For Investors</p>
              <h2 className="font-heading font-bold text-display-lg lg:text-display-xl text-pearl mb-6">
                Reporting your{" "}
                <span className="text-jade-gradient">CPA won&apos;t apologize for</span>
              </h2>
              <p className="text-pearl/60 text-lg leading-relaxed mb-8 max-w-lg">
                Self-directed IRAs, fractionalized first-trusts, fund SMAs,
                family-office mandates — DSI runs the servicing math and the
                tax docs that sophisticated investors expect on private notes.
              </p>
              <Link href="/investors" className="btn-jade group">
                See the Investor Experience
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="card-dark p-6">
                    <feature.icon className="w-8 h-8 text-jade-300 mb-3" />
                    <h3 className="font-heading font-semibold text-pearl text-sm mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-pearl/55 text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
