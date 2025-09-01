// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar.jsx";

// Pages
import Home from "@/pages/Home.jsx";
import Guides from "@/pages/Guides.jsx";           // listing
import GuideDetail from "@/pages/GuideDetail.jsx"; // artykuł
import Tools from "@/pages/Tools.jsx";
import Pricing from "@/pages/Pricing.jsx";
import Store from "@/pages/Store.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import Account from "@/pages/Account.jsx";
import ProposalView from "@/pages/ProposalView.jsx";
import Terms from "@/pages/Terms.jsx";
import Privacy from "@/pages/Privacy.jsx";
import NotFound from "@/pages/NotFound.jsx";

import AuthProvider from "@/context/AuthProvider.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error("App error:", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-white">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-white/70">Please refresh the page.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-[#0b0d12]">
            <Navbar />

            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Guides (listing) + artykuł */}
              <Route path="/how-to" element={<Guides />} />
              <Route path="/how-to/:slug" element={<GuideDetail />} />
              {/* alias /guides -> /how-to */}
              <Route path="/guides" element={<Navigate to="/how-to" replace />} />

              {/* Narzędzia / cennik / sklep */}
              <Route path="/tools" element={<Tools />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/store" element={<Store />} />

              {/* Auth / konto / panel */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />

              {/* Podgląd propozycji (oba aliasy) */}
              <Route path="/proposal/:id" element={<ProposalView />} />
              <Route path="/p/:id" element={<ProposalView />} />

              {/* Prawne */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}
