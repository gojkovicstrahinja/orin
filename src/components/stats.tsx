import Reveal from "@/components/reveal";

const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "8+", label: "Years of experience" },
  { value: "24/7", label: "Support & monitoring" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-blue-700">
      <div className="bg-grid-dark absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-800/60 via-transparent to-blue-900/60" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
