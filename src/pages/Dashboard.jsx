import React from 'react';
import SEO from '@/components/SEO.jsx';
import Button from '@/components/ui/Button.jsx';
import { useAuth, signOutUser } from "@/lib/auth.jsx";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Dashboard — Clerko" />
      <section className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome 👋</h1>
        <p className="text-white/70 mb-6">{user?.email}</p>
        <div className="flex gap-3">
          <Button onClick={() => navigate('/#generator')}>Open Generator</Button>
          <Button variant="secondary" onClick={signOut}>Sign out</Button>
        </div>
      </section>
    </>
  );
}
