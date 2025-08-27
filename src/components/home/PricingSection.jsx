import React from "react";
import { Check, Crown, Sparkles } from "lucide-react";

const Feature = ({ children }) => (
  <li className="flex items-start gap-2 text-sm text-white/85">
    <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
    <span>{children}</span>
  </li>
);

function Card({ title, price, period, featured = false, children, ctaHref = "#generator" }) {
  return (
    <div
      className={[
        "relative rounded-2xl border p-6 backdrop-blur transition",
        featured
          ? "border-white/20 bg-white/[0.06] shadow-xl shadow-cyan-500/10"
          : "border-white/10 bg-white/[0.04]"
      ].join(" ")}
    >
      {featured && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1 text-[10px] font-semibold text-black shadow">
          <Crown className="h-3 w-3" /> RECOMMENDED
        </div>
      )}

      <div className="mb-4 flex items-center gap-2">
        {featured ? <Sparkles className="h-5 w-5 text-cyan-300" /> : null}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-white/60">/{period}</span>
      </div>

      <ul className="mb-6 space-y-2">{children}</ul>

      <a
        href={ctaHref}
        className={[
          "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition",
          featured
            ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-black shadow-lg shadow-cyan-500/20 hover:brightness-110"
            : "border border-white/15 bg-white/10 text-white/90 hover:bg-white/15"
        ].join(" ")}
      >
        Get started
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative bg-[#0A0B14] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, fair pricing</h2>
          <p className="mt-2 text-white/70">Start free. Upgrade when you need more exports and templates.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card title="Free" price="$0" period="mo">
            <Feature>Unlimited drafts</Feature>
            <Feature>Copy to clipboard</Feature>
            <Feature>Basic templates</Feature>
          </Card>

          <Card title="Pro" price="$9" period="mo" featured>
            <Feature>PDF export</Feature>
            <Feature>Saved templates</Feature>
            <Feature>Custom branding</Feature>
            <Feature>Open tracking</Feature>
          </Card>

          <Card title="Team" price="$29" period="mo">
            <Feature>Everything in Pro</Feature>
            <Feature>Shared library</Feature>
            <Feature>Roles & approvals</Feature>
          </Card>
        </div>
      </div>
    </section>
  );
}
