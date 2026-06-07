"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { pricingPrograms } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";
import { cn } from "@/lib/utils";

const accentMap = {
  accent: "#00D4FF",
  highlight: "#4FFFB0",
  warning: "#FFD600",
} as const;

export function Pricing() {
  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Pricing // Protection Programs"
          title="Protection Programs"
          align="center"
          description="Transparent packages for every kind of car owner in Patna. Genuine branded products, manufacturer warranty card, GST invoice and EMI options on every plan."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {pricingPrograms.map((p) => {
            const color = accentMap[p.accent];
            return (
              <motion.div
                key={p.id}
                variants={fadeUp}
                className={cn(
                  "panel relative flex flex-col overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-1.5",
                  p.featured && "ring-1 ring-highlight/40"
                )}
              >
                {p.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-highlight px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-background">
                    Most Popular
                  </span>
                )}
                <div
                  className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
                  style={{ background: color }}
                />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{p.index}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-xs text-muted">{p.subtitle}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-mono text-[10px] text-muted">from</span>
                  <span className="font-mono text-2xl font-bold" style={{ color }}>
                    {p.priceFrom}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Turnaround · {p.duration}
                </span>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={p.featured ? "green" : "outline"}
                  className="mt-6 w-full"
                >
                  <a href={whatsappLink(`I'm interested in the ${p.name} program.`)}>
                    Select Program <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
