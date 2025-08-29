import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

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
import NotFound from '@/pages/NotFound.jsx'

/** Prosty ErrorBoundary – jeśli cokolwiek „wybuchnie”, zobaczysz komunikat zamiast pustej strony. */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('App crash:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h2>Wystąpił błąd w aplikacji</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#1a2330', padding: 12, borderRadius: 8, overflow: 'auto' }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <p>Sprawdź konsolę przeglądarki (F12 → Console), ale aplikacja już się renderuje z fallbackiem.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main className="container">
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
          {/* Fallbacki, żeby na pewno coś wyświetlić */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
