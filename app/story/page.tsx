"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  { year: "2023", text: "the concept emerges. scent as archive. identity as record." },
  { year: "2024", text: "the first formulas. the first prompts. the first bottles." },
  { year: "2025", text: "the archive opens. identities begin to be held." },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="border-b border-dust py-32 md:py-48">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-cormorant text-4xl font-light text-ink md:text-5xl"
          >
            the story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 font-jost text-base font-light leading-[1.8] text-ink"
          >
            we did not set out to make perfume. we set out to hold what cannot be
            held. memory. identity. the invisible archive each person carries.
          </motion.p>
        </div>
      </section>
      <section className="border-b border-dust">
        <div className="relative aspect-[21/9] w-full md:aspect-video">
          <Image
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&q=80"
            alt="Perfume creation"
            fill
            className="archive-image object-cover"
          />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-jost text-base font-light leading-[1.8] text-ink"
          >
            the idea came from a question: what if a fragrance could be a record
            of who you are? not a mask. not an aspiration. a document. we spent
            two years building the system — the prompts, the mapping, the
            formulas. each step designed to uncover, not invent.
          </motion.p>
        </div>
      </section>
      <section className="border-b border-dust py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-l-2 border-gold-thread pl-8 font-cormorant text-2xl font-light italic text-ink md:text-3xl"
          >
            every bottle carries a serial number. every serial number carries a
            life.
          </motion.blockquote>
        </div>
      </section>
      <section className="border-b border-dust">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-jost text-base font-light leading-[1.8] text-ink"
          >
            today the archive grows. each identity added. each story held. we
            believe in permanence. in records. in the quiet work of carrying
            what matters.
          </motion.p>
        </div>
      </section>
      <section className="border-b border-dust py-16">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-12 font-courier text-[10px] uppercase tracking-label text-ash">
            timeline
          </p>
          <div className="relative">
            <div className="absolute left-[5px] top-0 h-full w-px bg-dust" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative mb-12 pl-12 last:mb-0"
              >
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-thread" />
                <p className="font-courier text-[10px] uppercase tracking-label text-ash">
                  {item.year}
                </p>
                <p className="mt-2 font-jost text-base font-light leading-[1.8] text-ink">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
