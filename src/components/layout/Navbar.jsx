import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) => `btn${isActive ? ' active' : ''}`

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="btn">⚡ Clerko</Link>
        <NavLink to="/tools" className={navLinkClass}>Narzędzia</NavLink>
        <NavLink to="/how-to" className={navLinkClass}>Jak to działa</NavLink>
        <NavLink to="/store" className={navLinkClass}>Sklep</NavLink>
        <div className="spacer" />
        <NavLink to="/login" className={navLinkClass}>Logowanie</NavLink>
        <NavLink to="/signup" className={navLinkClass}>Rejestracja</NavLink>
      </div>
    </nav>
  )
}
