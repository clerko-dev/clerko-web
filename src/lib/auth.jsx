import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from './supabase.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Pobierz bieżącą sesję po starcie
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Subskrypcja zmian stanu auth
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      mounted = false
      subscription?.subscription?.unsubscribe?.()
    }
  }, [])

  const value = useMemo(() => ({
    user,
    session,
    loading,

    // E-mail + hasło
    signInWithEmail: async (email, password) =>
      supabase.auth.signInWithPassword({ email, password }),

    signUpWithEmail: async (email, password) =>
      supabase.auth.signUp({ email, password }),

    // Magic link (opcjonalnie)
    sendMagicLink: async (email) =>
      supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } }),

    // Wylogowanie
    signOut: async () => supabase.auth.signOut()
  }), [user, session, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth() must be used within <AuthProvider>')
  return ctx
}
