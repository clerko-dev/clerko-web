// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar.jsx";
import ErrorBoundary from "@/components/layout/ErrorBoundary.jsx";

import Home from "@/pages/Home.jsx";
import HowTo from "@/pages/HowTo.jsx";
import Guides from "@/pages/Guides.jsx";
import GuideDetail from "@/pages/GuideDetail.jsx";
import Tools from "@/pages/Tools.jsx";
// te dwie trasy możesz tymczasowo zostawić jeśli nieużywane:
import Pricing from "@/pages/Pricing.jsx";
import Store from "@/pages/Store.jsx";

import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Proposal from "@/pages/Proposal.jsx";
import ProposalView from "@/pages/ProposalView.jsx";
import NotFound from "@/pages/NotFound.jsx";

// UŻYWAMY JEDNEGO klienta Supabase — provider i hook z lib/auth.jsx
import AuthProvider from "@/lib/auth.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ErrorBoundary>
            <div className="min-h-screen bg-zinc-950 text-white">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/how-to" element={<HowTo />} />
                <Route path="/how-to/:slug" element={<GuideDetail />} />
                <Route path="/guides" element={<Guides />} />

                <Route path="/tools" element={<Tools />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/store" element={<Store />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/proposal" element={<Proposal />} />
                <Route path="/proposal/:id" element={<ProposalView />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </div>
          </ErrorBoundary>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}
