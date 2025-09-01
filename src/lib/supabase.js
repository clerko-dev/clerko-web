// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Jeżeli nie masz jeszcze kluczy – NIE twórz klienta (unikamy błędów/race conditions)
export const supabase =
  URL && KEY
    ? createClient(URL, KEY, {
        auth: {
          persistSession: true,
          storageKey: "clerko-auth",
          autoRefreshToken: true,
          flowType: "pkce",
        },
      })
    : null;
