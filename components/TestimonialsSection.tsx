import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    quote:
      "Orin rebuilt our entire platform in 8 weeks. The attention to detail was unlike any agency we'd worked with before.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Meridian",
  },
  {
    quote:
      "They didn't just build what we asked for — they pushed back when something wasn't right and delivered something better.",
    name: "Marcus Webb",
    role: "Founder",
    company: "Halcyon",
  },
  {
    quote:
      "From the first call to launch day, the process was transparent and stress-free. Exactly what you want in a technical partner.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Vertex",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[#080b10] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb]">
            What our clients say.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="h-full p-8 rounded-xl border border-white/5 bg-[#0d1117] flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-[#2563eb]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#d1d5db] text-sm leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-[#2563eb]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#3b82f6] text-xs font-semibold">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#f9fafb]">{t.name}</p>
                    <p className="text-xs text-[#6b7280]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
