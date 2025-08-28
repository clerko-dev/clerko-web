import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Home from '@/pages/Home.jsx';
import Tools from '@/pages/Tools.jsx';
import HowTo from '@/pages/HowTo.jsx';
import Store from '@/pages/Store.jsx';
import Privacy from '@/pages/Privacy.jsx';
import Terms from '@/pages/Terms.jsx';
import Login from '@/pages/Login.jsx';
import Signup from '@/pages/Signup.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import { ProtectedRoute } from '@/lib/route-helpers.jsx';
import { AuthProvider } from '@/lib/auth.jsx';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#151b2b] to-[#2b0b53] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/store" element={<Store />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}
