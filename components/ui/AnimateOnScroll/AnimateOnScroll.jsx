"use client";

import { useRef, useState, useEffect } from "react";

export default function AnimateOnScroll({
  children,
  className = "",
  stagger = 0,
  as: Component = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`section-reveal ${isVisible ? "section-reveal--visible" : ""} ${className}`}
      style={stagger ? { transitionDelay: `${stagger}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
