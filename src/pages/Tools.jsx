import React from "react"
import { Link } from "react-router-dom"

export default function Tools() {
  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Tools</h1>
      <div className="grid-auto">
        <div className="card">
          <h3 className="text-lg font-semibold">Offer Creator (AI)</h3>
          <p className="text-muted">Instantly generate high-converting offers for your digital products.</p>
          <Link to="/signup" className="btn mt-3">Use tool</Link>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">PDF / Data Extractor</h3>
          <p className="text-muted">Extract structured data from PDFs and spreadsheets in seconds.</p>
          <Link to="/signup" className="btn mt-3">Use tool</Link>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">SEO Page Maker</h3>
          <p className="text-muted">Generate long-tail programmatic pages that rank and convert.</p>
          <Link to="/signup" className="btn mt-3">Use tool</Link>
        </div>
      </div>
    </section>
  )
}
