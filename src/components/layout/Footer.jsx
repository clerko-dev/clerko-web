// src/components/home/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Clerko. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a className="hover:text-white/90" href="/privacy">Privacy</a>
            <a className="hover:text-white/90" href="/terms">Terms</a>
            <a className="hover:text-white/90" href="/store">Store</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
