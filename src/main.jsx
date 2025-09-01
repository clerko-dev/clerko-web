// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary.jsx';
import { AuthProvider } from '@/context/AuthProvider.jsx';
import Healthcheck from './Healthcheck.tsx';
import './index.css';
import { initAnalytics } from '@/lib/analytics.js';

initAnalytics();

if (import.meta.env.PROD) {
  window.addEventListener('error', (e) =>
    console.error('GlobalError:', e.error || e.message, e)
  );
  window.addEventListener('unhandledrejection', (e) =>
    console.error('UnhandledRejection:', e.reason)
  );
}

const params = new URLSearchParams(window.location.search);
const debug = params.get('debug') === '1';

const Root = () => (
  <ErrorBoundary>
    <AuthProvider>
      {debug ? <Healthcheck /> : <App />}
    </AuthProvider>
  </ErrorBoundary>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
