import {
  Code2,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  PenTool,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: PenTool,
    title: "Web Design",
    description:
      "User-centered interfaces designed around your brand — from wireframes to polished, pixel-perfect screens that turn visitors into customers.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Robust, scalable websites built with Next.js, React and TypeScript. Clean architecture, typed end-to-end, easy to maintain.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "High-converting online stores with seamless checkout, payment integration and product management tailored to your business.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Dashboards, portals and SaaS products with complex logic made simple — fast, responsive and delightful to use.",
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Lightning-fast load times and technical SEO that gets you found. We tune Core Web Vitals until they shine green.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    description:
      "Ongoing updates, monitoring and improvements. We keep your site secure, fast and up to date — long after launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              What we do
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Services built for the modern web
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Everything your digital presence needs, under one roof — strategy,
              design, engineering and long-term care.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.45)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
