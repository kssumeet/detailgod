"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, lineGrow, inViewOnce, stagger } from "@/animations/variants";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={inViewOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <motion.span
          variants={lineGrow}
          className="h-px w-10 origin-left bg-accent"
        />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn("max-w-xl text-base leading-relaxed text-muted", align === "center" && "mx-auto")}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
