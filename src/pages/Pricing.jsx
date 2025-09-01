// src/pages/Pricing.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO.jsx";

function PlanCard({ name, price, frequency, badge, features, cta, to, highlight = false }) {
  return (
    <div
      className={
        "relative rounded-2xl border bg-white/[0.02] p-6 text-white " +
        (highlight ? "border-indigo-500/40 shadow-[0_0_0_1px_rgba(99,102,241,.2)]" : "border-white/10")
      }
    >
      {badge && (
        <span className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-semibold">{name}</h3>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        {frequency && <span className="text-sm text-white/60">{frequency}</span>}
      </div>

      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className={
          "mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium " +
          (highlight
            ? "bg-indigo-600 hover:bg-indigo-500"
            : "bg-white/10 hover:bg-white/20")
        }
      >
        {cta}
      </Link>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Clerko"
        description="Transparent pricing for proposals & quotes. Start free, upgrade to Pro monthly or yearly when ready."
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_200px_at_50%_0%,rgba(99,102,241,0.25),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold text-white">Pricing</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Start free. When you need more, go Pro monthly or yearly. No hidden fees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <PlanCard
            name="Free"
            price="$0"
            features={[
              "Unlimited drafts",
              "PDF export (basic)",
              "3 proposals/month share link",
              "Core templates",
            ]}
            cta="Try free"
            to="/signup"
          />

          <PlanCard
            name="Pro — Monthly"
            price="$19"
            frequency="/mo"
            highlight
            features={[
              "Unlimited proposals & shares",
              "Advanced templates & sections",
              "AI assist: tone, sections, items",
              "Custom branding & logo",
              "Analytics (opens, time on page)",
              "Priority support",
            ]}
            cta="Start Pro monthly"
            to="/signup"
          />

          <PlanCard
            name="Pro — Yearly"
            price="$180"
            frequency="/yr"
            badge="2 months free"
            features={[
              "Wszystko z Pro Monthly",
              "Oszczędzasz ~16%",
              "Wczesny dostęp do nowych funkcji",
            ]}
            cta="Start Pro yearly"
            to="/signup"
          />
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white">
          <h2 className="text-lg font-semibold">FAQ (short)</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-white/80">
            <div>
              <p className="font-medium text-white">Can I cancel anytime?</p>
              <p className="mt-1">Yes — billing stops at the end of the period.</p>
            </div>
            <div>
              <p className="font-medium text-white">Do you offer refunds?</p>
              <p className="mt-1">If something breaks and we can’t fix it quickly — yes.</p>
            </div>
            <div>
              <p className="font-medium text-white">Team pricing?</p>
              <p className="mt-1">Coming soon; for now use one account per user.</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/50">No credit card required for Free.</p>
        </div>
      </section>
    </>
  );
}
