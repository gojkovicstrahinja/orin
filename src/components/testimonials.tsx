import { Quote } from "lucide-react";
import Reveal from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Orin rebuilt our store from the ground up. Page loads went from six seconds to under one — and sales followed immediately.",
    author: "Milena K.",
    role: "CEO, Nebula",
  },
  {
    quote:
      "The cleanest codebase we have ever inherited. Their TypeScript discipline saved us months of maintenance work.",
    author: "Daniel R.",
    role: "CTO, Apex Finance",
  },
  {
    quote:
      "They think like partners, not vendors. Every sprint delivered exactly what was promised, on time and on budget.",
    author: "Sara J.",
    role: "Founder, Lumen Health",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Trusted by teams who care about craft
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.author} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <Quote className="h-8 w-8 text-blue-500" />
                <blockquote className="mt-6 flex-1 text-lg leading-8 text-zinc-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-zinc-500">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
