/* Course.tsx — Harvest Table Design System
   10-Week Course / Beta Cohort Waitlist page */

import { useState } from "react";
import { ArrowRight, CheckCircle2, Video, Users, BookOpen, Calendar } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";

const weeks = [
  { week: "01", title: "Why Plant-Based?", desc: "The science, the myths, and your personal 'why' that will keep you going." },
  { week: "02", title: "Building Your Foundation", desc: "Pantry setup, grocery strategy, and the 10 staples that make everything easier." },
  { week: "03", title: "Mastering Protein", desc: "How to meet your protein needs without obsessing — and without supplements." },
  { week: "04", title: "Quick Meals for Real Life", desc: "30-minute meals, batch cooking, and the 5-ingredient formula." },
  { week: "05", title: "Navigating Social Situations", desc: "Restaurants, family dinners, travel, and holidays — handled." },
  { week: "06", title: "Cravings & Comfort Food", desc: "Plant-based versions of your favorites that actually satisfy." },
  { week: "07", title: "Nutrition Deep Dive", desc: "B12, iron, omega-3s, and the nutrients to pay attention to." },
  { week: "08", title: "Budget & Meal Planning", desc: "How to eat plant-based for less than you spend now." },
  { week: "09", title: "Making It Stick", desc: "Habit design, accountability systems, and dealing with setbacks." },
  { week: "10", title: "Your Long-Term Plan", desc: "Building a sustainable practice and deciding what comes next." },
];

export default function Course() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
    toast.success("You're on the waitlist!", {
      description: "We'll email you when the beta cohort opens with founding member pricing.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "65vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={COMMUNITY_IMG} alt="Plant-based community" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.92) 0%, oklch(0.22 0.04 140 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(65vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-2xl">
            <p className="section-label mb-3 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>Beta Cohort — Founding Member Pricing</p>
            <h1 className="font-display text-5xl md:text-6xl mb-5 animate-fade-up animate-fade-up-delay-1" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.08" }}>
              The 10-Week<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Plant-Based Course</span>
            </h1>
            <p className="text-lg mb-8 animate-fade-up animate-fade-up-delay-2" style={{ color: "oklch(0.88 0.01 80)" }}>
              Structured lessons, live Zoom coaching, and a private community. The beta cohort is forming now — join the waitlist for founding member pricing.
            </p>
            <a href="#waitlist">
              <button className="btn-primary animate-fade-up animate-fade-up-delay-3">
                Join the Beta Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <h2 className="font-display text-4xl mb-12 text-center" style={{ color: "oklch(0.22 0.04 140)" }}>
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: "10 Weekly Modules", desc: "Structured video lessons you can watch on your own schedule." },
              { icon: <Video className="w-6 h-6" />, title: "Live Zoom Calls", desc: "Weekly group coaching calls with Q&A — recorded if you can't attend live." },
              { icon: <Users className="w-6 h-6" />, title: "Private Community", desc: "A members-only group for accountability, questions, and wins." },
              { icon: <Calendar className="w-6 h-6" />, title: "Lifetime Access", desc: "Course materials, recordings, and community access — forever." },
            ].map((item, i) => (
              <div key={i} className="card-sage p-6 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "oklch(0.52 0.12 40 / 0.12)", color: "oklch(0.52 0.12 40)" }}>
                  {item.icon}
                </div>
                <h3 className="font-display text-lg" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.1rem" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="py-20" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-2">The Curriculum</p>
            <h2 className="font-display text-4xl" style={{ color: "oklch(0.22 0.04 140)" }}>
              10 Weeks.<br />
              <span style={{ color: "oklch(0.52 0.12 40)" }}>One Complete Transformation.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {weeks.map((w, i) => (
              <div key={i} className="flex gap-5 p-5 rounded-xl border transition-all duration-200" style={{ borderColor: "oklch(0.88 0.02 110)", background: "oklch(0.99 0.008 80)" }}>
                <span className="font-display text-3xl font-black flex-shrink-0" style={{ color: "oklch(0.88 0.02 110)", lineHeight: "1" }}>
                  {w.week}
                </span>
                <div>
                  <h3 className="font-ui font-semibold mb-1" style={{ color: "oklch(0.22 0.04 140)" }}>{w.title}</h3>
                  <p className="text-sm" style={{ color: "oklch(0.45 0.04 140)" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="waitlist" className="py-20" style={{ background: "oklch(0.28 0.04 140)" }}>
        <div className="container max-w-xl mx-auto text-center">
          <p className="section-label mb-3" style={{ color: "oklch(0.72 0.10 40)" }}>Beta Cohort</p>
          <h2 className="font-display text-4xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
            Join the Waitlist
          </h2>
          <p className="mb-8" style={{ color: "oklch(0.72 0.06 110)" }}>
            Beta cohort members get founding member pricing and direct access to the instructor during the first run. Spots are limited.
          </p>
          {!joined ? (
            <form onSubmit={handleJoin} className="space-y-4">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 font-ui text-base outline-none"
                style={{ borderColor: "oklch(0.38 0.04 140)", background: "oklch(0.32 0.04 140)", color: "oklch(0.99 0.008 80)" }}
              />
              <button type="submit" className="btn-primary w-full">
                Join the Beta Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="rounded-xl p-6" style={{ background: "oklch(0.32 0.04 140)" }}>
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3" style={{ color: "oklch(0.72 0.10 40)" }} />
              <p className="font-display text-xl mb-2" style={{ color: "oklch(0.99 0.008 80)" }}>You're on the list!</p>
              <p className="text-sm" style={{ color: "oklch(0.72 0.06 110)" }}>
                We'll email you at <strong>{email}</strong> when the beta cohort opens.
              </p>
            </div>
          )}
          <p className="mt-4 text-xs" style={{ color: "oklch(0.55 0.04 110)" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
