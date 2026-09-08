import { Code2, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import Reveal from "@/components/reveal";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We dig into your goals, audience and requirements to define a clear, measurable roadmap.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "From wireframes to a polished interface — iterated with your feedback until it feels right.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "Clean, typed, tested code on a modern stack that scales with your business.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy & Grow",
    description:
      "Launch, monitor, optimize. We stay by your side long after go-live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              How we work
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A process refined to the last detail
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Four phases, zero surprises. You always know where your project
              stands and what comes next.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-ink p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                <span className="text-5xl font-bold tracking-tight text-white/10 transition-colors group-hover:text-blue-500/25">
                  {step.number}
                </span>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
