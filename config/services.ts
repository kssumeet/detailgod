import {
  ShieldCheck,
  Sparkles,
  Atom,
  Wand2,
  Armchair,
  Cog,
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
    id: "correction",
    index: "MODULE 04",
    title: "Paint Correction",
    tagline: "Optical resurfacing",
    description:
      "Multi-stage machine refinement removes swirl marks, oxidation and holograms, restoring true factory clarity measured under calibrated lighting.",
    icon: Wand2,
    metrics: [
      { label: "Stages", value: "Up to 4" },
      { label: "Gloss +", value: "+38%" },
    ],
    accent: "warning",
  },
  {
    id: "interior",
    index: "MODULE 05",
    title: "Interior Restoration",
    tagline: "Cabin preservation",
    description:
      "Deep extraction, leather reconditioning and antimicrobial treatment restore and protect every surface of the cabin environment.",
    icon: Armchair,
    metrics: [
      { label: "Surfaces", value: "Full" },
      { label: "Protection", value: "UV+" },
    ],
    accent: "highlight",
  },
  {
    id: "engine",
    index: "MODULE 06",
    title: "Engine Bay Enhancement",
    tagline: "Thermal-safe detailing",
    description:
      "Controlled decontamination and dressing of the engine bay for a concours-level presentation without compromising electronics.",
    icon: Cog,
    metrics: [
      { label: "Method", value: "Low-pressure" },
      { label: "Finish", value: "Satin" },
    ],
    accent: "accent",
  },
];
