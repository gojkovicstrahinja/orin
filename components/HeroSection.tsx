"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const words = ["We", "build", "exceptional", "digital", "experiences."];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#080b10]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none" />
      </div>

      {/* Grid lines subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-8"
        >
          Web Design & Development
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              className={`inline-block mr-[0.25em] ${
                word === "exceptional" ? "text-[#3b82f6]" : "text-[#f9fafb]"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From concept to launch, Orin crafts high-performance websites and
          applications that make brands stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] text-sm tracking-wide"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="px-8 py-3.5 border border-white/10 hover:border-white/20 text-[#d1d5db] hover:text-[#f9fafb] font-medium rounded-md transition-all duration-200 text-sm tracking-wide"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6b7280] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#6b7280] to-transparent"
        />
      </motion.div>
    </section>
  );
}
