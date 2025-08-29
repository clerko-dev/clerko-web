// src/lib/auth.jsx
import { supabase } from "@/lib/supabase";

/**
 * Logowanie użytkownika klasyczne: email + hasło
 */
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

/**
 * Rejestracja: email + hasło + username
 * - zapisujemy username w user_metadata
 * - (opcjonalnie) możesz dodać też insert do tabeli profiles
 */
export async function signUpWithEmail({ email, password, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });
  if (error) throw error;

  // jeżeli email confirmation jest WYŁĄCZONE, user będzie od razu zalogowany
  // jeżeli WŁĄCZONE — user musi kliknąć link z maila, a username zapisaliśmy już w metadata
  return data;
}

/**
 * Ustaw/zmień username w metadata
 */
export async function setUsername(username) {
  const { data, error } = await supabase.auth.updateUser({
    data: { username },
  });
  if (error) throw error;
  return data;
}

/**
 * Pobierz aktualnego usera (z metadata)
 */
export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

/**
 * Wylogowanie
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
