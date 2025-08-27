import React, { useMemo, useState } from "react";
import { PDFDocument } from "pdf-lib";

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="mb-3 text-base font-semibold">{title}</h3>
      {children}
    </div>
  );
}

// ------- CSV → JSON -------
function parseCSV(raw) {
  // prosty parser CSV z obsługą cudzysłowów
  const rows = [];
  let i = 0, cur = "", inQuotes = false, row = [];
  const pushCell = () => { row.push(cur); cur = ""; };
  const pushRow = () => { rows.push(row); row = []; };

  while (i < raw.length) {
    const ch = raw[i];
    if (inQuotes) {
      if (ch === '"' && raw[i + 1] === '"') { cur += '"'; i += 2; continue; }
      if (ch === '"') { inQuotes = false; i++; continue; }
      cur += ch; i++; continue;
    } else {
      if (ch === '"') { inQuotes = true; i++; continue; }
      if (ch === ",") { pushCell(); i++; continue; }
      if (ch === "\n") { pushCell(); pushRow(); i++; continue; }
      if (ch === "\r") { i++; continue; }
      cur += ch; i++; continue;
    }
  }
  pushCell();
  if (row.length) pushRow();
  return rows;
}

function CSVtoJSON() {
  const [json, setJson] = useState("");

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const rows = parseCSV(text);
    if (!rows.length) return setJson("[]");
    const [header, ...data] = rows;
    const objs = data.map(r => {
      const o = {};
      header.forEach((h, idx) => { o[h || `col_${idx+1}`] = r[idx] ?? ""; });
      return o;
    });
    setJson(JSON.stringify(objs, null, 2));
  }

  function download() {
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "data.json"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Card title="CSV → JSON">
      <input type="file" accept=".csv,text/csv" onChange={onFile} className="text-sm" />
      <textarea readOnly value={json} className="mt-3 h-48 w-full rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none" />
      <div className="mt-2 flex gap-2">
        <button onClick={() => navigator.clipboard.writeText(json)} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">Copy</button>
        <button onClick={download} className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black">Download JSON</button>
      </div>
    </Card>
  );
}

// ------- PDF MERGE -------
function PDFMerge() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("");

  async function merge() {
    if (!files.length) return;
    setStatus("Merging...");
    const out = await PDFDocument.create();
    for (const f of files) {
      const buf = await f.arrayBuffer();
      const src = await PDFDocument.load(buf);
      const pages = await out.copyPages(src, src.getPageIndices());
      pages.forEach(p => out.addPage(p));
    }
    const pdfBytes = await out.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "merged.pdf"; a.click();
    URL.revokeObjectURL(url);
    setStatus("Done");
    setTimeout(()=>setStatus(""), 1200);
  }

  return (
    <Card title="PDF Merge">
      <input type="file" accept="application/pdf" multiple onChange={(e)=>setFiles([...e.target.files])} className="text-sm" />
      <p className="mt-2 text-xs text-white/60">{files.length} file(s) selected</p>
      <button onClick={merge} className="mt-3 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black">
        Merge PDFs
      </button>
      {status && <p className="mt-2 text-xs text-white/60">{status}</p>}
    </Card>
  );
}

// ------- IMAGE → WEBP -------
function ImageToWebp() {
  const [downloadUrl, setDownloadUrl] = useState("");

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL("image/webp", 0.9);
      setDownloadUrl(dataUrl);
    };
    img.src = URL.createObjectURL(file);
  }

  return (
    <Card title="Image → WEBP">
      <input type="file" accept="image/*" onChange={onFile} className="text-sm" />
      {downloadUrl && (
        <a href={downloadUrl} download="image.webp" className="mt-3 inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black">
          Download WEBP
        </a>
      )}
    </Card>
  );
}

// ------- TEXT CLEANER -------
function TextCleaner() {
  const [text, setText] = useState("");

  const lines = useMemo(() => text.split("\n"), [text]);

  function clean() {
    const cleaned = lines
      .map(l => l.replace(/\s+/g, " ").trim())
      .filter(l => l.length)
      .join("\n");
    setText(cleaned);
  }
  function lower() { setText(text.toLowerCase()); }
  function upper() { setText(text.toUpperCase()); }

  function download() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "text.txt"; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Card title="Text Cleaner">
      <textarea value={text} onChange={(e)=>setText(e.target.value)} rows={8} className="w-full rounded-lg border border-white/10 bg-black/30 p-3 text-sm outline-none" />
      <div className="mt-2 flex flex-wrap gap-2">
        <button onClick={clean} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">Trim & dedupe</button>
        <button onClick={lower} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">lowercase</button>
        <button onClick={upper} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">UPPERCASE</button>
        <button onClick={()=>navigator.clipboard.writeText(text)} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">Copy</button>
        <button onClick={download} className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1.5 text-sm font-semibold text-black">Download</button>
      </div>
    </Card>
  );
}

// ------- SLUGIFY -------
function Slugify() {
  const [value, setValue] = useState("");
  const slug = useMemo(
    () =>
      value
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase(),
    [value]
  );

  return (
    <Card title="Slugify">
      <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Title to slug"
        className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/20"
      />
      <div className="mt-2 flex items-center gap-2">
        <code className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-sm">{slug || "—"}</code>
        <button onClick={()=>navigator.clipboard.writeText(slug)} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm">Copy</button>
      </div>
    </Card>
  );
}

export default function Tools() {
  return (
    <main className="bg-[#0A0B14] py-16">
      <div className="container-x">
        <h1 className="text-3xl font-bold">Free tools</h1>
        <p className="mt-1 text-white/60">Handy utilities you’ll actually use.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <CSVtoJSON />
          <PDFMerge />
          <ImageToWebp />
          <TextCleaner />
          <Slugify />
        </div>
      </div>
    </main>
  );
}
