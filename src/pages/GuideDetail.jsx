import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO.jsx";
import { guides, guideBodies } from "@/data/guides.js";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut", delay: d },
});

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.slug === slug);
  const sections = guideBodies[slug] || [];
  const [active, setActive] = useState(sections?.[0]?.h || "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.h);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  if (!guide) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-2xl font-semibold mb-2">Guide not found</h1>
        <Link to="/how-to" className="underline underline-offset-4">Back to Guides</Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={`${guide.title} — Guides`} description={guide.excerpt} />
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <nav className="text-xs text-white/50 mb-3">
          <Link to="/how-to" className="underline underline-offset-4 hover:opacity-80">Guides</Link> /{" "}
          <span className="text-white/70">{guide.title}</span>
        </nav>

        <motion.h1 {...fade(0)} className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          {guide.title}
        </motion.h1>
        <motion.p {...fade(0.05)} className="text-zinc-400 mb-6 max-w-3xl">{guide.excerpt}</motion.p>

        <div className="text-xs text-white/50 flex gap-3 mb-10">
          <span>{guide.category}</span><span>•</span>
          <span>{guide.readTime} read</span><span>•</span>
          <span>Updated {guide.updated}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          <article className="prose prose-invert max-w-none">
            {sections.map((s) => (
              <section key={s.h} id={s.h} className="scroll-mt-24 mb-8">
                <h2 className="text-xl font-semibold mb-3">{s.h}</h2>
                {s.p?.map((para, i) => <p key={i} className="text-zinc-300 mb-3">{para}</p>)}
                {s.list && (
                  <ul className="list-disc pl-6 text-zinc-300 space-y-1">
                    {s.list.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <aside className="lg:sticky lg:top-20 h-max">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-medium mb-2">On this page</div>
              <ul className="space-y-1 text-sm">
                {sections.map((s) => (
                  <li key={s.h}>
                    <a href={`#${s.h}`} className={`block hover:opacity-80 ${active === s.h ? "text-white" : "text-white/70"}`}>{s.h}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Put it into action with Clerko</h3>
            <p className="text-sm text-zinc-400">Create, preview and share your proposals.</p>
          </div>
          <div className="flex gap-2">
            <Link to="/" className="px-4 py-2 rounded-xl border border-white/20 text-sm hover:border-white/40">Try free</Link>
            <Link to="/pricing" className="px-4 py-2 rounded-xl bg-white text-black text-sm hover:opacity-90">View pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
