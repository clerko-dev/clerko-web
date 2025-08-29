import { useMemo, useState } from "react";

export default function GeneratorSection() {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");

  const preview = useMemo(() => {
    const currency = price ? `$${Number(price).toLocaleString()}` : "$—";
    return `Proposal for ${client || "Client"}
Project: ${project || "—"}
Total: ${currency}

Summary:
${notes || "Add notes or scope highlights here…"}

— Generated with Clerko`;
  }, [client, project, price, notes]);

  return (
    <section id="generator" className="relative py-16 sm:py-20 container px-6" data-reveal>
      <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5">
        <div className="grid md:grid-cols-2 gap-8">
          {/* FORM */}
          <div>
            <h2 className="h2">Generate a proposal preview</h2>
            <p className="text-white/70 mt-2">Fill the fields and see the live preview.</p>

            <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <label className="grid gap-2">
                <span className="text-sm text-white/60">Client</span>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="e.g. Acme LLC"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/60">Project</span>
                <input
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="Website revamp"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/60">Price (USD)</span>
                <input
                  type="number"
                  inputMode="decimal"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="5000"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-white/60">Notes</span>
                <textarea
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What’s included, timelines, milestones…"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                />
              </label>

              <div className="flex gap-3 pt-2">
                <a href="#pricing" className="btn-primary">Upgrade to export</a>
                <a href="/tools" className="btn-ghost">More tools</a>
              </div>
            </form>
          </div>

          {/* PREVIEW */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6">
            <div className="text-xs text-white/40 mb-2">Live preview</div>
            <pre className="whitespace-pre-wrap text-sm leading-6 bg-black/30 rounded-xl p-4 border border-white/10">
              {preview}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
