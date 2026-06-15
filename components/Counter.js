"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value); // affiche la valeur finale dès le départ, pas 0
  const [animated, setAnimated] = useState(false);

  const match = String(value).match(/^(\D*)(\d+)(\D*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || animated) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const target = parseInt(match[2], 10);
    const prefix = match[1];
    const suffix = match[3];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            observer.unobserve(entry.target);
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * eased);
              setDisplay(`${prefix}${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            // Petit délai pour que l'élément soit bien visible avant de démarrer
            setTimeout(() => requestAnimationFrame(tick), 200);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [match, value, duration, animated]);

  return <span ref={ref}>{display}</span>;
}