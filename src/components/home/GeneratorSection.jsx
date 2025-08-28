import { useMemo, useState } from "react";

export default function GeneratorSection() {
  const [client, setClient]   = useState("");
  const [service, setService] = useState("");
  const [price, setPrice]     = useState("");
  const [notes, setNotes]     = useState("");
  const [copied, setCopied]   = useState(false);
  const [error, setError]     = useState("");

  const proposal = useMemo(() => {
    const lines = [
      `Client: ${client || "Your Client"}`,
      `Scope: ${service || "Service description"}`,
      price ? `Price: ${price}` : "",
      notes ? `Notes: ${notes}` : "",
      "",
      "Why us: speed, quality, clear terms.",
    ].filter(Boolean);
    return lines.join("\n");
  }, [client, service, price, notes]);

  const canGenerate = client.trim() && service.trim();

  const handleGenerate = () => {
    if (!canGenerate) {
      setError("Please fill Client and Service/Scope.");
      return;
    }
    setError("");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleDownload = () => {
    const blob = new Blob([proposal], { type: "text/plain;charset=utf-8" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = `proposal-${(client || "client").toLowerCase().replace(/\s+/g,"-")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clear = () => {
    setClient(""); setService(""); setPrice(""); setNotes("");
    setError("");
  };

  return (
    <section id="generator" className="relative py-16 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* FORM CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/30 backdrop-blur">
            <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Step 1</div>
            <h3 className="text-lg font-semibold mb-6">Fill client & scope</h3>

            <label className="block mb-4">
              <span className="text-sm text-white/80">Client</span>
              <input
                value={client}
                onChange={(e)=>setClient(e.target.value)}
                placeholder="e.g., ACME LLC"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm text-white/80">Service / Scope</span>
              <input
                value={service}
                onChange={(e)=>setService(e.target.value)}
                placeholder="e.g., Website + copy"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm text-white/80">Price</span>
              <input
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                placeholder="e.g., $1,990"
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="block">
              <span className="text-sm text-white/80">Notes (optional)</span>
              <textarea
                value={notes}
                onChange={(e)=>setNotes(e.target.value)}
                placeholder="Requirements, timeline, milestonesâ€¦"
                rows={4}
                className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={!canGenerate}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white
                           bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]
                           disabled:opacity-40 disabled:cursor-not-allowed
                           shadow hover:opacity-90 transition-opacity"
              >
                Generate preview
              </button>
              <button
                type="button"
                onClick={clear}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white/90
                           bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* PREVIEW CARD */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Step 2</div>
                <h3 className="text-lg font-semibold">Preview instantly</h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-md text-sm bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-md text-sm bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
                >
                  Download .txt
                </button>
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
