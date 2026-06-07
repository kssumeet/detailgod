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
  { step: "STEP 01", title: "Free Inspection", description: "Full paint inspection under professional lighting — we show you the report before you pay anything.", duration: "45 min" },
  { step: "STEP 02", title: "Deep Decontamination", description: "We remove iron fallout, road tar, tree sap and bonded dust that normal washing leaves behind.", duration: "2 hrs" },
  { step: "STEP 03", title: "Paint Correction", description: "Multi-stage machine polishing removes swirl marks, scratches and hard-water spots to restore clarity.", duration: "6–14 hrs" },
  { step: "STEP 04", title: "Protection Application", description: "PPF, ceramic or graphene applied in our dust-free, temperature-controlled booth for a flawless cure.", duration: "4–24 hrs" },
  { step: "STEP 05", title: "Quality Check", description: "Gloss-meter readings and coating cure verification against our delivery standards before handover.", duration: "1 hr" },
  { step: "STEP 06", title: "Delivery & Handover", description: "Warranty card, GST invoice, after-care guide and a maintenance schedule — your car restored to perfection.", duration: "30 min" },
];

export const techFeatures: TechFeature[] = [
  { id: "nano", title: "Nano Ceramic Protection", description: "A sacrificial glass layer bonds over your clear coat, so the paint never faces Indian dust and grime directly.", stat: "9H+", statLabel: "Surface hardness" },
  { id: "graphene", title: "Graphene Technology", description: "Keeps panels cooler in 45°C summers and drastically reduces the hard-water spots common across Indian cities.", stat: "-8°C", statLabel: "Surface temp drop" },
  { id: "selfheal", title: "Self-Healing PPF", description: "Here the Indian sun works in your favour — ambient heat reflows the film to erase swirls and light scratches.", stat: "100%", statLabel: "Scratch recovery" },
  { id: "hydro", title: "Hydrophobic Protection", description: "Monsoon rain sheets off at a 110°+ contact angle, keeping the car self-cleaning between washes.", stat: "112°", statLabel: "Contact angle" },
  { id: "uv", title: "UV Defense", description: "Blocks 99% of UV — no more faded bonnets and roofs, the most common paint failure on Indian cars.", stat: "99%", statLabel: "UV blocked" },
  { id: "chem", title: "Chemical Resistance", description: "Shrugs off bird droppings, tree sap, acid rain and industrial fallout across a pH 2–12 range.", stat: "pH 2–12", statLabel: "Resistance range" },
];

export const missionLogs: MissionLog[] = [
  { missionId: "1028", vehicle: "Toyota Fortuner", treatment: "Ceramic Coating", status: "COMPLETED", client: "R. Sinha", city: "Boring Road, Patna", rating: 5, note: "Patna ki dhool ab paint pe tikti hi nahi. One year later, still looks new." },
  { missionId: "1041", vehicle: "Mahindra Thar", treatment: "Full Body PPF", status: "COMPLETED", client: "A. Kumar", city: "Danapur", rating: 5, note: "Took it off-roading near Rajgir. Stone chips, branches — paint untouched. PPF paid for itself." },
  { missionId: "1067", vehicle: "BMW X5", treatment: "Graphene + Interior", status: "COMPLETED", client: "S. Verma", city: "Patliputra Colony", rating: 5, note: "Earlier I drove to Delhi to get my cars detailed. Now Detail God in Patna does it better." },
  { missionId: "1093", vehicle: "Hyundai Creta", treatment: "Paint Correction + Ceramic", status: "COMPLETED", client: "N. Gupta", city: "Kankarbagh", rating: 5, note: "Hard-water spots from daily washing had ruined the shine. Completely restored — mirror finish." },
  { missionId: "1112", vehicle: "Land Rover Defender", treatment: "Ultimate Program", status: "COMPLETED", client: "V. Singh", city: "Muzaffarpur", rating: 5, note: "Monsoon, dust, highways — nothing sticks. Best investment I've made in this car." },
];

export const pricingPrograms: PricingProgram[] = [
  {
    id: "essential",
    index: "PROGRAM 01",
    name: "Daily Drive Shield",
    subtitle: "For Swift, Creta & City daily drivers",
    priceFrom: "₹24,999",
    duration: "1 Day",
    accent: "accent",
    features: ["Single-stage paint enhancement", "Entry ceramic coating", "Interior vacuum & wipe-down", "Hydrophobic glass treatment", "12-month protection", "Warranty card + GST invoice", "EMI options available"],
  },
  {
    id: "ceramic-elite",
    index: "PROGRAM 02",
    name: "Ceramic Elite",
    subtitle: "Most popular — Fortuner, XUV & Thar",
    priceFrom: "₹54,999",
    duration: "2 Days",
    accent: "highlight",
    featured: true,
    features: ["Two-stage paint correction", "9H+ ceramic coating", "Wheel & caliper coating", "Full interior detail", "Trim & glass coating", "3-year protection", "Genuine branded products + warranty card", "GST invoice · EMI available"],
  },
  {
    id: "titanium",
    index: "PROGRAM 03",
    name: "Titanium Protection",
    subtitle: "For luxury & new-car buyers",
    priceFrom: "₹1,49,999",
    duration: "3–4 Days",
    accent: "warning",
    features: ["Full-front PPF coverage", "Graphene top coat", "Multi-stage correction", "Engine bay enhancement", "Interior restoration", "7-year protection", "Manufacturer warranty card + GST invoice", "EMI options available"],
  },
  {
    id: "ultimate",
    index: "PROGRAM 04",
    name: "Ultimate Preservation Program",
    subtitle: "For supercars, vintage & concours builds",
    priceFrom: "₹2,99,999",
    duration: "5–7 Days",
    accent: "accent",
    features: ["Full-body PPF armour", "Graphene + ceramic system", "Concours paint correction", "Complete interior restoration", "Engine & underbody detail", "Annual maintenance plan", "10-year protection", "Warranty card · GST invoice · EMI available"],
  },
];

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

// TODO: Replace the placeholder Unsplash `src` URLs below with real
// Detail God India studio photos of each vehicle. Titles/alt text are final.
export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Mahindra Thar — Full Body PPF", category: "PPF Projects", src: img("1503376780353-7e6692767b70"), span: "tall" },
  { id: "g2", title: "Toyota Fortuner Legender — Graphene Coating", category: "SUVs", src: img("1552519507-da3b142c6e3d"), span: "wide" },
  { id: "g3", title: "BMW X5 — Ceramic Elite", category: "Ceramic Projects", src: img("1605559424843-9e4c228bf1c2"), span: "normal" },
  { id: "g4", title: "Hyundai Creta — Ceramic + Interior Detailing", category: "Interior Projects", src: img("1503736334956-4c8f8e92946d"), span: "normal" },
  { id: "g5", title: "Land Rover Defender — Titanium Protection", category: "Luxury", src: img("1519641471654-76ce0107ad1b"), span: "tall" },
  { id: "g6", title: "Mercedes-Benz GLE — Full Front PPF", category: "Luxury", src: img("1492144534655-ae79c964c9d7"), span: "normal" },
  { id: "g7", title: "Mahindra XUV700 — Paint Correction + Ceramic", category: "SUVs", src: img("1583121274602-3e2820c69888"), span: "wide" },
  { id: "g8", title: "Maruti Jimny — Matte PPF Wrap", category: "PPF Projects", src: img("1494976388531-d1058494cdd8"), span: "normal" },
];

export const galleryCategories = [
  "All",
  "Luxury",
  "SUVs",
  "Ceramic Projects",
  "PPF Projects",
  "Interior Projects",
] as const;

export const faqs = [
  {
    q: "PPF vs ceramic coating — which is better for Indian roads?",
    a: "They do different jobs. PPF is a thick, self-healing film that physically absorbs stone chips, scratches and key marks — ideal for highway driving and broken roads. Ceramic coating is a thin glass layer that adds gloss and makes the car hydrophobic, so dust and water slide off. For full protection in Patna's conditions, many clients combine both (our Titanium and Ultimate programs).",
  },
  {
    q: "What is the price of ceramic coating in Patna?",
    a: "At Detail God India, ceramic coating starts at ₹24,999 and our most popular Ceramic Elite package is ₹54,999, depending on your car's size and condition. EMI options are available, and every job includes genuine branded products, a warranty card and a GST invoice. Book a free inspection for an exact quote.",
  },
  {
    q: "Does PPF survive Indian summers and monsoons?",
    a: "Yes — genuine branded PPF is built for it. The 45°C summer heat actually helps light scratches self-heal, and the film stays clear without yellowing for up to 10 years. During monsoon it keeps water, mud and road grime off your original paint.",
  },
  {
    q: "How do I maintain ceramic coating during monsoon?",
    a: "It's easy. Rinse off mud and bird droppings within a day or two so nothing sits on the surface, use a pH-neutral shampoo, and avoid harsh roadside washing. The hydrophobic layer does most of the work — water sheets off on its own. We hand over a simple after-care guide and maintenance schedule with every car.",
  },
  {
    q: "Do you provide a warranty card and GST invoice?",
    a: "Always. We only use genuine, branded film and coatings, and you receive the manufacturer's warranty card plus a proper GST invoice for every service. No grey-market products, no hidden charges.",
  },
  {
    q: "Do you offer pick-up and drop in Patna?",
    a: "Yes, we offer pick-up and drop within Patna. Our studio is on Ashiana-Digha Road (adjacent to JK Tyre, Ghurdour Chouraha), open Mon–Sun, 10 AM–8 PM, with support in both Hindi and English.",
  },
];
