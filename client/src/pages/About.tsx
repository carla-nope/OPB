/* About.tsx — Harvest Table Design System */

import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      <section className="pt-28 pb-16" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container max-w-3xl mx-auto">
          <p className="section-label mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl mb-6" style={{ color: "oklch(0.22 0.04 140)", lineHeight: "1.08" }}>
            We Built the System<br />
            <span style={{ color: "oklch(0.52 0.12 40)" }}>We Wish We Had.</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.04 140)" }}>
            Operation Plant Based was created for people who are genuinely curious about plant-based eating but feel overwhelmed, confused, or like they've already tried and failed.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>
            The problem isn't willpower. It's that most plant-based resources are designed for people who are already committed — not for beginners who are still figuring out if this is even for them. We built a system that starts where you actually are.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="section-label mb-3">Our Philosophy</p>
              <h2 className="font-display text-4xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
                No Perfection.<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>Just Progress.</span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.35 0.04 140)" }}>
                <p>We don't believe in all-or-nothing. We don't believe in food guilt. We don't believe you need to be a chef, a nutritionist, or someone with unlimited time and money to eat more plants.</p>
                <p>We believe in practical systems, honest information, and community. We believe the best diet is the one you can actually sustain — and that plant-based eating, done right, can be the most satisfying way to eat.</p>
                <p>This is not a diet. It's a mission.</p>
              </div>
            </div>
            <div>
              <img src={COMMUNITY_IMG} alt="Plant-based community" className="rounded-2xl w-full object-cover shadow-xl" style={{ aspectRatio: "4/3" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(0.28 0.04 140)" }}>
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
            Ready to Start Your Mission?
          </h2>
          <p className="mb-8" style={{ color: "oklch(0.72 0.06 110)" }}>
            Take the free Mission Planner and get a personalized roadmap in 5 minutes.
          </p>
          <Link href="/mission-planner">
            <button className="btn-primary">
              Take the Free Planner <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
