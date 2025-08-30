import React from "react";

export default function ProposalPreview() {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 text-white">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-white/60">Proposal</div>
          <div className="mt-1 text-lg font-semibold">#1024 • ACME Studio</div>
          <div className="text-white/60 text-sm">Issued: 2025-08-30 • Valid for 14 days</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-white/60">Total</div>
          <div className="text-2xl md:text-3xl font-extrabold">$4,980</div>
        </div>
      </div>

      {/* Bill to */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
          <div className="text-xs uppercase tracking-widest text-white/60">From</div>
          <div className="mt-1 font-medium">Clerko</div>
          <div className="text-white/60 text-sm">proposals@clerko.app</div>
        </div>
        <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
          <div className="text-xs uppercase tracking-widest text-white/60">To</div>
          <div className="mt-1 font-medium">ACME Studio</div>
          <div className="text-white/60 text-sm">billing@acmestudio.com</div>
        </div>
      </div>

      {/* Items */}
      <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/[0.03]">
            <tr className="text-white/60">
              <th className="text-left py-3 px-4 font-medium">Item</th>
              <th className="text-right py-3 px-4 font-medium">Qty</th>
              <th className="text-right py-3 px-4 font-medium">Price</th>
              <th className="text-right py-3 px-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(odd)]:bg-white/[0.01]">
            <tr>
              <td className="py-3 px-4">
                Website redesign<br />
                <span className="text-white/50">UI, responsive, accessibility</span>
              </td>
              <td className="py-3 px-4 text-right">1</td>
              <td className="py-3 px-4 text-right">$2,800</td>
              <td className="py-3 px-4 text-right">$2,800</td>
            </tr>
            <tr>
              <td className="py-3 px-4">
                CMS integration<br />
                <span className="text-white/50">Content model + migration</span>
              </td>
              <td className="py-3 px-4 text-right">1</td>
              <td className="py-3 px-4 text-right">$1,600</td>
              <td className="py-3 px-4 text-right">$1,600</td>
            </tr>
            <tr>
              <td className="py-3 px-4">
                QA & handoff<br />
                <span className="text-white/50">Tests + docs</span>
              </td>
              <td className="py-3 px-4 text-right">1</td>
              <td className="py-3 px-4 text-right">$580</td>
              <td className="py-3 px-4 text-right">$580</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="mt-4 flex flex-col items-end gap-2">
        <div className="flex items-center gap-10 text-sm text-white/70">
          <span>Subtotal</span><span className="font-medium">$4,980</span>
        </div>
        <div className="flex items-center gap-10 text-sm text-white/70">
          <span>Tax (0%)</span><span className="font-medium">$0.00</span>
        </div>
        <div className="flex items-center gap-10 text-base">
          <span className="text-white/80">Total due</span>
          <span className="font-bold text-white">$4,980</span>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-6 text-xs text-white/60 leading-relaxed">
        By accepting, you agree to the attached scope and payment terms. 
        50% due upfront, 50% upon delivery. Revisions: up to 2 rounds.
      </div>
    </div>
  );
}
