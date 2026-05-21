/* Nav.tsx — Harvest Table Design System
   Deep olive sticky nav with sienna CTA, mobile hamburger menu */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "/mission-planner", label: "Free Planner" },
  { href: "/starter-kit", label: "Starter Kit" },
  { href: "/course", label: "10-Week Course" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.22 0.04 140 / 0.97)"
          : "oklch(0.22 0.04 140)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.15)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ background: "oklch(0.52 0.12 40)" }}
              >
                <Leaf className="w-4 h-4" style={{ color: "oklch(0.99 0.008 80)" }} />
              </div>
              <span
                className="font-display text-lg tracking-tight"
                style={{ color: "oklch(0.99 0.008 80)", letterSpacing: "-0.02em" }}
              >
                Operation<span style={{ color: "oklch(0.72 0.10 40)" }}>PlantBased</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="font-ui text-sm transition-colors duration-150"
                  style={{
                    color:
                      location === link.href
                        ? "oklch(0.72 0.10 40)"
                        : "oklch(0.88 0.01 80)",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/newsletter">
              <span
                className="font-ui text-sm transition-colors duration-150"
                style={{ color: "oklch(0.88 0.01 80)" }}
              >
                Newsletter
              </span>
            </Link>
            <Link href="/mission-planner">
              <button className="btn-primary text-sm py-2 px-5">
                Take the Free Quiz →
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors duration-150"
            style={{ color: "oklch(0.99 0.008 80)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "500px" : "0",
          background: "oklch(0.20 0.04 140)",
        }}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className="py-3 px-2 font-ui text-base rounded-md transition-colors duration-150"
                style={{
                  color:
                    location === link.href
                      ? "oklch(0.72 0.10 40)"
                      : "oklch(0.88 0.01 80)",
                  background:
                    location === link.href
                      ? "oklch(0.28 0.04 140)"
                      : "transparent",
                }}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <Link href="/newsletter">
            <div className="py-3 px-2 font-ui text-base" style={{ color: "oklch(0.88 0.01 80)" }}>
              Newsletter
            </div>
          </Link>
          <div className="pt-2">
            <Link href="/mission-planner">
              <button className="btn-primary w-full text-sm">
                Take the Free Quiz →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
