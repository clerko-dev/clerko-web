// src/components/proposals/ProposalForm.jsx
import { useState } from "react";
import { createProposal } from "@/lib/db.js";

const emptyItem = { name: "", qty: 1, unit_price: 0, discount: 0, tax_rate: 0 };

export default function ProposalForm({ onCreated }) {
  const [title, setTitle] = useState("Website redesign");
  const [client_name, setClientName] = useState("");
  const [client_email, setClientEmail] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [items, setItems] = useState([{ ...emptyItem }]);
  const [busy, setBusy] = useState(false);

  const total = items.reduce((s, it) => {
    const line = (Number(it.qty)||0) * (Number(it.unit_price)||0);
    const afterDiscount = Math.max(0, line - (Number(it.discount)||0));
    const afterTax = afterDiscount * (1 + (Number(it.tax_rate)||0)/100);
    return s + afterTax;
  }, 0);

  function updateItem(i, patch) {
    const next = items.slice(); next[i] = { ...next[i], ...patch }; setItems(next);
  }
  function addItem() { setItems([...items, { ...emptyItem }]); }
  function removeItem(i) { setItems(items.filter((_, idx) => idx !== i)); }

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const p = await createProposal({ title, client_name, client_email, currency, items });
      onCreated(p);
    } catch (e) { alert(e.message); }
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-sm text-gray-500">Title</span>
          <input className="w-full mt-1 rounded-md border bg-white/70 px-3 py-2" value={title} onChange={e=>setTitle(e.target.value)} required />
        </label>
        <label className="block">
          <span className="block text-sm text-gray-500">Currency</span>
          <select className="w-full mt-1 rounded-md border bg-white/70 px-3 py-2" value={currency} onChange={e=>setCurrency(e.target.value)}>
            <option>USD</option><option>EUR</option><option>PLN</option><option>GBP</option>
          </select>
        </label>
        <label className="block">
          <span className="block text-sm text-gray-500">Client name</span>
          <input className="w-full mt-1 rounded-md border bg-white/70 px-3 py-2" value={client_name} onChange={e=>setClientName(e.target.value)} />
        </label>
        <label className="block">
          <span className="block text-sm text-gray-500">Client email</span>
          <input type="email" className="w-full mt-1 rounded-md border bg-white/70 px-3 py-2" value={client_email} onChange={e=>setClientEmail(e.target.value)} />
        </label>
      </div>

      <div className="rounded-xl border bg-white/60">
        <div className="px-4 py-3 border-b font-medium">Items</div>
        <div className="p-4 space-y-3">
          {items.map((it, i) => (
            <div key={i} className="grid md:grid-cols-6 gap-2 items-center">
              <input placeholder="Name" className="md:col-span-2 rounded-md border px-3 py-2" value={it.name} onChange={e=>updateItem(i,{name:e.target.value})} required />
              <input type="number" min="0" step="1" placeholder="Qty" className="rounded-md border px-3 py-2" value={it.qty} onChange={e=>updateItem(i,{qty:e.target.value})} />
              <input type="number" min="0" step="0.01" placeholder="Unit price" className="rounded-md border px-3 py-2" value={it.unit_price} onChange={e=>updateItem(i,{unit_price:e.target.value})} />
              <input type="number" min="0" step="0.01" placeholder="Discount" className="rounded-md border px-3 py-2" value={it.discount} onChange={e=>updateItem(i,{discount:e.target.value})} />
              <div className="flex gap-2 items-center">
                <input type="number" min="0" step="0.01" placeholder="Tax %" className="w-full rounded-md border px-3 py-2" value={it.tax_rate} onChange={e=>updateItem(i,{tax_rate:e.target.value})} />
                <button type="button" onClick={()=>removeItem(i)} className="px-3 py-2 rounded-md border">Del</button>
              </div>
            </div>
          ))}
          <button type="button" onClick={addItem} className="px-3 py-2 rounded-md border">+ Add item</button>
        </div>
        <div className="px-4 py-3 border-t flex justify-between">
          <div className="text-sm text-gray-500">Auto-calculated total</div>
          <div className="text-lg font-semibold">{currency} {total.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white" disabled={busy}>
          {busy ? "Saving…" : "Create & share"}
        </button>
      </div>
    </form>
  );
}
