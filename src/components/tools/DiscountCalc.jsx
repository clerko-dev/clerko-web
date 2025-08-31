import { useState } from "react";
export default function DiscountCalc(){
  const [amount, setAmount] = useState(1000);
  const [discount, setDiscount] = useState(10);
  const [tax, setTax] = useState(0);
  const after = (amount - (amount * discount/100)) * (1 + tax/100);
  return (
    <div className="rounded-xl border p-4 bg-white/70">
      <h3 className="font-medium mb-2">Discount & Tax</h3>
      <div className="grid grid-cols-3 gap-2">
        <label>Amount<input type="number" className="w-full border rounded px-2 py-1" value={amount} onChange={e=>setAmount(+e.target.value)} /></label>
        <label>Discount %<input type="number" className="w-full border rounded px-2 py-1" value={discount} onChange={e=>setDiscount(+e.target.value)} /></label>
        <label>Tax %<input type="number" className="w-full border rounded px-2 py-1" value={tax} onChange={e=>setTax(+e.target.value)} /></label>
      </div>
      <div className="mt-3 text-right font-semibold">Total ≈ {after.toFixed(2)}</div>
    </div>
  );
}
