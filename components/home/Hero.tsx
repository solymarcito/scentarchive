"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimatedLink from "@/components/ui/AnimatedLink";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-cream px-6 pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-courier text-[10px] uppercase tracking-label text-ash"
        >
          IDENTITY ARCHIVE · EST. 2025
        </motion.p>
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 font-cormorant text-5xl font-light italic tracking-display text-ink md:text-7xl lg:text-8xl"
        >
          your scent has always existed.
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 font-jost text-base font-light text-ash md:text-lg"
        >
          it was simply waiting to be named.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12"
        >
          <AnimatedLink
            href="/discover"
            className="font-jost text-sm font-light text-ink"
          >
            discover your archive →
          </AnimatedLink>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px border-t border-dust" />
    </section>
  );
}
