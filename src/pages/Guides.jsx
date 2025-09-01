// src/pages/Guides.jsx
import { Link, useSearchParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import { guides } from "@/data/guides.js"; // <- named export, nie default

const TAGS = ["All", "Proposals", "Pricing", "Workflow"];

export default function Guides() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = (searchParams.get("q") || "").toLowerCase();
  const tagParam = searchParams.get("t") || "All";
  const tag = TAGS.includes(tagParam) ? tagParam : "All";

  const onSearch = (val) => {
    const sp = new URLSearchParams(searchParams);
    if (val) sp.set("q", val);
    else sp.delete("q");
    setSearchParams(sp, { replace: true });
  };

  const onTag = (t) => {
    const sp = new URLSearchParams(searchParams);
    if (t && t !== "All") sp.set("t", t);
    else sp.delete("t");
    setSearchParams(sp, { replace: true });
  };

  // ————— filtr —————
  const filteredGuides = guides
    .filter((g) => (tag === "All" ? true : (g.tags || []).includes(tag)))
    .filter((g) => {
      if (!q) return true;
      const hay = `${g.title} ${g.excerpt || ""} ${(g.tags || []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    });

  return (
    <>
      <SEO
        title="Guides — Clerko"
        description="Tactical, no-fluff reads about proposals, pricing and workflow."
      />

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-white">Guides</h1>
          <p className="text-white/60">Tactical, no-fluff reads.</p>
        </header>

        {/* search + tagi */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            defaultValue={q}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search guides (e.g., pricing, AI, scope)"
            className="w-full sm:w-2/3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-white/90 placeholder-white/40 outline-none focus:border-white/20"
          />
          <div className="flex gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => onTag(t)}
                className={`rounded-full px-3 py-1 text-sm ${
                  tag === t
                    ? "bg-white text-zinc-900"
                    : "border border-white/10 text-white/70 hover:text-white"
                }`}
                aria-pressed={tag === t}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* lista */}
        <div className="space-y-3">
          {filteredGuides.map((g) => (
            <Link
              key={g.slug}
              to={`/how-to/${g.slug}`}
              className="block rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{g.title}</h3>
                {g.minutes && (
                  <span className="text-xs text-white/50">{g.minutes} min</span>
                )}
              </div>
              {g.excerpt && (
                <p className="mt-1 text-sm text-white/60">{g.excerpt}</p>
              )}
            </Link>
          ))}

          {filteredGuides.length === 0 && (
            <p className="text-white/60">No guides match your filters.</p>
          )}
        </div>

        <div className="pt-6 text-center">
          <Link
            to="/tools/proposal"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.06]"
          >
            Try free — generate proposal
          </Link>
        </div>
      </div>
    </>
  );
}
