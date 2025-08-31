import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO.jsx";
import { guides } from "@/data/guides.js";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut", delay: d },
});

const categories = ["All", ...Array.from(new Set(guides.map((g) => g.category)))];

export default function HowTo() {
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
      <SEO title="Guides" description="Tactical, no-fluff reads on proposals, pricing and workflow." />

      <section className="max-w-6xl mx-auto px-4 pt-16 pb-6">
        <motion.h1 {...fade(0)} className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Guides
        </motion.h1>
        <motion.p {...fade(0.05)} className="text-zinc-400 mb-8">
          Tactical, no-fluff reads.
        </motion.p>

        <motion.div {...fade(0.08)} className="flex flex-col sm:flex-row gap-3 sm:items-center mb-6">
          <input
            id="guide-search"
            name="guide-search"
            value={q}
            onChange={(e) => { setQ(e.target.value); updateQuery(e.target.value, cat); }}
            placeholder="Search guides (e.g., pricing, AI, scope)"
            className="w-full sm:w-96 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/40 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-white/20"
            autoComplete="off"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => { setCat(c); updateQuery(q, c); }}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    active ? "bg-white/[0.1] border-white/20" : "bg-white/[0.03] border-white/10 hover:border-white/20"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="space-y-3">
          {filtered.map((g, i) => (
            <motion.article
              key={g.slug}
              {...fade(0.02 * i)}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium">
                    <Link to={`/how-to/${g.slug}`} className="hover:opacity-80">{g.title}</Link>
                  </h3>
                  <p className="text-sm text-zinc-400">{g.excerpt}</p>
                </div>
                <div className="text-xs text-white/60 shrink-0">{g.readTime}</div>
              </div>
            </motion.article>
          ))}
        </div>
{/* Featured */}
<motion.div {...fade(0.07)} className="mb-8">
  <Link
    to={`/how-to/${guides[0].slug}`}
    className="block rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-5 hover:border-white/20 transition"
  >
    <div className="text-xs text-white/60 mb-2">Featured</div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-medium">{guides[0].title}</h2>
        <p className="text-sm text-zinc-400 max-w-2xl">{guides[0].excerpt}</p>
      </div>
      <span className="text-xs text-white/60 shrink-0">{guides[0].readTime}</span>
    </div>
  </Link>
</motion.div>

        {filtered.length === 0 && (
          <div className="text-sm text-white/60 mt-6">No guides match your search.</div>
        )}

       <div className="mt-10 text-center text-sm text-white/60">
  <Link to="/" className="underline underline-offset-4">
    Try free {"—"} generate proposal
  </Link>
</div>
      </section>
    </>
  );
}
