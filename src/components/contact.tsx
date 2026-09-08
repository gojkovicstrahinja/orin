"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/reveal";

const CONTACT_EMAIL = "info@orin.it.com";

const INFO = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
  { icon: MapPin, label: "Location", value: "Remote-first, worldwide" },
];

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const INITIAL_FORM: FormState = { name: "", email: "", budget: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || "Not specified"}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-blue-500 focus:bg-white/[0.07]";

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Contact
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Tell us what you&apos;re building and we&apos;ll get back to you
                within one business day with next steps.
              </p>

              <ul className="mt-12 space-y-6">
                {INFO.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-medium text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-ink p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" className="bg-ink">
                    Select a range
                  </option>
                  <option value="< $5k" className="bg-ink">
                    Under $5,000
                  </option>
                  <option value="$5k – $15k" className="bg-ink">
                    $5,000 – $15,000
                  </option>
                  <option value="$15k – $50k" className="bg-ink">
                    $15,000 – $50,000
                  </option>
                  <option value="> $50k" className="bg-ink">
                    $50,000+
                  </option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline and anything else that matters..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Send message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-center text-xs text-zinc-500">
                Submitting opens your email client — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
