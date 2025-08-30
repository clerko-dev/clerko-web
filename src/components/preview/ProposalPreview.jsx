import React from "react";

export default function ProposalPreview() {
  return (
    <div className="relative mx-auto w-[min(620px,92vw)] overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-black/10">
      {/* Brand bar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-white">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/80" />
          <div className="text-sm font-semibold tracking-wide">Clerko</div>
        </div>
        <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          Proposal • Valid 14 days
        </div>
      </div>

      {/* Title & meta */}
      <div className="px-7 pt-6">
        <h3 className="text-xl font-semibold tracking-tight">Website Redesign Proposal</h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-slate-500">
          <div>
            <span className="font-medium text-slate-700">#CL-2025-104</span>
          </div>
          <div>Date: <span className="font-medium text-slate-700">2025-08-30</span></div>
          <div>Status: <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-200">Draft</span></div>
        </div>
      </div>

      {/* Parties */}
      <div className="px-7 pt-5">
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="text-slate-500">From</div>
            <div className="font-medium">Clerko Ltd</div>
            <div className="text-slate-500">hello@clerko.app</div>
            <div className="text-slate-500">+44 20 1234 5678</div>
          </div>
          <div className="text-right">
            <div className="text-slate-500">To</div>
            <div className="font-medium">Acme Inc.</div>
            <div className="text-slate-500">billing@acme.com</div>
            <div className="text-slate-500">+1 (415) 555-0132</div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-7 pt-6">
        <div className="rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-200">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            Overview
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            We will redesign Acme’s marketing website to improve conversion and performance.
            Scope covers discovery, UX, UI, development and launch. Estimate includes QA and
            post-launch support.
          </p>
        </div>
      </div>

      {/* Scope & timeline */}
      <div className="px-7 pt-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Scope
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Workshops, IA & wireframes</li>
              <li>Design system & UI screens</li>
              <li>React build + CMS integration</li>
              <li>Analytics & performance</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Timeline
            </div>
            <ol className="mt-2 space-y-1 text-sm text-slate-700">
              <li>Week 1–2: Discovery & UX</li>
              <li>Week 3–4: UI Design</li>
              <li>Week 5–7: Build & QA</li>
              <li>Week 8: Launch</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Items table */}
      <div className="px-7 pt-6">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-2 font-medium">Item</th>
                <th className="px-4 py-2 text-right font-medium">Qty</th>
                <th className="px-4 py-2 text-right font-medium">Rate</th>
                <th className="px-4 py-2 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="px-4 py-3">
                  Discovery & UX
                  <div className="text-xs text-slate-500">Workshops, flows, wireframes</div>
                </td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">$1,500</td>
                <td className="px-4 py-3 text-right">$1,500</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 py-3">
                  Development sprint
                  <div className="text-xs text-slate-500">React + CMS</div>
                </td>
                <td className="px-4 py-3 text-right">2</td>
                <td className="px-4 py-3 text-right">$2,200</td>
                <td className="px-4 py-3 text-right">$4,400</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3">QA & Launch</td>
                <td className="px-4 py-3 text-right">1</td>
                <td className="px-4 py-3 text-right">$900</td>
                <td className="px-4 py-3 text-right">$900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals */}
      <div className="px-7 pt-4">
        <div className="ml-auto w-full max-w-xs space-y-1 text-sm">
          <div className="flex justify-between">
            <div className="text-slate-500">Subtotal</div>
            <div className="font-medium">$6,800</div>
          </div>
          <div className="flex justify-between">
            <div className="text-slate-500">VAT (23%)</div>
            <div className="font-medium">$1,564</div>
          </div>
          <div className="mt-1 rounded-lg bg-gradient-to-r from-violet-50 to-fuchsia-50 px-3 py-2 ring-1 ring-violet-100">
            <div className="flex items-baseline justify-between">
              <div className="text-sm font-semibold text-slate-700">Total</div>
              <div className="text-base font-bold text-slate-900">$8,364</div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="px-7 pt-5">
        <div className="rounded-lg bg-slate-50/80 p-3 text-xs leading-relaxed text-slate-600 ring-1 ring-slate-200">
          Payment 50% upfront, 50% on delivery. Includes 30 days of post-launch support.
          By accepting you agree to our <span className="underline">Terms</span>.
        </div>
      </div>

      {/* Acceptance */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 bg-white/90 px-7 py-4">
        <label className="flex items-center gap-2 text-xs text-slate-600">
          <input type="checkbox" className="h-3.5 w-3.5 accent-violet-600" />
          I accept the proposal and terms.
        </label>
        <div className="flex gap-2">
          <button className="rounded-md bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800">
            Download PDF
          </button>
          <button className="rounded-md bg-violet-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-violet-500">
            Accept Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
