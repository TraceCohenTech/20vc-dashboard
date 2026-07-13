"use client";
import { useEffect, useRef, useState } from "react";

type Stage = { label: string; value: number; color: string; note?: string };

export function Funnel({ stages }: { stages: Stage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const max = Math.max(...stages.map((s) => s.value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2 sm:space-y-3">
      {stages.map((s, i) => {
        const widthPct = Math.max(8, (s.value / max) * 100);
        const widthScale = Math.pow(widthPct / 100, 0.4) * 100; // gentler taper
        const finalWidth = Math.max(15, widthScale);
        return (
          <div key={s.label} className="flex items-center gap-3 sm:gap-4">
            <div className="w-24 sm:w-32 text-right">
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">
                {s.value >= 1000 ? s.value.toLocaleString() : s.value}
              </div>
            </div>
            <div className="flex-1 h-12 sm:h-16 flex items-center justify-center relative">
              <div
                className="h-full rounded-lg flex items-center justify-center transition-all duration-500 ease-out shadow-sm"
                style={{
                  width: shown ? `${finalWidth}%` : "0%",
                  background: `linear-gradient(135deg, ${s.color} 0%, ${s.color}cc 100%)`,
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {s.note && (
                  <span className="text-white text-xs sm:text-sm font-semibold px-2 text-center">
                    {s.note}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
