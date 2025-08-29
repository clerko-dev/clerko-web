import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from './supabase.js'

/**
 * --- Named exports (używane przez strony) ---
 * Dzięki nim Login.jsx/Signup.jsx mogą importować:
 *   import { signInWithEmail, signUpWithEmail, sendMagicLink, signOut } from '@/lib/auth.jsx'
 * Dodatkowo udostępniamy to samo przez hook `useAuth()`.
 */
export async function signInWithEmail(email, password) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function signUpWithEmail(email, password) {
  return supabase.auth.signUp({ email, password })
}

export async function sendMagicLink(email) {
  return supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } })
}

export async function signOut() {
  return supabase.auth.signOut()
}

/**
 * --- Context + hook ---
 * Zapewnia dostęp do `user`, `session`, `loading` oraz metod auth w całej aplikacji.
 */
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Bieżąca sesja po starcie
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
    // metody dostępne przez hook
    signInWithEmail,
    signUpWithEmail,
    sendMagicLink,
    signOut
  }), [user, session, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth() must be used within <AuthProvider>')
  return ctx
}
