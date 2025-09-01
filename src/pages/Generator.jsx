import React, { useEffect, useMemo, useState } from "react";
import SEO from "@/components/SEO.jsx";
import { createProposal, addItem, updateProposal, listItems, togglePublic } from "@/lib/proposals";
import { supabase } from "@/lib/supabase";

function money(n, currency="USD") {
  const v = Number(n || 0);
  try { return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(v); }
  catch { return `${v.toFixed(2)} ${currency}`; }
}

export default function Generator() {
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState(null);
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "Website Redesign Proposal",
    client_name: "",
    client_email: "",
    currency: "USD",
    tax_rate: 0.23,
    discount: 0,
    notes: "Thank you for considering Clerko. This proposal outlines the scope, timelines and investment."
  });
  const [newItem, setNewItem] = useState({ description: "", qty: 1, unit_price: 100 });

  // Utwórz propozycję przy pierwszym wejściu (demo bez konta)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const p = await createProposal(form);
        if (cancelled) return;
        setProposal(p);
      } catch (e) {
        console.error(e);
        alert("Could not create draft proposal.");
      } finally {
        setLoading(false);
      }
    })();
    return () => { cancelled = true; }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!proposal) return;
    let sub = supabase
      .channel(`proposal-items-${proposal.id}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'proposal_items', filter: `proposal_id=eq.${proposal.id}`},
        async () => {
          const data = await listItems(proposal.id);
          setItems(data);
        }
      ).subscribe();
    listItems(proposal.id).then(setItems).catch(console.error);
    return () => { supabase.removeChannel(sub); };
  }, [proposal]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((s, r) => s + Number(r.line_total || 0), 0);
    const discount = Number(proposal?.discount ?? form.discount ?? 0);
    const taxRate = Number(proposal?.tax_rate ?? form.tax_rate ?? 0);
    const base = Math.max(0, subtotal - discount);
    const tax = Number((base * taxRate).toFixed(2));
    const total = Number((base + tax).toFixed(2));
    return { subtotal, discount, tax, total };
  }, [items, proposal, form]);

  async function handleHeaderSave() {
    if (!proposal) return;
    try {
      const patched = await updateProposal(proposal.id, form);
      setProposal(patched);
    } catch (e) {
      console.error(e); alert("Failed to save header.");
    }
  }

  async function handleAddItem(e) {
    e.preventDefault();
    if (!proposal) return;
    if (!newItem.description) return;
    try {
      await addItem(proposal.id, newItem);
      setNewItem({ description: "", qty: 1, unit_price: 100 });
    } catch (e) {
      console.error(e); alert("Could not add line item.");
    }
  }

  async function handlePublish() {
    if (!proposal) return;
    try {
      const updated = await togglePublic(proposal.id, true);
      setProposal(updated);
      navigator.clipboard?.writeText(`${window.location.origin}/p/${updated.public_slug}`);
      alert("Public link copied to clipboard!");
    } catch (e) {
      console.error(e); alert("Failed to publish.");
    }
  }

  if (loading || !proposal) {
    return (
      <>
        <SEO title="Generator — Clerko" description="Create a proposal now." />
        <div className="min-h-[60vh] grid place-items-center text-white/80">Creating draft…</div>
      </>
    );
  }

  return (
    <>
      <SEO title="Generator — Clerko" description="Create a proposal now." />
      <div className="max-w-6xl mx-auto px-4 py-10 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Proposal Generator</h1>

        {/* Header form */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <label className="block text-sm text-white/70">Title</label>
            <input className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
              value={form.title} onChange={e=>setForm(f=>({...f, title:e.target.value}))} />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Client name</label>
                <input className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
                  value={form.client_name} onChange={e=>setForm(f=>({...f, client_name:e.target.value}))}/>
              </div>
              <div>
                <label className="block text-sm text-white/70">Client email</label>
                <input type="email" className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
                  value={form.client_email} onChange={e=>setForm(f=>({...f, client_email:e.target.value}))}/>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-white/70">Currency</label>
                <select className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
                  value={form.currency} onChange={e=>setForm(f=>({...f, currency:e.target.value}))}>
                  <option>USD</option><option>EUR</option><option>PLN</option><option>GBP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70">Tax rate</label>
                <input type="number" step="0.01" className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
                  value={form.tax_rate} onChange={e=>setForm(f=>({...f, tax_rate:e.target.value}))}/>
              </div>
              <div>
                <label className="block text-sm text-white/70">Discount</label>
                <input type="number" step="0.01" className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
                  value={form.discount} onChange={e=>setForm(f=>({...f, discount:e.target.value}))}/>
              </div>
            </div>

            <label className="block text-sm text-white/70">Notes</label>
            <textarea rows={3} className="w-full rounded-md bg-zinc-900/60 border border-white/10 p-2"
              value={form.notes} onChange={e=>setForm(f=>({...f, notes:e.target.value}))}/>

            <button onClick={handleHeaderSave}
              className="inline-flex items-center gap-2 rounded-md bg-white text-zinc-900 px-4 py-2 hover:opacity-90">
              Save header
            </button>
          </div>

          {/* Summary card */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 h-fit">
            <div className="flex justify-between py-1"><span>Subtotal</span><span>{money(totals.subtotal, form.currency)}</span></div>
            <div className="flex justify-between py-1"><span>Discount</span><span>-{money(form.discount || 0, form.currency)}</span></div>
            <div className="flex justify-between py-1"><span>Tax</span><span>{money(totals.tax, form.currency)}</span></div>
            <div className="border-t border-white/10 my-3"></div>
            <div className="flex justify-between py-1 text-lg font-semibold">
              <span>Total</span><span>{money(totals.total, form.currency)}</span>
            </div>
            <div className="mt-4 flex gap-3">
              <button onClick={handlePublish}
                className="rounded-md bg-primary px-4 py-2 text-white bg-violet-500 hover:bg-violet-400">
                Publish & copy link
              </button>
              {proposal?.is_public && (
                <a className="rounded-md border border-white/20 px-4 py-2"
                   href={`/p/${proposal.public_slug}`} target="_blank" rel="noreferrer">Open public view</a>
              )}
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4">Line items</h2>
          <form onSubmit={handleAddItem} className="grid md:grid-cols-12 gap-3 mb-4">
            <input className="md:col-span-6 rounded-md bg-zinc-900/60 border border-white/10 p-2"
              placeholder="Description" value={newItem.description}
              onChange={e=>setNewItem(i=>({...i, description:e.target.value}))} />
            <input type="number" step="1" className="md:col-span-2 rounded-md bg-zinc-900/60 border border-white/10 p-2"
              placeholder="Qty" value={newItem.qty}
              onChange={e=>setNewItem(i=>({...i, qty:e.target.value}))} />
            <input type="number" step="0.01" className="md:col-span-2 rounded-md bg-zinc-900/60 border border-white/10 p-2"
              placeholder="Unit price" value={newItem.unit_price}
              onChange={e=>setNewItem(i=>({...i, unit_price:e.target.value}))} />
            <button type="submit" className="md:col-span-2 rounded-md bg-white text-zinc-900 px-4 py-2 hover:opacity-90">
              Add
            </button>
          </form>

          <div className="divide-y divide-white/10">
            {items.length === 0 && <div className="py-6 text-white/60">No items yet.</div>}
            {items.map((row) => (
              <div key={row.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{row.description}</div>
                  <div className="text-sm text-white/60">{row.qty} × {money(row.unit_price, form.currency)}</div>
                </div>
                <div className="text-white/90">{money(row.line_total, form.currency)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview-like note (to match hero preview) */}
        <p className="text-white/60 text-sm">Tip: publish to get a shareable link and send it to your client.</p>
      </div>
    </>
  );
}
