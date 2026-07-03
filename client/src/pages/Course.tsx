/* Course.tsx — Harvest Table Design System
   10-Week Family Transformation — the core offer ($197, founding $97).
   Shows checkout when BIZ.courseBuyUrl is set; otherwise founding-member waitlist. */

import { CheckCircle2, Video, Users, Calendar, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { BIZ } from "@/lib/config";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";

const weeks = [
  { week: "01", title: "The Buy-In Playbook", desc: "Get your partner neutral and your kids curious — before you change a single meal. Scripts included." },
  { week: "02", title: "Change the Default, Not the Menu", desc: "Upgrade the meals your family already loves. Taco night stays taco night." },
  { week: "03", title: "The Safe-Component System", desc: "Build every plate so picky eaters always have a landing spot — and end the short-order-cook era." },
  { week: "04", title: "The 90-Minute Sunday", desc: "The batch-prep routine that makes weeknight dinners a 30-minute job." },
  { week: "05", title: "Protein Without the Panic", desc: "What your family actually needs, how to hit it with plants, and how to answer the relatives." },
  { week: "06", title: "Grocery Budget Mastery", desc: "Eat more plants for less than you spend now. Real store strategies, real numbers." },
  { week: "07", title: "Restaurants, Parties & Grandma's House", desc: "Eating out, birthday parties, and holidays — handled without drama." },
  { week: "08", title: "Cravings & Comfort Food", desc: "Plant-based versions of the favorites your family will actually accept." },
  { week: "09", title: "When It Falls Apart", desc: "Sick weeks, sports seasons, and setbacks. The recovery playbook that keeps one bad week from becoming a bad month." },
  { week: "10", title: "Your Family's Long-Term Table", desc: "Lock in the new default. Build your family's forever meal rotation and decide what's next." },
];

const features = [
  { icon: <Video className="w-6 h-6" />, title: "Weekly Video Lessons", desc: "Short, practical lessons you can watch while the pasta boils. No fluff." },
  { icon: <Calendar className="w-6 h-6" />, title: "Done-For-You Weekly Plans", desc: "Every week includes meal plans, grocery lists, and prep guides matched to the lesson." },
  { icon: <Users className="w-6 h-6" />, title: "Private Community Access", desc: "Go through the program alongside other families in The Plant-Based Family Table." },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Live Monthly Q&A", desc: "Bring your hardest dinner-table problem. Leave with a plan." },
];

export default function Course() {
  const hasCheckout = Boolean(BIZ.courseBuyUrl);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={COMMUNITY_IMG} alt="Families cooking plant-based meals together" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.92) 0%, oklch(0.22 0.04 140 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(70vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-2xl">
            <p className="section-label mb-3" style={{ color: "oklch(0.72 0.10 40)" }}>
              Founding Member Pricing — ${BIZ.prices.courseFounding} (Regular ${BIZ.prices.course})
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.08" }}>
              The 10-Week Family<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Transformation</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "oklch(0.88 0.01 80)" }}>
              The complete system for getting your family eating more plants — without the battles. Buy-in
              strategies, meal prep mastery, budgets, restaurants, setbacks: all of it, week by week.
            </p>
            <a href="#enroll">
              <button className="btn-primary">
                {hasCheckout ? `Enroll Now — $${BIZ.prices.courseFounding}` : "Join the Founding Cohort Waitlist"}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-sage p-7">
                <div className="mb-4" style={{ color: "oklch(0.52 0.12 40)" }}>{f.icon}</div>
                <h3 className="font-ui font-semibold mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.04 140)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto">
          <p className="section-label mb-3 text-center">The Curriculum</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: "oklch(0.22 0.04 140)" }}>
            Ten Weeks. One New Family Default.
          </h2>
          <div className="space-y-4">
            {weeks.map((w) => (
              <div key={w.week} className="card-sage p-6 flex items-start gap-5">
                <span className="font-display text-3xl flex-shrink-0" style={{ color: "oklch(0.52 0.12 40 / 0.4)" }}>
                  {w.week}
                </span>
                <div>
                  <h3 className="font-ui font-semibold mb-1" style={{ color: "oklch(0.22 0.04 140)" }}>{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.04 140)" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLL / WAITLIST ── */}
      <section id="enroll" className="py-24" style={{ background: "oklch(0.22 0.04 140)" }}>
        <div className="container max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
              {hasCheckout ? "Join the Founding Cohort" : "The Founding Cohort Is Forming"}
            </h2>
            <p className="text-base" style={{ color: "oklch(0.72 0.06 110)" }}>
              Founding members get the full program for ${BIZ.prices.courseFounding} (regular ${BIZ.prices.course}),
              direct input on the program, and lifetime access to all updates. In return, we ask for your honest
              feedback and — if it works for your family — a testimonial.
            </p>
          </div>

          {hasCheckout ? (
            <div className="text-center">
              <a href={BIZ.courseBuyUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn-primary">
                  Enroll Now — ${BIZ.prices.courseFounding}
                </button>
              </a>
              <p className="mt-4 text-xs flex items-center justify-center gap-2" style={{ color: "oklch(0.72 0.06 110)" }}>
                <ShieldCheck className="w-4 h-4" /> 14-day money-back guarantee.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.99 0.008 80)" }}>
              <LeadForm
                source="course-founding-waitlist"
                buttonLabel="Join the Founding Waitlist"
                successTitle="You're on the founding list!"
                successBody="We'll email you first when enrollment opens — at founding member pricing."
                showName
              />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 