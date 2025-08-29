// src/lib/reveal.js
(function () {
  if (typeof window === "undefined") return;

  const start = () => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal-init")) {
      root.classList.add("reveal-init");
    }

    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback: pokaż wszystko od razu
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    nodes.forEach((el) => io.observe(el));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
