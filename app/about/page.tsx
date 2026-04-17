import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const values = [
  {
    title: "Quality over speed",
    description:
      "We don't cut corners. Every project receives the same level of craft and attention, regardless of scope.",
  },
  {
    title: "Transparency",
    description:
      "Clear timelines, honest pricing, and open communication — always. No surprises.",
  },
  {
    title: "Long-term thinking",
    description:
      "We build for maintainability and scalability. The code we write today should still serve you well in five years.",
  },
  {
    title: "Results-driven",
    description:
      "Beautiful design is just the start. We optimize for real outcomes: conversions, engagement, and growth.",
  },
  {
    title: "Continuous learning",
    description:
      "The web evolves fast. We stay sharp so you don't have to.",
  },
  {
    title: "Partnership mindset",
    description:
      "We're not vendors — we're collaborators. Your success is our success.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#080b10]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-6">
              About Orin
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#f9fafb] mb-8 leading-tight">
              We believe the web deserves{" "}
              <span className="text-[#3b82f6]">better craft.</span>
            </h1>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              Orin was founded on a simple conviction: that exceptional digital experiences
              aren&apos;t accidents. They&apos;re the result of deliberate decisions, careful
              execution, and a genuine care for the people who use them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-[#f9fafb] mb-6">Our story</h2>
            <div className="space-y-4 text-[#9ca3af] leading-relaxed">
              <p>
                Orin started as a small consultancy with a big ambition: to raise the bar
                for what clients could expect from a web partner. Too many agencies overpromised
                and underdelivered. Too much bloated code. Too little strategic thinking.
              </p>
              <p>
                We set out to do things differently — to combine the strategic thinking of a
                consultancy with the execution quality of an elite product studio.
              </p>
              <p>
                Today, we work with startups and established brands alike, helping them build
                digital products that perform, endure, and stand out.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "50+", label: "Projects delivered" },
                { number: "100%", label: "Client satisfaction" },
                { number: "2+", label: "Years experience" },
                { number: "24h", label: "Response time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl border border-white/5 bg-[#080b10] text-center"
                >
                  <div className="text-3xl font-bold text-[#3b82f6] mb-2">{stat.number}</div>
                  <div className="text-xs text-[#6b7280] tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#080b10]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb]">
              Our values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-white/5 bg-[#0d1117] h-full">
                  <div className="w-8 h-px bg-[#2563eb] mb-5" />
                  <h3 className="text-base font-semibold text-[#f9fafb] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-24 px-6 bg-[#0d1117] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl font-bold text-[#f9fafb] mb-6">
              Small team. High standards.
            </h2>
            <p className="text-[#9ca3af] mb-10">
              We&apos;re a tight-knit group of designers and engineers who care deeply about
              the work. Quality over quantity — always.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 border border-white/10 hover:border-white/20 text-[#d1d5db] hover:text-[#f9fafb] font-medium rounded-md transition-all duration-200 text-sm"
            >
              Work With Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
