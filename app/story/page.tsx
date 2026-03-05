"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Phase 1",
    text: "pilot stores · Europe, North America, Japan, South Korea",
  },
  {
    year: "Phase 2",
    text: "Tier-1 city expansion · guided by pilot data",
  },
  {
    year: "Phase 3",
    text: "regional rollout · e-commerce · community events",
  },
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
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            built for those who already seek meaning in scent. and those who will.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 font-jost text-base font-light leading-[1.8] text-ash"
          >
            the system listens. it does not quiz. it converses.
          </motion.p>
        </div>
      </section>
      <section className="border-b border-dust">
        <div className="flex items-end justify-center gap-8 overflow-hidden bg-cream px-6 py-12 md:gap-12 md:py-16">
          <div className="relative h-[200px] w-[80px] shrink-0 md:h-[280px] md:w-[110px]">
            <Image
              src="/images/bottle-small.png"
              alt="your état — 0.34 oz · the introduction"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative h-[240px] w-[100px] shrink-0 md:h-[320px] md:w-[130px]">
            <Image
              src="/images/bottle-medium.png"
              alt="your état — 1 oz · the archive"
              fill
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative h-[280px] w-[120px] shrink-0 md:h-[360px] md:w-[150px]">
            <Image
              src="/images/bottle-large.png"
              alt="your état — 2.5 oz · the permanence"
              fill
              className="object-contain object-bottom"
            />
          </div>
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
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 font-cormorant text-xl font-light italic text-ink"
          >
            or give it to someone you love. an identity, held in a bottle.
          </motion.p>
        </div>
      </section>
      <section className="border-b border-dust py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            <p>each bottle is engraved with a serial number. the label carries a QR code that holds your formula. the design is refillable.</p>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 border-l-2 border-gold-thread pl-8 font-cormorant text-2xl font-light italic text-ink md:text-3xl"
          >
            every bottle carries a serial number. every serial number carries a
            life.
          </motion.blockquote>
        </div>
      </section>
      <section className="border-b border-dust">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            <p>
              today the archive grows. each identity added. each story held. we
              believe in permanence. in records. in the quiet work of carrying
              what matters.
            </p>
            <p className="text-ash">
              as the archive grows, so does our understanding of what people carry. trends emerge. new formulas follow. the system learns.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="border-b border-dust py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 font-courier text-[10px] uppercase tracking-label text-ash">
            how we work
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            <p>
              a trial size exists so you can live with the formula before committing. three sizes lower the entry barrier — begin at a level that fits your life. the AI produces only what is needed, reducing waste.
            </p>
            <p>
              bring your bottle back — refill and return for a discount. the conversation is not limited by language; the AI speaks yours. no judgment, no bias. you describe. we listen. we map.
            </p>
          </motion.div>
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
      <section className="border-b border-dust py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 font-courier text-[10px] uppercase tracking-label text-ash">
            what grows next
          </p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-jost text-base font-light leading-[1.8] text-ink"
          >
            the archive does not close. identity competitions. scent gatherings. member-exclusive re-drops. a community built around the quiet act of knowing yourself.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
