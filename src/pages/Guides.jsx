import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { guides } from "@/data/guides.js"; // eksport nazwany

const TAGS = ["All", "Proposals", "Pricing", "Workflow"];

export default function Guides() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");

  const initialTagParam = searchParams.get("t") || "All";
  const [tag, setTag] = useState(
    TAGS.includes(initialTagParam) ? initialTagParam : "All"
  );

  // Utrzymuj URL w zgodzie ze stanem (SEO + DX)
  useEffect(() => {
    const p = {};
    if (q) p.q = q;
    if (tag && tag !== "All") p.t = tag;
    setSearchParams(p, { replace: true });
  }, [q, tag, setSearchParams]);

  // ✅ Definicja guidesFiltered – brak tego wywalał render
  const guidesFiltered = useMemo(() => {
    let list = Array.isArray(guides) ? [...guides] : [];
    if (tag && tag !== "All") list = list.filter(g => (g.tags || []).includes(tag));
    if (q) {
      const s = q.toLowerCase();
      list = list.filter(
        g =>
          (g.title || "").toLowerCase().includes(s) ||
          (g.description || "").toLowerCase().includes(s)
      );
    }
    return list;
  }, [q, tag]);

  return (
    <>
      <SEO
        title="Guides — Clerko"
        description="Tactical, no-fluff reads about proposals, pricing and workflow."
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Guides</h1>
        <p className="text-white/60 mb-6">Tactical, no-fluff reads.</p>

        <div className="flex flex-col sm:flex-row gap-3 items-center mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guides (e.g., pricing, AI, scope)"
            className="w-full sm:flex-1 rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <div className="flex gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full px-3 py-1 text-sm transition ${
                  tag === t
                    ? "bg-white text-zinc-900"
                    : "bg-white/[0.06] text-white/70 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {guidesFiltered.map((g) => (
            <Link
              to={`/how-to/${g.slug}`}
              key={g.slug}
              className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 hover:bg-white/[0.06] transition"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-white font-medium">{g.title}</h3>
                  <p className="text-white/60 text-sm">{g.description}</p>
                </div>
                <span className="text-white/50 text-xs">
                  {g.read || g.readTime || ""}
                </span>
              </div>
            </Link>
          ))}

          {guidesFiltered.length === 0 && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-10 text-center text-white/60">
              No guides found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
