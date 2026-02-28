"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConceptSection() {
  return (
    <section className="border-t border-dust bg-cream py-32 md:py-48">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[3/4] min-h-[400px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
            alt="Hand holding amber glass perfume bottle"
            fill
            className="archive-image object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-courier text-[10px] uppercase tracking-label text-ash">
            THE ARCHIVE
          </p>
          <h2 className="mt-4 font-cormorant text-3xl font-light tracking-display text-ink md:text-4xl">
            a fragrance is not a product. it is a record.
          </h2>
          <div className="mt-8 space-y-6 font-jost text-base font-light leading-[1.8] text-ink">
            <p>
              we believe every person carries an invisible archive. memories that
              shape who you are. moments that remain when everything else fades.
              your scent identity is already there — held in the way you move,
              the places you return to, the people you carry with you.
            </p>
            <p>
              our process does not create. it uncovers. through prompts that feel
              like questions from an old friend, we map the territory of your
              identity. the result is not a perfume. it is a record. permanent.
              yours.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-gold-thread pl-6 font-cormorant text-lg font-light italic text-ink">
            every bottle carries a serial number. every serial number carries a
            life.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
