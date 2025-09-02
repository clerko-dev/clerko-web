// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="
        relative z-20           /* ponad wszystkimi dekoracjami */
        container mx-auto px-6 py-10
        border-t border-white/10
        text-white/70
      "
    >
      <div className="grid sm:grid-cols-2 gap-6 items-center">
        <span className="text-sm">
          © {new Date().getFullYear()}
          <br />
          Clerko. All rights reserved.
        </span>

        <ul className="flex flex-wrap items-center gap-4 justify-start sm:justify-end text-sm">
          <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
          <li><a href="/how-to" className="hover:text-white">Guides</a></li>
          <li><a href="/tools" className="hover:text-white">Tools</a></li>
          <li><a href="/store" className="hover:text-white">Store</a></li>
          <li><a href="/terms" className="hover:text-white">Terms</a></li>
          <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
}
