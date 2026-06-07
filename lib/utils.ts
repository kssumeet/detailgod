import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Deterministic pseudo-random in [0,1) from a seed — stable across SSR/CSR. */
export function seededRandom(seed: number) {
  const x = Math.sin(seed * 99991) * 10000;
  return x - Math.floor(x);
}

export function formatCount(n: number) {
  return n.toString().padStart(2, "0");
}
