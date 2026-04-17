import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#f9fafb] uppercase">
            ORIN
          </span>
          <p className="text-xs text-[#6b7280]">
            Building exceptional digital experiences.
          </p>
        </div>

        <nav className="flex items-center gap-8">
          {[
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6b7280] hover:text-[#f9fafb] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#6b7280]">
          &copy; 2026 Orin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
