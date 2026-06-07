"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "01",
    title: "Compromised Surface",
    label: "DAMAGE DETECTED",
    description: "Swirl marks from roadside washing, hard-water spots from borewell water, sun-faded clear coat, bird-dropping etching and embedded road tar dull your paint and kill the shine.",
    color: "#FFD600",
    filter: "saturate(0.6) brightness(0.7) contrast(0.9)",
    flaws: true,
  },
  {
    id: "02",
    title: "Paint Correction",
    label: "RESURFACING",
    description: "Multi-stage machine polishing removes swirls, scratches and water spots, restoring true clarity and depth to the clear coat.",
    color: "#00D4FF",
    filter: "saturate(0.9) brightness(0.9)",
    flaws: false,
  },
  {
    id: "03",
    title: "Ceramic Application",
    label: "NANO BONDING",
    description: "A SiO₂ nano-ceramic lattice bonds to the surface, sealing the finish in a protective glass layer.",
    color: "#4FFFB0",
    filter: "saturate(1.1) brightness(1.05)",
    flaws: false,
  },
  {
    id: "04",
    title: "Protected Perfection",
    label: "SHOWROOM READY",
    description: "Liquid-deep gloss and hydrophobic protection built for Indian sun, dust and monsoon — a finish engineered to last for years.",
    color: "#FFFFFF",
    filter: "saturate(1.25) brightness(1.15) contrast(1.05)",
    flaws: false,
  },
];

export function Storytelling() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !wrapRef.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: `+=${stages.length * 80}%`,
        pin: trackRef.current,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(stages.length - 1, Math.floor(self.progress * stages.length));
          setActive(idx);
        },
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [reduced]);

  const stage = stages[active];

  return (
    <section ref={wrapRef} className="relative bg-card/30">
      <div ref={trackRef} className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
        <div
          className="pointer-events-none absolute inset-0 transition-colors duration-700"
          style={{ background: `radial-gradient(circle at 50% 50%, ${stage.color}14 0%, transparent 60%)` }}
        />

        <div className="container-edge relative grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative order-2 flex items-center justify-center lg:order-1">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background">
              <div
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(135deg, #0a0e18 0%, ${stage.color}22 50%, #05070d 100%)`,
                  filter: stage.filter,
                }}
              />
              {/* car silhouette */}
              <svg viewBox="0 0 320 130" className="absolute inset-0 m-auto w-4/5" style={{ color: stage.color }}>
                <path
                  d="M20 92 L54 92 C62 60 84 46 128 46 L196 46 C236 46 262 60 288 80 L304 86 C310 88 310 96 304 96 L286 96 M60 92 L262 92"
                  fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                />
                <circle cx="88" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="246" cy="96" r="15" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>

              {/* flaws overlay on stage 1 */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: stage.flaws ? 0.5 : 0 }}
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute h-px bg-white/40"
                    style={{
                      left: `${(i * 37) % 90 + 4}%`,
                      top: `${(i * 53) % 80 + 8}%`,
                      width: `${10 + ((i * 13) % 26)}px`,
                      transform: `rotate(${(i * 41) % 90 - 45}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* gloss sweep on final stage */}
              {active === 3 && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-y-2 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2.4s_ease-in-out_infinite]" />
                </div>
              )}

              <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: stage.color }}>
                ● {stage.label}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="eyebrow mb-4">Transformation Sequence</div>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-5xl font-bold text-white/10">{stage.id}</span>
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {stage.title}
              </h3>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{stage.description}</p>

            <div className="mt-8 flex gap-2">
              {stages.map((s, i) => (
                <div key={s.id} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={cn("h-full rounded-full transition-all duration-500", i <= active ? "w-full" : "w-0")}
                    style={{ background: stage.color }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Stage {active + 1} / {stages.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
