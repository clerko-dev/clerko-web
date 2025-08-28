// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import Tools from "@/pages/Tools.jsx";
import Store from "@/pages/Store.jsx";
import HowTo from "@/pages/HowTo.jsx";
import Privacy from "@/pages/Privacy.jsx";
import Terms from "@/pages/Terms.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import SEO from "@/components/SEO.jsx";
import { HelmetProvider } from "react-helmet-async";
import { initScrollReveal } from "@/lib/reveal.js"; // ← DODANE

function ScrollEffects() {
  const { pathname, hash } = useLocation();

  // 1) inicjalizacja efektów po montażu i przy zmianie trasy
  useEffect(() => {
    const stop = initScrollReveal();
    return () => stop?.();
  }, [pathname]);

  // 2) obsługa #anchor (np. #generator po kliknięciu Try Free)
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const cleanup = initScrollReveal();     // ← DODANE
    return cleanup;                         // ← DODANE
  }, [location.pathname]);                  // ← DODANE

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/store" element={<Store />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}