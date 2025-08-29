import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SEO from "@/components/SEO.jsx"
import Button from "@/components/ui/Button.jsx"
import { signUpWithEmail } from "@/lib/auth.jsx"

const inputStyle = {
  width: "100%",
  padding: 10,
  marginTop: 6,
  borderRadius: 8,
  border: "1px solid #1c2430",
  background: "#0e131a",
  color: "inherit"
}

const cardStyle = { marginBottom: 12 }

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await signUpWithEmail(email, password)

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    navigate("/dashboard")
  }

  return (
    <div className="container">
      <SEO title="Rejestracja" description="Utwórz konto w Clerko" />
      <h2>Rejestracja</h2>

      <form onSubmit={onSubmit} style={{ maxWidth: 420 }}>
        <div className="card" style={cardStyle}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div className="card" style={cardStyle}>
          <label>Hasło</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        {error && <p style={{ color: "#ff8a8a" }}>{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Tworzenie…" : "Utwórz konto"}
        </Button>
      </form>

      <p style={{ marginTop: 12 }}>
        Masz konto? <Link to="/login">Zaloguj się</Link>
      </p>
    </div>
  )
}
