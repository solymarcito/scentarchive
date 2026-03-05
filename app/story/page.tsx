"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "Phase 1",
    text: "pilot stores in Europe, North America, Japan, South Korea.",
  },
  {
    year: "Phase 2",
    text: "expand to additional Tier-1 cities based on pilot data.",
  },
  {
    year: "Phase 3",
    text: "broader regional rollout and e-commerce.",
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
        </div>
      </section>
      <section className="border-b border-dust">
        <div className="relative aspect-[21/9] w-full md:aspect-video">
          <Image
            src="/images/bottle-medium.png"
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
      <section className="border-b border-dust py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 font-courier text-[10px] uppercase tracking-label text-ash">
            sustainability
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            <p>
              we do not ask you to buy more than you need. personalized shopping
              habits — the way you actually wear scent — guide what we offer. AI
              precision narrows the gap between desire and purchase, so we
              produce and recommend with less waste.
            </p>
            <p>
              try before you commit. a trial size exists so you can live with a
              formula before ordering full size. three bottle sizes — 0.34 oz,
              1 oz, 2.5 oz — let you match the vessel to your life, not the other
              way around.
            </p>
            <blockquote className="border-l-2 border-gold-thread pl-6 font-cormorant text-xl font-light italic text-ink">
              bring your bottle back. refill and return for a discount. the
              same identity, the same formula, less in the world.
            </blockquote>
            <p>
              sustainability here is not a badge. it is how we structure the
              journey: less guessing, fewer wrong bottles, and a path to refill
              instead of replace.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="border-b border-dust py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 font-courier text-[10px] uppercase tracking-label text-ash">
            inclusivity
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6 font-jost text-base font-light leading-[1.8] text-ink"
          >
            <p>
              the AI speaks your language. multilingual support means the
              conversation that uncovers your scent is not limited by geography
              or tongue. your state, your words.
            </p>
            <p>
              multiple price points exist by design. three bottle sizes — 0.34 oz,
              1 oz, 2.5 oz — mean you can enter at a level that fits your life.
              no single gate. no single definition of who gets to have an
              identity in the archive.
            </p>
            <p>
              identity inclusivity is non-negotiable. the system does not
              judge, does not assume, does not bias the recommendation toward
              any one idea of who you are. you describe. we listen. we map. the
              result is yours.
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
    </div>
  );
}
