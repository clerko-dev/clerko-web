import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B14] py-10">
      <div className="container-x grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400" />
            <div className="text-sm font-semibold">Clerko</div>
          </div>
          <p className="mt-3 text-sm text-white/60">
            Proposals & quotes in minutes. Close faster.
          </p>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} Clerko. All rights reserved.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a href="/how-to" className="hover:text-white">Guides</a></li>
            <li><a href="/tools" className="hover:text-white">Tools</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Get updates</div>
          <p className="mt-2 text-sm text-white/60">Templates, tips & new features.</p>

          {/* OPTION A: Formspree — podmień action na swój endpoint */}
          <form
            className="mt-3 flex gap-2"
            action="https://formspree.io/f/REPLACE_FORM_ID"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 text-sm font-semibold text-black shadow-lg transition hover:brightness-110"
            >
              Subscribe
            </button>
          </form>

          {/* OPTION B: zamiast form powyżej wklej embed (Mailchimp/ConvertKit) */}
          <p className="mt-2 text-xs text-white/40">We don’t spam. Unsubscribe anytime.</p>
          <p className="mt-2 text-xs text-white/40">Support: support@clerko.app</p>
        </div>
      </div>
    </footer>
  );
}
