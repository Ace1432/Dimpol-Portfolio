import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Adds the "visible" class when the element enters the viewport.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0–1). Default 0.15.
 * @param {string} options.rootMargin - Observer root margin. Default "0px 0px -40px 0px".
 * @returns {React.RefObject} ref - Attach to the element you want to reveal.
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion: make visible immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
