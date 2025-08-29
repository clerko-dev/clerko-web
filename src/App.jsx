import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'

import Home from '@/pages/Home.jsx'
import Tools from '@/pages/Tools.jsx'
import HowTo from '@/pages/HowTo.jsx'
import Store from '@/pages/Store.jsx'
import Privacy from '@/pages/Privacy.jsx'
import Terms from '@/pages/Terms.jsx'
import Login from '@/pages/Login.jsx'
import Signup from '@/pages/Signup.jsx'
import Account from '@/pages/Account.jsx'
import Dashboard from '@/pages/Dashboard.jsx'

import { pageview } from '@/analytics/ga.js'

function GAListener() {
  const location = useLocation()
  useEffect(() => {
    pageview(location.pathname + location.search)
  }, [location.pathname, location.search])
  return null
}

function ScrollReveal() {
  const location = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [location.pathname])
  return null
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
        </Routes>
      </main>
      <Footer />
      <GAListener />
      <ScrollReveal />
    </>
  )
}
