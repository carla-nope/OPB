/* Community.tsx — Harvest Table Design System
   The Plant-Based Family Table — Skool community ($29/mo recurring layer).
   Links to Skool when BIZ.skoolUrl is set; otherwise founding-member waitlist. */

import { CheckCircle2, Users, Calendar, MessageCircle, Trophy } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { BIZ } from "@/lib/config";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";

const benefits = [
  { icon: <Calendar className="w-6 h-6" />, title: "Weekly Meal Plan Drop", desc: "Every Sunday: a fresh family dinner plan with grocery list, ready before you've had your coffee." },
  { icon: <MessageCircle className="w-6 h-6" />, title: "Monthly Live Q&A", desc: "Bring your hardest picky-eater problem to the monthly call and leave with a plan." },
  { icon: <Users className="w-6 h-6" />, title: "Moms on the Same Mission", desc: "Swap wins, fails, and recipe rescues with families in the exact same season of life." },
  { icon: <Trophy className="w-6 h-6" />, title: "Seasonal Challenges", desc: "30-Day School Lunch Makeover, Holiday Survival Sprint, and more — accountability that's actually fun." },
];

const included = [
  "The growing recipe vault — every meal plan ever dropped, searchable",
  "The Family Wins thread — real accountability without judgment",
  "Member-only discounts on the Playbook and 10-Week Course",
  "Direct input on what we build next",
];

export default function Community() {
  const hasSkool = Boolean(BIZ.skoolUrl);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={COMMUNITY_IMG} alt="The Plant-Based Family Table community" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.92) 0%, oklch(0.22 0.04 140 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(70vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-2xl">
            <p className="section-label mb-3" style={{ color: "oklch(0.72 0.10 40)" }}>
              Private Community — ${BIZ.prices.communityMonthly}/month
            </p>
            <h1 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.08" }}>
              The Plant-Based<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Family Table</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "oklch(0.88 0.01 80)" }}>
              You shouldn't have to figure this out alone at 5:45 PM. Weekly meal plans, live help, and a table full
              of moms on the exact same mission.
            </p>
            <a href={hasSkool ? BIZ.skoolUrl : "#join"} target={hasSkool ? "_blank" : undefined} rel={hasSkool ? "noopener noreferrer" : undefined}>
              <button className="btn-primary">
                {hasSkool ? `Join Now — $${BIZ.prices.communityMonthly}/mo` : "Join the Founding Member List"}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container">
          <p className="section-label mb-3 text-center">What Members Get</p>
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: "oklch(0.22 0.04 140)" }}>
            A Village, Delivered Weekly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="card-sage p-7">
                <div className="mb-4" style={{ color: "oklch(0.52 0.12 40)" }}>{b.icon}</div>
                <h3 className="font-ui font-semibold mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.38 0.04 140)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.52 0.12 40)" }} />
                <span className="text-sm font-ui" style={{ color: "oklch(0.30 0.04 140)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN ── */}
      <section id="join" className="py-24" style={{ background: "oklch(0.22 0.04 140)" }}>
        <div className="container max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.99 0.008 80)" }}>
            {hasSkool ? "Pull Up a Chair" : "Founding Tables Are Forming"}
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.06 110)" }}>
            {hasSkool
              ? `$${BIZ.prices.communityMonthly}/month. Cancel anytime. Your first weekly meal plan drops this Sunday.`
              : "Founding members lock in a lifetime rate lower than launch pricing. Join the list and we'll save your seat."}
          </p>
          {hasSkool ? (
            <a href={BIZ.skoolUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Join on Skool — ${BIZ.prices.communityMonthly}/mo</button>
            </a>
          ) : (
            <div className="rounded-2xl p-8 text-left" style={{ background: "oklch(0.99 0.008 80)" }}>
              <LeadForm
                source="community-founding-waitlist"
                buttonLabel="Save My Founding Seat"
                successTitle="Your seat is saved!"
                successBody="We'll email you when the community opens — at your locked founding rate."
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
