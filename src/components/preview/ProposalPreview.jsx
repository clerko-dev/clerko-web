// src/components/preview/ProposalPreview.jsx
import React from "react";

export default function ProposalPreview({ className = "" }) {
  const items = [
    { description: "Brand identity package", qty: 1, unitPrice: 1200 },
    { description: "Website design (5 pages)", qty: 1, unitPrice: 2200 },
    { description: "Copywriting", qty: 5, unitPrice: 120 },
  ];

  const subtotal = items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  const discount = 200;
  const taxRate = 0.08;
  const tax = Math.round((subtotal - discount) * taxRate * 100) / 100;
  const total = subtotal - discount + tax;

  const fmt = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div
      className={[
        "bg-white text-slate-900 rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden",
        "print:shadow-none print:ring-0",
        className,
      ].join(" ")}
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between">
        <div>
          <div className="text-[11px] tracking-widest text-slate-500">
            PROPOSAL
          </div>
          <div className="mt-1 text-2xl font-semibold">
            Creative Services Proposal
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold">
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Clerko
            </span>
          </div>
          <div className="text-xs text-slate-500">Proposal #PR-1027</div>
          <div className="text-xs text-slate-500">Date: {today}</div>
          <div className="text-xs text-slate-500">Valid until: 14 days</div>
        </div>
      </div>

      {/* Parties */}
      <div className="px-6 py-4 grid grid-cols-2 gap-6">
        <div>
          <div className="text-[11px] font-semibold text-slate-500">From</div>
          <div className="mt-1 text-sm font-medium">Acme Studio LLC</div>
          <div className="text-xs text-slate-600">hello@acmestudio.com</div>
          <div className="text-xs text-slate-600">
            123 Market St, San Francisco, CA
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-500">To</div>
          <div className="mt-1 text-sm font-medium">BrightCorp Inc.</div>
          <div className="text-xs text-slate-600">miranda@brightcorp.com</div>
          <div className="text-xs text-slate-600">1200 Lakeview, Austin, TX</div>
        </div>
      </div>

      {/* Items */}
      <div className="px-6">
        <table className="w-full text-sm border-separate [border-spacing:0]">
          <thead>
            <tr className="text-slate-600">
              <th className="text-left py-2 border-b border-slate-200">
                Item
              </th>
              <th className="text-right py-2 border-b border-slate-200 w-16">
                Qty
              </th>
              <th className="text-right py-2 border-b border-slate-200 w-32">
                Unit price
              </th>
              <th className="text-right py-2 border-b border-slate-200 w-32">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, idx) => (
              <tr key={idx} className="align-top">
                <td className="py-2 pr-3">
                  <div className="font-medium">{i.description}</div>
                  <div className="text-xs text-slate-500">
                    Deliverables & milestones included
                  </div>
                </td>
                <td className="py-2 text-right">{i.qty}</td>
                <td className="py-2 text-right">{fmt(i.unitPrice)}</td>
                <td className="py-2 text-right font-medium">
                  {fmt(i.qty * i.unitPrice)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Divider */}
      <div className="px-6 mt-3">
        <div className="border-t border-slate-200" />
      </div>

      {/* Summary + Terms */}
      <div className="px-6 py-4 grid grid-cols-2 gap-6">
        <div>
          <div className="text-[11px] font-semibold text-slate-500 mb-1">
            Summary
          </div>
          <dl className="text-sm space-y-1">
            <div className="flex justify-between">
              <dt className="text-slate-600">Subtotal</dt>
              <dd>{fmt(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Discount</dt>
              <dd>-{fmt(discount)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Tax (8%)</dt>
              <dd>{fmt(tax)}</dd>
            </div>
            <div className="flex justify-between pt-2 font-semibold text-slate-900">
              <dt>Total</dt>
              <dd>{fmt(total)}</dd>
            </div>
          </dl>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-500 mb-1">
            Terms
          </div>
          <p className="text-xs leading-5 text-slate-600">
            50% due on acceptance, 50% on delivery. Prices valid for 14 days.
            Work begins upon payment. Design files delivered in Figma & PDF.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="border-t border-slate-300 pt-2 text-xs">
              <div className="font-medium">Client signature</div>
              <div className="text-[10px] text-slate-500">Name, Date</div>
            </div>
            <div className="border-t border-slate-300 pt-2 text-xs">
              <div className="font-medium">Issued by</div>
              <div className="text-[10px] text-slate-500">Acme Studio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-6 pb-5">
        <div className="mt-2 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            Created with{" "}
            <span className="font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Clerko
            </span>
          </div>
          <div className="flex gap-2">
            <button className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
              Download PDF
            </button>
            <button className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
