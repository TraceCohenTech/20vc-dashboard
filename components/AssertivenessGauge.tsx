"use client";
import { useEffect, useRef, useState } from "react";

export function AssertivenessGauge({ early, recent }: { early: number; recent: number }) {
  const size = 200;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const half = c / 2;
  const elRef = useRef<SVGSVGElement>(null);
  const [pctEarly, setPctEarly] = useState(0);
  const [pctRecent, setPctRecent] = useState(0);

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
              setPctEarly((early / 10) * 100 * eased);
              setPctRecent((recent / 10) * 100 * eased);
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
  }, [early, recent]);

  const outerR = r;
  const innerR = r - stroke - 6;
  const innerC = 2 * Math.PI * innerR;
  const innerHalf = innerC / 2;

  return (
    <div className="flex flex-col items-center">
      <svg
        ref={elRef}
        viewBox={`0 0 ${size} ${size / 2 + 24}`}
        className="w-full max-w-[220px]"
        role="img"
        aria-label={`Assertiveness index: ${early} out of 10 in 2015, rising to ${recent} out of 10 by 2026`}
      >
        <path d={`M ${stroke / 2} ${size / 2} A ${outerR} ${outerR} 0 0 1 ${size - stroke / 2} ${size / 2}`} fill="none" stroke="#e2e8f0" strokeWidth={stroke} strokeLinecap="round" />
        <path
          d={`M ${stroke / 2} ${size / 2} A ${outerR} ${outerR} 0 0 1 ${size - stroke / 2} ${size / 2}`}
          fill="none"
          stroke="#0ea5e9"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(pctRecent / 100) * half} ${half}`}
        />
        <path
          d={`M ${stroke / 2 + stroke + 6} ${size / 2} A ${innerR} ${innerR} 0 0 1 ${size - stroke / 2 - stroke - 6} ${size / 2}`}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth={stroke - 4}
          strokeLinecap="round"
        />
        <path
          d={`M ${stroke / 2 + stroke + 6} ${size / 2} A ${innerR} ${innerR} 0 0 1 ${size - stroke / 2 - stroke - 6} ${size / 2}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth={stroke - 4}
          strokeLinecap="round"
          strokeDasharray={`${(pctEarly / 100) * innerHalf} ${innerHalf}`}
        />
        <text x={size / 2} y={size / 2 - 6} textAnchor="middle" fontSize={30} fontWeight={800} fill="#0f172a">
          {recent}/10
        </text>
        <text x={size / 2} y={size / 2 + 14} textAnchor="middle" fontSize={11} fill="#64748b">
          2026 (2015 was {early}/10)
        </text>
      </svg>
      <div className="flex items-center gap-4 mt-1 text-[11px] text-slate-500">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden />2026</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden />2015</span>
      </div>
    </div>
  );
}
