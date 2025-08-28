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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Możesz wpiąć monitoring (Sentry itp.)
    console.error("Runtime error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen text-white bg-black/90 p-6">
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <pre className="text-sm whitespace-pre-wrap opacity-80">
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
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
      <ErrorBoundary>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
          <ScrollToTop />
          <AppInner />
        </div>
      </ErrorBoundary>
    </Router>
  );
}
