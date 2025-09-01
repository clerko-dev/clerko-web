// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from './components/layout/ErrorBoundary.jsx';
import { AuthProvider } from './lib/auth.jsx';
import Healthcheck from './Healthcheck.tsx';
import './index.css';
import React, { Suspense, lazy } from 'react';
// zamiast: import GuideDetail from '@/pages/GuideDetail.jsx';

import { initAnalytics } from '@/lib/analytics.js';
initAnalytics(); // odpali się tylko, gdy jest VITE_GA_MEASUREMENT_ID

if (import.meta.env.PROD) {
  window.addEventListener('error', (e) => console.error('GlobalError:', e.error || e.message, e));
  window.addEventListener('unhandledrejection', (e) => console.error('UnhandledRejection:', e.reason));
}
const GuideDetail = lazy(() => import('@/pages/GuideDetail.jsx'));
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
