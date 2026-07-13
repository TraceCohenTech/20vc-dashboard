"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "" }: {
  children: ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    // If already in the viewport at mount, reveal without waiting on the
    // observer — IO callbacks can starve in occluded/background windows.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      t = setTimeout(() => setShown(true), delay);
      return () => clearTimeout(t);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            t = setTimeout(() => setShown(true), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => {
      clearTimeout(t);
      obs.disconnect();
    };
  }, [delay]);
  return (
    <As ref={ref as any} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </As>
  );
}
