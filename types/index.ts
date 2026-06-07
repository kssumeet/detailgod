import type { LucideIcon } from "lucide-react";

export interface ServiceModule {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  metrics: { label: string; value: string }[];
  accent: "accent" | "highlight" | "warning";
}

export interface ProtectionLayer {
  id: "ppf" | "ceramic" | "graphene";
  label: string;
  thickness: string;
  color: string;
  benefits: string[];
  hardness: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface TechFeature {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface MissionLog {
  missionId: string;
  vehicle: string;
  treatment: string;
  status: "SUCCESS";
  client: string;
  city: string;
  rating: number;
  note: string;
}

export interface PricingProgram {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  priceFrom: string;
  duration: string;
  features: string[];
  featured?: boolean;
  accent: "accent" | "highlight" | "warning";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  span: "tall" | "wide" | "normal";
}

export type GalleryCategory =
  | "Luxury Cars"
  | "Sports Cars"
  | "SUVs"
  | "Ceramic Projects"
  | "PPF Projects"
  | "Interior Projects";

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  vehicleModel: string;
  paintScore?: number;
  glossScore?: number;
  protectionRating?: number;
  recommendedService?: string;
  source: string;
}
