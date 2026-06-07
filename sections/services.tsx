"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";
import { cn } from "@/lib/utils";

const accentMap = {
  accent: "text-accent",
  highlight: "text-highlight",
  warning: "text-warning",
} as const;

export function Services() {
  return (
    <section id="modules" className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Capabilities // 06 Systems"
          title="Automotive Enhancement Modules"
          description="Each service is engineered as a discrete protection module — deployed individually or stacked into a complete preservation system."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={fadeUp}
              className="glow-ring panel group relative overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "rgba(0,212,255,0.18)" }}
              />

              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {s.index}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <div className={cn("mt-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]", accentMap[s.accent])}>
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className={cn("mt-1 font-mono text-[11px] uppercase tracking-[0.15em]", accentMap[s.accent])}>
                {s.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>

              <div className="mt-6 flex gap-6 border-t border-border pt-4">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-base font-bold text-white">{m.value}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
