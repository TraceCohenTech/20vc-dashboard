"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#timeline", label: "Timeline" },
  { href: "#topics", label: "Topics" },
  { href: "#style", label: "Interview Style" },
  { href: "#learnings", label: "Learnings" },
  { href: "#fun", label: "Fun Stuff" },
  { href: "#methodology", label: "Methodology" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md border-b border-[#262626]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#top" className={`font-bold text-sm sm:text-base ${"text-white"}`}>
          <span className="bg-white text-black font-black px-1.5 py-0.5 mr-1.5 tracking-tight">20VC</span><span className="tracking-[0.2em] text-xs font-bold text-neutral-300">DECODED</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition active:scale-[0.97] ${
                "text-neutral-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className={`md:hidden inline-flex items-center justify-center h-11 w-11 rounded-md transition active:scale-[0.97] ${
            "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-[#262626] shadow-lg">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm font-medium text-neutral-300 border-b border-[#222] last:border-0 active:scale-[0.97]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
