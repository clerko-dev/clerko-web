import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase.js";
import SEO from "@/components/SEO.jsx";
import Button from "@/components/ui/Button.jsx";

export default function Account() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // formularze
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let mounted = true;

    // aktualna sesja
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoading(false);
    });

    // zmiany sesji
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const redirectTo = `${window.location.origin}/account`;

  // e-mail + hasło
  const signUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo },
    });
    if (error) return alert(error.message);
    alert("Check your inbox to confirm e-mail.");
  };

  const signIn = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
  };

  // magic link (bez hasła)
  const magicLink = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });
    if (error) return alert(error.message);
    alert("Magic link sent. Check your inbox.");
  };

  // OAuth
  const oauth = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo },
    });
    if (error) alert(error.message);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <SEO
        title="Account — Clerko"
        description="Sign in to your Clerko account to access Pro features."
      />

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Account</h1>

        {loading ? (
          <div className="text-white/70">Loading…</div>
        ) : session ? (
          <div className="glass p-6 space-y-4">
            <div className="text-white/80">
              Signed in as <span className="font-mono">{session.user.email}</span>
            </div>
            <div className="flex gap-3">
              <Button type="button" onClick={signOut}>Sign out</Button>
              <Button type="button" variant="secondary" onClick={() => (window.location.href = "/")}>
                Go to Home
              </Button>
            </div>
            {/* Tu później pokażemy status planu, dane billingowe, itp. */}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {/* E-mail + hasło / Magic link */}
            <div className="glass p-6 space-y-4">
              <h2 className="font-semibold">Email & Password</h2>
              <form className="space-y-3" onSubmit={signIn}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <input
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <div className="flex gap-2">
                  <Button type="submit">Sign in</Button>
                  <Button type="button" variant="secondary" onClick={signUp}>
                    Create account
                  </Button>
                  <Button type="button" variant="ghost" onClick={magicLink}>
                    Magic link
                  </Button>
                </div>
              </form>
            </div>

            {/* Social logins */}
            <div className="glass p-6 space-y-4">
              <h2 className="font-semibold">Continue with</h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button type="button" onClick={() => oauth("google")}>Google</Button>
                <Button type="button" variant="secondary" onClick={() => oauth("github")}>GitHub</Button>
                {/* Apple też możliwe: */}
                {/* <Button type="button" variant="ghost" onClick={() => oauth("apple")}>Apple</Button> */}
              </div>
              <p className="text-xs text-white/60">
                After authorizing, you’ll be redirected back to this page.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
