"use client";

import { motion } from "framer-motion";
import { techFeatures } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";

function parseStat(stat: string) {
  const match = stat.match(/-?\d+(\.\d+)?/);
  const num = match ? parseFloat(match[0]) : null;
  if (num === null) return { num: null, prefix: "", suffix: stat };
  const idx = stat.indexOf(match![0]);
  return {
    num,
    prefix: stat.slice(0, idx),
    suffix: stat.slice(idx + match![0].length),
    decimals: match![0].includes(".") ? 1 : 0,
  };
}

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-accent-radial opacity-40" />
      <div className="container-edge relative">
        <SectionHeading
          eyebrow="Technology // Built for India"
          title="Technology Built For Indian Conditions"
          description="Every protection system we use is engineered for the realities of Indian roads and weather — harsh sun, monsoon, dust and hard water."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {techFeatures.map((f) => {
            const { num, prefix, suffix, decimals } = parseStat(f.stat);
            return (
              <motion.div
                key={f.id}
                variants={fadeUp}
                className="panel group relative overflow-hidden p-6"
              >
                {/* animated diagram: orbiting node */}
                <div className="relative mb-6 h-24 w-24">
                  <div className="absolute inset-0 rounded-full border border-accent/20" />
                  <div className="absolute inset-3 rounded-full border border-highlight/15" />
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                  <motion.div
                    className="absolute inset-0"
                    whileInView={{ rotate: 360 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-3"
                    whileInView={{ rotate: -360 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-highlight" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  {num !== null ? (
                    <AnimatedCounter
                      value={num}
                      decimals={decimals}
                      prefix={prefix}
                      suffix={suffix}
                      className="font-mono text-3xl font-bold text-accent"
                    />
                  ) : (
                    <span className="font-mono text-3xl font-bold text-accent">{f.stat}</span>
                  )}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {f.statLabel}
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
