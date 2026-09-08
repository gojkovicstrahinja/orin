import { Check } from "lucide-react";
import Reveal from "@/components/reveal";

const VALUES = [
  "Performance-first engineering",
  "Pixel-perfect, brand-driven design",
  "Clean, typed, scalable code",
  "Transparent communication, always",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* [&>*]:min-w-0 — grid items default to min-width:auto, so the code
            block below would force the column wider than the viewport on
            narrow screens instead of scrolling inside its own overflow-x-auto. */}
        <div className="grid items-center gap-16 lg:grid-cols-2 [&>*]:min-w-0">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                About Orin
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A studio obsessed with quality
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Orin is a tech-oriented studio focused on web design and
                programming solutions. We believe great products are born where
                thoughtful design meets disciplined engineering — and we hold
                every project to that standard.
              </p>
              <p className="mt-4 text-lg leading-8 text-zinc-400">
                No templates, no shortcuts. Every build is custom, measurable
                and made to last.
              </p>
              <ul className="mt-10 space-y-4">
                {VALUES.map((value) => (
                  <li key={value} className="flex items-center gap-3 text-zinc-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-600/20 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs font-medium text-zinc-500">
                    orin.config.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 text-sm leading-7">
                  <code>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-zinc-100">orin</span>{" "}
                    <span className="text-zinc-500">=</span>{" "}
                    <span className="text-blue-300">defineStudio</span>
                    <span className="text-zinc-500">({"{"}</span>
                    {"\n"}
                    {"  "}design<span className="text-zinc-500">:</span>{" "}
                    <span className="text-emerald-400">&quot;pixel-perfect&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"  "}stack<span className="text-zinc-500">:</span>{" "}
                    <span className="text-zinc-500">[</span>
                    <span className="text-emerald-400">&quot;Next.js&quot;</span>
                    <span className="text-zinc-500">,</span>{" "}
                    <span className="text-emerald-400">&quot;React&quot;</span>
                    <span className="text-zinc-500">,</span>{" "}
                    <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                    <span className="text-zinc-500">],</span>
                    {"\n"}
                    {"  "}performance<span className="text-zinc-500">:</span>{" "}
                    <span className="text-orange-300">100</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"  "}seo<span className="text-zinc-500">:</span>{" "}
                    <span className="text-emerald-400">&quot;optimized&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    {"  "}support<span className="text-zinc-500">:</span>{" "}
                    <span className="text-emerald-400">&quot;24/7&quot;</span>
                    <span className="text-zinc-500">,</span>
                    {"\n"}
                    <span className="text-zinc-500">{"}"});</span>
                    {"\n\n"}
                    <span className="text-blue-400">export default</span>{" "}
                    <span className="text-zinc-100">orin</span>
                    <span className="text-zinc-500">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
