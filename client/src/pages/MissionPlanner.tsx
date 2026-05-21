/* MissionPlanner.tsx — Harvest Table Design System
   Multi-step quiz that identifies barriers and produces a personalized roadmap */

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Leaf } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const PLANNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_mission_planner-XajjEr73sKgLfQ8exmwF5Z.webp";

const questions = [
  {
    id: "goal",
    label: "What's your main goal?",
    options: [
      { value: "health", label: "Improve my health & energy" },
      { value: "weight", label: "Manage my weight" },
      { value: "ethics", label: "Align with my values (animals, environment)" },
      { value: "curious", label: "Just curious — I want to try it" },
    ],
  },
  {
    id: "barrier",
    label: "What's your biggest challenge?",
    options: [
      { value: "time", label: "I don't have time to cook differently" },
      { value: "family", label: "My family won't eat plant-based food" },
      { value: "cost", label: "I think it will be too expensive" },
      { value: "knowledge", label: "I don't know what to eat or cook" },
      { value: "cravings", label: "I love meat/cheese too much" },
    ],
  },
  {
    id: "experience",
    label: "How would you describe your current eating?",
    options: [
      { value: "omnivore", label: "I eat everything — meat, dairy, the works" },
      { value: "flexitarian", label: "I already eat less meat but want to go further" },
      { value: "vegetarian", label: "I'm vegetarian and want to go fully plant-based" },
      { value: "tried", label: "I've tried before but couldn't stick with it" },
    ],
  },
  {
    id: "timeline",
    label: "How quickly do you want to make the change?",
    options: [
      { value: "now", label: "I want to start this week" },
      { value: "month", label: "Within the next month" },
      { value: "gradual", label: "Gradually, over a few months" },
      { value: "exploring", label: "I'm just exploring for now" },
    ],
  },
  {
    id: "support",
    label: "What kind of support would help most?",
    options: [
      { value: "plan", label: "A clear meal plan and grocery list" },
      { value: "coaching", label: "Live coaching and accountability" },
      { value: "community", label: "A community of people doing the same thing" },
      { value: "recipes", label: "Easy recipes my whole family will eat" },
    ],
  },
];

const barrierRecommendations: Record<string, { headline: string; desc: string; cta: string; href: string }> = {
  time: {
    headline: "Your Plan: The 30-Minute Meal System",
    desc: "You need quick, batch-friendly recipes and a weekly prep strategy. The Starter Kit includes a 7-day plan designed for busy schedules — most meals take under 30 minutes.",
    cta: "Get the Starter Kit — $29",
    href: "/starter-kit",
  },
  family: {
    headline: "Your Plan: The Family-Friendly Transition",
    desc: "You need crowd-pleasing recipes that don't feel like 'health food.' The Starter Kit includes a family transition guide and 20 recipes even picky eaters enjoy.",
    cta: "Get the Starter Kit — $29",
    href: "/starter-kit",
  },
  cost: {
    headline: "Your Plan: The Budget Plant-Based Blueprint",
    desc: "Plant-based eating can actually cost less. The Starter Kit includes a budget grocery guide and pantry staples list that cuts your weekly food spend.",
    cta: "Get the Starter Kit — $29",
    href: "/starter-kit",
  },
  knowledge: {
    headline: "Your Plan: The Beginner's Foundation",
    desc: "You need a structured system, not random recipes. The 10-week course walks you through everything step by step — no prior knowledge required.",
    cta: "Join the Beta Course Waitlist",
    href: "/course",
  },
  cravings: {
    headline: "Your Plan: The Satisfaction Strategy",
    desc: "Cravings are about satisfaction, not willpower. The Starter Kit includes a protein cheat sheet and comfort food swaps that actually taste good.",
    cta: "Get the Starter Kit — $29",
    href: "/starter-kit",
  },
};

export default function MissionPlanner() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = email, 7 = result
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentQ = questions[step - 1];
  const totalSteps = questions.length;
  const progress = step === 0 ? 0 : Math.round((step / totalSteps) * 100);

  const handleAnswer = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setStep(totalSteps + 1); // go to email step
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStep(totalSteps + 2); // go to result
  };

  const recommendation = barrierRecommendations[answers.barrier] || barrierRecommendations.knowledge;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── INTRO ── */}
      {step === 0 && (
        <>
          {/* Hero */}
          <section className="relative pt-16 overflow-hidden" style={{ minHeight: "60vh" }}>
            <div className="absolute inset-0 z-0">
              <img src={PLANNER_IMG} alt="Mission Planner" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.90) 0%, oklch(0.22 0.04 140 / 0.55) 100%)" }}
              />
            </div>
            <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(60vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
              <div className="max-w-xl">
                <p className="section-label mb-3 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>Free Assessment</p>
                <h1 className="font-display text-5xl md:text-6xl mb-5 animate-fade-up animate-fade-up-delay-1" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.1" }}>
                  The Plant-Based<br />Mission Planner
                </h1>
                <p className="text-lg mb-8 animate-fade-up animate-fade-up-delay-2" style={{ color: "oklch(0.88 0.01 80)" }}>
                  5 questions. 5 minutes. A personalized roadmap delivered to your inbox.
                </p>
                <button
                  className="btn-primary animate-fade-up animate-fade-up-delay-3"
                  onClick={() => setStep(1)}
                >
                  Start My Mission Planner <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* What you get */}
          <section className="py-16" style={{ background: "oklch(0.93 0.02 110)" }}>
            <div className="container max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl mb-10" style={{ color: "oklch(0.22 0.04 140)" }}>
                What You'll Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Barrier Analysis", desc: "We identify your top 1–2 barriers so you stop guessing and start solving." },
                  { title: "Personalized Roadmap", desc: "A custom 7-day action plan built around your lifestyle, not a generic template." },
                  { title: "Product Recommendations", desc: "Specific tools, recipes, and resources matched to your exact situation." },
                ].map((item, i) => (
                  <div key={i} className="card-sage p-6 text-left">
                    <CheckCircle2 className="w-6 h-6 mb-3" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <h3 className="font-display text-lg mb-2" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.1rem" }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: "oklch(0.40 0.04 140)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}

      {/* ── QUIZ STEPS ── */}
      {step >= 1 && step <= totalSteps && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-4">
          <div className="w-full max-w-xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="section-label" style={{ color: "oklch(0.52 0.12 40)" }}>
                  Question {step} of {totalSteps}
                </span>
                <span className="font-ui text-sm" style={{ color: "oklch(0.45 0.04 140)" }}>{progress}%</span>
              </div>
              <div className="h-2 rounded-full" style={{ background: "oklch(0.88 0.02 110)" }}>
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: "oklch(0.52 0.12 40)" }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="font-display text-3xl md:text-4xl mb-8" style={{ color: "oklch(0.22 0.04 140)" }}>
              {currentQ.label}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(currentQ.id, opt.value)}
                  className="w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-ui"
                  style={{
                    background: answers[currentQ.id] === opt.value ? "oklch(0.52 0.12 40 / 0.08)" : "oklch(0.99 0.008 80)",
                    borderColor: answers[currentQ.id] === opt.value ? "oklch(0.52 0.12 40)" : "oklch(0.88 0.02 110)",
                    color: "oklch(0.22 0.04 140)",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Back */}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 flex items-center gap-2 text-sm font-ui transition-colors duration-150"
                style={{ color: "oklch(0.45 0.04 140)" }}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── EMAIL CAPTURE ── */}
      {step === totalSteps + 1 && (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-4">
          <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "oklch(0.52 0.12 40 / 0.12)" }}>
              <Leaf className="w-8 h-8" style={{ color: "oklch(0.52 0.12 40)" }} />
            </div>
            <h2 className="font-display text-3xl mb-3" style={{ color: "oklch(0.22 0.04 140)" }}>
              Your Plan Is Ready.
            </h2>
            <p className="text-base mb-8" style={{ color: "oklch(0.40 0.04 140)" }}>
              Enter your email and we'll send your personalized roadmap instantly — plus a free bonus resource.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 font-ui text-base outline-none transition-colors duration-150"
                style={{
                  borderColor: "oklch(0.88 0.02 110)",
                  background: "oklch(0.99 0.008 80)",
                  color: "oklch(0.22 0.04 140)",
                }}
              />
              <button type="submit" className="btn-primary w-full">
                Send My Personalized Plan <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="mt-3 text-xs" style={{ color: "oklch(0.55 0.04 110)" }}>
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      )}

      {/* ── RESULT ── */}
      {step === totalSteps + 2 && (
        <div className="flex-1 py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.52 0.12 40)" }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.99 0.008 80)" }} />
              </div>
              <h2 className="font-display text-3xl mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>
                Mission Accepted.
              </h2>
              <p className="text-base" style={{ color: "oklch(0.40 0.04 140)" }}>
                Your personalized plan is on its way to <strong>{email}</strong>
              </p>
            </div>

            {/* Recommendation card */}
            <div className="rounded-2xl p-8 mb-8" style={{ background: "oklch(0.93 0.02 110)" }}>
              <p className="section-label mb-3">Your Personalized Recommendation</p>
              <h3 className="font-display text-2xl mb-4" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.5rem" }}>
                {recommendation.headline}
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.35 0.04 140)" }}>
                {recommendation.desc}
              </p>
              <Link href={recommendation.href}>
                <button className="btn-primary">
                  {recommendation.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/">
                <span className="font-ui text-sm underline" style={{ color: "oklch(0.45 0.04 140)" }}>
                  ← Back to home
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {step !== 0 && step !== totalSteps + 2 && <Footer />}
      {step === totalSteps + 2 && <Footer />}
    </div>
  );
}
