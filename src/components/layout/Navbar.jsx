import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button.jsx';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goHomeTop = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    }
  };

  const nav = 'text-white/80 hover:text-white transition';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="/" onClick={goHomeTop} className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-block w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-400" />
          <span>Clerko</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={nav}>Home</NavLink>
          <NavLink to="/tools" className={nav}>Tools</NavLink>
          <NavLink to="/how-to" className={nav}>Guides</NavLink>
          <NavLink to="/store" className={nav}>Store</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/login"><Button variant="secondary">Login</Button></Link>
          <Link to="/signup"><Button>Try Free</Button></Link>
        </div>
      </div>
    </header>
  );
}
