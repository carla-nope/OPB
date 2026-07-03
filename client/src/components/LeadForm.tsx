/* LeadForm.tsx — Reusable email capture form wired to real lead delivery
   (formsubmit.co by default, Kit when configured — see lib/config.ts). */

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { subscribe } from "@/lib/config";

type Props = {
  source: string; // where the lead came from, e.g. "starter-kit"
  buttonLabel: string;
  successTitle?: string;
  successBody?: string;
  showName?: boolean;
};

export default function LeadForm({
  source,
  buttonLabel,
  successTitle = "You're in!",
  successBody = "Check your inbox — your download is on its way.",
  showName = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const inputStyle = {
    borderColor: "oklch(0.88 0.02 110)",
    background: "oklch(0.99 0.008 80)",
    color: "oklch(0.22 0.04 140)",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await subscribe({ email, name, source });
      setStatus("done");
      toast.success(successTitle, { description: successBody });
    } catch {
      setStatus("idle");
      toast.error("Something went wrong — please try again.");
    }
  };

  if (status === "done") {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: "oklch(0.52 0.12 40)" }} />
        <h3 className="font-display text-2xl mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>
          {successTitle}
        </h3>
        <p className="text-sm" style={{ color: "oklch(0.40 0.04 140)" }}>
          {successBody.replace("your inbox", `your inbox at ${email}`)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {showName && (
        <input
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 font-ui text-sm outline-none"
          style={inputStyle}
        />
      )}
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border-2 font-ui text-sm outline-none"
        style={inputStyle}
      />
      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            Sending… <Loader2 className="w-4 h-4 animate-spin" />
          </>
        ) : (
          <>
            {buttonLabel} <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-xs text-center" style={{ color: "oklch(0.55 0.04 110)" }}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
