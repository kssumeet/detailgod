"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Layers } from "lucide-react";
import { protectionLayers } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { HudFrame } from "@/components/ui/hud-frame";
import type { ProtectionLayer } from "@/types";
import { cn } from "@/lib/utils";

type LayerId = ProtectionLayer["id"];

const baseLayer = { label: "Vehicle Paint", color: "#6b7280", thickness: "—" };

export function ProtectionVisualizer() {
  const [active, setActive] = useState<Record<LayerId, boolean>>({
    ppf: true,
    ceramic: true,
    graphene: false,
  });

  const toggle = (id: LayerId) => setActive((p) => ({ ...p, [id]: !p[id] }));

  const visibleLayers = protectionLayers.filter((l) => active[l.id]);
  const stack = [baseLayer, ...visibleLayers];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Visualizer // Layer Stack"
          title="3D Protection Visualizer"
          description="See exactly what protects your paint. Toggle each engineered layer and watch the protection stack build in real time."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* 3D stack */}
          <div
            className="panel relative flex min-h-[380px] items-center justify-center overflow-hidden p-8"
            style={{ perspective: "1200px" }}
          >
            <HudFrame />
            <div className="absolute inset-0 grid-overlay opacity-30" />

            <div
              className="relative w-64"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg) rotateZ(-32deg)" }}
            >
              <AnimatePresence mode="popLayout">
                {stack.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    layout
                    initial={{ opacity: 0, z: 60, y: -40 }}
                    animate={{ opacity: 1, z: i * 26, y: -i * 26 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    className="absolute left-0 top-1/2 h-36 w-64 rounded-lg border"
                    style={{
                      borderColor: `${layer.color}66`,
                      background: `linear-gradient(135deg, ${layer.color}26, ${layer.color}05)`,
                      boxShadow: `0 0 30px -6px ${layer.color}66`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex h-full flex-col justify-between p-3" style={{ transform: "translateZ(1px)" }}>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">
                        {layer.label}
                      </span>
                      <span className="self-end font-mono text-[9px]" style={{ color: layer.color }}>
                        {layer.thickness}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Layers className="h-3.5 w-3.5 text-accent" /> {stack.length} active layers
            </div>
          </div>

          {/* Controls + benefits */}
          <div>
            <div className="flex flex-wrap gap-2">
              {protectionLayers.map((l) => (
                <button
                  key={l.id}
                  onClick={() => toggle(l.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-all",
                    active[l.id]
                      ? "border-transparent text-background"
                      : "border-white/15 text-muted hover:text-white"
                  )}
                  style={active[l.id] ? { background: l.color, boxShadow: `0 0 24px -6px ${l.color}` } : {}}
                >
                  {l.id.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <AnimatePresence initial={false}>
                {visibleLayers.map((l) => (
                  <motion.div
                    key={l.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="panel p-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-lg font-bold text-white">{l.label}</h4>
                        <span className="font-mono text-xs" style={{ color: l.color }}>
                          {l.hardness} · {l.thickness}
                        </span>
                      </div>
                      <ul className="mt-3 grid grid-cols-2 gap-2">
                        {l.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-xs text-muted">
                            <Check className="h-3.5 w-3.5 shrink-0" style={{ color: l.color }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {visibleLayers.length === 0 && (
                <p className="panel p-6 text-center text-sm text-muted">
                  Toggle a layer to visualize its protection.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
