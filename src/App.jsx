import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "@/components/layout/Navbar.jsx"
import Footer from "@/components/layout/Footer.jsx"

import Home from "@/pages/Home.jsx"
import Tools from "@/pages/Tools.jsx"
import HowTo from "@/pages/HowTo.jsx"
import Store from "@/pages/Store.jsx"
import Privacy from "@/pages/Privacy.jsx"
import Terms from "@/pages/Terms.jsx"
import Login from "@/pages/Login.jsx"
import Signup from "@/pages/Signup.jsx"
import Account from "@/pages/Account.jsx"
import Dashboard from "@/pages/Dashboard.jsx"

function NotFound() {
  return (
    <div className="container py-12">
      <h2 className="text-2xl font-semibold">Nie znaleziono strony</h2>
      <p className="text-muted mt-2">Sprawdź adres URL lub przejdź na stronę główną.</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/store" element={<Store />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
