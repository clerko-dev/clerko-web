// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

// Pobieramy zmienne środowiskowe z Vite
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  // Nie przerywamy builda; ostrzegamy w konsoli (sprawdź w DevTools -> Console)
  console.warn('[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY')
}

// Eksportujemy instancję klienta (named + default, żeby pokryć oba style importu)
export const supabase = createClient(url ?? '', anonKey ?? '')
export default supabase
