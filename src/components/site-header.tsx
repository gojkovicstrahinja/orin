"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [past, setPast] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // The hero is one viewport tall and carries its own nav; this header
      // only takes over once that nav has scrolled out of the way.
      const isPast = window.scrollY > window.innerHeight * 0.85;
      setPast(isPast);
      if (!isPast) setOpen(false); // don't leave the menu open behind it
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      inert={!past}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        past
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      } ${
        scrolled || open
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
        <Link href="#top" className="flex items-center" aria-label="Orin home">
          <Image
            src="/logo.png"
            alt="Orin"
            width={668}
            height={239}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
