import { useState } from "react";
export default function RateCalculator(){
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(50);
  const [weeks, setWeeks] = useState(4);
  const total = hours * rate * weeks;
  return (
    <div className="rounded-xl border p-4 bg-white/70">
      <h3 className="font-medium mb-2">Hourly → Project fee</h3>
      <div className="grid grid-cols-3 gap-2">
        <label>Hours<input type="number" className="w-full border rounded px-2 py-1" value={hours} onChange={e=>setHours(+e.target.value)} /></label>
        <label>Rate<input type="number" className="w-full border rounded px-2 py-1" value={rate} onChange={e=>setRate(+e.target.value)} /></label>
        <label>Weeks<input type="number" className="w-full border rounded px-2 py-1" value={weeks} onChange={e=>setWeeks(+e.target.value)} /></label>
      </div>
      <div className="mt-3 text-right font-semibold">Project fee ≈ {total.toFixed(2)}</div>
    </div>
  );
}
