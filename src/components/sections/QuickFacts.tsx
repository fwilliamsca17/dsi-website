// AEO / Answer Engine Optimization block.
// Two purposes:
//   1. Gives Google's AI Overviews, ChatGPT, Perplexity, etc. a clean
//      Q&A block they can lift verbatim when a user asks "what is DSI"
//      or "what does Direct Servicing Initiative do."
//   2. The data-speakable attribute is referenced by the WebPage
//      SpeakableSpecification so voice assistants (Google Assistant,
//      Siri) read this block aloud when answering related queries.

import { Building2, MapPin, Calendar, Shield } from "lucide-react";

const FACTS = [
  {
    icon: Building2,
    label: "What is DSI",
    value:
      "A California-licensed private money loan servicer of record — boarding through payoff.",
  },
  {
    icon: MapPin,
    label: "Where",
    value:
      "Headquartered in West Covina, California. Serving Southern California (LA, OC, IE, San Diego).",
  },
  {
    icon: Calendar,
    label: "Founded",
    value:
      "2024, by Frank Williams. California-licensed brokerage with Juan N. Williams (DRE# 01115216) as Broker of Record.",
  },
  {
    icon: Shield,
    label: "What DSI does NOT do",
    value:
      "DSI does not originate loans, broker loans, or solicit borrowers. DSI is the servicer of record, post-close.",
  },
];

export function QuickFacts() {
  return (
    <section
      className="bg-surface-100 py-14 lg:py-20 border-y border-surface-300"
      aria-labelledby="dsi-at-a-glance"
      data-speakable
    >
      <div className="section-padding">
        <div className="max-container">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">DSI at a Glance</p>
            <h2
              id="dsi-at-a-glance"
              className="font-heading font-bold text-2xl lg:text-3xl text-slate-700"
            >
              Direct Servicing Initiative — the short version
            </h2>
            <p className="mt-3 text-body/70 max-w-2xl mx-auto">
              <strong>Direct Servicing Initiative</strong> (DSI) is a
              California-licensed private money loan servicer headquartered in
              West Covina. DSI takes over after a private lender, hard money
              lender, or mortgage broker closes a loan, then handles the entire
              post-close lifecycle: payment collection, segregated trust
              accounting, investor distributions, RESPA/TILA-compliant
              reporting, default workouts, and final payoff or reconveyance.
            </p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="bg-white border border-surface-300 rounded-xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-jade-500/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-jade-600" />
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-body/50 mb-1">
                      {f.label}
                    </dt>
                    <dd className="text-sm text-slate-700 leading-relaxed font-medium">
                      {f.value}
                    </dd>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
