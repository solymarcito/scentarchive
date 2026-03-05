"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/collection/ProductCard";

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center font-courier text-[10px] uppercase tracking-label text-ash"
        >
          YOUR SCENT IS GENERATED IN THE ARCHIVE
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-center font-jost text-base font-light leading-[1.8] text-ink md:text-lg"
        >
          these are the vessels. the formula is yours alone.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 text-center"
        >
          <Link
            href="/discover"
            scroll={false}
            className="font-jost text-base font-light text-ink underline decoration-dust underline-offset-2 transition-all duration-500 hover:text-ash hover:decoration-ink"
          >
            don&apos;t have your formula yet? begin here →
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
