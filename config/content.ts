import type {
  ProtectionLayer,
  ProcessStep,
  TechFeature,
  MissionLog,
  PricingProgram,
  GalleryItem,
} from "@/types";

export const protectionLayers: ProtectionLayer[] = [
  {
    id: "ppf",
    label: "Paint Protection Film",
    thickness: "200µm",
    color: "#00D4FF",
    hardness: "Self-healing",
    benefits: ["Impact absorption", "Self-healing surface", "Stone-chip defense", "10-year clarity"],
  },
  {
    id: "ceramic",
    label: "Ceramic Coating",
    thickness: "2µm",
    color: "#4FFFB0",
    hardness: "9H+",
    benefits: ["Hydrophobic shell", "Chemical resistance", "UV stability", "Mirror-depth gloss"],
  },
  {
    id: "graphene",
    label: "Graphene Coating",
    thickness: "3µm",
    color: "#FFD600",
    hardness: "9H+",
    benefits: ["Anti-static finish", "Lower surface heat", "No water spotting", "7-year durability"],
  },
];

export const processSteps: ProcessStep[] = [
  { step: "STEP 01", title: "Vehicle Assessment", description: "Paint depth mapping, defect analysis and surface diagnostics under calibrated lighting.", duration: "45 min" },
  { step: "STEP 02", title: "Surface Decontamination", description: "Chemical and mechanical decontamination removes bonded fallout and embedded contaminants.", duration: "2 hrs" },
  { step: "STEP 03", title: "Paint Correction", description: "Multi-stage machine polishing restores optical clarity and removes defects.", duration: "6–14 hrs" },
  { step: "STEP 04", title: "Protection Application", description: "PPF, ceramic or graphene layers applied in a controlled, dust-free environment.", duration: "4–24 hrs" },
  { step: "STEP 05", title: "Quality Validation", description: "Gloss metering, coating cure checks and final inspection against delivery standards.", duration: "1 hr" },
  { step: "STEP 06", title: "Delivery", description: "Documented results, care protocol handover and your vehicle restored to perfection.", duration: "30 min" },
];

export const techFeatures: TechFeature[] = [
  { id: "nano", title: "Nano Ceramic Technology", description: "SiO₂ particles bond at a molecular level, forming a sacrificial glass layer over the clear coat.", stat: "9H+", statLabel: "Surface hardness" },
  { id: "graphene", title: "Graphene Protection", description: "A carbon lattice disperses heat and static, dramatically reducing water spotting.", stat: "-8°C", statLabel: "Surface temp drop" },
  { id: "selfheal", title: "Self-Healing PPF", description: "Elastomeric topcoat reflows with ambient heat to erase swirls and light scratches.", stat: "100%", statLabel: "Scratch recovery" },
  { id: "hydro", title: "Hydrophobic Science", description: "Engineered contact angles force water to sheet away, carrying dirt with it.", stat: "112°", statLabel: "Contact angle" },
  { id: "uv", title: "UV Resistance", description: "Stabilized polymers block oxidation and fade across India's harsh sun exposure.", stat: "99%", statLabel: "UV blocked" },
  { id: "chem", title: "Chemical Resistance", description: "Inert coatings shrug off bird etching, acid rain and industrial fallout.", stat: "pH 2–12", statLabel: "Resistance range" },
];

export const missionLogs: MissionLog[] = [
  { missionId: "1028", vehicle: "BMW X5", treatment: "Ceramic Coating", status: "SUCCESS", client: "R. Mehta", city: "Bengaluru", rating: 5, note: "Depth of gloss is unreal. Water just rolls off." },
  { missionId: "1041", vehicle: "Porsche 911", treatment: "Full Body PPF", status: "SUCCESS", client: "A. Khanna", city: "Mumbai", rating: 5, note: "Track-ready protection without losing the paint's character." },
  { missionId: "1067", vehicle: "Land Rover Defender", treatment: "Graphene + Interior", status: "SUCCESS", client: "S. Iyer", city: "Hyderabad", rating: 5, note: "Survives every trail. Cabin feels brand new." },
  { missionId: "1093", vehicle: "Mercedes-AMG GT", treatment: "Paint Correction + Ceramic", status: "SUCCESS", client: "V. Rao", city: "Pune", rating: 5, note: "Swirls completely gone. Mirror finish under any light." },
  { missionId: "1112", vehicle: "Audi e-tron GT", treatment: "Graphene Coating", status: "SUCCESS", client: "N. Gupta", city: "Delhi", rating: 5, note: "Perfect for an EV — cooler panels, effortless cleaning." },
];

export const pricingPrograms: PricingProgram[] = [
  {
    id: "essential",
    index: "PROGRAM 01",
    name: "Essential Shield",
    subtitle: "Entry-level preservation",
    priceFrom: "₹24,999",
    duration: "1 Day",
    accent: "accent",
    features: ["Single-stage paint enhancement", "Entry ceramic coating", "Interior vacuum & wipe-down", "Hydrophobic glass treatment", "12-month protection"],
  },
  {
    id: "ceramic-elite",
    index: "PROGRAM 02",
    name: "Ceramic Elite",
    subtitle: "The signature finish",
    priceFrom: "₹54,999",
    duration: "2 Days",
    accent: "highlight",
    featured: true,
    features: ["Two-stage paint correction", "9H+ ceramic coating", "Wheel & caliper coating", "Full interior detail", "Trim & glass coating", "3-year protection"],
  },
  {
    id: "titanium",
    index: "PROGRAM 03",
    name: "Titanium Protection",
    subtitle: "Film + coating fusion",
    priceFrom: "₹1,49,999",
    duration: "3–4 Days",
    accent: "warning",
    features: ["Full-front PPF coverage", "Graphene top coat", "Multi-stage correction", "Engine bay enhancement", "Interior restoration", "7-year protection"],
  },
  {
    id: "ultimate",
    index: "PROGRAM 04",
    name: "Ultimate Preservation Program",
    subtitle: "Concours-level total care",
    priceFrom: "₹2,99,999",
    duration: "5–7 Days",
    accent: "accent",
    features: ["Full-body PPF armor", "Graphene + ceramic system", "Concours paint correction", "Complete interior restoration", "Engine & underbody detail", "Annual maintenance plan", "10-year protection"],
  },
];

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Midnight Coupe", category: "Luxury Cars", src: img("1503376780353-7e6692767b70"), span: "tall" },
  { id: "g2", title: "Track Spec PPF", category: "PPF Projects", src: img("1552519507-da3b142c6e3d"), span: "wide" },
  { id: "g3", title: "Liquid Glass", category: "Ceramic Projects", src: img("1605559424843-9e4c228bf1c2"), span: "normal" },
  { id: "g4", title: "Apex Predator", category: "Sports Cars", src: img("1544636331-e26879cd4d9b"), span: "normal" },
  { id: "g5", title: "Trail Titan", category: "SUVs", src: img("1519641471654-76ce0107ad1b"), span: "tall" },
  { id: "g6", title: "Cabin Reborn", category: "Interior Projects", src: img("1503736334956-4c8f8e92946d"), span: "normal" },
  { id: "g7", title: "Silver Arrow", category: "Luxury Cars", src: img("1492144534655-ae79c964c9d7"), span: "normal" },
  { id: "g8", title: "Carbon Skin", category: "PPF Projects", src: img("1583121274602-3e2820c69888"), span: "wide" },
  { id: "g9", title: "Mirror Depth", category: "Ceramic Projects", src: img("1494976388531-d1058494cdd8"), span: "normal" },
];

export const galleryCategories = [
  "All",
  "Luxury Cars",
  "Sports Cars",
  "SUVs",
  "Ceramic Projects",
  "PPF Projects",
  "Interior Projects",
] as const;

export const faqs = [
  { q: "Is ceramic coating better than PPF?", a: "They solve different problems. PPF is a physical self-healing film that absorbs impacts and stone chips, while ceramic coating is a chemical layer that adds gloss, hydrophobicity and chemical resistance. Our Titanium and Ultimate programs combine both." },
  { q: "How long does a ceramic coating last?", a: "Our 9H+ ceramic systems last 3–5 years and graphene systems up to 7 years with proper maintenance, which we document and support for every client." },
  { q: "Do you protect EVs and luxury SUVs?", a: "Yes. We specialise in BMW, Mercedes, Audi, Porsche, Land Rover Defender and EVs including Tesla, Audi e-tron and more." },
  { q: "Will paint correction damage my clear coat?", a: "No. We measure paint thickness before any correction and remove only the minimum required to restore clarity, all under calibrated lighting." },
];
