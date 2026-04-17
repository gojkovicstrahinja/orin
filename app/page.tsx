import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const values = [
  { label: "Precision", desc: "Every pixel, every line of code — deliberate." },
  { label: "Performance", desc: "Fast by default. Optimized by design." },
  { label: "Partnership", desc: "Your goals become our goals." },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <ProcessSection />

      {/* Why Orin strip */}
      <section className="py-24 px-6 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Why Orin
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb]">
              Built differently, on purpose.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.label} delay={i * 0.1} className="text-center">
                <div className="w-10 h-px bg-[#2563eb] mx-auto mb-6" />
                <h3 className="text-lg font-semibold text-[#f9fafb] mb-3">{v.label}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA banner */}
      <section className="py-24 px-6 bg-[#080b10]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-[#f9fafb] mb-6 leading-tight">
              Ready to build something{" "}
              <span className="text-[#3b82f6]">exceptional?</span>
            </h2>
            <p className="text-[#9ca3af] mb-10 text-lg">
              Let&apos;s talk about your project. No obligations, just clarity.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] text-sm tracking-wide"
            >
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
