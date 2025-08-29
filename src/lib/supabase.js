import { supabase } from "./supabase";

export async function signUpWithEmail({ email, password, username }) {
  // 1) rejestracja
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // 2) utwórz profil (tabela profiles: id UUID PK = auth.uid(), username unique)
  const user = data.user;
  if (user) {
    const { error: pErr } = await supabase.from("profiles").insert({
      id: user.id,
      username,
      created_at: new Date().toISOString(),
    });
    if (pErr && pErr.code !== "23505") throw pErr; // 23505 = unique violation
  }
  return data;
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signInWithApple() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "apple",
    options: { redirectTo: window.location.origin + "/dashboard" },
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  await supabase.auth.signOut();
}
