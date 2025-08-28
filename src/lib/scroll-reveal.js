// src/lib/scroll-reveal.js
export function initScrollReveal() {
  // Złap wszystkie sekcje + elementy, które już mają data-reveal
  const candidates = Array.from(document.querySelectorAll("section, [data-reveal]"));

  // Jeśli sekcja nie ma atrybutu, dodajemy go automatycznie
  const els = candidates.map((el) => {
    if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
    return el;
  });

  // Obserwator wejścia/wyjścia w viewport
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          e.target.classList.remove("reveal-out");
        } else {
          e.target.classList.add("reveal-out");
          e.target.classList.remove("reveal-in");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px", // trochę wcześniej "wyblakaj"
    }
  );

  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
