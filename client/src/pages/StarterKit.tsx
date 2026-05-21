/* StarterKit.tsx — Harvest Table Design System
   Conversion-focused sales page for the $29 Plant-Based Starter Kit */

import { ArrowRight, CheckCircle2, Download, Star, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const STARTER_KIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_starter_kit-7YvHvMC9dEAq2p8xRYAAFF.webp";

const included = [
  { title: "7-Day Meal Plan", desc: "A full week of breakfast, lunch, dinner, and snacks — all plant-based, all beginner-friendly." },
  { title: "Grocery Guide", desc: "A categorized shopping list with budget tips and where to find specialty items." },
  { title: "Pantry Checklist", desc: "The 20 staples every plant-based kitchen needs, with brand recommendations." },
  { title: "20 Beginner Recipes", desc: "Quick, easy, family-approved recipes with full nutritional info." },
  { title: "Protein Cheat Sheet", desc: "How to hit your protein goals on a plant-based diet — without obsessing over it." },
  { title: "Eating Out Guide", desc: "How to order plant-based at restaurants, fast food, and social events." },
  { title: "Quick-Start Guide", desc: "A step-by-step 'what to do first' guide for your first 7 days." },
  { title: "Family Transition Tips", desc: "How to bring your household along without forcing it." },
];

const faqs = [
  { q: "Is this a physical product?", a: "No — this is a digital download. You'll receive instant access to all files as PDFs immediately after purchase." },
  { q: "Do I need to be vegan to use this?", a: "Not at all. The Starter Kit is designed for people who are curious or just beginning. You can use it to transition gradually or go all-in — your choice." },
  { q: "What if I have dietary restrictions?", a: "The kit includes a variety of recipes and a substitution guide. Most recipes are naturally gluten-free or have easy swaps noted." },
  { q: "Is there a refund policy?", a: "Yes. If you're not satisfied within 7 days of purchase, email us and we'll refund you — no questions asked." },
];

export default function StarterKit() {
  const handlePurchase = () => {
    toast.info("Checkout coming soon! Connect Stripe to activate purchases.", {
      description: "See the service integration guide for setup instructions.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-24 pb-16" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Digital Download — Instant Access</p>
              <h1 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "oklch(0.22 0.04 140)", lineHeight: "1.08" }}>
                The Plant-Based<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>Starter Kit</span>
              </h1>
              <p className="text-lg leading-relaxed mb-6 max-w-lg" style={{ color: "oklch(0.35 0.04 140)" }}>
                Everything a beginner needs to start eating plant-based this week — without confusion, overwhelm, or expensive specialty groceries.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <span className="font-display text-5xl font-black" style={{ color: "oklch(0.22 0.04 140)" }}>$29</span>
                  <span className="font-ui text-sm ml-2" style={{ color: "oklch(0.55 0.04 110)" }}>one-time · instant download</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="btn-primary text-base" onClick={handlePurchase}>
                  Get Instant Access — $29 <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm font-ui" style={{ color: "oklch(0.45 0.04 140)" }}>
                <ShieldCheck className="w-4 h-4" style={{ color: "oklch(0.52 0.12 40)" }} />
                7-day money-back guarantee. No questions asked.
              </div>
            </div>
            <div className="relative">
              <img
                src={STARTER_KIT_IMG}
                alt="Plant-based starter kit flatlay"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container">
          <div className="mb-12">
            <p className="section-label mb-2">What's Inside</p>
            <h2 className="font-display text-4xl" style={{ color: "oklch(0.22 0.04 140)" }}>
              8 Tools to Start<br />
              <span style={{ color: "oklch(0.52 0.12 40)" }}>This Week</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {included.map((item, i) => (
              <div key={i} className="card-sage p-5 flex flex-col gap-3">
                <CheckCircle2 className="w-5 h-5" style={{ color: "oklch(0.52 0.12 40)" }} />
                <h3 className="font-display text-base font-bold" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1rem" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-16" style={{ background: "oklch(0.28 0.04 140)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" style={{ color: "oklch(0.72 0.10 40)" }} />
            ))}
          </div>
          <p className="font-serif-italic text-xl md:text-2xl mb-4" style={{ color: "oklch(0.88 0.01 80)" }}>
            "The Starter Kit paid for itself in the first week. I stopped wasting money on groceries I didn't know how to use. The grocery guide alone is worth $29."
          </p>
          <p className="font-ui text-sm" style={{ color: "oklch(0.62 0.04 110)" }}>— Danielle R., Chicago, IL</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-3xl mb-10 text-center" style={{ color: "oklch(0.22 0.04 140)" }}>
            Questions?
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="card-sage p-6">
                <h3 className="font-ui font-semibold mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16" style={{ background: "oklch(0.52 0.12 40)" }}>
        <div className="container text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
            Ready to Start This Week?
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.88 0.06 60)" }}>
            Instant digital download. 7-day money-back guarantee.
          </p>
          <button className="btn-outline" style={{ color: "oklch(0.99 0.008 80)", borderColor: "oklch(0.99 0.008 80 / 0.6)" }} onClick={handlePurchase}>
            Get the Starter Kit — $29 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
