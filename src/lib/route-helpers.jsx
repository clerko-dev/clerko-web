import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth.jsx';

export function ProtectedRoute({ children }) {
  const { initialized, user } = useAuth();
  const location = useLocation();
  if (!initialized) return null; // krótkie mrugnięcie, można dodać spinner
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}

/** Zawsze scrolluj do gĂłry po zmianie Ĺ›cieĹĽki (nie dotyczy samej zmiany hash) */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/** Po zmianie #hash przewiĹ„ pĹ‚ynnie do elementu o tym id.
 *  DziaĹ‚a takĹĽe gdy sekcja montuje siÄ™ â€žodrobinÄ™ pĂłĹşniejâ€ť.
 */
export function HashScroller() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    let timer = 0;

    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempt < 20) {
        timer = window.setTimeout(() => tryScroll(attempt + 1), 50);
      }
    };

    tryScroll();
    return () => clearTimeout(timer);
  }, [hash]);

  return null;
}
