"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { getEtatDiscoverStorage } from "@/components/discover/DiscoverChat";

export default function OrderPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [etatData, setEtatData] = useState<{
    archiveId: string;
    notes: string[];
    identityStatement: string;
    narrative: string;
  } | null>(null);

  useEffect(() => {
    setEtatData(getEtatDiscoverStorage());
  }, []);

  const product = selectedId ? products.find((p) => p.id === selectedId) : null;

  return (
    <div className="min-h-screen bg-cream pt-24 pb-32">
      <div className="mx-auto max-w-2xl px-6 py-16">
        {etatData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 border-b border-dust pb-8"
          >
            <p className="font-courier text-[10px] uppercase tracking-label text-ash">
              YOUR ARCHIVE ID · {etatData.archiveId}
            </p>
            <p className="mt-3 font-cormorant text-xl font-light italic text-gold-thread">
              {etatData.notes.join(" · ")}
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 font-courier text-[10px] uppercase tracking-label text-ash"
        >
          choose your vessel
        </motion.p>
        <div className="space-y-4">
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedId(selectedId === p.id ? null : p.id)}
              className={`block w-full text-left font-cormorant text-2xl font-light italic text-ink transition-colors md:text-3xl ${
                selectedId === p.id
                  ? "border-b-2 border-gold-thread pb-1"
                  : "border-b border-dust/50 pb-1 hover:text-ash"
              }`}
            >
              {p.size} · {p.price} · &quot;{p.subtitle}&quot;
            </button>
          ))}
        </div>

        {product && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 border-t border-dust pt-12"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[140px_1fr]">
              <div className="relative aspect-[3/4] max-h-[200px] overflow-hidden bg-warm-white p-4 sm:max-h-none">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.size}`}
                  width={280}
                  height={373}
                  className="archive-image h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-courier text-[10px] uppercase tracking-label text-ash">
                  {product.edition}
                </p>
                <h2 className="mt-2 font-cormorant text-2xl font-light italic text-ink">
                  {product.name}
                </h2>
                <p className="mt-1 font-cormorant text-lg font-light italic text-ash">
                  {product.subtitle}
                </p>
                <p className="mt-4 font-jost text-base font-light text-ink">
                  {product.size} · {product.price}
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="#"
                    className="block font-courier text-xs uppercase tracking-nav text-ink transition-all duration-500 hover:text-ash"
                  >
                    order a trial sample · 1–3ml →
                  </Link>
                  <Link
                    href="#"
                    className="block font-courier text-xs uppercase tracking-nav text-ink transition-all duration-500 hover:text-ash"
                  >
                    order this size →
                  </Link>
                  <Link
                    href="/atelier"
                    className="block font-courier text-xs uppercase tracking-nav text-ash transition-all duration-500 hover:text-ink"
                  >
                    visit the atelier →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <Link
          href="/collection"
          className="mt-12 block font-jost text-sm font-light text-ash hover:text-ink"
          scroll={false}
        >
          ← return to the archive
        </Link>
      </div>
    </div>
  );
}
