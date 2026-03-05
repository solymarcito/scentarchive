"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/collection/ProductCard";
import FilterBar from "@/components/collection/FilterBar";

export default function CollectionPage() {
  const [filter, setFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center font-cormorant text-4xl font-light text-ink md:text-5xl"
        >
          the archive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-center font-courier text-[10px] uppercase tracking-label text-ash"
        >
          Your State. Your Scent.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-2 text-center font-courier text-[10px] uppercase tracking-label text-ash/80"
        >
          CURATED IDENTITY EDITIONS
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16"
        >
          <FilterBar active={filter} onChange={setFilter} />
          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProducts.map((product, i) => (
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
                <ProductCard product={product} imageIndex={i} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
