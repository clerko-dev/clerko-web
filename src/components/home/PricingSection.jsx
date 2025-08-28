import React from "react";
import { track } from "../../lib/analytics";

const PRICES = {
  PRO_MONTHLY: "https://buy.stripe.com/REPLACE_ME_MONTHLY", // TODO: wklej swĂłj Payment Link
  LIFETIME: "https://buy.stripe.com/REPLACE_ME_LIFETIME",   // TODO: wklej swĂłj Payment Link
};

function Tier({ name, price, period, features, href, highlight = false }) {
  return (
    <div
      className={[
        "group flex flex-col rounded-2xl border p-6 shadow-2xl backdrop-blur",
        highlight
          ? "border-indigo-400/30 bg-indigo-400/10 shadow-indigo-500/10"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="mb-2 text-sm font-semibold text-white/70">{name}</div>
      <div className="mb-4 flex items-end gap-1">
        <div className="text-3xl font-extrabold">${price}</div>
        {period && <div className="pb-1 text-sm text-white/60">/{period}</div>}
      </div>

      <ul className="mb-6 space-y-2 text-sm text-white/80">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener"
        onClick={() => track("checkout_click", { tier: name })}
        className={[
          "mt-auto inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
          highlight
            ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-black shadow-lg shadow-cyan-500/20 hover:brightness-110"
            : "border border-white/15 bg-white/10 text-white/90 hover:bg-white/15",
        ].join(" ")}
      >
        Get {name}
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#0A0B14] py-20">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold">Simple pricing</h2>
          <p className="mt-2 text-white/70">
            Start free. Upgrade when you need PDF export, saved templates, and branding.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Tier
            name="Starter"
            price="0"
            period=""
            href="#generator"
            features={[
              "Proposal generator",
              "Basic templates",
              "Copy to clipboard",
            ]}
          />
          <Tier
            name="Pro"
            price="9"
            period="mo"
            href={PRICES.PRO_MONTHLY}
            highlight
            features={[
              "Everything in Starter",
              "PDF export",
              "Saved templates",
              "Branding removal",
              "Email support",
            ]}
          />
          <Tier
            name="Lifetime"
            price="49"
            period=""
            href={PRICES.LIFETIME}
            features={[
              "All Pro features",
              "Lifetime updates",
              "Priority support",
            ]}
          />
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          Prices in USD. Taxes may apply. Payment via Stripe.
        </p>
      </div>
    </section>
  );
}
