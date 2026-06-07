"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="FAQ // Common Questions"
          title="Frequently Asked Questions"
          description="Everything car owners in Patna ask us about PPF, ceramic coating, pricing and care. Still unsure? WhatsApp us — we reply in Hindi or English."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mx-auto mt-12 max-w-3xl space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={faq.q} variants={fadeUp} className="panel overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-base font-bold text-white sm:text-lg">{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300",
                      isOpen ? "rotate-45 border-accent/60 text-accent" : "text-muted"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
