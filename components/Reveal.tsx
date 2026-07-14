"use client";
import { useEffect, useRef, ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "" }: {
  children: ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in viewport at mount, reveal directly — IO can starve in occluded windows.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const t = setTimeout(() => el.classList.add("in"), delay);
      return () => clearTimeout(t);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            obs.unobserve(el);
          }
        });
      },
      // threshold 0 + rootMargin: fire early so the user sees the glide, not its tail
      { threshold: 0, rootMargin: "50px" }
    );
    obs.observe(el);
    // Fail-open: never allow content to stay invisible if the observer starves
    const failSafe = setTimeout(() => el.classList.add("in"), delay + 300);
    return () => { obs.disconnect(); clearTimeout(failSafe); };
  }, [delay]);
  return (
    <As ref={ref as any} className={`reveal ${className}`}>
      {children}
    </As>
  );
}
