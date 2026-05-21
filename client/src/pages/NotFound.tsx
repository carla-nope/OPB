/* NotFound.tsx — Harvest Table Design System */

import { Link } from "wouter";
import { ArrowRight, Leaf } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />
      <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "oklch(0.93 0.02 110)" }}
        >
          <Leaf className="w-10 h-10" style={{ color: "oklch(0.52 0.12 40)" }} />
        </div>
        <p className="section-label mb-3">404 — Page Not Found</p>
        <h1 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
          Lost in the<br />
          <span style={{ color: "oklch(0.52 0.12 40)" }}>Produce Aisle?</span>
        </h1>
        <p className="text-base max-w-sm mb-8" style={{ color: "oklch(0.40 0.04 140)" }}>
          This page doesn't exist, but your plant-based mission does. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="btn-primary">
              Back to Home <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/mission-planner">
            <button className="btn-outline">
              Take the Free Planner
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
