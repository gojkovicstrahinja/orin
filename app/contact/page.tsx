import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

const contactDetails = [
  {
    label: "Email",
    value: "info@orin.it.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Remote — worldwide",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="mb-16">
            <p className="text-[#3b82f6] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#f9fafb] mb-4">
              Let&apos;s build something together.
            </h1>
            <p className="text-[#9ca3af] text-lg max-w-xl">
              Tell us about your project. We&apos;ll get back to you within 24 hours.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} className="space-y-8">
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 text-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] uppercase tracking-widest mb-1">
                        {detail.label}
                      </p>
                      <p className="text-[#d1d5db] font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl border border-white/5 bg-[#0d1117]">
                <h3 className="text-sm font-semibold text-[#f9fafb] mb-3">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-[#9ca3af]">
                  <li className="flex gap-3">
                    <span className="text-[#3b82f6] font-semibold flex-shrink-0">1.</span>
                    We review your message and goals
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3b82f6] font-semibold flex-shrink-0">2.</span>
                    We schedule a brief discovery call
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#3b82f6] font-semibold flex-shrink-0">3.</span>
                    We send a tailored proposal
                  </li>
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
