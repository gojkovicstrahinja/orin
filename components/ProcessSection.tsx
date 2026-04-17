import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, users, and goals. No assumptions, just questions.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out the architecture, tech stack, and design direction before writing a line of code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with check-ins. You see progress, not just the final result.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, QA, and handoff. Then stay available for what comes next.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb]">
            A process built for clarity.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1} className="relative">
              <div className="px-6 py-8 md:py-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] right-0 h-px bg-white/5 z-0" />
                )}

                {/* Number */}
                <div className="relative z-10 flex items-center gap-4 md:block mb-4 md:mb-6">
                  <span className="text-5xl font-bold text-[#2563eb]/20 leading-none">
                    {step.number}
                  </span>
                  <div className="md:hidden">
                    <h3 className="text-base font-semibold text-[#f9fafb]">{step.title}</h3>
                  </div>
                </div>

                <h3 className="hidden md:block text-base font-semibold text-[#f9fafb] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
