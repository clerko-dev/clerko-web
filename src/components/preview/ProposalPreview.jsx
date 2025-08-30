import React from "react";

export default function ProposalPreview() {
  return (
    <div className="relative mx-auto w-[min(520px,90vw)] rounded-2xl bg-white/95 text-slate-900 shadow-2xl ring-1 ring-black/10">
      {/* Pasek tytułowy */}
      <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-white">
        <div className="text-sm font-semibold tracking-wide">Proposal</div>
        <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Draft preview</div>
      </div>

      {/* Nagłówek dokumentu */}
      <div className="px-6 py-5">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-500">From</div>
            <div className="font-medium">Clerko Ltd</div>
            <div className="text-slate-500">hello@clerko.app</div>
          </div>
          <div className="text-right">
            <div className="text-slate-500">To</div>
            <div className="font-medium">Acme Inc.</div>
            <div className="text-slate-500">billing@acme.com</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-slate-500">Proposal #</div>
            <div className="font-medium">CL-2025-104</div>
          </div>
          <div className="text-right">
            <div className="text-slate-500">Date</div>
            <div className="font-medium">2025-08-30</div>
          </div>
        </div>

        {/* Pozycje / tabela */}
        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2 text-right">Qty</th>
                <th className="px-4 py-2 text-right">Unit</th>
                <th className="px-4 py-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3">
                  Website redesign — discovery & UX
                  <div className="text-xs text-slate-500">Workshops, flows, wireframes</div>
                </td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">$1,200</td>
                <td className="px-4 py-3 text-right">$1,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  Development sprint
                  <div className="text-xs text-slate-500">React + CMS integration</div>
                </td>
                <td className="px-4 py-3 text-right">2</td>
                <td className="px-4 py-3 text-right">$2,000</td>
                <td className="px-4 py-3 text-right">$4,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3">QA & Launch</td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">$800</td>
                <td className="px-4 py-3 text-right">$800</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Podsumowanie */}
        <div className="mt-4 space-y-1 text-sm">
          <div className="flex justify-end gap-8">
            <div className="text-slate-500">Subtotal</div>
            <div className="font-medium">$6,000</div>
          </div>
          <div className="flex justify-end gap-8">
            <div className="text-slate-500">VAT (23%)</div>
            <div className="font-medium">$1,380</div>
          </div>
          <div className="flex justify-end gap-8 text-base">
            <div className="font-semibold">Total</div>
            <div className="font-semibold">$7,380</div>
          </div>
        </div>

        {/* Warunki */}
        <div className="mt-5 rounded-md bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
          Payment 50% upfront, 50% on delivery. Valid for 14 days. By accepting you agree to our{" "}
          <span className="underline">Terms</span>.
        </div>
      </div>

      {/* Stopka akcji */}
      <div className="flex items-center justify-between border-t border-slate-200 bg-white/90 px-6 py-3">
        <div className="text-xs text-slate-500">Generated with Clerko</div>
        <div className="flex gap-2">
          <button className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
            Download PDF
          </button>
          <button className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-900 hover:bg-slate-200">
            Send to client
          </button>
        </div>
      </div>
    </div>
  );
}
