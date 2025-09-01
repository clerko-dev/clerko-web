// src/pages/Guides.jsx
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { guides } from "@/data/guides.js";

const TAGS = ["All", "Proposals", "Pricing", "Workflow"];

export default function Guides() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");
  const [tag, setTag] = useState(
    TAGS.includes(searchParams.get("t") || "") ? searchParams.get("t") : "All"
  );

  // Obliczamy listę tylko wewnątrz komponentu
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return guides.filter(g => {
      const matchTag = tag === "All" ? true : g.tags?.includes(tag);
      const matchQ =
        query.length === 0
          ? true
          : [g.title, g.excerpt, ...(g.keywords || [])]
              .join(" ")
              .toLowerCase()
              .includes(query);
      return matchTag && matchQ;
    });
  }, [q, tag]);

  const applyTag = (t) => {
    setTag(t);
    const next = new URLSearchParams(searchParams);
    if (t === "All") next.delete("t");
    else next.set("t", t);
    setSearchParams(next, { replace: true });
  };

  const onSearch = (e) => {
    const value = e.target.value;
    setQ(value);
    const next = new URLSearchParams(searchParams);
    if (value) next.set("q", value);
    else next.delete("q");
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <SEO
        title="Guides — Clerko"
        description="Short, tactical guides: proposals that convert, pricing strategy, scope control."
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Guides</h1>
        <p className="text-white/60 mt-2">Tactical, no-fluff reads.</p>

        {/* Search + tagi */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={q}
            onChange={onSearch}
            placeholder="Search guides (e.g., pricing, AI, scope)"
            className="w-full sm:w-[420px] rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20"
          />
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => applyTag(t)}
                className={`px-3 py-1.5 rounded-full text-sm border transition
                  ${t === tag ? "bg-white text-zinc-900 border-white" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Lista */}
        <ul className="mt-6 space-y-3">
          {filtered.map((g) => (
            <li key={g.slug}>
              <Link
                to={`/how-to/${g.slug}`}
                className="block rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-medium">{g.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{g.excerpt}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/50">{g.read || ""}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Brak wyników */}
        {filtered.length === 0 && (
          <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-6 text-white/70">
            No guides match your filters. Try clearing the search or tag.
          </div>
        )}
      </main>
    </>
  );
}
