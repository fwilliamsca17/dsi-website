import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "Loan Servicing", href: "/services#loan-servicing" },
    { label: "Processing & Documentation", href: "/services#processing" },
    { label: "Non-Performing & Distressed", href: "/services#distressed" },
  ],
  Company: [
    { label: "About DSI", href: "/about" },
    { label: "Why DSI", href: "/why-dsi" },
    { label: "Our Team", href: "/team" },
    { label: "For Investors", href: "/investors" },
    { label: "For Lenders", href: "/lenders" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="mb-5">
                <Image
                  src="/images/dsi-logo.png"
                  alt="Direct Servicing Initiative"
                  width={180}
                  height={62}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                {COMPANY.description}
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {COMPANY.email}
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  {COMPANY.address}
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-heading font-semibold text-sm mb-4 text-white">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-emerald-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Direct Servicing Initiative. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
