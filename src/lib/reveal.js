// src/lib/reveal.js
export function initReveal() {
  const els = document.querySelectorAll('.reveal')
  if (!els.length) return

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in')
        obs.unobserve(e.target)
      }
    })
  }, { threshold: 0.15 })

  els.forEach((el) => obs.observe(el))
}
