import { useState } from "react";

const BASE = `Offer valid for 14 days. Payment terms: 50% upfront, 50% on delivery. Revisions: up to 2 rounds.
IP transfers upon full payment. Late payments may incur 1.5% monthly fee.`;

export default function TermsGenerator(){
  const [rev, setRev] = useState(2);
  const [days, setDays] = useState(14);
  const [upfront, setUpfront] = useState(50);

  const text = `Offer valid for ${days} days. Payment terms: ${upfront}% upfront, ${100-upfront}% on delivery.
Revisions: up to ${rev} rounds. Intellectual property transfers upon full payment.`;

  function copy() {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <div className="rounded-xl border p-4 bg-white/70">
      <h3 className="font-medium mb-2">Terms generator</h3>
      <div className="grid grid-cols-3 gap-2">
        <label>Valid days<input type="number" className="w-full border rounded px-2 py-1" value={days} onChange={e=>setDays(+e.target.value)} /></label>
        <label>Upfront %<input type="number" className="w-full border rounded px-2 py-1" value={upfront} onChange={e=>setUpfront(+e.target.value)} /></label>
        <label>Revisions<input type="number" className="w-full border rounded px-2 py-1" value={rev} onChange={e=>setRev(+e.target.value)} /></label>
      </div>
      <textarea className="w-full mt-3 border rounded px-2 py-1 h-28">{text}</textarea>
      <div className="text-right mt-2"><button className="px-3 py-1 rounded border" onClick={copy}>Copy</button></div>
    </div>
  );
}
