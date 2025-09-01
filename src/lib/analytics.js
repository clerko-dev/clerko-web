// src/lib/analytics.js
export function initAnalytics(id = import.meta.env.VITE_GA_MEASUREMENT_ID) {
  if (!id || typeof window === 'undefined') return;

  // załaduj gtag
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', id, { anonymize_ip: true });
}
