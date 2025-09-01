import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error){ return { hasError: true, error }; }
  componentDidCatch(error, info){ console.error("App crash:", error, info); }
  render(){
    if(this.state.hasError){
      return (
        <div className="min-h-screen text-white flex items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-white/70 mb-6">We’re fixing it. Try refreshing the page.</p>
            <button onClick={()=>location.reload()} className="px-4 py-2 rounded bg-white/10 hover:bg-white/20">
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
