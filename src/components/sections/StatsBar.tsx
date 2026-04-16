"use client";

import { STATS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export function StatsBar() {
  return (
    <section className="bg-white border-b border-surface-300">
      <div className="section-padding py-12 lg:py-16">
        <div className="max-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-slate-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-body/60">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
