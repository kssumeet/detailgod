"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { missionLogs } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { HudFrame } from "@/components/ui/hud-frame";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Verified Results // Field Logs"
          title="Client Success Logs"
          description="Every project is logged, validated and signed off. These are real missions from our protection archive."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inViewOnce}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {missionLogs.map((log) => (
            <motion.article
              key={log.missionId}
              variants={fadeUp}
              className="panel relative overflow-hidden p-5"
            >
              <HudFrame />

              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  MISSION ID <span className="text-white">{log.missionId}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-highlight">
                  <CheckCircle2 className="h-3 w-3" /> {log.status}
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">Vehicle</dt>
                  <dd className="font-display text-sm font-bold text-white">{log.vehicle}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">Treatment</dt>
                  <dd className="font-display text-sm font-bold text-accent">{log.treatment}</dd>
                </div>
              </dl>

              <div className="relative mt-4 rounded-lg border border-border bg-background/40 p-3">
                <Quote className="absolute right-2 top-2 h-4 w-4 text-white/10" />
                <p className="text-sm leading-relaxed text-muted">“{log.note}”</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {log.client} · {log.city}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: log.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
