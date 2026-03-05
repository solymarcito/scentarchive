"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cities = ["new york", "los angeles", "chicago", "miami"];

export default function AtelierPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1619994121345-223317e2e0e6?w=1600&q=80"
          alt="Maison Margiela Replica ÉTAT atelier interior"
          fill
          className="archive-image object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-cream/90 to-transparent p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-cormorant text-4xl font-light text-ink md:text-5xl">
              the atelier
            </h1>
            <p className="mt-4 max-w-xl font-jost text-base font-light leading-[1.8] text-ink">
              a space for the archive. by appointment only. here you complete your
              identity prompts in person. our archivists guide you. the process
              is slow. intentional. yours.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="border-t border-dust py-32 md:py-48">
        <div className="mx-auto max-w-2xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-cormorant text-2xl font-light text-ink"
          >
            request an appointment
          </motion.h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 space-y-4"
            >
              <p className="font-courier text-[10px] uppercase tracking-label text-ash">
                REQUEST RECEIVED
              </p>
              <p className="font-cormorant text-2xl font-light italic text-ink">
                we will be in touch.
              </p>
              <p className="font-jost text-base font-light text-ash">
                a confirmation has been sent to {form.email || "your email"}.
              </p>
            </motion.div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-8">
            <div>
              <label className="mb-2 block font-courier text-[10px] uppercase tracking-label text-ash">
                name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border-b border-dust bg-transparent py-2 font-jost text-base font-light text-ink focus:border-gold-thread focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block font-courier text-[10px] uppercase tracking-label text-ash">
                email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border-b border-dust bg-transparent py-2 font-jost text-base font-light text-ink focus:border-gold-thread focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block font-courier text-[10px] uppercase tracking-label text-ash">
                city
              </label>
              <select
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
                className="w-full border-b border-dust bg-transparent py-2 font-jost text-base font-light text-ink focus:border-gold-thread focus:outline-none"
              >
                <option value="">select</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block font-courier text-[10px] uppercase tracking-label text-ash">
                preferred date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border-b border-dust bg-transparent py-2 font-jost text-base font-light text-ink focus:border-gold-thread focus:outline-none [color-scheme:light]"
              />
            </div>
            <div>
              <label className="mb-2 block font-courier text-[10px] uppercase tracking-label text-ash">
                message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full resize-none border-b border-dust bg-transparent py-2 font-jost text-base font-light text-ink focus:border-gold-thread focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 font-jost text-base font-light text-ink transition-all duration-500 hover:text-gold-thread"
            >
              submit request →
            </button>
          </form>
          )}
        </div>
      </section>
    </div>
  );
}
