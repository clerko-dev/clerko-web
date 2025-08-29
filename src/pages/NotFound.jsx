import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>Nie znaleziono strony</h2>
      <p>Ta ścieżka nie istnieje. Wróć na <Link to="/">stronę główną</Link>.</p>
    </section>
  )
}
