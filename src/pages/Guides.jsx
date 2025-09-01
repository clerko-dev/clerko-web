// src/pages/Guides.jsx
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import guides from "@/data/guides.js";

const TAGS = ["All", "Proposals", "Pricing", "Workflow"];

export default function Guides() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState("");
  const [tag, setTag] = useState(
    TAGS.includes(searchParams.get("t") || "") ? searchParams.get("t")! : "All"
  );

  const filteredGuides = useMemo(() => {
    const query = q.trim().toLowerCase();
    return guides.filter((g) => {
      const t = (g.tag || g.category || "").toString();
      const inTag = tag === "All" || t === tag;
      const inText =
        !query ||
        g.title.toLowerCase().includes(query) ||
        (g.summary || "").toLowerCase().includes(query);
      return inTag && inText;
    });
  }, [q, tag]);

  const setTagAndQuery = (t: string) => {
    setTag(t);
    if (t === "All") setSearchParams({});
    else setSearchParams({ t });
  };

  return (
    <>
      <SEO
        title="Guides — Clerko"
        description="Tactical, no-fluff reads that help you write proposals, price quotes and protect margins."
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Guides
        </h1>
        <p className="text-zinc-400 mb-8">Tactical, no-fluff reads.</p>

        {/* Search + tagi */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search guides (e.g., pricing, AI, scope)"
            className="w-full md:w-96 rounded-xl border border-white/10 bg-white/[0.06] py-2.5 px-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTagAndQuery(t)}
                className={`rounded-full px-3 py-1.5 text-sm border ${
                  t === tag
                    ? "border-white/20 bg-white/[0.08] text-white"
                    : "border-white/10 text-white/70 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Lista artykułów */}
        <ul className="space-y-3">
          {filteredGuides.map((g) => (
            <li key={g.slug}>
              <Link
                to={`/how-to/${g.slug}`}
                className="block rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-medium">
                        {g.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">{g.summary}</p>
                    </div>
                    <span className="text-xs text-white/60 whitespace-nowrap">
                      {g.read || `${g.readMin || 6} min`}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}

          {filteredGuides.length === 0 && (
            <li className="text-sm text-white/60 px-1 py-8">
              No results. Try a different query.
            </li>
          )}
        </ul>

        {/* CTA pod listą */}
        <div className="mt-12 lg:rounded-xl lg:border lg:border-white/10 lg:bg-white/[0.03] lg:p-5">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-medium mb-1">
                Put it into action with Clerko
              </h3>
              <p className="text-sm text-zinc-400">
                Create, preview and share your proposals.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to="/"
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/[0.05]"
              >
                Try free
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-2 rounded-xl bg-white text-black"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
