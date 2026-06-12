"use client";
import { useEffect, useRef, useState } from "react";

/**
 * <Reveal as="div" delay={0} className="...">contenu</Reveal>
 * Ajoute une classe "reveal" + "is-visible" quand l'élément entre dans le viewport.
 * Le style (opacity/transform/transition) est défini dans globals.css.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si l'utilisateur préfère moins d'animations, afficher direct
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
