/* BlogPost.tsx — Harvest Table Design System
   Individual post page. Every post ends with the Starter Kit capture (the funnel). */

import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import NotFound from "@/pages/NotFound";
import { getPost } from "@/lib/posts";
import { BIZ } from "@/lib/config";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params ? getPost(params.slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — ${BIZ.name}`;
    // Article structured data for SEO / Pinterest rich pins
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      author: { "@type": "Organization", name: BIZ.name, url: BIZ.domain },
      publisher: { "@type": "Organization", name: BIZ.name },
      mainEntityOfPage: `${BIZ.domain}/blog/${post.slug}`,
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
      document.title = BIZ.name;
    };
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.99 0.008 80)" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-16" style={{ minHeight: "55vh" }}>
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.04 140 / 0.92) 0%, oklch(0.22 0.04 140 / 0.65) 100%)" }} />
        </div>
        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "calc(55vh - 4rem)", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-3xl">
            <p className="section-label mb-3" style={{ color: "oklch(0.72 0.10 40)" }}>
              {post.category} · {post.readTime}
            </p>
            <h1 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "oklch(0.99 0.008 80)", lineHeight: "1.12" }}>
              {post.title}
            </h1>
            <p className="text-base" style={{ color: "oklch(0.88 0.01 80)" }}>
              {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="py-16">
        <div className="container max-w-2xl mx-auto">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-8">
              {section.heading && (
                <h2 className="font-display text-2xl mb-4" style={{ color: "oklch(0.22 0.04 140)", fontSize: "1.6rem" }}>
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.32 0.04 140)", lineHeight: "1.75" }}>
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-3 mb-4" style={{ listStyle: section.numbered ? "decimal" : "disc", paddingLeft: "1.5rem" }}>
                  {section.list.map((item, j) => (
                    <li key={j} className="text-base leading-relaxed" style={{ color: "oklch(0.32 0.04 140)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* ── FUNNEL CTA ── */}
      <section className="py-20" style={{ background: "oklch(0.93 0.02 110)" }}>
        <div className="container max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="section-label mb-3">Free Download</p>
            <h2 className="font-display text-3xl mb-3" style={{ color: "oklch(0.22 0.04 140)" }}>
              Get the 5-Day Family Starter Kit
            </h2>
            <p className="text-base" style={{ color: "oklch(0.40 0.04 140)" }}>
              Five family-tested dinners, the grocery list, and the family buy-in guide — free, in your inbox in
              two minutes.
            </p>
          </div>
          <div className="card-sage p-8" style={{ background: "oklch(0.99 0.008 80)" }}>
            <LeadForm
              source={`blog-${post.slug}`}
              buttonLabel="Send Me the Free Kit"
              successTitle="The kit is on its way!"
              successBody="Check your inbox for the download link."
            />
          </div>
          <p className="text-center mt-8">
            <Link href="/blog">
              <span className="font-ui text-sm underline" style={{ color: "oklch(0.45 0.04 140)" }}>← All posts</span>
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
