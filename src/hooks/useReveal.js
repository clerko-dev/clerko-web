import { useEffect, useRef } from "react";

export default function useReveal(options={ threshold: 0.12 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) el.classList.add("reveal-in");
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
