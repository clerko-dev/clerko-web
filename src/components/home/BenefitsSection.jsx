// src/components/home/BenefitsSection.jsx
import React from "react";

// proste ikony w stylu screena (stroke-only)
const IWin = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M12 3l2 4 4 .6-3 3 .7 4.4L12 13l-3.7 2  .7-4.4-3-3L10 7l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IPricing = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M7 4h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 4v4h4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9.5 14h5M9.5 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IShare = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 16V4m0 0l-4 4m4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const ITemplates = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="3.5" y="4" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 19.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IApprove = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <rect x="4" y="3.5" width="16" height="17" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12.5l3 3 5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IStack = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path d="M12 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 11l8 4 8-4M4 15l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const features = [
  {
    Icon: IWin,
    title: "Win deals faster",
    desc:
      "Generate client-ready proposals in under a minute. Clean layout, instant preview.",
  },
  {
    Icon: IPricing,
    title: "Crystal-clear pricing",
    desc:
      "Items, quantities, discounts and taxes calculated automatically.",
  },
  {
    Icon: IShare,
    title: "Share as link or PDF",
    desc:
      "One link to review & approve. Export a polished PDF when needed.",
  },
  {
    Icon: ITemplates,
    title: "Templates & snippets",
    desc:
      "Save your best sections and reuse them to stay consistent.",
  },
  {
    Icon: IApprove,
    title: "Approvals & e-sign",
    desc:
      "Collect approvals and signatures on the page with an audit trail.",
  },
  {
    Icon: IStack,
    title: "Works with your stack",
    desc:
      "Copy to invoice tools or CRM. Webhooks & API for automation.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      {/* nagłówek + lead zostaw jak masz wcześniej – tu skupiamy się na kartach */}

      {/* dekoracyjny fioletowy wash pod dolnym rzędem */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 right-0 bottom-6 h-56 mx-1 rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(80%_120%_at_55%_100%,rgba(139,92,246,.18),transparent_55%)]" />
            <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/12 bg-white/[0.045] p-5 hover:bg-white/[0.06] transition"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/15 text-white/85">
                  <Icon />
                </span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-white/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
