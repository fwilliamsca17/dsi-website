"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Glass intensity ramps in once the user scrolls off the hero atmosphere.
  // While at top, the header floats over the nocturne — barely there.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-pearl/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`text-pearl/70 text-xs py-1.5 transition-colors ${scrolled ? "bg-ink-950/60" : "bg-ink-950/30 backdrop-blur-sm"}`}>
        <div className="section-padding">
          <div className="max-container flex justify-end items-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 hover:text-jade-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="section-padding">
        <div className="max-container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/dsi-logo.png"
              alt="Direct Servicing Initiative"
              width={180}
              height={62}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={(e) => {
                  // Don't yank the submenu away from a keyboard user just
                  // because the pointer crossed the nav.
                  if (!e.currentTarget.contains(document.activeElement)) {
                    setOpenDropdown(null);
                  }
                }}
                // Keyboard parity with hover: focus entering the group opens
                // the submenu, focus leaving it closes, Escape dismisses and
                // hands focus back to the trigger so Tab doesn't reset to top.
                onFocus={() => link.children && setOpenDropdown(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenDropdown(null);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.currentTarget.querySelector("a")?.focus();
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-pearl/80 hover:text-jade-300 transition-colors rounded-lg"
                  {...(link.children && {
                    "aria-expanded": openDropdown === link.label,
                  })}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-ink-950/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-ink-950/40 border border-pearl/10 py-2 min-w-[280px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-pearl/80 hover:text-jade-300 hover:bg-pearl/[0.04] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:inline-flex btn-jade !px-5 !py-2.5 text-sm">
              Get Started
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-pearl"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — always in the DOM (hidden when closed) so the
          hamburger's aria-controls always points at a real element. */}
      {
        <div
          id="mobile-nav"
          hidden={!mobileOpen}
          className="lg:hidden bg-ink-950/95 backdrop-blur-xl border-t border-pearl/10"
        >
          <div className="section-padding py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-pearl/80 hover:text-jade-300 hover:bg-pearl/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-pearl/60 hover:text-jade-300 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-jade w-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      }

      {/* Hairline jade accent — visible when scrolled */}
      {scrolled && (
        <div className="hairline-jade absolute inset-x-0 bottom-0 h-px" />
      )}
    </header>
  );
}
