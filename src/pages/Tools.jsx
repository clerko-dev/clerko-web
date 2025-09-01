import React, { useMemo, useState } from "react";
import SEO from "@/components/SEO.jsx";

function money(n, c="USD"){ try{ return new Intl.NumberFormat("en-US",{style:"currency",currency:c}).format(Number(n||0)); }catch{ return `${Number(n||0).toFixed(2)} ${c}`; } }

export default function Tools() {
  // Quick Estimate
  const [qe, setQe] = useState({ hours: 10, rate: 50, tax: 0.23, currency: "USD" });
  const qeTotals = useMemo(() => {
    const base = Number(qe.hours||0) * Number(qe.rate||0);
    const tax = base * Number(qe.tax||0);
    return { base, tax, total: base+tax };
  }, [qe]);

  // VAT / Tax helper
  const [taxHelp, setTaxHelp] = useState({ net: 1000, rate: 0.23, currency: "USD" });
  const taxCalc = useMemo(() => {
    const tax = Number(taxHelp.net||0) * Number(taxHelp.rate||0);
    return { tax, gross: Number(taxHelp.net||0)+tax };
  }, [taxHelp]);

  // Discount sandbox
  const [disc, setDisc] = useState({ amount: 1200, discount: 100, currency: "USD" });
  const discCalc = useMemo(() => {
    const after = Math.max(0, Number(disc.amount||0) - Number(disc.discount||0));
    return { after };
  }, [disc]);

  return (
    <>
      <SEO title="Tools — Clerko" description="Free business tools that help you scope and price work." />
      <div className="max-w-6xl mx-auto px-4 py-10 text-white space-y-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Business Tools</h1>

        {/* Quick Estimate */}
        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-xl font-semibold mb-3">Quick Estimate</h2>
          <div className="grid md:grid-cols-5 gap-3">
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" value={qe.hours}
              onChange={e=>setQe(v=>({...v, hours:e.target.value}))} placeholder="Hours"/>
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" value={qe.rate}
              onChange={e=>setQe(v=>({...v, rate:e.target.value}))} placeholder="Rate / hour"/>
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" step="0.01" value={qe.tax}
              onChange={e=>setQe(v=>({...v, tax:e.target.value}))} placeholder="Tax (e.g. 0.23)"/>
            <select className="rounded-md bg-zinc-900/60 border border-white/10 p-2" value={qe.currency}
              onChange={e=>setQe(v=>({...v, currency:e.target.value}))}>
              <option>USD</option><option>EUR</option><option>PLN</option><option>GBP</option>
            </select>
            <div className="rounded-md border border-white/10 p-2">
              <div className="text-sm text-white/60">Total</div>
              <div className="font-semibold">{money(qeTotals.total, qe.currency)}</div>
            </div>
          </div>
        </section>

        {/* Tax helper */}
        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-xl font-semibold mb-3">VAT / Tax Helper</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" value={taxHelp.net}
              onChange={e=>setTaxHelp(v=>({...v, net:e.target.value}))} placeholder="Net"/>
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" step="0.01" value={taxHelp.rate}
              onChange={e=>setTaxHelp(v=>({...v, rate:e.target.value}))} placeholder="Rate"/>
            <select className="rounded-md bg-zinc-900/60 border border-white/10 p-2" value={taxHelp.currency}
              onChange={e=>setTaxHelp(v=>({...v, currency:e.target.value}))}>
              <option>USD</option><option>EUR</option><option>PLN</option><option>GBP</option>
            </select>
            <div className="rounded-md border border-white/10 p-2">
              <div className="text-sm text-white/60">Gross</div>
              <div className="font-semibold">{money(taxCalc.gross, taxHelp.currency)}</div>
            </div>
          </div>
        </section>

        {/* Discount sandbox */}
        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-xl font-semibold mb-3">Discount Sandbox</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" value={disc.amount}
              onChange={e=>setDisc(v=>({...v, amount:e.target.value}))} placeholder="Amount"/>
            <input className="rounded-md bg-zinc-900/60 border border-white/10 p-2" type="number" value={disc.discount}
              onChange={e=>setDisc(v=>({...v, discount:e.target.value}))} placeholder="Discount"/>
            <select className="rounded-md bg-zinc-900/60 border border-white/10 p-2" value={disc.currency}
              onChange={e=>setDisc(v=>({...v, currency:e.target.value}))}>
              <option>USD</option><option>EUR</option><option>PLN</option><option>GBP</option>
            </select>
            <div className="rounded-md border border-white/10 p-2">
              <div className="text-sm text-white/60">After discount</div>
              <div className="font-semibold">{money(discCalc.after, disc.currency)}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
