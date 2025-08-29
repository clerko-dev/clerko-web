import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

function ScrollRevealOnRoute() {
  const location = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollRevealOnRoute />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
