import { Link, useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0B14]/70">
      <nav className="container px-6 h-16 flex items-center justify-between">
        <Link
  to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="flex items-center gap-2"
  aria-label="Clerko — go to homepage"
>
  <span className="text-xl font-semibold tracking-tight select-none">
    <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
      Clerko
    </span>
  </span>
</Link>
          Clerko
          onClick={(e) => {
  if (location.pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}}

        </Link>

        <ul className="hidden sm:flex items-center gap-6 text-white/80 text-sm">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/tools" className="hover:text-white">Tools</Link></li>
          <li><Link to="/how-to" className="hover:text-white">Guides</Link></li>
          <li><Link to="/store" className="hover:text-white">Store</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/login" className="btn-ghost">Log in</Link>
          <Link to="/signup" className="btn-primary">Sign up</Link>
          <Link to="/dashboard" className="hover:opacity-80">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
