import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "20VC Decoded — The Evolution of Harry Stebbings",
  description:
    "A data-driven read on 1,481 episodes of The Twenty Minute VC (2015–2026): episode length, topic shift, and how Harry Stebbings' interviewing style evolved from receiving answers to contesting guests.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
