import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signInWithEmail } from "@/lib/auth.jsx"

const inputStyle = "w-full mt-1 px-3 py-2 rounded-xl border border-slate-800 bg-slate-900/60"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true); setError(null)
    const { error } = await signInWithEmail(email, password)
    setLoading(false)
    if (error) { setError(error.message); return }
    navigate("/dashboard")
  }

  return (
    <section className="container py-10" style={{ maxWidth: 520 }}>
      <h1 className="text-3xl font-bold">Log in</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div className="card">
          <label>Email</label>
          <input className={inputStyle} type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="card">
          <label>Password</label>
          <input className={inputStyle} type="password" required value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <p className="text-red-400">{error}</p>}
        <button className="btn" disabled={loading}>{loading ? "Signing in…" : "Log in"}</button>
      </form>
      <p className="text-muted mt-3">No account? <Link to="/signup">Create one</Link></p>
    </section>
  )
}
