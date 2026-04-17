import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Design",
    description:
      "Pixel-perfect interfaces built for conversion. We combine aesthetics with strategy to create sites users love.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Development",
    description:
      "Scalable web applications engineered with modern frameworks — React, Next.js, Node.js, and more.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "User research, wireframes, and high-fidelity prototypes that turn complexity into clarity.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-[#080b10]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#f9fafb] mb-4">
            End-to-end digital craft
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">
            From strategy to deployment, we handle every layer of your digital presence.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group p-8 rounded-xl border border-white/5 bg-[#0d1117] hover:border-[#2563eb]/30 hover:bg-[#0d1117]/80 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 text-[#3b82f6] flex items-center justify-center mb-6 group-hover:bg-[#2563eb]/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#f9fafb] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#3b82f6] hover:text-[#60a5fa] font-medium transition-colors duration-200"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
