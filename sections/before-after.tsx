"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { HudFrame } from "@/components/ui/hud-frame";
import { clamp } from "@/lib/utils";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // % revealed (after = left of handle)
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100, 2, 98));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  // After-side intensity scales with reveal.
  const t = pos / 100;

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Live Transformation"
          title="Before / After Experience"
          align="center"
          description="Drag across the surface. Watch oxidation lift, scratches vanish and gloss deepen in real time — exactly as it happens in our studio."
        />

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-border"
        >
          <HudFrame />

          {/* BEFORE base layer */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #15171c, #24262b 60%, #0c0d10)", filter: "saturate(0.5) brightness(0.7)" }}>
            <CarArt color="#9aa0aa" />
            {/* scratches */}
            <div className="absolute inset-0 opacity-60">
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute h-px bg-white/40"
                  style={{
                    left: `${(i * 29) % 92 + 3}%`,
                    top: `${(i * 47) % 86 + 6}%`,
                    width: `${8 + ((i * 11) % 22)}px`,
                    transform: `rotate(${(i * 37) % 120 - 60}deg)`,
                  }}
                />
              ))}
            </div>
            <Badge className="left-4" label="BEFORE" tone="text-warning" />
          </div>

          {/* AFTER overlay, clipped by handle */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0a0e18, #16314a 55%, #05070d)",
                filter: `saturate(${1 + t * 0.5}) brightness(${1 + t * 0.25}) contrast(${1 + t * 0.1})`,
              }}
            >
              <CarArt color="#00D4FF" />
              {/* gloss sweep */}
              <div className="absolute -inset-y-2 left-1/4 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
            </div>
            <Badge className="right-4" label="AFTER" tone="text-accent" align="right" />
          </div>

          {/* Handle */}
          <div className="absolute inset-y-0 z-20" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-accent" style={{ boxShadow: "0 0 20px rgba(0,212,255,0.7)" }} />
            <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/70 bg-background/80 backdrop-blur">
              <MoveHorizontal className="h-5 w-5 text-accent" />
            </div>
          </div>

          {/* live gloss meter */}
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted backdrop-blur">
            Gloss <span className="text-accent">{Math.round(40 + t * 58)}</span> / 100
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({
  label,
  tone,
  className,
  align = "left",
}: {
  label: string;
  tone: string;
  className?: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`absolute top-4 ${className} flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] ${tone} ${
        align === "right" ? "flex-row-reverse" : ""
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </div>
  );
}

function CarArt({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 320 130" className="absolute inset-0 m-auto w-3/4" style={{ color }}>
      <path
        d="M20 92 L54 92 C62 60 84 46 128 46 L196 46 C236 46 262 60 288 80 L304 86 C310 88 310 96 304 96 L286 96 M60 92 L262 92"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
      <circle cx="88" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="246" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
