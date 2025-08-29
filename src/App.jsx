import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";

import Home from "@/pages/Home.jsx";
import Tools from "@/pages/Tools.jsx";
import HowTo from "@/pages/HowTo.jsx";
import Store from "@/pages/Store.jsx";
import Privacy from "@/pages/Privacy.jsx";
import Terms from "@/pages/Terms.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import Dashboard from "@/pages/Dashboard.jsx";

export default function App() {
  const location = useLocation();

  // skroluj do góry po zmianie trasy
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // scroll-reveal na przewijanie (wejście/wyjście z viewportu)
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-in");
          else e.target.classList.remove("reveal-in");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
