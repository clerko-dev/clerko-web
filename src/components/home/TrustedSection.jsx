// src/components/home/TrustedSection.jsx
import React from 'react';
import LogoPill from '@/components/ui/LogoPill.jsx';

const brandsRow1 = ['Webflow', 'Notion', 'Figma', 'Framer', 'Zapier', 'Supabase'];
const brandsRow2 = ['Vercel', 'Stripe', 'Linear', 'Slack', 'Airtable', 'Sentry'];

export default function TrustedSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12">
      <h3 className="text-center text-sm font-medium text-white/60 mb-6">
        Trusted by builders & small teams
      </h3>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_22s_linear_infinite] gap-4 will-change-transform">
          {brandsRow1.concat(brandsRow1).map((b, i) => (
            <LogoPill key={`m1-${i}`} name={b} />
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_26s_linear_infinite_reverse] gap-4 will-change-transform">
          {brandsRow2.concat(brandsRow2).map((b, i) => (
            <LogoPill key={`m2-${i}`} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Tailwind keyframes (jeśli nie masz – dodaj do tailwind.config.js):
  theme: {
    extend: {
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee_reverse': 'marquee 26s linear infinite reverse',
      },
    },
  }
*/
