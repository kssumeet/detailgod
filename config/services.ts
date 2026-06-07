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
    index: "SERVICE 01",
    title: "Paint Protection Film (PPF)",
    tagline: "Self-healing protection for Indian roads",
    description:
      "Genuine branded, self-healing film that absorbs stone chips from highways, parking scratches and key marks. Light scratches reflow and vanish in the afternoon sun — and it comes with a manufacturer warranty card.",
    icon: ShieldCheck,
    metrics: [
      { label: "Thickness", value: "200µm" },
      { label: "Warranty", value: "10 yr" },
    ],
    accent: "accent",
  },
  {
    id: "ceramic",
    index: "SERVICE 02",
    title: "Ceramic Coating",
    tagline: "Deep gloss, half the washing",
    description:
      "A 9H+ nano-ceramic layer bonds to your clear coat so monsoon water sheets straight off, dust wipes away and bird droppings won't etch the paint. Enhances gloss and cuts your washing effort in half.",
    icon: Sparkles,
    metrics: [
      { label: "Hardness", value: "9H+" },
      { label: "Contact °", value: "112°" },
    ],
    accent: "highlight",
  },
  {
    id: "graphene",
    index: "SERVICE 03",
    title: "Graphene Coating",
    tagline: "Built for the Indian summer",
    description:
      "Graphene keeps panels cooler under the 45°C sun and drastically reduces hard-water spotting — the No.1 paint problem in Indian cities. Superior gloss and durability well beyond conventional ceramics.",
    icon: Atom,
    metrics: [
      { label: "Durability", value: "7 yr" },
      { label: "Heat Δ", value: "-8°C" },
    ],
    accent: "accent",
  },
  {
    id: "detailing",
    index: "SERVICE 04",
    title: "Premium Detailing",
    tagline: "Showroom condition, inside & out",
    description:
      "Multi-stage paint correction plus deep interior care — AC-vent dust extraction, seat stain removal and leather conditioning. We bring tired daily-driven cars back to showroom condition.",
    icon: SprayCan,
    metrics: [
      { label: "Stages", value: "Up to 4" },
      { label: "Gloss +", value: "+38%" },
    ],
    accent: "warning",
  },
  {
    id: "restoration",
    index: "SERVICE 05",
    title: "Vehicle Restoration",
    tagline: "Old Gypsy? Faded Scorpio? Bring it in.",
    description:
      "Complete rebuild for aging or neglected vehicles — faded paint revival, trim restoration and interior reconditioning to a factory-fresh, OEM+ finish that turns heads again.",
    icon: Wrench,
    metrics: [
      { label: "Scope", value: "Full" },
      { label: "Finish", value: "OEM+" },
    ],
    accent: "highlight",
  },
  {
    id: "painting",
    index: "SERVICE 06",
    title: "Custom Painting",
    tagline: "Dent-paint done right",
    description:
      "Computerised colour matching and panel refinishing in a dust-free booth — no patchy panels, no overspray, no colour mismatch. Professional repaints and colour changes that actually last.",
    icon: Paintbrush,
    metrics: [
      { label: "Match", value: "Exact" },
      { label: "Booth", value: "Dust-free" },
    ],
    accent: "accent",
  },
];
