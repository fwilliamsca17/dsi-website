import Link from "next/link";
import {
  ArrowRight,
  PieChart,
  Bell,
  FileText,
  DollarSign,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    icon: PieChart,
    title: "Portfolio Dashboard",
    desc: "Real-time loan performance, payment status, and portfolio metrics",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    desc: "Instant notifications for payments, defaults, and milestone events",
  },
  {
    icon: FileText,
    title: "Monthly Statements",
    desc: "Detailed investor statements with complete transaction history",
  },
  {
    icon: DollarSign,
    title: "Distribution Tracking",
    desc: "Transparent distribution calculations and payment confirmation",
  },
];

export function InvestorCTA() {
  return (
    <section className="bg-gradient-slate py-20 lg:py-section-lg overflow-hidden">
      <div className="section-padding">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <p className="eyebrow !text-emerald-400 mb-4">For Investors</p>
              <h2 className="font-heading text-display-lg lg:text-display-xl text-white mb-6">
                Your investments,{" "}
                <span className="text-emerald-400">always visible</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                Access real-time dashboards, automated monthly statements, and
                instant alerts. DSI gives you complete visibility into every loan
                in your portfolio.
              </p>
              <Link href="/investors" className="btn-primary">
                Investor Portal Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 0.1}>
                  <div className="card-dark p-6">
                    <feature.icon className="w-8 h-8 text-emerald-400 mb-3" />
                    <h3 className="font-heading font-semibold text-white text-sm mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
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
