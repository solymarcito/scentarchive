"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/collection/${product.id}`} className="group block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="archive-image object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="mt-4">
          <p className="font-courier text-[10px] uppercase tracking-label text-ash">
            EDITION {product.edition.padStart(3, "0")}
          </p>
          <p className="mt-1 font-cormorant text-lg font-light italic text-ink group-hover:border-b group-hover:border-gold-thread">
            {product.name}
          </p>
          <p className="mt-1 font-jost text-sm font-light text-ash">
            ${product.price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
