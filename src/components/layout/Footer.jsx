import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B14]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-white/60">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-white">Clerko</span>. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/store" className="hover:text-white">Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
