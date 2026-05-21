/* Blog.tsx — Harvest Table Design System — Coming Soon placeholder */

import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_hero-WrzzMRL47rTRa5AnNdZVDM.webp";

const upcomingPosts = [
  { category: "Getting Started", title: "The 5 Biggest Mistakes Beginners Make Going Plant-Based (And How to Avoid Them)" },
  { category: "Meal Planning", title: "How to Meal Prep a Full Week of Plant-Based Meals in 2 Hours" },
  { category: "Nutrition", title: "Where Do You Get Your Protein? The Honest Answer" },
  { category: "Budget", title: "How to Eat Plant-Based for Under $75 a Week" },
  { category: "Family", title: "How to Transition Your Family Without Starting a Dinner Table War" },
  { category: "Recipes", title: "10 Plant-Based Comfort Food Recipes That Actually Satisfy" },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      <section className="relative pt-16" style={{ minHeight: "45vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.90) 0%, oklch(0.22 0.04 140 / 0.60) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(45vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p className="section-label mb-3 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>The Blog</p>
          <h1 className="font-display text-5xl mb-4 animate-fade-up animate-fade-up-delay-1" style={{ color: "oklch(0.99 0.008 80)" }}>
            Real Talk About<br />
            <span style={{ color: "oklch(0.72 0.10 40)" }}>Plant-Based Living</span>
          </h1>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full mb-6 font-ui text-sm font-semibold" style={{ background: "oklch(0.52 0.12 40 / 0.12)", color: "oklch(0.52 0.12 40)" }}>
            Coming Soon
          </div>
          <h2 className="font-display text-3xl mb-4" style={{ color: "oklch(0.22 0.04 140)" }}>
            The Blog Is Being Built
          </h2>
          <p className="text-base" style={{ color: "oklch(0.40 0.04 140)" }}>
            We're writing the most practical, honest plant-based content on the internet. Subscribe to the newsletter to be the first to know when posts go live.
          </p>
        </div>

        <div className="container max-w-3xl mx-auto">
          <p className="section-label mb-6 text-center">Coming Up First</p>
          <div className="space-y-3">
            {upcomingPosts.map((post, i) => (
              <div key={i} className="card-sage p-5 flex items-center gap-4">
                <span className="font-ui text-xs font-semibold px-2 py-1 rounded flex-shrink-0" style={{ background: "oklch(0.52 0.12 40 / 0.12)", color: "oklch(0.52 0.12 40)" }}>
                  {post.category}
                </span>
                <p className="font-ui text-sm font-medium" style={{ color: "oklch(0.22 0.04 140)" }}>{post.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container max-w-xl mx-auto text-center mt-12">
          <Link href="/newsletter">
            <button className="btn-primary">
              Get Notified When Posts Go Live <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
