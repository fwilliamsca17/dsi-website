"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, BarChart3, Clock } from "lucide-react";
import { STATS } from "@/lib/constants";

// Rotating loan types DSI services — drives SEO depth and signals
// the breadth of private-money product types we board.
const ROTATING_TYPES = [
  "Bridge Loan",
  "Hard Money Note",
  "Construction Draw",
  "Fractional Trust Deed",
  "Distressed Workout",
  "SDIRA Note",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_TYPES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-atmosphere relative flex min-h-screen items-center overflow-hidden">
      {/* Drifting light source */}
      <div className="hero-glow pointer-events-none absolute -right-[10%] -top-[15%] h-[65vw] w-[65vw] motion-safe:animate-glow-drift" />
      {/* Film grain */}
      <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.07]" />
      {/* Vignette */}
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-container section-padding w-full pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p
              className="hero-in mb-6 flex items-center gap-3 text-label font-semibold uppercase tracking-[0.22em] text-jade-300"
              style={{ animationDelay: "0ms" }}
            >
              <span className="h-px w-8 bg-jade-400/70" />
              Private Loan Servicing · Southern California
            </p>

            <h1
              className="hero-in-lcp mb-6 font-heading font-bold text-display-lg text-pearl leading-[1.04] md:text-display-xl"
              style={{ animationDelay: "90ms" }}
            >
              You fund them. We collect.
              <br />
              <span className="text-jade-gradient">Simple and Direct.</span>
            </h1>

            <div
              className="hero-in mb-7 flex h-12 items-center md:h-14"
              style={{ animationDelay: "200ms" }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-light text-pearl/70 md:text-2xl"
                >
                  We service your{" "}
                  <span className="font-medium text-jade-300">
                    {ROTATING_TYPES[currentIndex]}
                  </span>{" "}
                  from boarding to payoff.
                </motion.p>
              </AnimatePresence>
            </div>

            <p
              className="hero-in mb-10 max-w-xl text-lg leading-relaxed text-pearl/55"
              style={{ animationDelay: "280ms" }}
            >
              Peace of mind, transparency, and efficiency for individual
              investors, private lenders, hedge funds, and investment
              companies. California-licensed brokerage on file.
            </p>

            {/* Dual audience CTAs */}
            <div
              className="hero-in flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "360ms" }}
            >
              <Link href="/lenders" className="btn-jade group">
                I&apos;m a Lender
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/investors" className="btn-ghost-light group">
                I&apos;m an Investor
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Inline trust strip — derived from STATS so the numbers can't
                drift from StatsBar and llms.txt */}
            <div
              className="hero-in mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-pearl/50"
              style={{ animationDelay: "460ms" }}
            >
              {STATS.slice(0, 3).map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && <span className="h-4 w-px bg-pearl/15" />}
                  <span>
                    <span className="font-semibold text-pearl">
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </span>{" "}
                    {stat.label.toLowerCase()}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="hidden lg:grid grid-cols-1 gap-4">
            {[
              {
                icon: Shield,
                title: "Compliance-First",
                desc: "Civil Code §2924, HBOR, RESPA, and TILA baked into every workflow",
              },
              {
                icon: BarChart3,
                title: "GAAP-Aligned Reporting",
                desc: "Monthly statements your CPA, fund admin, and auditor will accept",
              },
              {
                icon: Clock,
                title: "48-Hour Demand Turnaround",
                desc: "Payoff demands and beneficiary statements out the door fast",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="hero-in flex items-start gap-4 rounded-xl border border-pearl/10 bg-pearl/[0.04] p-5 backdrop-blur-sm transition-colors hover:bg-pearl/[0.08]"
                style={{ animationDelay: `${520 + i * 90}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-jade-500/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-jade-300" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-pearl text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-pearl/55 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-pearl/40 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 motion-safe:animate-scroll-cue" />
      </div>

      {/* Bottom hairline */}
      <div className="hairline-jade absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
