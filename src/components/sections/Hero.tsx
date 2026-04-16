"use client";

import Link from "next/link";
import { ArrowRight, Shield, BarChart3, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-slate pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative section-padding">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-white mb-6 text-balance">
                You fund them. We collect.{" "}
                <span className="text-emerald-400">Simple and Direct.</span>
              </h1>

              <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
                Peace of mind, transparency, and efficiency in loan servicing.
                Tailored for individual investors, private lenders, hedge funds,
                and investment companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors px-4 py-4"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="hidden lg:grid grid-cols-1 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Compliance-First",
                  desc: "State & federal regulatory compliance baked into every process",
                },
                {
                  icon: BarChart3,
                  title: "Real-Time Dashboards",
                  desc: "24/7 investor portal with live portfolio analytics and reporting",
                },
                {
                  icon: Clock,
                  title: "End-to-End Servicing",
                  desc: "From loan boarding to payoff — we handle the entire lifecycle",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] transition-colors"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
