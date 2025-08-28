// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";

import Home from "@/pages/Home.jsx";
import Tools from "@/pages/Tools.jsx";
import HowTo from "@/pages/HowTo.jsx";
import Store from "@/pages/Store.jsx";
import Terms from "@/pages/Terms.jsx";
import Privacy from "@/pages/Privacy.jsx";
import Account from "@/pages/Account.jsx";

import { AuthProvider } from "@/context/AuthProvider.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/store" element={<Store />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}
