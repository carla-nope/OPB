/* Legal.tsx — Harvest Table Design System
   Shared legal page component for Privacy, Terms, Disclaimer, and Affiliate pages */

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

const legalContent: Record<string, { title: string; lastUpdated: string; sections: { heading: string; body: string }[] }> = {
  "/privacy": {
    title: "Privacy Policy",
    lastUpdated: "May 2026",
    sections: [
      { heading: "Information We Collect", body: "We collect information you provide directly, such as your name and email address when you subscribe to our newsletter, complete the Mission Planner, or make a purchase. We also collect usage data through analytics tools to understand how visitors use our site." },
      { heading: "How We Use Your Information", body: "We use your information to send you the content you requested, process transactions, improve our services, and send periodic emails about new content, products, and updates. You can unsubscribe at any time." },
      { heading: "Information Sharing", body: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements." },
      { heading: "Cookies", body: "We use cookies to enhance your experience on our site. You can choose to disable cookies through your browser settings, though this may affect site functionality." },
      { heading: "Contact", body: "If you have questions about this Privacy Policy, contact us at hello@operationplantbased.com." },
    ],
  },
  "/terms": {
    title: "Terms of Use",
    lastUpdated: "May 2026",
    sections: [
      { heading: "Acceptance of Terms", body: "By accessing and using OperationPlantBased.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this site." },
      { heading: "Intellectual Property", body: "All content on this site, including text, graphics, images, and digital products, is the property of Operation Plant Based and is protected by applicable copyright laws. You may not reproduce, distribute, or create derivative works without written permission." },
      { heading: "Digital Products", body: "All digital product sales are final except as covered by our 7-day satisfaction guarantee. Digital products are for personal use only and may not be shared, resold, or redistributed." },
      { heading: "Disclaimer of Warranties", body: "This site and its content are provided 'as is' without warranties of any kind. We do not guarantee that the site will be uninterrupted or error-free." },
      { heading: "Limitation of Liability", body: "Operation Plant Based shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or its content." },
      { heading: "Contact", body: "For questions about these Terms, contact us at hello@operationplantbased.com." },
    ],
  },
  "/disclaimer": {
    title: "Health Disclaimer",
    lastUpdated: "May 2026",
    sections: [
      { heading: "Not Medical Advice", body: "The content on OperationPlantBased.com is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary change." },
      { heading: "No Doctor-Patient Relationship", body: "Use of this site does not create a doctor-patient relationship. We are not licensed medical professionals, registered dietitians, or healthcare providers." },
      { heading: "Individual Results Vary", body: "Results from following our content, programs, or products will vary from person to person. We make no guarantees about specific health outcomes." },
      { heading: "Consult Your Doctor", body: "Before making significant changes to your diet, especially if you have a medical condition, are pregnant, nursing, or taking medications, consult your healthcare provider." },
    ],
  },
  "/affiliate": {
    title: "Affiliate Disclosure",
    lastUpdated: "May 2026",
    sections: [
      { heading: "FTC Disclosure", body: "In accordance with FTC guidelines, Operation Plant Based discloses that some links on this site are affiliate links. This means we may earn a commission if you click on a link and make a purchase, at no additional cost to you." },
      { heading: "Our Commitment", body: "We only recommend products and services we genuinely believe in and that we think will be helpful to our audience. Our editorial opinions are not influenced by affiliate relationships." },
      { heading: "Sponsored Content", body: "Any sponsored content or paid partnerships will be clearly disclosed at the top of the relevant post or page." },
      { heading: "Questions", body: "If you have questions about our affiliate relationships, contact us at hello@operationplantbased.com." },
    ],
  },
};

export default function Legal() {
  const [location] = useLocation();
  const content = legalContent[location] || legalContent["/privacy"];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />
      <section className="pt-28 pb-20">
        <div className="container max-w-2xl mx-auto">
          <p className="section-label mb-3">Legal</p>
          <h1 className="font-display text-4xl mb-2" style={{ color: "oklch(0.22 0.04 140)" }}>
            {content.title}
          </h1>
          <p className="text-sm mb-12 font-ui" style={{ color: "oklch(0.55 0.04 110)" }}>
            Last updated: {content.lastUpdated}
          </p>
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-ui font-semibold text-lg mb-3" style={{ color: "oklch(0.22 0.04 140)" }}>
                  {section.heading}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.04 140)" }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
