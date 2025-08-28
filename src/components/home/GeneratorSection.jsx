import React, { useMemo, useState } from "react";
import Button from "@/components/ui/Button.jsx";

function formatPreview({ client, service, price, notes }) {
  const lines = [
    `Client: ${client || "Your Client"}`,
    `Scope: ${service || "Service description"}`,
    ...(price ? [`Price: ${price}`] : []),
    ...(notes ? [`Notes: ${notes}`] : []),
    "",
    "Why us: speed, quality, clear terms.",
  ];
  return lines.join("\n");
}

export default function GeneratorSection() {
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const preview = useMemo(
    () => formatPreview({ client, service, price, notes }),
    [client, service, price, notes]
  );

  function copy(text) {
    navigator.clipboard.writeText(text);
  }
  function downloadTxt(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearAll() {
    setClient(""); setService(""); setPrice(""); setNotes("");
  }

  return (
    <section id="generator" data-reveal className="relative bg-[#0A0B14] py-16 sm:py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        {/* left – form */}
        <div className="glass p-6 md:p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-semibold text-white">STEP 1</h3>
          <p className="text-slate-400 -mt-2">Fill client & scope</p>

          <label className="block">
            <span className="text-slate-300 text-sm">Client</span>
            <input
              className="input mt-1"
              placeholder="e.g., ACME LLC"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-slate-300 text-sm">Service / Scope</span>
            <input
              className="input mt-1"
              placeholder="e.g., Website + copy"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-slate-300 text-sm">Price</span>
              <input
                className="input mt-1"
                placeholder="e.g., $1,990"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <label className="block sm:col-span-1">
              <span className="text-slate-300 text-sm">Notes (optional)</span>
              <textarea
                rows={1}
                className="input mt-1 h-[42px]"
                placeholder="Requirements, timeline, milestones…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>

          <div className="flex gap-2 pt-1">
            <Button type="button" onClick={() => { /* live preview is automatic */ }}>
              Generate preview
            </Button>
            <Button type="button" variant="secondary" onClick={clearAll}>
              Clear
            </Button>
          </div>
        </div>

        {/* right – preview/output */}
        <div className="glass p-6 md:p-8 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Preview</h3>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={() => copy(preview)}>Copy</Button>
              <Button type="button" onClick={() => downloadTxt("proposal.txt", preview)}>Download .txt</Button>
            </div>
          </div>
          <pre className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-slate-200 overflow-auto min-h-[220px] whitespace-pre-wrap">
{preview}
          </pre>

          <p className="text-xs text-slate-400">
            Pro tip: PRO plan adds PDF export, saved templates, and branding.
          </p>
        </div>
      </div>
    </section>
  );
}
