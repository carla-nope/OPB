/* Newsletter.tsx — Harvest Table Design System */

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_hero-WrzzMRL47rTRa5AnNdZVDM.webp";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
    toast.success("Welcome to the mission!", {
      description: "Check your inbox for your free bonus resource.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      <section className="relative pt-16" style={{ minHeight: "55vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Plant-based meals" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.92) 0%, oklch(0.22 0.04 140 / 0.70) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(55vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-xl">
            <p className="section-label mb-3 animate-fade-up" style={{ color: "oklch(0.72 0.10 40)" }}>Free Weekly Newsletter</p>
            <h1 className="font-display text-5xl mb-5 animate-fade-up animate-fade-up-delay-1" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.1" }}>
              The Plant-Based<br />
              <span style={{ color: "oklch(0.72 0.10 40)" }}>Mission Brief</span>
            </h1>
            <p className="text-lg mb-8 animate-fade-up animate-fade-up-delay-2" style={{ color: "oklch(0.88 0.01 80)" }}>
              Weekly recipes, tips, and real talk about plant-based living. No fluff. No diet culture. Just practical help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display text-3xl mb-6" style={{ color: "oklch(0.22 0.04 140)" }}>
                What You'll Get
              </h2>
              <div className="space-y-4">
                {[
                  "1 new beginner-friendly recipe every week",
                  "Practical tips for real-life plant-based eating",
                  "Honest reviews of products and tools",
                  "Early access to new resources and offers",
                  "A free bonus resource when you sign up",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.52 0.12 40)" }} />
                    <span className="text-sm font-ui" style={{ color: "oklch(0.30 0.04 140)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-sage p-8">
              {!joined ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.52 0.12 40)" }}>
                      <Mail className="w-5 h-5" style={{ color: "oklch(0.99 0.008 80)" }} />
                    </div>
                    <h3 className="font-display text-xl" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.2rem" }}>Join the Mission</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="First name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 font-ui text-sm outline-none"
                      style={{ borderColor: "oklch(0.88 0.02 110)", background: "oklch(0.99 0.008 80)", color: "oklch(0.22 0.04 140)" }}
                    />
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 font-ui text-sm outline-none"
                      style={{ borderColor: "oklch(0.88 0.02 110)", background: "oklch(0.99 0.008 80)", color: "oklch(0.22 0.04 140)" }}
                    />
                    <button type="submit" className="btn-primary w-full">
                      Subscribe Free <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="mt-3 text-xs text-center" style={{ color: "oklch(0.55 0.04 110)" }}>No spam. Unsubscribe anytime.</p>
                </>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: "oklch(0.52 0.12 40)" }} />
                  <h3 className="font-display text-2xl mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>Welcome to the Mission!</h3>
                  <p className="text-sm" style={{ color: "oklch(0.40 0.04 140)" }}>
                    Check your inbox at <strong>{email}</strong> for your free bonus resource.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
