// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import GAListener from '@/components/GAListener.jsx';
import Navbar from '@/components/layout/Navbar.jsx';
import Footer from "@/components/layout/Footer.jsx";
import Home from '@/pages/Home.jsx';
import Guides from '@/pages/Guides.jsx';
const GuideDetail = lazy(() => import('@/pages/GuideDetail.jsx')); // lazy tylko tu

import Pricing from '@/pages/Pricing.jsx';
import Tools from '@/pages/Tools.jsx';
import Generator from '@/pages/Generator.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Login from '@/pages/Login.jsx';
import Signup from '@/pages/Signup.jsx';
import NotFound from '@/pages/NotFound.jsx';

import { useAuth } from '@/context/AuthProvider.jsx';

const PrivateRoute = ({ children }) => {
  const { user, ready } = useAuth();
  if (!ready) return <div className="p-6">Loading…</div>;
  return user ? children : <Login />; // albo: <Navigate to="/login" replace />
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GAListener />
        <Navbar />

        {/* Uwaga: <Suspense> jest OTWARTY i ZAMKNIĘTY poprawnie */}
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to" element={<Guides />} />
            <Route path="/how-to/:slug" element={<GuideDetail />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/generator" element={<Generator />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
   <Footer />
  );
}
