import React, { useMemo, useState } from "react";

/** GA4 helper (lokalnie, żeby nie psuć builda, jeśli brak src/lib/analytics.js) */
function track(event, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
}

export default function GeneratorSection() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const proposal = useMemo(() => {
    return [
      `Client: ${client || "Your Client"}`,
      `Scope: ${service || "Service description"}`,
      price ? `Price: ${price}` : "",
      notes ? `Notes: ${notes}` : "",
      "",
      "Why us: speed, quality, clear terms.",
    ]
      .filter(Boolean)
      .join("\n");
  }, [client, service, price, notes]);

  const onGenerate = () => {
    track("generator_generate");
    // tu docelowo możemy dodać AI formatting/template merge
  };

  const onClear = () => {
    setClient("");
    setService("");
    setPrice("");
    setNotes("");
    track("generator_clear");
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(proposal);
      setCopied(true);
      track("generator_copy", { length: proposal.length });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <section id="generator" className="relative bg-[#0A0B14] py-16 sm:py-20 scroll-mt-24">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2">
          {/* FORM */}
          <div className="glass p-6 md:p-8">
            <h3 className="text-xl font-semibold">Proposal generator</h3>
            <p className="mt-1 text-sm text-white/70">
              Type a few fields, generate preview, copy or export (soon).
            </p>

            <div className="mt-6 grid gap-4">
              <label className="text-sm">
                Client
                <input
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g., ACME LLC"
                  className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>

              <label className="text-sm">
                Service / Scope
                <input
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g., Website + copy"
                  className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>

              <label className="text-sm">
                Price
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g., $1,990"
                  className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>

              <label className="text-sm">
                Notes (optional)
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Requirements, timeline, milestones…"
                  rows={4}
                  className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>

              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={onGenerate}
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                >
                  Generate preview
                </button>
                <button
                  type="button"
                  onClick={onClear}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="glass p-6 md:p-8">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Preview</h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
                >
                  Copy
                </button>
                {copied && (
                  <span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/20">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <textarea
              readOnly
              value={proposal}
              className="min-h-[280px] w-full rounded-lg bg-black/30 border border-white/10 p-3 text-sm"
            />

            <p className="mt-3 text-xs text-white/60">
              Pro tip: Pro plan adds PDF export, saved templates, and branding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
