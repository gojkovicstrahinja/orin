export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orin — Web Design & Development",
  description:
    "Orin builds exceptional digital experiences. Web design, custom development, UI/UX, and consulting for ambitious brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#080b10] text-[#f9fafb]">
        {/* Global ambient gradient layer — fixed so orbs never clip at section edges */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 md:opacity-100">
          <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-[#2563eb]/30 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[450px] bg-[#60a5fa]/22 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3b82f6]/25 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#60a5fa]/20 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 right-0 w-[450px] h-[400px] bg-[#93c5fd]/18 rounded-full blur-[110px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[350px] bg-[#2563eb]/28 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#60a5fa]/22 rounded-full blur-[110px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-[#93c5fd]/18 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-[#3b82f6]/20 rounded-full blur-[100px]" />
        </div>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
