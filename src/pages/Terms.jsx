import React from "react";
import SEO from "@/components/SEO.jsx";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms — Clerko"
        description="The terms of using Clerko: acceptable use, subscriptions, refunds, and liability."
        pathname="/terms"
      />

      <section className="relative bg-[#0A0B14]">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-white/70">
            Please read these terms carefully before using Clerko.
          </p>

          <div className="mt-8 space-y-6 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white">Use of Service</h2>
              <p className="mt-2">
                You agree to use Clerko legally and responsibly. Don’t abuse resources or
                infringe others’ rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Subscriptions & Billing</h2>
              <p className="mt-2">
                Paid plans renew monthly/annually until canceled. Refunds are handled case-by-case
                per local law and our policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Content</h2>
              <p className="mt-2">
                You own your content. Grant Clerko a license to process it for providing features
                (rendering, exporting, templates).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Liability</h2>
              <p className="mt-2">
                Service is provided “as is”. We aim for high uptime but disclaim warranties to the
                extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Changes</h2>
              <p className="mt-2">
                We may update these terms. We’ll post updates and the “Last updated” date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
