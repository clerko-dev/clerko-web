// src/lib/auth.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase, hasSupabaseEnv } from './supabase';

const AuthCtx = createContext({
  user: null,
  loading: true,
  ready: false,
  hasSupabaseEnv,
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let unsub;
    (async () => {
      try {
        if (!supabase) return; // brak ENV — działamy bez auth
        const { data } = await supabase.auth.getSession();
        if (mounted) setUser(data?.session?.user ?? null);
        const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
          setUser(session?.user ?? null);
        });
        unsub = sub?.subscription;
      } catch (e) {
        console.error('Auth init failed:', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
      if (unsub) unsub.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (!supabase) setLoading(false);
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    ready: !loading,
    hasSupabaseEnv,
    signOut: async () => { if (supabase) await supabase.auth.signOut(); },
  }), [user, loading]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);
