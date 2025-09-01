// src/components/layout/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error){ return { hasError: true, error }; }
  componentDidCatch(error, info){ console.error("App error:", error, info); }

  render(){
    if(!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur p-5 text-white">
          <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
          <p className="text-sm text-white/70 mb-4">
            We hit a runtime error. Try refreshing the page. If it persists, we’ll fix it ASAP.
          </p>
          <pre className="text-xs whitespace-pre-wrap bg-black/30 rounded p-3 overflow-auto max-h-60">
            {String(this.state.error)}
          </pre>
        </div>
      </div>
    );
  }
}
