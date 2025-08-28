import React from "react";
import SEO from "@/components/SEO.jsx";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy — Clerko"
        description="How Clerko collects, stores and uses data. Simple, transparent, and privacy-first."
        pathname="/privacy"
      />

      <section className="relative bg-[#0A0B14]">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-white/70">
            We keep things simple: minimal data, clear purpose, and user control.
          </p>

          <div className="mt-8 space-y-6 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white">What we collect</h2>
              <p className="mt-2">
                Account email, basic usage analytics (aggregated), and content you explicitly
                generate or upload inside Clerko (e.g., proposal text).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Why we collect it</h2>
              <p className="mt-2">
                To provide the service (render proposals), improve reliability, and offer you
                optional features like templates and export.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">How we store</h2>
              <p className="mt-2">
                Secure, access-controlled storage. We don’t sell personal data. You can request
                deletion anytime via support.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Cookies</h2>
              <p className="mt-2">
                Only what’s needed for session/auth and basic, privacy-friendly analytics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-2">
                Questions? Email: support@clerko.app (example).
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
