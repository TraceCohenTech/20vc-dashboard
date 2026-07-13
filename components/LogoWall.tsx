"use client";

const GUESTS = [
  { name: "Chris Sacca", color: "#f59e0b" },
  { name: "Frank Slootman", color: "#10b981" },
  { name: "Keith Rabois", color: "#3b82f6" },
  { name: "Sarah Guo", color: "#06b6d4" },
  { name: "Nikesh Arora", color: "#0ea5e9" },
  { name: "Aravind Srinivas", color: "#0284c7" },
  { name: "David George", color: "#22c55e" },
  { name: "Guy Kawasaki", color: "#ef4444" },
  { name: "Alexis Ohanian", color: "#f97316" },
  { name: "Elad Gil", color: "#0891b2" },
  { name: "Josh Kopelman", color: "#3b82f6" },
  { name: "Mark Suster", color: "#10b981" },
];

export function LogoWall() {
  const doubled = [...GUESTS, ...GUESTS];
  return (
    <div className="overflow-hidden py-4 relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="marquee-track flex gap-3 w-max">
        {doubled.map((b, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-5 sm:px-7 py-3 sm:py-4 rounded-xl text-white font-bold text-sm sm:text-base whitespace-nowrap shadow-md"
            style={{ background: `linear-gradient(135deg, ${b.color} 0%, ${b.color}dd 100%)` }}
          >
            {b.name}
          </div>
        ))}
      </div>
    </div>
  );
}
