// src/pages/Guides.jsx
import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO.jsx";
import { guides } from "@/data/guides.js";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay: d },
});

const categories = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

export default function Guides() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get("q") || "");
  const [cat, setCat] = useState(params.get("cat") || "All");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return guides.filter((g) => {
      const inCat = cat === "All" || g.category === cat;
      const inText =
        !term ||
        g.title.toLowerCase().includes(term) ||
        g.excerpt.toLowerCase().includes(term) ||
        g.tags.join(" ").toLowerCase().includes(term);
      return inCat && inText;
    });
  }, [q, cat]);

  function updateQuery(nextQ, nextCat) {
    const obj = {};
    if (nextQ) obj.q = nextQ;
    if (nextCat && nextCat !== "All") obj.cat = nextCat;
    setParams(obj, { replace: true });
  }

  return (
    <>
      <SEO
        title="Guides — Clerko"
        description="Short, practical guides on proposals, pricing, AI polish, approvals and delivery."
      />

      <section className="max-w-6xl mx-auto px-4 pt-20 pb-8">
        <motion.h1 {...fade(0)} className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
          How-to / Guides
        </motion.h1>
        <motion.p {...fade(0.05)} className="text-zinc-400 mb-8 max-w-3xl">
          Bite-size tutorials that help you create clear, client-ready proposals and quotes. No fluff.
        </motion.p>

        {/* Search + filters */}
        <motion.div {...fade(0.08)} className="flex flex-col sm:flex-row gap-3 sm:items-center mb-6">
          <div className="relative w-full sm:w-96">
            <input
              id="guide-search"
              name="guide-search"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                updateQuery(e.target.value, cat);
              }}
              placeholder="Search guides (e.g., pricing, AI, templates)"
              className="w-full rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/40 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCat(c);
                    updateQuery(q, c);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    active
                      ? "bg-white/[0.1] border-white/20"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((g, i) => (
            <motion.article
              {...fade(0.02 * i)}
              key={g.slug}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs text-white/60">{g.category}</span>
                <span className="text-xs text-white/40">{g.readTime}</span>
              </div>
              <h3 className="text-lg font-medium mb-1">{g.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{g.excerpt}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {g.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/40">Updated {g.updated}</span>
                <Link
                  to={`/guides/${g.slug}`}
                  className="text-white hover:opacity-80 underline underline-offset-4"
                >
                  Read guide →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-sm text-white/60 mt-6">
            No guides match your search. Try another keyword or category.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Ready to put this into practice?</h3>
            <p className="text-sm text-zinc-400">
              Generate client-ready proposals in minutes with Clerko.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/pricing"
              className="px-4 py-2 rounded-xl bg-white text-black text-sm hover:opacity-90"
            >
              View pricing
            </Link>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl border border-white/20 text-sm hover:border-white/40"
            >
              Try free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
