import "./globals.css";
import type { Metadata } from "next";

const TITLE = "20VC Decoded — The Evolution of Harry Stebbings";
const DESCRIPTION =
  "A data-driven read on 1,481 episodes of The Twenty Minute VC (2015–2026): 180 transcripts fully read, 930 guest insights, 171 roundtable predictions, and how Harry Stebbings' interviewing style evolved from receiving answers to contesting guests.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.valueaddvc.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "20VC",
    "Harry Stebbings",
    "The Twenty Minute VC",
    "venture capital podcast",
    "podcast analysis",
    "VC insights",
    "startup wisdom",
  ],
  alternates: { canonical: "/20vc" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/20vc",
    siteName: "20VC Decoded",
    type: "article",
    images: [{ url: "/20vc/og.jpg", width: 1200, height: 630, alt: "20VC Decoded — data analysis of 1,481 episodes of The Twenty Minute VC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@Trace_Cohen",
    images: ["/20vc/og.jpg"],
  },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://www.valueaddvc.com/20vc/og.jpg",
  author: { "@type": "Person", name: "Trace Cohen", url: "https://x.com/Trace_Cohen" },
  publisher: { "@type": "Person", name: "Trace Cohen" },
  about: {
    "@type": "PodcastSeries",
    name: "The Twenty Minute VC (20VC)",
    url: "https://www.thetwentyminutevc.com",
  },
  dateModified: "2026-07-14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        {children}
      </body>
    </html>
  );
}
