// src/components/sign/SignatureModal.jsx
import { useRef, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function SignatureModal({ open, onClose, onSaved, proposalId, signerEmail }) {
  const canvasRef = useRef(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
  }, [open]);

  function draw(e) {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const r = c.getBoundingClientRect();
    const point = (ev) => {
      const t = ev.touches?.[0];
      const cx = (t?.clientX ?? ev.clientX) - r.left;
      const cy = (t?.clientY ?? ev.clientY) - r.top;
      return { x: cx, y: cy };
    };
    if ((e.buttons === 1) || e.type === "touchmove") {
      const { x, y } = point(e);
      ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
    } else if (e.type === "mousedown" || e.type === "touchstart") {
      const { x, y } = point(e); ctx.moveTo(x, y);
    }
  }

  async function save() {
    setBusy(true);
    const png = canvasRef.current.toDataURL("image/png");
    const bytes = await (await fetch(png)).arrayBuffer();
    const path = `signatures/${proposalId}/${Date.now()}.png`;
    const { error } = await supabase.storage.from("clerko").upload(path, new Blob([bytes], { type: "image/png" }), { upsert: true });
    if (error) { setBusy(false); return alert(error.message); }
    setBusy(false);
    onSaved(path);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Sign to accept</h3>
        <p className="text-sm text-gray-500 mb-4">Draw your signature below.</p>
        <div className="border rounded-md overflow-hidden">
          <canvas
            ref={canvasRef}
            width={800}
            height={240}
            className="w-full bg-white"
            onMouseDown={draw} onMouseMove={draw}
            onTouchStart={draw} onTouchMove={draw}
          />
        </div>
        <div className="mt-4 flex gap-3 justify-end">
          <button className="px-4 py-2 rounded-md border" onClick={() => onClose()}>Cancel</button>
          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white" disabled={busy} onClick={save}>
            {busy ? "Saving…" : "Save signature"}
          </button>
        </div>
      </div>
    </div>
  );
}
