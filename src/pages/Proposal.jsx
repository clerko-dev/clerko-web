import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO.jsx";
import { useParams } from "react-router-dom";
import { getProposalBySlug } from "@/lib/proposals";

function money(n, currency="USD") {
  const v = Number(n || 0);
  try { return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(v); }
  catch { return `${v.toFixed(2)} ${currency}`; }
}

export default function ProposalPublic() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const p = await getProposalBySlug(slug);
        setData(p);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [slug]);

  if (!data) {
    return (
      <>
        <SEO title="Proposal — Clerko" />
        <div className="min-h-[60vh] grid place-items-center text-white/80">Loading…</div>
      </>
    );
  }

  const items = data.proposal_items || [];
  const subtotal = items.reduce((s, r) => s + Number(r.line_total || 0), 0);
  const base = Math.max(0, subtotal - Number(data.discount || 0));
  const tax = Number((base * Number(data.tax_rate || 0)).toFixed(2));
  const total = Number((base + tax).toFixed(2));

  return (
    <>
      <SEO title={`${data.title} — Clerko`} description={`Proposal for ${data.client_name || 'Client'}`} />
      <div className="max-w-3xl mx-auto px-4 py-10 text-white">
        <div className="mb-6">
          <div className="text-sm text-white/60">Proposal</div>
          <h1 className="text-2xl md:text-3xl font-semibold">{data.title}</h1>
          {data.client_name && <div className="text-white/70 mt-1">Prepared for: {data.client_name}</div>}
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Scope & Investment</h2>
          <div className="divide-y divide-white/10">
            {items.map((row) => (
              <div key={row.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{row.description}</div>
                  <div className="text-sm text-white/60">{row.qty} × {money(row.unit_price, data.currency)}</div>
                </div>
                <div className="text-white/90">{money(row.line_total, data.currency)}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-white/80">
              <span>Subtotal</span><span>{money(subtotal, data.currency)}</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>Discount</span><span>-{money(data.discount || 0, data.currency)}</span>
            </div>
            <div className="flex justify-between text-white/80">
              <span>Tax</span><span>{money(tax, data.currency)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span><span>{money(total, data.currency)}</span>
            </div>
          </div>

          {data.notes && (
            <div className="mt-4 text-white/70 whitespace-pre-line">
              {data.notes}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a className="rounded-md bg-white text-zinc-900 px-4 py-2" href="mailto:?subject=Approve%20proposal&body=Looks%20good!">
            Approve
          </a>
          <a className="rounded-md border border-white/20 px-4 py-2" href="mailto:?subject=Questions%20about%20proposal&body=I%20have%20a%20question%20about%20…">
            Ask a question
          </a>
        </div>
      </div>
    </>
  );
}
