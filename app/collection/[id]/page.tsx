"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 pt-24">
        <p className="font-jost text-ink">identity not found.</p>
        <Link href="/collection" className="mt-4 font-jost text-sm text-ash hover:text-ink">
          return to the archive →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 gap-16 md:grid-cols-2"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="archive-image object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-courier text-[10px] uppercase tracking-label text-ash">
              EDITION {product.edition.padStart(3, "0")}
            </p>
            <h1 className="mt-4 font-cormorant text-4xl font-light italic text-ink">
              {product.name}
            </h1>
            <p className="mt-6 font-jost text-base font-light leading-[1.8] text-ink">
              a curated identity. notes held in amber glass. your story, captured.
            </p>
            <p className="mt-8 font-jost text-2xl font-light text-ink">
              ${product.price}
            </p>
            <button
              onClick={() => {}}
              className="mt-8 border border-ink px-8 py-3 font-jost text-sm font-light text-ink transition-all duration-500 hover:bg-ink hover:text-cream"
            >
              add to archive
            </button>
            <Link
              href="/collection"
              className="mt-8 block font-jost text-sm font-light text-ash hover:text-ink"
            >
              ← return to the archive
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
