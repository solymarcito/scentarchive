"use client";

import { motion } from "framer-motion";

export default function IdentityStory() {
  return (
    <section className="border-t border-dust bg-cream py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto max-w-xl px-6 text-center"
      >
        <p className="font-courier text-[10px] uppercase tracking-label text-ash">
          ARCHIVE FILE · SA-000001
        </p>
        <h2 className="mt-6 font-cormorant text-3xl font-light italic text-ink md:text-4xl">
          cedar, morning fog, old paperback books
        </h2>
        <p className="mt-8 font-jost text-base font-light leading-[1.8] text-ink">
          she wakes before the city. the window is open. the air carries the
          memory of rain. downstairs, coffee. upstairs, the weight of words she
          has not yet written. her scent is the space between intention and
          action. quiet. patient. ready.
        </p>
        <p className="mt-8 font-courier text-[10px] uppercase tracking-label text-ash">
          — first archive, december 2025
        </p>
      </motion.div>
    </section>
  );
}
