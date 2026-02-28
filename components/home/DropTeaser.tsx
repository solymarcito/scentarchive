"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function DropTeaser() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would integrate with email service
    setEmail("");
  };

  return (
    <section className="border-t border-dust bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-courier text-[10px] uppercase tracking-label text-gold-thread">
            30-DAY IDENTITY DROP · COMING SOON
          </p>
          <h2 className="mt-6 font-cormorant text-3xl font-light text-warm-white md:text-4xl lg:text-5xl">
            thirty identities. thirty stories. five hundred bottles each.
          </h2>
          <p className="mt-8 font-jost text-base font-light leading-[1.8] text-dust">
            each month we release a limited edition — a single identity, captured
            in scent. thirty drops. thirty lives. each bottle numbered. each
            story held. the first drop arrives soon.
          </p>
          <div className="mt-16 flex justify-center">
            <CountdownTimer />
          </div>
          <form onSubmit={handleSubmit} className="mt-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="leave your email. we'll remember you."
                className="w-full max-w-md border-b border-dust/50 bg-transparent px-0 py-3 font-jost text-sm font-light text-warm-white placeholder:text-dust/70 focus:border-gold-thread focus:outline-none sm:max-w-sm"
              />
              <button
                type="submit"
                className="font-jost text-sm font-light text-warm-white transition-all duration-500 hover:text-gold-thread"
              >
                →
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
