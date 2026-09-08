"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function OrinHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="orin-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <a href="#top" className="wordmark" aria-label="Orin home">
        <Image
          src="/logo.png"
          alt="Orin"
          width={129}
          height={48}
          priority
          className="wordmark-logo"
        />
      </a>
      <nav
        className={open ? "main-nav is-open" : "main-nav"}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {[
          ["Studio", "studio"],
          ["Services", "services"],
          ["Work", "work"],
          ["About", "about"],
          ["Process", "process"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="header-contact"
        onClick={() => setOpen(false)}
      >
        Let’s talk <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
