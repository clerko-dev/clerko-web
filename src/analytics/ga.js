// src/analytics/ga.js
export const GA_ID = import.meta.env?.VITE_GA_MEASUREMENT_ID

export function pageview(path) {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('config', GA_ID, { page_path: path })
  }
}

export function track(action, params = {}) {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', action, params)
  }
}
