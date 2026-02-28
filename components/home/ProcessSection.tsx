"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "remember",
    description:
      "complete a series of identity prompts. not a survey — a quiet conversation. we ask about memory, landscape, the things you carry. your answers become coordinates.",
  },
  {
    number: "02",
    title: "generate",
    description:
      "our system maps your responses to a scent formula. notes emerge from your words. vetiver from silence. cedar from old books. the result is yours alone.",
  },
  {
    number: "03",
    title: "archive",
    description:
      "your bottle arrives with a serial number. your identity file is stored. your story is held. the archive grows. you remain.",
  },
];

export default function ProcessSection() {
  return (
    <section className="border-t border-dust bg-cream py-32 md:py-48">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center font-cormorant text-3xl font-light italic text-ink md:text-4xl"
        >
          how your identity becomes a scent
        </motion.h2>
        <div className="mt-20 flex flex-col gap-16 md:flex-row md:items-start md:justify-between md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-1 flex-col"
            >
              <p className="font-courier text-[10px] uppercase tracking-label text-ash">
                {step.number}
              </p>
              <h3 className="mt-2 font-cormorant text-2xl font-normal text-ink">
                {step.title}
              </h3>
              <p className="mt-4 font-jost text-sm font-light leading-[1.8] text-ink">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <span className="mt-8 hidden text-dust md:block">——</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
