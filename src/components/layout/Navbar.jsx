import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const loc = useLocation();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className="...">
      <Link to="/" onClick={() => setTimeout(scrollTop, 0)} className="...">
        <span className="font-display font-extrabold">Clerko</span>
      </Link>
      {/* ...reszta */}
    </nav>
  );
}
export default Navbar;