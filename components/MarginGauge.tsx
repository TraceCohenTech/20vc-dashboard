"use client";
import { useEffect, useRef, useState } from "react";

export function MarginGauge({ value, label }: { value: number; label: string }) {
  const size = 220;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const half = c / 2;
  const elRef = useRef<SVGSVGElement>(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1600;
            const animate = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - t, 3);
              setPct(value * eased);
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  const fillLen = (pct / 100) * half;
  return (
    <div className="flex flex-col items-center">
      <svg ref={elRef} viewBox={`0 0 ${size} ${size / 2 + 20}`} className="w-full max-w-[220px]" role="img" aria-label={`${label}: ${value}%`}>
        <defs>
          <linearGradient id="gaugeFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Track */}
        <path
          d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* Fill */}
        <path
          d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none"
          stroke="url(#gaugeFill)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${fillLen} ${half}`}
        />
        <text x={size / 2} y={size / 2 - 8} textAnchor="middle" fontSize={36} fontWeight={800} fill="#0f172a">
          {pct.toFixed(0)}%
        </text>
        <text x={size / 2} y={size / 2 + 12} textAnchor="middle" fontSize={11} fill="#64748b">
          {label}
        </text>
      </svg>
    </div>
  );
}
