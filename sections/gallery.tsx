"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems, galleryCategories } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types";

const spanClass: Record<GalleryItem["span"], string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Portfolio // Field Results"
          title="Vehicle Gallery"
          description="A selection of vehicles preserved by Detail God India — from daily luxury to concours showpieces."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all",
                filter === c
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-muted hover:border-white/30 hover:text-white"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActive(item)}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border bg-card",
                  spanClass[item.span]
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                    {item.category}
                  </div>
                  <div className="font-display text-sm font-bold text-white">{item.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/90 p-6 backdrop-blur-xl"
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-2xl border border-border"
            >
              <Image src={active.src} alt={active.title} fill sizes="90vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {active.category}
                </div>
                <div className="font-display text-2xl font-bold text-white">{active.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
