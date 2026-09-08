import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

type Project = {
  index: string;
  name: string;
  category: string;
  result: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Nebula",
    category: "E-Commerce Platform",
    result: "+140% conversion rate after the redesign",
    gradient: "from-blue-600 via-blue-800 to-blue-950",
  },
  {
    index: "02",
    name: "Apex Finance",
    category: "Fintech Dashboard",
    result: "Real-time analytics for 50k+ active users",
    gradient: "from-indigo-600 via-blue-800 to-slate-950",
  },
  {
    index: "03",
    name: "Lumen Health",
    category: "Healthcare SaaS",
    result: "Patient portal trusted by 200+ clinics",
    gradient: "from-sky-500 via-blue-700 to-blue-950",
  },
  {
    index: "04",
    name: "Atlas Travel",
    category: "Booking Platform",
    result: "3x faster booking flow, 99.9% uptime",
    gradient: "from-blue-800 via-blue-900 to-black",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected work
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Projects that speak for themselves
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-zinc-400">
              A snapshot of recent engagements — each one designed, engineered
              and measured for real business impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 120}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10">
                {/* Visual */}
                <div
                  className={`relative aspect-[16/10] bg-linear-to-br ${project.gradient}`}
                >
                  <div className="bg-grid absolute inset-0 opacity-60" />
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/15" />
                  <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  <span className="absolute left-8 top-8 text-7xl font-bold tracking-tight text-white/15">
                    {project.index}
                  </span>
                  <span className="absolute bottom-8 left-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between gap-4 bg-ink px-8 py-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {project.category}
                    </p>
                    <p className="mt-1.5 font-medium text-zinc-300">{project.result}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
