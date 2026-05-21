/* Footer.tsx — Harvest Table Design System
   Deep olive footer with warm white text, sienna accents */

import { Link } from "wouter";
import { Leaf, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.22 0.04 140)", color: "oklch(0.88 0.01 80)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.52 0.12 40)" }}
              >
                <Leaf className="w-4 h-4" style={{ color: "oklch(0.99 0.008 80)" }} />
              </div>
              <span className="font-display text-lg" style={{ color: "oklch(0.99 0.008 80)" }}>
                Operation<span style={{ color: "oklch(0.72 0.10 40)" }}>PlantBased</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "oklch(0.72 0.06 110)" }}>
              Helping beginners transition to a plant-based lifestyle — one meal, one week, one habit at a time.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-150"
                style={{ color: "oklch(0.72 0.06 110)" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@operationplantbased.com"
                className="transition-colors duration-150"
                style={{ color: "oklch(0.72 0.06 110)" }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-4" style={{ color: "oklch(0.52 0.12 40)" }}>
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/mission-planner", label: "Free Mission Planner" },
                { href: "/starter-kit", label: "Starter Kit — $29" },
                { href: "/course", label: "10-Week Course" },
                { href: "/blog", label: "Blog" },
                { href: "/newsletter", label: "Newsletter" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="transition-colors duration-150 hover:text-white"
                      style={{ color: "oklch(0.72 0.06 110)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="section-label mb-4" style={{ color: "oklch(0.52 0.12 40)" }}>
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Use" },
                { href: "/disclaimer", label: "Health Disclaimer" },
                { href: "/affiliate", label: "Affiliate Disclosure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="transition-colors duration-150 hover:text-white"
                      style={{ color: "oklch(0.72 0.06 110)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 opacity-20" style={{ borderColor: "oklch(0.99 0.008 80)" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "oklch(0.55 0.04 110)" }}>
          <p>© {new Date().getFullYear()} Operation Plant Based. All rights reserved.</p>
          <p className="text-center">
            This site is for educational purposes only. Not medical advice.{" "}
            <Link href="/disclaimer">
              <span className="underline">See disclaimer.</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
