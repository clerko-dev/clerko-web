const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    cta: { label: "Get started", href: "/signup" },
    features: [
      "Unlimited drafts",
      "3 proposals/month",
      "Basic templates",
      "Email delivery",
    ],
    featured: false,
  },
  {
    name: "Pro — Monthly",
    price: "$12",
    period: "/month",
    cta: { label: "Start Pro", href: "/store?plan=pro-month" },
    features: [
      "Unlimited proposals",
      "Custom branding",
      "Pricing blocks & e-sign",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Pro — Yearly",
    price: "$96",
    period: "/year",
    subnote: "2 months free",
    cta: { label: "Go Yearly", href: "/store?plan=pro-year" },
    features: [
      "Everything in Pro monthly",
      "Yearly savings",
      "Early access features",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28" data-reveal>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, fair pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you need more power.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border bg-white/[0.03] backdrop-blur p-6 ${
                t.featured ? "border-white/25 shadow-2xl shadow-black/30" : "border-white/10"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-medium">{t.name}</h3>
              </div>
              <div className="mb-4 flex items-baseline gap-2">
                <div className="text-3xl font-semibold">{t.price}</div>
                <div className="text-sm text-white/60">{t.period}</div>
              </div>
              {t.subnote && <div className="mb-4 text-xs text-emerald-300/80">{t.subnote}</div>}
              <ul className="mb-6 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--brand)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={t.cta.href}
                className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition
                  ${t.featured ? "bg-white text-slate-900 hover:opacity-95" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"}`}
              >
                {t.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
