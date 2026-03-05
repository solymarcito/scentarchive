"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { products, BOTTLE_SIZES } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const primarySize = BOTTLE_SIZES[1];

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
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-warm-white p-8">
              <Image
                src={primarySize.imagePath}
                alt={`${product.name} — ${primarySize.label}`}
                width={600}
                height={800}
                className="archive-image h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 font-courier text-[10px] uppercase tracking-label text-ash">
              each label carries a QR code. your formula is remembered.
            </p>
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
            <div className="mt-8 space-y-2">
              {BOTTLE_SIZES.map((s) => (
                <p key={s.oz} className="font-jost text-lg font-light text-ink">
                  {s.oz} oz · ${s.price}
                </p>
              ))}
            </div>
            <p className="mt-2 font-jost text-sm font-light text-ash">
              smaller sizes lower the entry barrier.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="#"
                className="font-courier text-xs uppercase tracking-nav text-ink transition-all duration-500 hover:text-ash"
              >
                order a 1–3ml trial sample
              </Link>
              <Link
                href="#"
                className="font-courier text-xs uppercase tracking-nav text-ink transition-all duration-500 hover:text-ash"
              >
                order full size
              </Link>
              <Link
                href="#"
                className="font-courier text-xs uppercase tracking-nav text-ash transition-all duration-500 hover:text-ink"
              >
                refill & return — bring your bottle back for a discount
              </Link>
            </div>
            <Link
              href="/collection"
              className="mt-10 block font-jost text-sm font-light text-ash hover:text-ink"
            >
              ← return to the archive
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
