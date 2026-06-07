"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ScanLine, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { siteConfig, whatsappLink } from "@/config/site";
import { fadeUp, blurReveal, stagger } from "@/animations/variants";

const HeroScene = dynamic(() => import("@/three/hero-scene"), {
  ssr: false,
  loading: () => null,
});

const stats = [
  { value: "9H+", label: "Coating Hardness" },
  { value: "10 yr", label: "PPF Warranty" },
  { value: "2400+", label: "Vehicles Protected" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Backdrops */}
      <div className="pointer-events-none absolute inset-0 z-[1] grid-overlay opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-accent-radial opacity-60" />

      {/* Content */}
      <div className="container-edge relative z-10 flex flex-1 flex-col justify-center pt-24">
        <motion.div
          variants={stagger(0.12, 0.3)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-highlight" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              Automotive Preservation · India
            </span>
          </motion.div>

          <motion.h1
            variants={blurReveal}
            className="font-display text-[15vw] font-bold leading-[0.92] tracking-tight text-gradient sm:text-7xl lg:text-8xl"
          >
            DETAIL GOD
            <span className="block text-accent">INDIA</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-display text-xl font-medium text-white/90 sm:text-2xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            A place where technology, people and car care converge. PPF, ceramic &amp; graphene
            coating, detailing, restoration and painting in Patna — engineered for perfection.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg" variant="primary">
                <a href="#analyzer">
                  <ScanLine className="h-4 w-4" /> Start Vehicle Analysis
                </a>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()}>
                Book Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <a
              href="#technology"
              className="ml-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted underline-offset-8 transition-colors hover:text-accent hover:underline"
            >
              Explore Technology
            </a>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-14 flex flex-wrap gap-8 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <motion.a
        href="#scanner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-accent" />
      </motion.a>
    </section>
  );
}
