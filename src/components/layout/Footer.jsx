import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        © {new Date().getFullYear()} Clerko • <Link to="/privacy">Prywatność</Link> • <Link to="/terms">Regulamin</Link>
      </div>
    </footer>
  )
}
