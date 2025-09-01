// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { ErrorBoundary } from "@/components/layout/ErrorBoundary.jsx";
import Navbar from "@/components/layout/Navbar.jsx";
import Home from "@/pages/Home.jsx";
import HowTo from "@/pages/HowTo.jsx";
import Tools from "@/pages/Tools.jsx";
import Generator from "@/pages/Generator.jsx";
import Guides from "@/pages/Guides.jsx";
import GuideDetail from "@/pages/GuideDetail.jsx";
import Pricing from "@/pages/Pricing.jsx";
import Login from "@/pages/Login.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import NotFound from "@/pages/NotFound.jsx";

import { AuthProvider } from "@/context/AuthProvider.jsx";

function AppInner(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0E] to-[#111216]">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App(){
  return (
    <HelmetProvider>
      <AuthProvider>
        <ErrorBoundary>
          <Suspense fallback={<div className="p-6 text-white/70">Loading…</div>}>
            <BrowserRouter>
              <AppInner />
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </AuthProvider>
    </HelmetProvider>
  );
}
