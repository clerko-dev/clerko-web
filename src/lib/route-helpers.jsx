import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Zawsze scrolluj do góry po zmianie ścieżki (nie dotyczy samej zmiany hash) */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/** Po zmianie #hash przewiń płynnie do elementu o tym id.
 *  Działa także gdy sekcja montuje się „odrobinę później”.
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
