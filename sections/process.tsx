"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Workflow // 06 Phases"
          title="Protection Protocol"
          description="A disciplined, repeatable process. No shortcuts — every vehicle moves through the same six validated phases."
        />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* center line (desktop) / left line (mobile) */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent via-highlight to-accent"
            />
          </div>

          <div className="space-y-10 md:space-y-0">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  {/* node */}
                  <span className="absolute left-[-29px] top-1.5 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                    <span className="absolute h-4 w-4 animate-pulse-ring rounded-full border border-accent/50" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`panel p-6 md:my-6 ${left ? "md:text-right" : "md:col-start-2"}`}
                  >
                    <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {step.step}
                      </span>
                      <span className="font-mono text-[10px] text-muted">· {step.duration}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
