// src/components/GAListener.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GAListener() {
  const loc = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: loc.pathname + loc.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [loc]);
  return null;
}
