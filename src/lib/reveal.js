// src/lib/reveal.js
export function initScrollReveal() {
  const els = Array.from(document.querySelectorAll("[data-reveal]"));

  // reset klas
  els.forEach((el) => el.classList.remove("reveal-in", "reveal-out"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
        if (isIntersecting && intersectionRatio > 0.2) {
          target.classList.add("reveal-in");
          target.classList.remove("reveal-out");
        } else {
          target.classList.remove("reveal-in");
          target.classList.add("reveal-out");
        }
      });
    },
    { threshold: [0, 0.2, 0.5, 1], rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
