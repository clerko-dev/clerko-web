import React from "react"
import { Link } from "react-router-dom"

export default function Store() {
  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Store</h1>
      <div className="grid-auto">
        <div className="card">
          <h3 className="text-lg font-semibold">Prompt Pack: Sales Emails</h3>
          <p className="text-muted">50 proven prompts to generate sales emails fast.</p>
          <Link to="/signup" className="btn mt-3">Get it</Link>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Notion Template: Solo Biz OS</h3>
          <p className="text-muted">Operate your micro-business from a single dashboard.</p>
          <Link to="/signup" className="btn mt-3">Get it</Link>
        </div>
      </div>
    </section>
  )
}
