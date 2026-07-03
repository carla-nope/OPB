/* Footer.tsx — Harvest Table Design System
   Deep olive footer with warm white text, sienna accents */

import { Link } from "wouter";
import { Leaf, Instagram, Mail, Compass } from "lucide-react";
import { BIZ } from "@/lib/config";

const exploreLinks = [
  { href: "/starter-kit", label: "Free 5-Day Starter Kit" },
  { href: "/mission-planner", label: "Free 2-Minute Quiz" },
  { href: "/playbook", label: `Meal Prep Playbook — $${BIZ.prices.playbook}` },
  { href: "/course", label: "10-Week Course" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Blog" },
  { href: "/newsletter", label: "Newsletter" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Health Disclaimer" },
  { href: "/affiliate", label: "Affiliate Disclosure" },
];

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.22 0.04 140)", color: "oklch(0.88 0.01 80)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/">
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
            </Link>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "oklch(0.72 0.06 110)" }}>
              {BIZ.tagline} One meal, one week, one habit at a time.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={BIZ.pinterestUrl} target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.72 0.06 110)" }} aria-label="Pinterest">
                <Compass className="w-5 h-5" />
              </a>
              <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.72 0.06 110)" }} aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`mailto:${BIZ.contactEmail}`} style={{ color: "oklch(0.72 0.06 110)" }} aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <FooterLinkColumn title="Explore" links={exploreLinks} />
          <FooterLinkColumn title="Legal" links={legalLinks} />
        </div>

        <hr className="my-8 opacity-20" style={{ borderColor: "oklch(0.99 0.008 80)" }} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs" style={{ color: "oklch(0.72 0.06 110)" }}>
          <p>© {new Date().getFullYear()} {BIZ.name}. All rights reserved.</p>
          <p>Plant-forward resources for busy families. Not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="section-label mb-4" style={{ color: "oklch(0.52 0.12 40)" }}>
        {title}
      </p>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <span className="transition-colors duration-150 hover:text-white" style={{ color: "oklch(0.72 0.06 110)" }}>
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
