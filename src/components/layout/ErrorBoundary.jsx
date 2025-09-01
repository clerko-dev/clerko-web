// src/components/layout/ErrorBoundary.jsx
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  reset = () => { this.setState({ error: null }); location.reload(); };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    return (
      <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0b0d16',color:'#fff',padding:24}}>
        <div style={{maxWidth:760,width:'100%',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:16,padding:24}}>
          <h2 style={{marginTop:0}}>Something went wrong</h2>
          <p>To jest szczegółowy błąd z ErrorBoundary:</p>
          <pre style={{whiteSpace:'pre-wrap',background:'rgba(0,0,0,0.4)',padding:12,borderRadius:8,overflow:'auto'}}>
            {String(error?.stack || error?.message || error)}
          </pre>
          <button onClick={this.reset} style={{marginTop:12,padding:'8px 14px',borderRadius:10,border:'1px solid rgba(255,255,255,0.2)',background:'transparent',color:'#fff',cursor:'pointer'}}>
            Reset / Reload
          </button>
        </div>
      </div>
    );
  }
}
