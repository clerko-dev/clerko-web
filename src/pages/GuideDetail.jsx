// src/pages/GuideDetail.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { guides, guideBodies } from "@/data/guides.js";

// mała pomoc: opóźnienie animacji w ms
const ad = (ms = 0) => ({ animationDelay: `${ms}ms` });

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
          <Link to="/how-to" className="underline underline-offset-4 hover:opacity-80">Guides</Link>{" "}
          / <span className="text-white/70">{guide.title}</span>
        </nav>

        <h1 className="fade-up text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={ad(0)}>
          {guide.title}
        </h1>
        <p className="fade-up text-zinc-400 mb-6 max-w-3xl" style={ad(50)}>
          {guide.excerpt}
        </p>

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
                {s.p?.map((para, i) => <p key={i} className="text-zinc-30
