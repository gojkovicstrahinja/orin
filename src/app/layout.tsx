import type { Metadata } from "next";
import { Hanken_Grotesk, Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  variable: "--font-prata",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orin — Web Design & Development Studio",
    template: "%s | Orin",
  },
  description:
    "Orin is a tech studio crafting high-performance websites, e-commerce stores and web applications with modern design and clean code.",
  keywords: [
    "web design",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
    "Orin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
