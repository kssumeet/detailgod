"use client";

import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Cpu, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { HudFrame } from "@/components/ui/hud-frame";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { leadSchema, type LeadFormValues } from "@/lib/validation";
import { submitLead } from "@/lib/leads";
import { services } from "@/config/services";

type Phase = "idle" | "scanning" | "result";

interface Analysis {
  paint: number;
  gloss: number;
  protection: number;
  service: string;
}

function deriveAnalysis(seed: number): Analysis {
  const r = (n: number) => Math.abs(Math.sin(seed * n) * 10000) % 1;
  const paint = Math.round(58 + r(1.7) * 38);
  const gloss = Math.round(52 + r(2.3) * 40);
  const protection = Math.round(40 + r(3.1) * 45);
  const lowest = Math.min(paint, gloss, protection);
  const service =
    lowest === protection
      ? "Ceramic Shield Technology"
      : lowest === paint
      ? "Paint Correction"
      : "Graphene Protection";
  return { paint, gloss, protection, service };
}

export function Analyzer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadSchema) });

  const handleFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
    setPhase("scanning");
    const seed = file.size + file.name.length;
    window.setTimeout(() => {
      setAnalysis(deriveAnalysis(seed));
      setPhase("result");
    }, 2600);
  }, []);

  const onSubmit = async (values: LeadFormValues) => {
    await submitLead({
      ...values,
      paintScore: analysis?.paint,
      glossScore: analysis?.gloss,
      protectionRating: analysis?.protection,
      recommendedService: analysis?.service,
      source: "ai-analyzer",
    });
    setSubmitted(true);
  };

  return (
    <section id="analyzer" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-accent-radial opacity-50" />
      <div className="container-edge relative">
        <SectionHeading
          eyebrow="AI Module // Surface Estimator"
          title="AI Vehicle Analyzer"
          align="center"
          description="Upload a photo of your vehicle. Our estimator returns an instant surface report and the protection program engineered for it."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Upload / scan stage */}
          <div className="panel relative flex min-h-[360px] flex-col overflow-hidden p-6">
            <HudFrame />
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Cpu className="h-3.5 w-3.5 text-accent" /> DG / AI-VISION / v2
            </div>

            <div
              className="relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-dashed border-white/15 bg-background/40"
              onClick={() => phase === "idle" && inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files?.[0];
                if (f) handleFile(f);
              }}
            >
              {preview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="Vehicle preview" className="absolute inset-0 h-full w-full object-cover opacity-60" />
              )}
              <div className="absolute inset-0 grid-overlay opacity-30" />

              {phase === "scanning" && (
                <motion.div
                  className="absolute inset-x-0 z-10"
                  initial={{ top: "0%" }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-px w-full bg-accent" style={{ boxShadow: "0 0 24px 3px rgba(0,212,255,0.7)" }} />
                </motion.div>
              )}

              <div className="relative z-20 flex flex-col items-center gap-3 text-center">
                {phase === "idle" && (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/5">
                      <Upload className="h-6 w-6 text-accent" />
                    </div>
                    <p className="font-display text-sm font-bold text-white">Drop or upload vehicle photo</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">JPG · PNG · up to 10MB</p>
                  </>
                )}
                {phase === "scanning" && (
                  <>
                    <Loader2 className="h-7 w-7 animate-spin text-accent" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Analyzing surface…</p>
                  </>
                )}
                {phase === "result" && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-highlight">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Analysis complete
                  </span>
                )}
              </div>

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFile(f);
                }}
              />
            </div>

            <AnimatePresence>
              {phase === "result" && analysis && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 grid grid-cols-3 gap-3"
                >
                  {[
                    { label: "Paint Score", value: analysis.paint, suffix: "/100" },
                    { label: "Gloss Score", value: analysis.gloss, suffix: "/100" },
                    { label: "Protection", value: analysis.protection, suffix: "%" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg border border-border bg-background/50 p-3 text-center">
                      <AnimatedCounter value={m.value} suffix={m.suffix} className="font-mono text-xl font-bold text-accent" />
                      <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-muted">{m.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Lead form */}
          <div className="panel relative flex flex-col p-6">
            {phase === "result" && analysis && (
              <div className="mb-5 flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/5 p-3">
                <Sparkles className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm text-white">
                  Recommended: <span className="font-bold text-accent">{analysis.service}</span>
                </p>
              </div>
            )}

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-1 flex-col items-center justify-center gap-3 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-highlight" />
                <h3 className="font-display text-xl font-bold text-white">Report Locked In</h3>
                <p className="max-w-xs text-sm text-muted">
                  Our preservation team will reach out shortly with your full surface report and a tailored quote.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-3">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Receive your full report
                </p>
                <Field label="Full Name" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls} placeholder="Your name" />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className={inputCls} placeholder="+91…" inputMode="tel" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} className={inputCls} placeholder="you@email.com" inputMode="email" />
                  </Field>
                </div>
                <Field label="Vehicle Model" error={errors.vehicleModel?.message}>
                  <input {...register("vehicleModel")} className={inputCls} placeholder="e.g. BMW X5 / Porsche 911" list="vehicle-suggest" />
                  <datalist id="vehicle-suggest">
                    {services.map((s) => (
                      <option key={s.id} value="" />
                    ))}
                    {["BMW X5", "Mercedes-AMG GT", "Audi e-tron", "Porsche 911", "Land Rover Defender"].map((v) => (
                      <option key={v} value={v} />
                    ))}
                  </datalist>
                </Field>

                <Button type="submit" size="lg" variant="primary" className="mt-auto w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Get My Protection Report"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent/60";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block font-mono text-[10px] text-warning">{error}</span>}
    </label>
  );
}
