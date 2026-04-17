"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Web Design",
    description:
      "We craft visually stunning, user-centered websites that communicate your brand's identity with clarity and precision. Every layout, color, and element is intentional.",
    points: ["Brand-aligned aesthetics", "Responsive design", "Conversion-focused layouts", "Accessibility standards"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Development",
    description:
      "From marketing sites to full-scale web applications, we engineer fast, maintainable code using the best tools in the ecosystem.",
    points: ["Next.js & React", "Node.js backends", "REST & GraphQL APIs", "CI/CD deployment"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Great products start with deep user understanding. We conduct research, build wireframes, and prototype experiences that reduce friction and delight users.",
    points: ["User research & interviews", "Information architecture", "Interactive prototypes", "Usability testing"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Consulting",
    description:
      "Not sure where to start? We provide strategic guidance on technology choices, architecture decisions, and digital roadmaps — helping you invest wisely.",
    points: ["Tech stack strategy", "Architecture reviews", "Product roadmapping", "Team augmentation"],
  },
];

const faqs = [
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes — some of our best work has been with early-stage teams. We know how to move fast without cutting corners on quality. If budget is a constraint, we'll work with you to scope a version that ships and validates.",
  },
  {
    question: "What does your development process look like?",
    answer:
      "We work in iterative cycles with check-ins and demos. You'll always know where things stand. No black boxes, no big reveals at the end.",
  },
  {
    question: "Can you work with our existing design or codebase?",
    answer:
      "Absolutely. We can take over an existing Figma file, build on top of a live codebase, or start fresh — whatever makes sense. We'll do a brief audit first to understand what we're working with.",
  },
  {
    question: "How do you handle post-launch support?",
    answer:
      "We offer a 30-day post-launch window for bug fixes at no charge. For ongoing support, retainer arrangements are available. Either way, we don't disappear after handoff.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-white/5 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm font-medium text-[#f9fafb]">{faq.question}</span>
            <svg
              className={`w-4 h-4 text-[#3b82f6] flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-[#9ca3af] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay to keep text readable and match site palette */}
        <div className="absolute inset-0/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Our Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#f9fafb] mb-6 leading-tight">
              Everything you need to{" "}
              <span className="text-[#3b82f6]">go digital</span>
            </h1>
            <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
              A full suite of web design and development services, tailored to your goals and delivered with precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="h-full p-8 rounded-xl border border-white/5 hover:border-[#2563eb]/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 text-[#3b82f6] flex items-center justify-center mb-6 group-hover:bg-[#2563eb]/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#f9fafb] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#6b7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb]">
              Common questions.
            </h2>
          </AnimatedSection>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb] mb-6">
              Not sure what you need?
            </h2>
            <p className="text-[#9ca3af] mb-8">
              We&apos;ll help you figure it out. Reach out and let&apos;s have an honest conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-md transition-all duration-200 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] text-sm tracking-wide"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
