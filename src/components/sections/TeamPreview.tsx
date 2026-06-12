"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function TeamPreview() {
  return (
    <section className="bg-white py-20 lg:py-section">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="Our People"
            title="A Family-Run Team You Can Reach"
            description="DSI is purpose-built around relationship servicing. Every loan, every investor, every borrower — handled by a small, accountable team that picks up the phone."
            centered
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM.slice(0, 8).map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.05} className="text-center">
                <div className="relative w-32 h-32 lg:w-36 lg:h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-emerald-500/10 group-hover:ring-emerald-500/30 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 128px, 144px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-slate-700 text-sm lg:text-base">
                  {member.name}
                </h3>
                <p className="text-body/60 text-xs lg:text-sm mt-1">
                  {member.title}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            >
              Meet the full team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
