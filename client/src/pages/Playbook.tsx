/* Playbook.tsx — Harvest Table Design System
   $27 Family Meal Prep Playbook — the tripwire / low-ticket offer.
   Shows a buy button when BIZ.playbookBuyUrl is set; otherwise a launch waitlist. */

import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { BIZ } from "@/lib/config";

const STARTER_KIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_starter_kit-7YvHvMC9dEAq2p8xRYAAFF.webp";

const included = [
  { title: "30 Kid-Approved Recipes", desc: "Every recipe tested against real picky eaters. Tacos, pastas, bowls, burgers, pizzas — formats your family already loves." },
  { title: "The Weekly Prep System", desc: "The 90-minute Sunday routine that makes every weeknight dinner a 30-minute job — even on your worst days." },
  { title: "4 Weeks of Done-For-You Plans", desc: "Complete weekly dinner plans with grocery lists organized by store section." },
  { title: "The Substitution Matrix", desc: "Allergies, aversions, and 'we're out of that' — one chart solves all of it." },
  { title: "Budget Playbook", desc: "How families eat plant-based for less than they spend now. Beans are cheap; we make them delicious." },
  { title: "Printable Kitchen Cards", desc: "Every recipe as a printable card — no scrolling a phone with sauce on your hands." },
];

export default function Playbook() {
  const hasCheckout = Boolean(BIZ.playbookBuyUrl);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Digital Download — ${BIZ.prices.playbook}</p>
              <h1 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "oklch(0.22 0.04 140)", lineHeight: "1.08" }}>
                The Family Meal Prep<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>Playbook</span>
              </h1>
              <p className="text-lg leading-relaxed mb-6 max-w-lg" style={{ color: "oklch(0.35 0.04 140)" }}>
                30 kid-approved plant-based recipes and the weekly prep system that gets dinner on the table in 30
                minutes — for less than the cost of one takeout order.
              </p>

              {hasCheckout ? (
                <div className="flex flex-col gap-3 max-w-sm">
                  <a href={BIZ.playbookBuyUrl} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary w-full">
                      Get the Playbook — ${BIZ.prices.playbook}
                    </button>
                  </a>
                  <p className="text-xs flex items-center gap-2" style={{ color: "oklch(0.45 0.04 140)" }}>
                    <ShieldCheck className="w-4 h-4" /> 7-day money-back guarantee. Instant download.
                  </p>
                </div>
              ) : (
                <div className="card-sage p-7 max-w-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <h3 className="font-display text-lg" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.1rem" }}>
                      Launching soon — join the list for the launch discount
                    </h3>
                  </div>
                  <LeadForm
                    source="playbook-waitlist"
                    buttonLabel="Notify Me + Launch Discount"
                    successTitle="You're on the list!"
                    successBody="We'll email you the moment the Playbook launches — with your discount."
                  />
                </div>
              )}
            </div>
            <div>
              <img
                src={STARTER_KIT_IMG}
                alt="Family Meal Prep Playbook preview"
                className="rounded-2xl w-full object-cover"
                style={{ maxHeight: "560px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <p className="section-label mb-3 text-center">What's Inside</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: "oklch(0.22 0.04 140)" }}>
            The Answer to “What's for Dinner?” — For a Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <div key={i} className="card-sage p-6 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "oklch(0.52 0.12 40)" }} />
                <div>
                  <h3 className="font-ui font-semibold mb-1" style={{ color: "oklch(0.22 0.04 140)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.04 140)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-20" style={{ background: "oklch(0.22 0.04 140)" }}>
        <div className="container max-w-2xl mx-auto text-center">
          <ShieldCheck className="w-10 h-10 mx-auto mb-5" style={{ color: "oklch(0.72 0.10 40)" }} />
          <h2 className="font-display text-3xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
            The Picky-Eater Guarantee
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "oklch(0.72 0.06 110)" }}>
            If your family doesn't find at least five new favorite dinners in the Playbook, email us within 7 days
            and we'll refund you — no questions, no hoops.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
