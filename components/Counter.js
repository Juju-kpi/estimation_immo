"use client";
import { useEffect, useRef, useState } from "react";

/**
 * <Counter value="40+" /> ou <Counter value="100%" /> ou <Counter value="24h" />
 * Anime le nombre contenu dans la valeur quand le composant entre dans le viewport,
 * en conservant le préfixe/suffixe non numérique (+, %, h, texte...).
 */
export default function Counter({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  // Sépare la partie numérique du reste (ex: "40+" -> num=40, suffix="+")
  const match = String(value).match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!match) {
      setDisplay(value);
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[2], 10);
    const prefix = match[1];
    const suffix = match[3];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * eased);
              setDisplay(`${prefix}${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [match, value, duration]);

  return <span ref={ref}>{display ?? (match ? `${match[1]}0${match[3]}` : value)}</span>;
}
