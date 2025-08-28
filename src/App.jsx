import React, { Suspense, lazy } from "react";
import Navbar from "@/Navbar.jsx";
import Footer from "@/Footer.jsx";
import { Routes, Route } from "react-router-dom";

// Code-splitting stron
const Home    = lazy(() => import("@/pages/Home.jsx"));
const Tools   = lazy(() => import("@/pages/Tools.jsx"));
const HowTo   = lazy(() => import("@/pages/HowTo.jsx"));
const Store   = lazy(() => import("@/pages/Store.jsx"));
const Privacy = lazy(() => import("@/pages/Privacy.jsx"));
const Terms   = lazy(() => import("@/pages/Terms.jsx"));

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <Navbar />
      <main className="pt-16">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[60vh]">
              <div className="animate-pulse rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                Loading…
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
