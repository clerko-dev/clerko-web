// src/components/home/TrustedSection.jsx
import React from 'react';
import LogoPill from '@/components/ui/LogoPill.jsx';

const row1 = ['Pixel&Co', 'NorthPeak', 'OmegaSoft', 'Greenline', 'Artemis', 'Loopwork'];
const row2 = ['NovaLabs', 'BrightCorp', 'Pixel&Co', 'NorthPeak', 'OmegaSoft', 'Greenline'];

function Avatar({ name }) {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-xs font-semibold text-white/90">
      {initials}
    </div>
  );
}

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 text-white/80">
      <div className="flex items-center gap-3 mb-3">
        <Avatar name={name} />
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white/90">{name}</div>
          <div className="text-xs text-white/60">{role}</div>
        </div>
      </div>
      <p className="text-sm leading-6">“{quote}”</p>
    </div>
  );
}

export default function TrustedSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      <h3 className="text-center text-lg font-semibold tracking-tight text-white mb-6">
        Trusted by thousands
      </h3>

      {/* Rząd 1 */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_22s_linear_infinite] gap-3 will-change-transform">
          {row1.concat(row1).map((b, i) => (
            <LogoPill key={`r1-${i}`} name={b} />
          ))}
        </div>
      </div>

      {/* Rząd 2 */}
      <div className="overflow-hidden mt-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[marquee_26s_linear_infinite_reverse] gap-3 will-change-transform">
          {row2.concat(row2).map((b, i) => (
            <LogoPill key={`r2-${i}`} name={b} />
          ))}
        </div>
      </div>

      {/* Opinie */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <TestimonialCard
          name="Amelia Lopez"
          role="Agency Owner"
          quote="Clerko cut our proposal time from hours to minutes. Clients love the clarity."
        />
        <TestimonialCard
          name="Daniel Kim"
          role="Freelance Dev"
          quote="The pricing table and PDF export are flawless. I win more small gigs now."
        />
        <TestimonialCard
          name="Sara Malik"
          role="Consultant"
          quote="Snippets + AI polish = consistent quality without the grind. Worth it."
        />
      </div>
    </section>
  );
}
