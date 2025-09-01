// fragment pliku src/App.jsx (główna struktura)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AuthProvider from "@/context/AuthProvider.jsx";   // <— WAŻNE
import SEO from "@/components/SEO.jsx";
import Navbar from "@/components/layout/Navbar.jsx";

import Home from "@/pages/Home.jsx";
import Generator from "@/pages/Generator.jsx";
import Guides from "@/pages/Guides.jsx";
import GuideDetail from "@/pages/GuideDetail.jsx";
import Tools from "@/pages/Tools.jsx";
import Pricing from "@/pages/Pricing.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import NotFound from "@/pages/NotFound.jsx";

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info){ console.error("App error:", error, info); }
  render(){ return this.state?.hasError ? <div className="text-white p-8">Something went wrong.</div> : this.props.children;}
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AuthProvider>
          <BrowserRouter>
            <SEO />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generator" element={<Generator />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/guides/:slug" element={<GuideDetail />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
