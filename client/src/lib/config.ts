/* config.ts — Central business configuration for Operation Plant Based.
   Update these values as accounts/products are created. Every page reads from here. */

export const BIZ = {
  name: "Operation Plant Based",
  tagline: "Get your family eating more plants — without the battles.",
  domain: "https://operationplantbased.com",
  contactEmail: "hello@operationplantbased.com",

  // ── Email capture ──
  // Default: formsubmit.co delivers form submissions to this inbox (zero setup,
  // requires one-time activation email on first submission).
  // SWAP: once Kit (ConvertKit) is set up, paste the Kit form endpoint into
  // kitFormAction and captures will flow into the email platform instead.
  captureEmail: "carlaplatter@gmail.com",
  kitFormAction: "", // e.g. "https://app.kit.com/forms/1234567/subscriptions"

  // ── Product links (leave empty until the product exists — pages will
  //     automatically show a waitlist email capture instead of a buy button) ──
  playbookBuyUrl: "", // Gumroad/Lemon Squeezy link for the $27 Meal Prep Playbook
  courseBuyUrl: "", // checkout link for the 10-week course
  skoolUrl: "", // Skool community invite link

  // ── Social ──
  pinterestUrl: "https://www.pinterest.com/operationplantbased",
  instagramUrl: "https://www.instagram.com/operationplantbased",

  prices: {
    playbook: 27,
    course: 197,
    courseFounding: 97,
    communityMonthly: 29,
  },
};

/** Capture a lead. Uses Kit if configured, otherwise formsubmit.co → captureEmail. */
export async function subscribe(opts: {
  email: string;
  source: string;
  name?: string;
}): Promise<void> {
  const { email, source, name } = opts;

  if (BIZ.kitFormAction) {
    const body = new FormData();
    body.append("email_address", email);
    if (name) body.append("fields[first_name]", name);
    const res = await fetch(BIZ.kitFormAction, { method: "POST", body });
    if (!res.ok) throw new Error("Subscription failed");
    return;
  }

  const res = await fetch(`https://formsubmit.co/ajax/${BIZ.captureEmail}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      email,
      name: name ?? "",
      source,
      _subject: `OPB lead — ${source}`,
      _template: "table",
    }),
  });
  if (!res.ok) throw new Error("Subscription failed");
}
