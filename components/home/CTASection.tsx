"use client";

import { motion } from "framer-motion";
import AnimatedLink from "@/components/ui/AnimatedLink";

export default function CTASection() {
  return (
    <section className="border-t border-dust bg-cream py-32 md:py-48">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center"
      >
        <h2 className="font-cormorant text-4xl font-light text-ink md:text-5xl">
          ready to be archived?
        </h2>
        <div className="flex flex-col gap-6">
          <AnimatedLink
            href="/discover"
            className="font-jost text-base font-light text-ink"
          >
            begin your identity →
          </AnimatedLink>
          <AnimatedLink
            href="/atelier"
            className="font-jost text-base font-light text-ink"
          >
            visit the atelier →
          </AnimatedLink>
        </div>
      </motion.div>
    </section>
  );
}
