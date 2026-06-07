"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Droplets, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HudFrame } from "@/components/ui/hud-frame";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";

const metrics = [
  { icon: ShieldCheck, label: "Paint Integrity", value: 98.4, suffix: "%", color: "text-accent" },
  { icon: Gauge, label: "Protection Level", value: 96, suffix: "%", color: "text-highlight" },
  { icon: Sparkles, label: "Gloss Score", value: 94.7, suffix: "/100", color: "text-warning" },
  { icon: Activity, label: "Surface Clarity", value: 99.1, suffix: "%", color: "text-accent" },
  { icon: Droplets, label: "Hydrophobic Rating", value: 112, suffix: "°", color: "text-highlight" },
];

export function Scanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scanY = useTransform(scrollYProgress, [0.1, 0.6], ["8%", "92%"]);
  const scanOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.6, 0.7], [0, 1, 1, 0]);

  return (
    <section id="scanner" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Diagnostics // Surface Intelligence"
          title="Digital Vehicle Scanner"
          description="Every vehicle begins with a full-surface scan. Our diagnostic system maps paint condition the way a Tesla reads its own systems — in real time, down to the micron."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Scan stage */}
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="panel relative flex min-h-[360px] items-center justify-center overflow-hidden p-8 md:min-h-[440px]"
          >
            <HudFrame />
            <div className="absolute inset-0 grid-overlay opacity-50" />

            {/* Laser scan */}
            <motion.div
              style={{ top: scanY, opacity: scanOpacity }}
              className="absolute inset-x-0 z-10"
            >
              <div className="h-px w-full bg-accent" style={{ boxShadow: "0 0 24px 3px rgba(0,212,255,0.7)" }} />
              <div className="h-20 w-full bg-gradient-to-b from-accent/25 to-transparent" />
            </motion.div>

            {/* Vehicle wireframe */}
            <svg viewBox="0 0 320 130" className="relative z-[5] w-full max-w-md text-accent/70">
              <path
                d="M20 92 L54 92 C62 60 84 46 128 46 L196 46 C236 46 262 60 288 80 L304 86 C310 88 310 96 304 96 L286 96 M60 92 L262 92"
                fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
              />
              <path d="M96 46 L110 70 L210 70 L196 46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              <circle cx="88" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="246" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.4" />
              {[60, 130, 200, 270].map((x, i) => (
                <motion.circle
                  key={x} cx={x} cy={64} r="2" fill="currentColor"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </svg>

            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="text-highlight">●</span> SCAN ACTIVE · 1064nm
            </div>
            <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              UNIT — DG/SCAN/01
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inViewOnce}
            className="flex flex-col gap-3"
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="panel group relative flex items-center gap-4 overflow-hidden p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">
                  <m.icon className={`h-5 w-5 ${m.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {m.label}
                  </div>
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-highlight"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, m.value)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
                <AnimatedCounter
                  value={m.value}
                  decimals={m.value % 1 !== 0 ? 1 : 0}
                  suffix={m.suffix}
                  className={`shrink-0 font-mono text-lg font-bold ${m.color}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
