import React, { useEffect } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"

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
import Dashboard from "@/pages/Dashboard.jsx"

import { initReveal } from "@/lib/reveal.js"
import { pageview } from "@/analytics/ga.js"

function Effects() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    initReveal()
    pageview(pathname + search)
  }, [pathname, search])
  return null
}

function NotFound() {
  return (
    <div className="container py-12">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-slate-400 mt-2">Check the URL or go back to the homepage.</p>
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Effects />
    </>
  )
}
