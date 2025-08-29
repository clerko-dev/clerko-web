import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import Tools from "./pages/Tools.jsx";
import HowTo from "./pages/HowTo.jsx";
import Store from "./pages/Store.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const location = useLocation();

  // INIT reveal-on-scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    // Jeśli przeglądarka nie wspiera IO – pokaż wszystko
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
