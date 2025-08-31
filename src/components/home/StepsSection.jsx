// src/components/home/StepsSection.jsx
import React from "react";

export default function StepsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl">
            <h3 className="font-semibold mb-1">Input details</h3>
            <p className="text-zinc-400">
              Add client, scope, line items and notes. Ready in 60 seconds.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-semibold mb-1">AI generations</h3>
            <p className="text-zinc-400">
              Polish tone, expand sections, and generate item descriptions instantly.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="font-semibold mb-1">Download &amp; send</h3>
            <p className="text-zinc-400">
              Share as a link or export a PDF. Get approvals and move to paid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
