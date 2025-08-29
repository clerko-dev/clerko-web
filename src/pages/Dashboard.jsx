import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/lib/auth.jsx'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, loading, signOut } = useAuth()

  useEffect(() => {
    if (!loading && !user) navigate('/login')
  }, [loading, user, navigate])

  if (loading) return <div className="container">Ładowanie…</div>
  if (!user) return null

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Zalogowano jako: <strong>{user.email}</strong></p>
      <button className="btn" onClick={async () => { await signOut(); navigate('/login') }}>
        Wyloguj
      </button>
    </div>
  )
}
