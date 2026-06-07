import type { ServiceDetail } from "@/types";

/**
 * Rich, per-service content for the dedicated SEO landing pages.
 * Each entry powers its own route (e.g. /ppf-patna) with unique
 * metadata, H1, benefits, India-specific copy, FAQs and schema.
 */
export const serviceDetails: ServiceDetail[] = [
  {
    id: "ppf",
    slug: "ppf-patna",
    name: "Paint Protection Film (PPF) in Patna",
    metaTitle: "PPF in Patna — Paint Protection Film Price & Installation",
    metaDescription:
      "Genuine branded Paint Protection Film (PPF) in Patna, Bihar. Self-healing, 10-year warranty card, stone-chip protection for Thar, Fortuner, Defender & luxury cars. Free inspection, GST invoice, EMI options.",
    heroEyebrow: "Service // Paint Protection Film",
    heroTitle: "Paint Protection Film (PPF) in Patna",
    heroIntro:
      "Patna's highways, broken roads and gravel are brutal on factory paint. Our genuine branded PPF is a thick, self-healing film that takes the stone chips, scratches and key marks so your original paint never does — backed by a manufacturer warranty card.",
    heroImageId: "1710225358761-4f5891df657d",
    priceFrom: "₹49,999",
    benefits: [
      { title: "Stone-Chip Armour", desc: "Absorbs gravel and debris from highways and under-construction roads before it reaches your paint." },
      { title: "Self-Healing Finish", desc: "Light swirls and scratches reflow and disappear in the afternoon sun — no polishing needed." },
      { title: "10-Year Warranty Card", desc: "Genuine branded film only, with the manufacturer's warranty card and a GST invoice." },
      { title: "Crystal-Clear, No Yellowing", desc: "Stays optically clear for years — protects gloss without changing how your car looks." },
    ],
    whyIndia: [
      "Stone chips from highways and broken roads",
      "Parking scratches and key marks in crowded lots",
      "Bird droppings and tree sap that etch unprotected paint",
      "Preserves resale value on Thars, Fortuners, Defenders & luxury cars",
    ],
    faqs: [
      { q: "How much does PPF cost in Patna?", a: "Full-front PPF starts around ₹49,999 and full-body PPF depends on your car's size and the film grade. We only use genuine branded film with a warranty card. Book a free inspection for an exact quote." },
      { q: "Does PPF turn yellow over time?", a: "Genuine branded PPF does not yellow — it uses UV-stable topcoats and stays clear for up to 10 years. Cheap, ungraded films are what yellow, which is why we never use them." },
      { q: "Is PPF better than ceramic coating?", a: "PPF physically protects against impacts and scratches; ceramic adds gloss and makes cleaning easier. For complete protection on Indian roads, many clients add a ceramic coating on top of PPF." },
    ],
    related: ["ceramic", "graphene"],
  },
  {
    id: "ceramic",
    slug: "ceramic-coating-patna",
    name: "Ceramic Coating in Patna",
    metaTitle: "Ceramic Coating in Patna — Price, 9H+ Protection & Gloss",
    metaDescription:
      "9H+ ceramic coating in Patna, Bihar. Deep gloss, hydrophobic protection, easier washing and UV defence for your car. Genuine products, warranty card, GST invoice, EMI options. Free paint inspection.",
    heroEyebrow: "Service // Ceramic Coating",
    heroTitle: "Ceramic Coating in Patna",
    heroIntro:
      "A 9H+ nano-ceramic layer bonds to your clear coat so monsoon water sheets straight off, dust wipes away and bird droppings won't etch the paint. Deeper gloss, half the washing effort, and real protection against Patna's sun, dust and hard water.",
    heroImageId: "1664783856972-ac9922d7b2d3",
    priceFrom: "₹24,999",
    benefits: [
      { title: "Mirror-Deep Gloss", desc: "A glass-like finish that makes the colour pop far beyond a normal polish." },
      { title: "Hydrophobic Shell", desc: "Water, mud and monsoon grime slide right off — your car stays cleaner, longer." },
      { title: "Easier Washing", desc: "Dirt won't bond to the surface, so washing takes half the time and effort." },
      { title: "UV & Chemical Defence", desc: "Blocks fading and resists bird droppings, tree sap and acid rain across India's conditions." },
    ],
    whyIndia: [
      "Hard-water spots from borewell water and roadside washing",
      "Dust that dulls the paint between washes",
      "Harsh UV that fades bonnets and roofs",
      "Bird droppings and tree sap that etch the clear coat",
    ],
    faqs: [
      { q: "What is the price of ceramic coating in Patna?", a: "Ceramic coating starts at ₹24,999, and our most popular Ceramic Elite package is ₹54,999, depending on car size and condition. EMI options are available and every job includes a warranty card and GST invoice." },
      { q: "How long does ceramic coating last?", a: "Our 9H+ ceramic systems last 3–5 years with proper maintenance. We hand over an after-care guide and maintenance schedule with every car." },
      { q: "How do I maintain ceramic coating during monsoon?", a: "Rinse off mud and bird droppings within a day or two, use a pH-neutral shampoo, and avoid harsh roadside washing. The hydrophobic layer does most of the work for you." },
    ],
    related: ["graphene", "ppf"],
  },
  {
    id: "graphene",
    slug: "graphene-coating-patna",
    name: "Graphene Coating in Patna",
    metaTitle: "Graphene Coating in Patna — Cooler Panels, Less Water Spotting",
    metaDescription:
      "Graphene coating in Patna, Bihar — cooler panels under the Indian summer sun and drastically reduced hard-water spotting. Up to 7-year durability, deep gloss, warranty card & GST invoice.",
    heroEyebrow: "Service // Graphene Coating",
    heroTitle: "Graphene Coating in Patna",
    heroIntro:
      "Graphene is the next step beyond ceramic — engineered for the Indian summer. It keeps panels cooler under the 45°C sun and drastically reduces hard-water spotting, the No.1 paint problem in Indian cities, with superior gloss and durability.",
    heroImageId: "1651751168317-d1c3f16d300d",
    priceFrom: "₹64,999",
    benefits: [
      { title: "Cooler Panels", desc: "Graphene disperses heat so your car's surface runs cooler under the harsh summer sun." },
      { title: "No More Water Spots", desc: "Drastically reduces the hard-water spotting that plagues cars across Indian cities." },
      { title: "Up to 7-Year Durability", desc: "Outlasts conventional ceramic systems with a tougher, longer-lasting bond." },
      { title: "Anti-Static Shine", desc: "Repels dust and delivers an even deeper, slicker gloss." },
    ],
    whyIndia: [
      "45°C summers that heat-soak the paint",
      "Hard-water spotting from daily washing",
      "Dust adhesion between washes",
      "Long-term protection for SUVs and luxury cars",
    ],
    faqs: [
      { q: "Can graphene coating reduce water spots?", a: "Yes — reducing hard-water spotting is one of graphene's biggest advantages over standard ceramic, which is why it's ideal for Indian cities where borewell and tap water leave marks." },
      { q: "Is graphene better than ceramic coating?", a: "Graphene offers lower surface temperatures, better water-spot resistance and longer durability (up to 7 years). It costs a little more but is worth it in India's heat and water conditions." },
      { q: "How much does graphene coating cost in Patna?", a: "Graphene coating starts around ₹64,999 depending on your car. Book a free inspection for an exact quote — EMI options, warranty card and GST invoice included." },
    ],
    related: ["ceramic", "ppf"],
  },
  {
    id: "detailing",
    slug: "car-detailing-patna",
    name: "Car Detailing in Patna",
    metaTitle: "Car Detailing in Patna — Best Premium Detailing Studio in Bihar",
    metaDescription:
      "Premium car detailing in Patna, Bihar. Paint correction, deep interior detailing, AC-vent dust extraction, seat-stain removal and leather care. Showroom condition inside-out. Free inspection & pickup-drop.",
    heroEyebrow: "Service // Premium Detailing",
    heroTitle: "Car Detailing in Patna",
    heroIntro:
      "From swirl-filled paint to dust-caked interiors, daily driving in Patna takes its toll. Our premium detailing combines multi-stage paint correction with deep interior care — AC-vent dust extraction, seat-stain removal and leather conditioning — to bring your car back to showroom condition, inside and out.",
    heroImageId: "1588036873025-7261a5647adf",
    priceFrom: "₹14,999",
    benefits: [
      { title: "Paint Correction", desc: "Multi-stage machine polishing removes swirls, scratches and water spots for true clarity." },
      { title: "Deep Interior Detail", desc: "AC-vent dust extraction, seat and carpet shampoo, and a full cabin reset." },
      { title: "Leather Care", desc: "Conditioning and protection that keeps seats supple in Patna's heat." },
      { title: "Showroom Finish", desc: "Your car leaves looking and feeling like the day you bought it." },
    ],
    whyIndia: [
      "Dust and grime that builds up in AC vents and cabins",
      "Swirl marks from roadside washing",
      "Seat stains and odour from daily use",
      "Faded, dried-out interiors from the heat",
    ],
    faqs: [
      { q: "What's included in premium detailing?", a: "Multi-stage paint correction, full interior deep-clean (AC vents, seats, carpets, dashboard), leather conditioning and a protective finish. We tailor the package to your car's condition after a free inspection." },
      { q: "Do you offer pickup and drop in Patna?", a: "Yes — we offer pickup and drop within Patna. Our studio is on Ashiana-Digha Road, open Mon–Sun, 10 AM–8 PM, with Hindi and English support." },
      { q: "How long does detailing take?", a: "A full detail typically takes 1–2 days depending on the car's condition and the level of paint correction required. We confirm the timeline after inspection." },
    ],
    related: ["ceramic", "restoration"],
  },
  {
    id: "restoration",
    slug: "car-restoration-patna",
    name: "Car Restoration in Patna",
    metaTitle: "Car Restoration in Patna — Paint Revival & Full Rebuild",
    metaDescription:
      "Car restoration in Patna, Bihar. Faded paint revival, trim restoration and interior reconditioning for aging or neglected cars — restored to a factory-fresh, OEM+ finish. Free inspection & honest estimate.",
    heroEyebrow: "Service // Vehicle Restoration",
    heroTitle: "Car Restoration in Patna",
    heroIntro:
      "Old Gypsy? Inherited Contessa? Faded Scorpio? Years of sun, dust and neglect can be undone. Our restoration revives faded paint, restores trim and reconditions interiors to bring tired and neglected cars back to a factory-fresh, OEM+ finish that turns heads again.",
    heroImageId: "1730830812273-12c0a8a98092",
    priceFrom: "On inspection",
    benefits: [
      { title: "Faded Paint Revival", desc: "Heavy correction and refinishing restore depth and colour to sun-baked paint." },
      { title: "Trim Restoration", desc: "Faded plastics, rubber and chrome brought back to life instead of replaced." },
      { title: "Interior Reconditioning", desc: "Seats, dashboard and headliner cleaned, repaired and protected." },
      { title: "OEM+ Finish", desc: "The goal is factory-fresh or better — documented at every stage." },
    ],
    whyIndia: [
      "Years of UV fading and oxidation",
      "Neglected paint, trim and interiors",
      "Inherited and vintage cars worth preserving",
      "Restoring value before resale or showcase",
    ],
    faqs: [
      { q: "Can you restore an old or faded car?", a: "Yes — that's our speciality. Faded paint, dull trim and worn interiors can usually be revived to a factory-fresh standard. We assess what's realistically achievable in a free inspection first." },
      { q: "How much does restoration cost?", a: "Restoration is quoted after inspection because every car's condition is different. We give an honest, itemised estimate before any work begins — no surprises." },
      { q: "Is restoration worth it versus selling?", a: "For well-loved, inherited or vintage cars, a quality restoration often costs far less than the car's sentimental and resale value. We'll give you a straight answer at inspection." },
    ],
    related: ["painting", "detailing"],
  },
  {
    id: "painting",
    slug: "car-painting-patna",
    name: "Car Painting in Patna",
    metaTitle: "Car Painting in Patna — Dent-Paint, Colour Match & Refinishing",
    metaDescription:
      "Professional car painting in Patna, Bihar. Computerised colour matching, dust-free booth, dent-paint and panel refinishing — no patchy panels or overspray. Free inspection & honest estimate.",
    heroEyebrow: "Service // Custom Painting",
    heroTitle: "Car Painting in Patna",
    heroIntro:
      "Dent-paint done right. Whether it's a scraped panel, a colour change or a full repaint, we use computerised colour matching in a dust-free booth — so there's no patchy panels, no overspray and no colour mismatch. Just a flawless, durable finish.",
    heroImageId: "1634636208509-63bcd2a1b13f",
    priceFrom: "On inspection",
    benefits: [
      { title: "Exact Colour Match", desc: "Computerised matching blends new paint perfectly with your existing panels." },
      { title: "Dust-Free Booth", desc: "Temperature-controlled spray booth means no dust nibs, runs or overspray." },
      { title: "Panel Refinishing", desc: "Scrapes, dents and faded panels refinished to factory standard." },
      { title: "Durable Finish", desc: "Proper prep and clear-coat for a paint job that lasts, not one that peels." },
    ],
    whyIndia: [
      "Scrapes and dents from tight Indian parking",
      "Patchy, mismatched local repaints done elsewhere",
      "Faded panels from years of sun",
      "Colour changes and custom finishes",
    ],
    faqs: [
      { q: "Do you do dent-paint and single-panel painting?", a: "Yes — from a single scraped panel to a full repaint. We colour-match precisely so the repaired panel is invisible against the rest of the car." },
      { q: "Why is booth painting better than open painting?", a: "A dust-free, temperature-controlled booth prevents dust nibs, runs and overspray — the patchy results you get from open-air roadside painting. The finish is smoother and lasts far longer." },
      { q: "How much does car painting cost in Patna?", a: "It depends on the panels and finish, so we quote after inspection with an honest, itemised estimate. GST invoice provided." },
    ],
    related: ["restoration", "detailing"],
  },
];

export const serviceBySlug = (slug: string) => serviceDetails.find((s) => s.slug === slug);
export const slugForServiceId = (id: string) => serviceDetails.find((s) => s.id === id)?.slug;
export const serviceSlugs = serviceDetails.map((s) => s.slug);
