import {
  User,
  Wallet,
  Building2,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { CLIENTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  User,
  Wallet,
  Building2,
  Handshake,
  TrendingUp,
};

export function ClientsWeServe() {
  return (
    <section className="bg-white py-20 lg:py-section-lg">
      <div className="section-padding">
        <div className="max-container">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Trusted by the Private Lending Industry"
            description="DSI provides tailored servicing solutions for every participant in the private lending ecosystem."
            centered
          />

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {CLIENTS.map((client, i) => {
              const Icon = iconMap[client.icon] || User;
              return (
                <FadeIn key={client.label} delay={i * 0.08}>
                  <div className="text-center p-6 rounded-xl border border-surface-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-600/5 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-slate-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm text-slate-700">
                      {client.label}
                    </h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
