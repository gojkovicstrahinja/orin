import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function CtaBand() {
  return (
    <section className="px-6 pb-24 sm:pb-32 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-blue-800 to-brand px-8 py-20 text-center sm:px-16 sm:py-24">
          <div className="bg-grid-dark absolute inset-0" />
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tell us where you want to go — we&apos;ll design and engineer the
              fastest way to get there.
            </p>
            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-800 transition-colors hover:bg-blue-50"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
