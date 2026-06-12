import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { TEAM } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { TeamJsonLd, PageSeo } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Direct Servicing Initiative. Founded by Frank Williams with Juan N. Williams as Broker of Record. Family-owned operations team handling every file from boarding through payoff.",
};

export default function TeamPage() {
  return (
    <>
      <PageSeo
        title="Our Team | Direct Servicing Initiative"
        description="Meet the DSI team — Frank Williams (Principal, CCIM) and the operations team that handles every file from boarding through payoff."
        path="/team"
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Our Team", href: "/team" },
        ]}
      />
      <TeamJsonLd />
      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-padding">
          <div className="max-container max-w-4xl">
            <FadeIn>
              <p className="eyebrow !text-jade-300 mb-4">Our Team</p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-display-xl text-pearl mb-6 text-balance">
                The People Behind the Platform
              </h1>
              <p className="text-pearl/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
                A team of finance and operations professionals dedicated to
                delivering institutional-grade servicing with a personal touch.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container">
            {/* Principal - featured */}
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center mb-16">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-surface-200">
                  {/* Founder always has a headshot — the assertion narrows the
                      string | null union; if a future migration nulls it, the
                      build will fail loudly rather than rendering a broken img. */}
                  <Image
                    src={TEAM[0].image as string}
                    alt={TEAM[0].name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-heading font-bold text-heading-xl text-slate-700 mb-1">
                  {TEAM[0].name}
                </h2>
                <p className="text-emerald-600 font-medium text-lg">
                  {TEAM[0].title}
                </p>
              </div>
            </FadeIn>

            {/* Rest of team */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {TEAM.slice(1).map((member, i) => (
                <FadeIn key={member.name} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-3 border-surface-200 bg-emerald-50 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-emerald-600/30" />
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-sm text-slate-700 mb-0.5">
                      {member.name}
                    </h3>
                    <p className="text-xs text-body/60">{member.title}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-surface-100 py-20 lg:py-section-lg">
        <div className="section-padding">
          <div className="max-container text-center">
            <SectionHeading
              eyebrow="Our Culture"
              title="Family-Owned, Investor-Focused"
              description="DSI is a family-owned company that operates with the accountability and integrity that comes from personal ownership. We don't answer to faceless shareholders — we answer to the investors and lenders who trust us with their livelihoods."
              centered
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-atmosphere relative overflow-hidden py-16 lg:py-20">
        <div className="section-padding">
          <div className="max-container text-center">
            <FadeIn>
              <h2 className="font-heading text-heading-xl text-pearl mb-4">
                Want to join the DSI team?
              </h2>
              <p className="text-pearl/60 mb-8 max-w-lg mx-auto">
                We&apos;re always looking for talented people who share our
                commitment to excellence and transparency.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
