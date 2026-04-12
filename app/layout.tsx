import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", adjustFontFallback: false });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Brahmasutra Ayurveda | Ancient Wisdom For Modern Healing",
  description: "Experience personalized Ayurvedic healthcare that addresses the root cause of your concerns. Authentic Panchakarma treatments.",
  keywords: "Ayurveda, Panchakarma, Healing, Wellness, Brahmasutra",
  openGraph: {
    title: "Brahmasutra Ayurveda",
    description: "Ancient Wisdom For Modern Healing",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
          }
          .linen-texture {
            background-image: url('https://www.transparenttextures.com/patterns/linen-paper.png');
          }
          .lotus-bg {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M50 10 C50 10 30 40 50 70 C70 40 50 10 Z" fill="%232E7D32" opacity="0.03"/></svg>');
          }
        `}} />
      </head>
      <body className={`${newsreader.variable} ${plusJakarta.variable} ${playfair.variable} ${poppins.variable} bg-surface text-on-surface font-body selection:bg-tertiary-container selection:text-on-tertiary-container overflow-x-hidden min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
