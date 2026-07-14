"use client";
import { useEffect, useRef } from "react";

// Drifting radial-gradient mesh on canvas (additive "screen" blending),
// per the dashboard design reference — replaces static CSS blur blobs.
const POINTS = [
  { color: "59, 130, 246", r: 0.55, x: 0.15, y: 0.2, vx: 0.00016, vy: 0.00011, a: 0.20 },
  { color: "6, 182, 212", r: 0.5, x: 0.85, y: 0.75, vx: -0.00013, vy: -0.00009, a: 0.16 },
  { color: "249, 115, 22", r: 0.42, x: 0.55, y: 0.45, vx: 0.0001, vy: -0.00014, a: 0.10 },
  { color: "29, 78, 216", r: 0.6, x: 0.4, y: 0.9, vx: -0.00009, vy: 0.00012, a: 0.18 },
];

export function MeshCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = POINTS.map((p) => ({ ...p }));
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";
      const rad = Math.min(w, h);
      for (const p of pts) {
        if (!reduced) {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
        const g = ctx.createRadialGradient(p.x * w, p.y * h, 0, p.x * w, p.y * h, rad * p.r);
        g.addColorStop(0, `rgba(${p.color}, ${p.a})`);
        g.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
