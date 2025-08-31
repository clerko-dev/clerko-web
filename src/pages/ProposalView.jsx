// src/pages/ProposalView.jsx
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "@/components/SEO.jsx";
import SignatureModal from "@/components/sign/SignatureModal.jsx";
import { addView, getProposalBySlug, markAccepted, saveSignature } from "@/lib/db.js";
import { exportNodeToPDF } from "@/lib/pdf.js";
import classNames from "classnames";

function Line({ it, currency }) {
  const line = (Number(it.qty)||0) * (Number(it.unit_price)||0);
  const afterDiscount = Math.max(0, line - (Number(it.discount)||0));
  const afterTax = afterDiscount * (1 + (Number(it.tax_rate)||0)/100);
  return (
    <div className="grid grid-cols-12 gap-3 py-2 border-b last:border-b-0">
      <div className="col-span-6">{it.name}</div>
      <div className="col-span-2 text-right">{it.qty}</div>
      <div className="col-span-2 text-right">{currency} {Number(it.unit_price).toFixed(2)}</div>
      <div className="col-span-2 text-right font-medium">{currency} {afterTax.toFixed(2)}</div>
    </div>
  );
}

export default function ProposalView() {
  const { slug } = useParams();
  const [p, setP] = useState(null);
  const [openSign, setOpenSign] = useState(false);
  const [busy, setBusy] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProposalBySlug(slug);
        setP(data);
        // Analyt.
        addView(data.id, "open", 0).catch(()=>{});
      } catch (e) { console.error(e); }
    })();
  }, [slug]);

  if (!p) return <div className="max-w-3xl mx-auto px-4 py-10">Loading…</div>;

  const total = Number(p.total || 0);

  async function acceptWithSignature(asset_path) {
    setBusy(true);
    try {
      await saveSignature({ proposal_id: p.id, method: "draw", asset_path, signer_email: p.client_email });
      await markAccepted(p.id);
      setP({ ...p, status: "accepted" });
    } catch (e) { alert(e.message); }
    setBusy(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <SEO title={`${p.title} — Clerko`} />
      <div ref={rootRef} className="bg-white rounded-2xl shadow-xl overflow-hidden border">
        <div className="p-6 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white">
          <div className="text-sm opacity-90">Proposal</div>
          <h1 className="text-2xl font-semibold">{p.title}</h1>
          <div className="text-sm mt-1">Prepared for {p.client_name || "Client"} • {p.client_email || "—"}</div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-medium">Total: {p.currency} {total.toFixed(2)}</div>
            <div className={classNames("px-2 py-1 rounded text-sm", p.status === "accepted" ? "bg-emerald-500" : "bg-white/20")}>
              {p.status}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section data-section="intro">
            <h2 className="text-lg font-semibold mb-2">Scope</h2>
            <p className="text-gray-600">This proposal outlines deliverables, timeline, and investment for the project.</p>
          </section>

          <section data-section="pricing">
            <h2 className="text-lg font-semibold mb-2">Pricing</h2>
            <div className="rounded-lg border overflow-hidden">
              <div className="grid grid-cols-12 gap-3 py-2 px-3 bg-gray-50 border-b text-sm font-medium">
                <div className="col-span-6">Item</div>
                <div className="col-span-2 text-right">Qty</div>
                <div className="col-span-2 text-right">Unit</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              <div className="px-3">
                {p.items?.map(it => <Line key={it.id} it={it} currency={p.currency} />)}
              </div>
              <div className="flex justify-between px-3 py-3 border-t font-semibold">
                <div>Total</div>
                <div>{p.currency} {total.toFixed(2)}</div>
              </div>
            </div>
          </section>

          <section data-section="terms">
            <h2 className="text-lg font-semibold mb-2">Terms</h2>
            <p className="text-gray-600 text-sm">Offer valid for 14 days. Payments due within 7 days of invoice. Intellectual property transfers upon full payment.</p>
          </section>
        </div>
      </div>

      <div className="mt-6 flex gap-3 justify-end">
        <button className="px-4 py-2 rounded-md border" onClick={() => exportNodeToPDF(rootRef.current, `${p.title}.pdf`)}>Download PDF</button>
        <button
          className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50"
          disabled={p.status === "accepted" || busy}
          onClick={() => setOpenSign(true)}
        >
          {p.status === "accepted" ? "Accepted" : "Accept (sign)"}
        </button>
      </div>

      <SignatureModal
        open={openSign}
        proposalId={p.id}
        signerEmail={p.client_email}
        onClose={() => setOpenSign(false)}
        onSaved={(path) => { setOpenSign(false); acceptWithSignature(path); }}
      />
    </div>
  );
}
