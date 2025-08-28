import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'

import Home from '@/pages/Home.jsx'
import Tools from '@/pages/Tools.jsx'
import HowTo from '@/pages/HowTo.jsx'
import Privacy from '@/pages/Privacy.jsx'
import Terms from '@/pages/Terms.jsx'
import Store from '@/pages/Store.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B14] text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-to" element={<HowTo />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
