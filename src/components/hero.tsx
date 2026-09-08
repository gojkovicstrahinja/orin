import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const TECHS = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Figma"];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background: blue glow + blueprint grid, Samsung-style full-bleed */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_85%_60%,rgba(20,40,160,0.25),transparent_70%)]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Web Design &amp; Development Studio
        </span>

        <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          We craft digital
          <br />
          <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            experiences that perform
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Orin designs and engineers fast, beautiful websites and web applications.
          From the first pixel to the last line of code — precision is our default.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#work"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
          >
            Explore our work
          </Link>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium tracking-wide text-zinc-500">
          {TECHS.map((tech) => (
            <span key={tech} className="flex items-center gap-8">
              {tech}
              <span className="hidden text-blue-500/60 last:hidden sm:inline" aria-hidden="true">
                •
              </span>
            </span>
          ))}
        </div>
      </div>

      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-blue-400"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
