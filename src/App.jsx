import React from "react"
import { Routes, Route, Link } from "react-router-dom"

function Page({ title, children }) {
  return (
    <section style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>{title}</h1>
      <div style={{ marginTop: 12 }}>{children}</div>
    </section>
  )
}

export default function App() {
  return (
    <div>
      <header style={{
        position: "sticky", top: 0, background: "rgba(11,15,20,.9)",
        borderBottom: "1px solid #1c2430", padding: "10px 20px"
      }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/tools">Tools</Link>
          <Link className="btn" to="/store">Store</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Page title="Clerko – działa 🎉">To jest minimalny render diagnostyczny.</Page>} />
          <Route path="/tools" element={<Page title="Tools">Lista narzędzi (stub).</Page>} />
          <Route path="/store" element={<Page title="Store">Sklep (stub).</Page>} />
          <Route path="*" element={<Page title="404">Nie znaleziono strony.</Page>} />
        </Routes>
      </main>

      <footer style={{ borderTop: "1px solid #1c2430", marginTop: 40, padding: 16, textAlign: "center", color: "#8a939e" }}>
        © {new Date().getFullYear()} Clerko
      </footer>
    </div>
  )
}
