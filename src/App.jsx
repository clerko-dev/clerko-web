import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Tools from "@/pages/Tools";
import HowTo from "@/pages/HowTo";
import Store from "@/pages/Store";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import { Toaster } from "@/components/ui/toaster";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/store" element={<Store />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <ScrollToTop />
        <AppInner />
      </div>
    </Router>
  );
}
