"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const MESSAGES = [
  "WELCOME TO DETAIL GOD INDIA",
  "PREMIUM CAR CARE STUDIO",
  "PATNA · BIHAR",
  "PREPARING YOUR EXPERIENCE",
  "READY",
];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const total = 2600;

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / total) * 100);
      setProgress(pct);
      setMessageIndex(Math.min(MESSAGES.length - 1, Math.floor((pct / 100) * MESSAGES.length)));
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Scanning grid */}
          <div className="absolute inset-0 grid-overlay opacity-40" />
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            style={{ boxShadow: "0 0 20px 2px rgba(0,212,255,0.6)" }}
          />

          {/* Vehicle wireframe */}
          <motion.svg
            viewBox="0 0 240 90"
            className="mb-12 w-[260px] text-accent sm:w-[320px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.path
              d="M12 64 L40 64 C46 44 60 34 92 34 L150 34 C176 34 196 44 214 56 L228 60 C232 61 232 66 228 66 L210 66 M44 64 L196 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
            />
            <circle cx="66" cy="66" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="180" cy="66" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <motion.circle
              cx="66" cy="66" r="3" fill="currentColor"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.circle
              cx="180" cy="66" r="3" fill="currentColor"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            />
          </motion.svg>

          {/* Brand */}
          <div className="mb-6 text-center">
            <h1 className="font-display text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">
              {siteConfig.shortName}
            </h1>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-ultra text-muted">India</p>
          </div>

          {/* Message + progress */}
          <div className="flex w-[280px] flex-col items-center gap-3 sm:w-[360px]">
            <div className="flex h-5 items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={messageIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent"
                >
                  {MESSAGES[messageIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                style={{ width: `${progress}%`, boxShadow: "0 0 12px rgba(0,212,255,0.8)" }}
              />
            </div>

            <div className="flex w-full justify-between font-mono text-[10px] text-muted">
              <span>LOADING</span>
              <span className="text-white">{Math.round(progress).toString().padStart(3, "0")}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
