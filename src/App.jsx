import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

const Tools   = lazy(() => import("./pages/Tools.jsx"));
const HowTo   = lazy(() => import("./pages/HowTo.jsx"));
const Store   = lazy(() => import("./pages/Store.jsx"));
const Terms   = lazy(() => import("./pages/Terms.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#0A0B14] text-white">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-10 text-white/60">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
