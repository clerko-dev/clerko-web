import React from 'react'

export default function Home() {
  return (
    <section>
      <h1>Clerko – działa 🎉</h1>
      <p>To jest wersja diagnostyczna. Jeśli to widzisz na prodzie, render działa poprawnie.</p>
      <div className="grid">
        <div className="card"><h3>🔧 Tools</h3><p>Mini-apki i automaty.</p></div>
        <div className="card"><h3>🛒 Sklep</h3><p>Szablony, paczki promptów, e-booki.</p></div>
        <div className="card"><h3>📈 SEO</h3><p>Programmatic pages i long-tail.</p></div>
      </div>
    </section>
  )
}
