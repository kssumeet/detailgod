import {
  ShieldCheck,
  Sparkles,
  Atom,
  SprayCan,
  Wrench,
  Paintbrush,
} from "lucide-react";
import type { ServiceModule } from "@/types";

export const services: ServiceModule[] = [
  {
    id: "ppf",
    index: "MODULE 01",
    title: "Paint Protection Film",
    tagline: "Self-healing armor",
    description:
      "Aerospace-grade thermoplastic urethane film that absorbs rock chips, swirls and road debris while healing micro-scratches under heat.",
    icon: ShieldCheck,
    metrics: [
      { label: "Thickness", value: "200µm" },
      { label: "Warranty", value: "10 yr" },
    ],
    accent: "accent",
  },
  {
    id: "ceramic",
    index: "MODULE 02",
    title: "Ceramic Shield Technology",
    tagline: "Nano-glass bonding",
    description:
      "A SiO₂ nano-ceramic lattice chemically bonds to the clear coat, delivering extreme hydrophobicity, depth of gloss and chemical resistance.",
    icon: Sparkles,
    metrics: [
      { label: "Hardness", value: "9H+" },
      { label: "Contact °", value: "112°" },
    ],
    accent: "highlight",
  },
  {
    id: "graphene",
    index: "MODULE 03",
    title: "Graphene Protection",
    tagline: "Anti-static carbon lattice",
    description:
      "Graphene-infused coating reduces water spotting and surface temperature while extending durability far beyond conventional ceramics.",
    icon: Atom,
    metrics: [
      { label: "Durability", value: "7 yr" },
      { label: "Heat Δ", value: "-8°C" },
    ],
    accent: "accent",
  },
  {
    id: "detailing",
    index: "MODULE 04",
    title: "Premium Detailing",
    tagline: "Interior & exterior care",
    description:
      "Multi-stage paint correction, deep interior extraction and surface decontamination — restoring true factory clarity inside and out under calibrated lighting.",
    icon: SprayCan,
    metrics: [
      { label: "Stages", value: "Up to 4" },
      { label: "Gloss +", value: "+38%" },
    ],
    accent: "warning",
  },
  {
    id: "restoration",
    index: "MODULE 05",
    title: "Vehicle Restoration",
    tagline: "Bring it back to life",
    description:
      "Complete restoration of tired and damaged vehicles — paint, trim, leather and surface rebuild to factory-fresh or better-than-new condition.",
    icon: Wrench,
    metrics: [
      { label: "Scope", value: "Full" },
      { label: "Finish", value: "OEM+" },
    ],
    accent: "highlight",
  },
  {
    id: "painting",
    index: "MODULE 06",
    title: "Custom Painting",
    tagline: "Refinish & repaint",
    description:
      "Professional repaints, colour changes and panel refinishing in a controlled booth — flawless coverage, perfect colour match and a durable finish.",
    icon: Paintbrush,
    metrics: [
      { label: "Match", value: "Exact" },
      { label: "Booth", value: "Dust-free" },
    ],
    accent: "accent",
  },
];
