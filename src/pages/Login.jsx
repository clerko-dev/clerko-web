import React, { useState } from 'react';
import SEO from '@/components/SEO.jsx';
import Button from '@/components/ui/Button.jsx';
import { useAuth } from '@/lib/auth.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { signInWithPassword, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    const { error } = await signInWithPassword(email.trim(), password);
    if (error) setMsg(error.message);
    else navigate('/dashboard');
  };

  return (
    <>
      <SEO title="Login — Clerko" description="Sign in to your Clerko account." />
      <section className="container mx-auto max-w-md py-16">
        <h1 className="text-3xl font-bold text-white mb-6">Sign in</h1>
        <form onSubmit={onSubmit} className="glass p-6 space-y-4">
          {msg && <div className="text-red-400 text-sm">{msg}</div>}
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          <Button type="submit" className="w-full">Sign in</Button>
          <div className="text-center text-white/60">or</div>
          <Button type="button" variant="secondary" className="w-full" onClick={signInWithGoogle}>Continue with Google</Button>
        </form>
      </section>
    </>
  );
}
