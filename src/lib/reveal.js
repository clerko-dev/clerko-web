// Simple IntersectionObserver that adds .in to [data-reveal] when visible
(() => {
  if (typeof window === 'undefined') return;

  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!('IntersectionObserver' in window) || els.length === 0) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
  );

  els.forEach((el) => io.observe(el));
})();
