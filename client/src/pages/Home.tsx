/* Home.tsx — Harvest Table Design System
   Warm Brutalist Editorial: bold typography, earthy palette, food-first imagery */

import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, BookOpen, Video } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_hero-WrzzMRL47rTRa5AnNdZVDM.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";
const STARTER_KIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_starter_kit-7YvHvMC9dEAq2p8xRYAAFF.webp";
const PLANNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_mission_planner-XajjEr73sKgLfQ8exmwF5Z.webp";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    quote: "I tried going plant-based twice before and failed. The Mission Planner finally showed me exactly why — and what to do instead. Game changer.",
    stars: 5,
  },
  {
    name: "Danielle R.",
    location: "Chicago, IL",
    quote: "The Starter Kit paid for itself in the first week. I stopped wasting money on groceries I didn't know how to use.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    location: "Atlanta, GA",
    quote: "I'm not a 'health food' person but this actually made sense. The weekly Zoom calls are what kept me going.",
    stars: 5,
  },
];

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Free Mission Planner",
    desc: "A 5-minute assessment that identifies your biggest barriers and builds a personalized plant-based roadmap.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Starter Kit — $29",
    desc: "7-day meal plan, grocery guide, pantry checklist, and 20 beginner-friendly recipes. Everything you need to start this week.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "10-Week Course",
    desc: "Structured weekly lessons, live Zoom coaching calls, and a private community. Go from curious to confident.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community & Coaching",
    desc: "Weekly live calls, accountability partners, and a private group. You are not doing this alone.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Vibrant plant-based meal bowls"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.88) 0%, oklch(0.22 0.04 140 / 0.60) 50%, oklch(0.22 0.04 140 / 0.20) 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(92vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-2xl">
            <p className="section-label mb-4 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>
              Your Plant-Based Mission Starts Here
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up animate-fade-up-delay-1"
              style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.08" }}
            >
              Stop Trying.<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Start Eating</span><br />
              Plant-Based.
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-xl animate-fade-up animate-fade-up-delay-2"
              style={{ color: "oklch(0.88 0.01 80)", lineHeight: "1.6" }}
            >
              The beginner-friendly system that identifies your barriers, builds your personalized plan, and walks you through every step — with real coaching and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-fade-up-delay-3">
              <Link href="/mission-planner">
                <button className="btn-primary text-base">
                  Take the Free Mission Planner <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/starter-kit">
                <button
                  className="btn-outline text-base"
                  style={{
                    color: "oklch(0.99 0.008 80)",
                    borderColor: "oklch(0.99 0.008 80 / 0.5)",
                  }}
                >
                  Get the Starter Kit — $29
                </button>
              </Link>
            </div>
            <p
              className="mt-4 text-sm animate-fade-up animate-fade-up-delay-4"
              style={{ color: "oklch(0.72 0.06 110)" }}
            >
              Free quiz. No credit card. Takes 5 minutes.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8" style={{ background: "oklch(0.99 0.008 80 / 0.4)" }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: "oklch(0.28 0.04 140)" }} className="py-5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-ui" style={{ color: "oklch(0.82 0.04 140)" }}>
            <span>✓ No diet culture</span>
            <span>✓ Beginner-friendly</span>
            <span>✓ Real food, real life</span>
            <span>✓ Live coaching included</span>
            <span>✓ No perfection required</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container">
          <div className="flex items-start gap-4 mb-14">
            <div>
              <p className="section-label mb-2">The System</p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.04 140)" }}>
                How Operation<br />Plant Based Works
              </h2>
            </div>
            <span className="section-number hidden md:block ml-auto">01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="card-sage p-6 flex flex-col gap-4 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "oklch(0.52 0.12 40 / 0.12)", color: "oklch(0.52 0.12 40)" }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-display text-xl"
                  style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.2rem" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION PLANNER CTA ── */}
      <section className="py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Free — No Credit Card</p>
              <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
                Find Out Exactly<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>Why You Haven't</span><br />
                Made the Switch Yet
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "oklch(0.35 0.04 140)" }}>
                The Plant-Based Mission Planner is a free 5-minute assessment that identifies your top barriers — time, budget, family resistance, cravings, or knowledge gaps — and builds a personalized action plan just for you.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Personalized barrier analysis",
                  "Custom 7-day transition roadmap",
                  "Specific product and recipe recommendations",
                  "Delivered instantly to your inbox",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <span className="text-sm font-ui" style={{ color: "oklch(0.30 0.04 140)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/mission-planner">
                <button className="btn-primary">
                  Start the Free Planner <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={PLANNER_IMG}
                alt="Woman writing in a journal surrounded by fresh vegetables"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: "3/2" }}
              />
              <div
                className="absolute -bottom-4 -left-4 rounded-xl p-4 shadow-lg"
                style={{ background: "oklch(0.52 0.12 40)", color: "oklch(0.99 0.008 80)" }}
              >
                <p className="font-display text-2xl font-bold">Free</p>
                <p className="font-ui text-xs mt-0.5">Takes 5 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STARTER KIT ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={STARTER_KIT_IMG}
                alt="Plant-based starter kit flatlay"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute -top-4 -right-4 rounded-xl p-4 shadow-lg text-center"
                style={{ background: "oklch(0.22 0.04 140)", color: "oklch(0.99 0.008 80)" }}
              >
                <p className="font-display text-3xl font-bold">$29</p>
                <p className="font-ui text-xs mt-0.5">One-time</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label mb-3">Starter Kit</p>
              <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
                Everything You Need<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>to Start This Week</span>
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "oklch(0.35 0.04 140)" }}>
                The Plant-Based Starter Kit is a complete beginner toolkit: 7-day meal plan, grocery guide, pantry checklist, 20 easy recipes, and a quick-start guide. Instant digital download.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "7-day meal plan",
                  "Grocery guide",
                  "Pantry checklist",
                  "20 beginner recipes",
                  "Protein cheat sheet",
                  "Eating out guide",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <span className="text-sm font-ui" style={{ color: "oklch(0.30 0.04 140)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/starter-kit">
                <button className="btn-primary">
                  Get the Starter Kit — $29 <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.28 0.04 140)" }}>
        <div className="container">
          <div className="flex items-start gap-4 mb-14">
            <div>
              <p className="section-label mb-2" style={{ color: "oklch(0.72 0.10 40)" }}>Real Results</p>
              <h2 className="font-display text-4xl md:text-5xl" style={{ color: "oklch(0.99 0.008 80)" }}>
                What People Are<br />Saying
              </h2>
            </div>
            <span className="section-number hidden md:block ml-auto" style={{ color: "oklch(0.32 0.04 140)" }}>02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ background: "oklch(0.32 0.04 140)" }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: "oklch(0.72 0.10 40)" }} />
                  ))}
                </div>
                <p className="text-base leading-relaxed font-serif-italic" style={{ color: "oklch(0.88 0.01 80)" }}>
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-ui font-semibold text-sm" style={{ color: "oklch(0.99 0.008 80)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "oklch(0.62 0.04 110)" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY / COURSE ── */}
      <section className="py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.99 0.008 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">10-Week Course</p>
              <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
                Don't Go It Alone.<br />
                <span style={{ color: "oklch(0.52 0.12 40)" }}>Join the Beta Cohort.</span>
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "oklch(0.35 0.04 140)" }}>
                The 10-week Operation Plant Based course combines structured weekly lessons, live Zoom coaching calls, and a private community. The beta cohort is forming now — join the waitlist for founding member pricing.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "10 structured weekly modules",
                  "Weekly live Zoom coaching calls",
                  "Private community & accountability",
                  "Founding member pricing for beta cohort",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <span className="text-sm font-ui" style={{ color: "oklch(0.30 0.04 140)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/course">
                <button className="btn-primary">
                  Join the Beta Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div>
              <img
                src={COMMUNITY_IMG}
                alt="Women cooking together in a bright kitchen"
                className="rounded-2xl w-full object-cover shadow-xl"
                style={{ aspectRatio: "16/10" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28" style={{ background: "oklch(0.52 0.12 40)" }}>
        <div className="container text-center max-w-2xl mx-auto">
          <span className="section-number block mb-2" style={{ color: "oklch(0.62 0.12 40)" }}>03</span>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "oklch(0.99 0.008 80)" }}>
            Your Mission Starts<br />with One Quiz
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.88 0.06 60)" }}>
            Free. Five minutes. No credit card. Just clarity on exactly what's been stopping you — and what to do next.
          </p>
          <Link href="/mission-planner">
            <button
              className="btn-outline text-base"
              style={{
                color: "oklch(0.99 0.008 80)",
                borderColor: "oklch(0.99 0.008 80 / 0.6)",
              }}
            >
              Take the Free Mission Planner <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
