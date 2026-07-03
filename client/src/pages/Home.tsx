/* Home.tsx — Harvest Table Design System
   Busy-mom family positioning · value-ladder funnel · honest social proof */

import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Users, BookOpen, Video, Heart, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BIZ } from "@/lib/config";
import { posts } from "@/lib/posts";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_hero-WrzzMRL47rTRa5AnNdZVDM.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";

const ladder = [
  {
    num: "01",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Free 5-Day Family Starter Kit",
    price: "FREE",
    desc: "Five family-tested dinners, a done-for-you grocery list, and the one-page 'get your family on board' guide. Start this week.",
    href: "/starter-kit",
    cta: "Get the Free Kit",
  },
  {
    num: "02",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Family Meal Prep Playbook",
    price: `$${BIZ.prices.playbook}`,
    desc: "30 kid-approved plant-based recipes plus the weekly prep system that gets dinner on the table in 30 minutes on your worst days.",
    href: "/playbook",
    cta: "See the Playbook",
  },
  {
    num: "03",
    icon: <Video className="w-6 h-6" />,
    title: "10-Week Family Transformation",
    price: `$${BIZ.prices.course}`,
    desc: "The complete system: family buy-in strategies, meal prep mastery, budgeting, eating out, and handling pushback — week by week.",
    href: "/course",
    cta: "Explore the Course",
  },
  {
    num: "04",
    icon: <Users className="w-6 h-6" />,
    title: "The Plant-Based Family Table",
    price: `$${BIZ.prices.communityMonthly}/mo`,
    desc: "A private community of moms on the same mission — weekly meal plan drops, monthly live Q&As, and real accountability.",
    href: "/community",
    cta: "Join the Community",
  },
];

const painPoints = [
  {
    title: "“My kids won't eat it.”",
    desc: "Every recipe and meal plan we publish is tested against real picky eaters. Familiar formats, safe components, zero exotic ingredients.",
  },
  {
    title: "“I don't have time to cook two dinners.”",
    desc: "You shouldn't have to. One meal, built so every eater at your table — including the skeptic you married — finds something to love.",
  },
  {
    title: "“My partner isn't on board.”",
    desc: "We teach the family buy-in playbook first, food second. No ultimatums, no lectures, no dinner table battles.",
  },
];

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "92vh" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Vibrant plant-based family meal bowls"
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

        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(92vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-2xl">
            <p className="section-label mb-4 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>
              For Busy Moms &amp; Real Families
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up animate-fade-up-delay-1"
              style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.08" }}
            >
              Get Your Family<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Eating More Plants</span><br />
              Without the Battles.
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-xl animate-fade-up animate-fade-up-delay-2"
              style={{ color: "oklch(0.88 0.01 80)", lineHeight: "1.6" }}
            >
              Kid-approved meals, done-for-you plans, and the family buy-in playbook that makes plant-based dinners
              actually happen in a busy household. No lectures. No separate dinners. No dinner table wars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-fade-up-delay-3">
              <Link href="/starter-kit">
                <button className="btn-primary">
                  Get the Free 5-Day Starter Kit <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/mission-planner">
                <button
                  className="btn-primary"
                  style={{ background: "transparent", border: "2px solid oklch(0.99 0.008 80 / 0.45)" }}
                >
                  Take the 2-Minute Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <p className="section-label mb-3 text-center">Sound Familiar?</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: "oklch(0.22 0.04 140)" }}>
            The Food Is Easy. The Family Is Hard.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {painPoints.map((p, i) => (
              <div key={i} className="card-sage p-7">
                <Heart className="w-6 h-6 mb-4" style={{ color: "oklch(0.52 0.12 40)" }} />
                <h3 className="font-display text-xl mb-3" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.25rem" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.04 140)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE LADDER ── */}
      <section className="py-24">
        <div className="container">
          <p className="section-label mb-3 text-center">Your Path</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-4" style={{ color: "oklch(0.22 0.04 140)" }}>
            Start Free. Go As Far As Your Family Needs.
          </h2>
          <p className="text-base text-center max-w-2xl mx-auto mb-14" style={{ color: "oklch(0.40 0.04 140)" }}>
            Everything is built around one promise: meals your whole family will actually eat, on a schedule a busy
            mom can actually keep.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ladder.map((step) => (
              <Link key={step.num} href={step.href}>
                <div className="card-sage p-7 h-full flex flex-col cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-4xl" style={{ color: "oklch(0.52 0.12 40 / 0.35)" }}>
                      {step.num}
                    </span>
                    <span
                      className="font-ui text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "oklch(0.52 0.12 40 / 0.12)", color: "oklch(0.52 0.12 40)" }}
                    >
                      {step.price}
                    </span>
                  </div>
                  <div className="mb-3" style={{ color: "oklch(0.52 0.12 40)" }}>{step.icon}</div>
                  <h3 className="font-display text-lg mb-3" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.15rem" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(0.38 0.04 140)" }}>{step.desc}</p>
                  <span className="font-ui text-sm font-semibold mt-5 inline-flex items-center gap-1" style={{ color: "oklch(0.52 0.12 40)" }}>
                    {step.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24" style={{ background: "oklch(0.22 0.04 140)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3" style={{ color: "oklch(0.72 0.10 40)" }}>The OPB Method</p>
              <h2 className="font-display text-3xl md:text-4xl mb-6" style={{ color: "oklch(0.99 0.008 80)" }}>
                Change the Default,<br />Not the Menu.
              </h2>
              <div className="space-y-5">
                {[
                  { t: "Keep the formats your family loves", d: "Taco night stays taco night. Pizza Friday stays pizza Friday. Only the ingredients get an upgrade." },
                  { t: "Every meal has a safe component", d: "Skeptical eaters always have something familiar on the plate — which is exactly why they end up trying the rest." },
                  { t: "Swap two dinners a week, then three", d: "No overnight overhauls. Gradual defaults are how real families change — and stay changed." },
                  { t: "Buy-in first, food second", d: "We give you the exact scripts for skeptical partners and picky kids. No ultimatums required." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.72 0.10 40)" }} />
                    <div>
                      <h4 className="font-ui font-semibold mb-1" style={{ color: "oklch(0.99 0.008 80)" }}>{item.t}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.72 0.06 110)" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={COMMUNITY_IMG}
                alt="Family enjoying a plant-based meal together"
                className="rounded-2xl w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING FAMILIES (honest social proof) ── */}
      <section className="py-24" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">Founding Families</p>
          <h2 className="font-display text-3xl md:text-4xl mb-5" style={{ color: "oklch(0.22 0.04 140)" }}>
            Be One of Our First 100 Families.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.38 0.04 140)" }}>
            Operation Plant Based is new — and that's your advantage. Founding families get the 10-week course at
            founding-member pricing, direct input on what we build next, and lifetime founding rates in the community.
            All we ask in return: tell us honestly how it goes.
          </p>
          <Link href="/starter-kit">
            <button className="btn-primary">
              Claim Your Spot — Start With the Free Kit <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* ── FROM THE BLOG ── */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-3">From the Blog</p>
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: "oklch(0.22 0.04 140)" }}>
                Real Help for Real Families
              </h2>
            </div>
            <Link href="/blog">
              <span className="font-ui text-sm font-semibold hidden md:inline-flex items-center gap-1" style={{ color: "oklch(0.52 0.12 40)" }}>
                All posts <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="card-sage overflow-hidden cursor-pointer h-full flex flex-col transition-transform duration-200 hover:-translate-y-1">
                  <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="font-ui text-xs font-semibold mb-3 inline-block" style={{ color: "oklch(0.52 0.12 40)" }}>
                      {post.category} · {post.readTime}
                    </span>
                    <h3 className="font-display text-lg leading-snug mb-3" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.1rem" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(0.38 0.04 140)" }}>
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24" style={{ background: "oklch(0.22 0.04 140)" }}>
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-6" style={{ color: "oklch(0.99 0.008 80)" }}>
            Dinner Tonight Can Be Different.
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.72 0.06 110)" }}>
            Get five family-tested plant-based dinners, the grocery list, and the family buy-in guide — free.
          </p>
          <Link href="/starter-kit">
            <button className="btn-primary">
              Get the Free 5-Day Starter Kit <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             