import React, { useMemo, useState } from "react";

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function currencyFormat(value, currency) {
  if (!value) return "";
  const num = Number(
    String(value).replace(/[^\d.,-]/g, "").replace(",", ".")
  );
  if (Number.isNaN(num)) return value;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USD",
    maximumFractionDigits: 2,
  }).format(num);
}

export default function GeneratorSection() {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [scope, setScope] = useState("Landing page + 3 subpages\nBasic SEO setup\nContact form");
  const [deliverables, setDeliverables] = useState("Design (Figma)\nResponsive development (React/Vite)\nDeployment (Vercel)\nBasic analytics (GA4)");
  const [timeline, setTimeline] = useState("2–3 weeks");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [paymentTerms, setPaymentTerms] = useState("50% upfront • 50% on delivery");
  const [contact, setContact] = useState("Emily Miller — emily@clerko.app");
  const [tone, setTone] = useState("Formal");

  const [copied, setCopied] = useState(false);

  const proposalMd = useMemo(() => {
    const amount = currencyFormat(price, currency);
    const today = new Date().toISOString().slice(0, 10);
    const s = (txt) =>
      txt
        .split("\n")
        .filter(Boolean)
        .map((l) => `- ${l.trim()}`)
        .join("\n");

    return [
      `# Proposal — ${project || "Project"}`,
      ``,
      `**Client:** ${client || "Your Client"}`,
      `**Date:** ${today}`,
      ``,
      `## Scope`,
      scope ? s(scope) : "- Define scope",
      ``,
      `## Deliverables`,
      deliverables ? s(deliverables) : "- Define deliverables",
      ``,
      `## Timeline`,
      `- ${timeline || "TBD"}`,
      ``,
      `## Investment`,
      amount ? `- ${amount}` : "- TBD",
      ``,
      `## Payment Terms`,
      `- ${paymentTerms || "TBD"}`,
      ``,
      `## Why Clerko`,
      `- Fast turnaround`,
      `- Clear scope & pricing`,
      `- Clean, modern execution`,
      ``,
      `## Contact`,
      `- ${contact || "hello@clerko.app"}`,
      ``,
      `---`,
      `_Tone: ${tone}_`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [client, project, scope, deliverables, timeline, price, currency, paymentTerms, contact, tone]);

  async function copy() {
    await navigator.clipboard.writeText(proposalMd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function reset() {
    setClient("");
    setProject("");
    setScope("Landing page + 3 subpages\nBasic SEO setup\nContact form");
    setDeliverables("Design (Figma)\nResponsive development (React/Vite)\nDeployment (Vercel)\nBasic analytics (GA4)");
    setTimeline("2–3 weeks");
    setPrice("");
    setCurrency("USD");
    setPaymentTerms("50% upfront • 50% on delivery");
    setContact("Emily Miller — emily@clerko.app");
    setTone("Formal");
  }

  return (
    <section id="generator" className="relative bg-[#0A0B14] py-16 sm:py-20 scroll-mt-24">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {/* LEFT — Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Instant Proposal Generator</h2>
            <p className="mt-1 text-sm text-white/60">Fill a few fields — preview updates live.</p>
          </div>

          <div className="grid gap-4">
            <label className="text-sm">
              Client
              <input
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g., ACME LLC"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="text-sm">
              Project
              <input
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="e.g., Website redesign"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="text-sm">
              Scope (one per line)
              <textarea
                rows={3}
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="text-sm">
              Deliverables (one per line)
              <textarea
                rows={3}
                value={deliverables}
                onChange={(e) => setDeliverables(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm">
                Timeline
                <input
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  placeholder="e.g., 2–3 weeks"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>
              <label className="text-sm">
                Price
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g., 1990"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm">
                Currency
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>PLN</option>
                  <option>GBP</option>
                </select>
              </label>

              <label className="text-sm">
                Tone
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option>Formal</option>
                  <option>Neutral</option>
                  <option>Friendly</option>
                </select>
              </label>
            </div>

            <label className="text-sm">
              Payment terms
              <input
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
                placeholder="e.g., 50% upfront • 50% on delivery"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <label className="text-sm">
              Contact
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Name — email@domain.com"
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>

            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={copy}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:brightness-110"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                type="button"
                onClick={() => downloadText(`proposal-${(project || "project").toLowerCase().replace(/\s+/g, "-")}.md`, proposalMd)}
                className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15"
              >
                Export .md
              </button>
              <button
                type="button"
                onClick={reset}
                className="rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm text-white/70 hover:bg-white/5"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — Preview */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold">Live preview (Markdown)</h3>
          </div>
          <textarea
            readOnly
            value={proposalMd}
            className="min-h-[420px] w-full rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none"
          />
          <p className="mt-3 text-xs text-white/60">
            Pro features (soon): PDF export, saved templates, custom branding, open tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
