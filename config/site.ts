export const siteConfig = {
  name: "Detail God India",
  shortName: "DETAIL GOD",
  legalName: "Detail God India",
  // Hero subheadline.
  tagline: "India's Roads Are Tough. Your Car's Paint Shouldn't Suffer.",
  // Hero eyebrow badge.
  positioning: "Premium Car Care Studio · Patna, Bihar",
  // SEO <title> — leads with the high-intent local search term.
  metaTitle: "Car Detailing, PPF & Ceramic Coating in Patna, Bihar",
  description:
    "Detail God India — premium car detailing studio in Patna, Bihar. PPF, ceramic & graphene coating, detailing, restoration and custom painting, engineered for Indian roads and weather. Genuine branded products, manufacturer warranty card, GST invoice and free inspection.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://detailgodindia.com",
  locale: "en_IN",
  city: "Patna",
  email: "contact@detailgodindia.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+917004542630",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917004542630",
  instagram: "https://instagram.com/detailgodindia",
  address: {
    street: "Plot No. 2285, Adjacent to JK Tyre, Ghurdour Chouraha, Ashiana-Digha Road",
    locality: "Patna",
    region: "Bihar",
    postalCode: "800011",
    country: "IN",
  },
  // Approx. Ashiana–Digha Road, Patna. Replace lat/lng with the exact pin
  // from your Google Business Profile for a precise map marker.
  geo: { lat: 25.6206, lng: 85.093 },
  // Mon–Sun, 10:00 AM – 8:00 PM.
  hours: { opens: "10:00", closes: "20:00", days: "Mon–Sun" },
  areaServed: ["Patna", "Bihar", "Muzaffarpur", "Darbhanga", "Gaya", "Ranchi"],
  credit: "Arobuz Digital Engineering",
  keywords: [
    "car detailing in Patna",
    "best car detailing studio Bihar",
    "PPF in Patna",
    "PPF price Patna",
    "ceramic coating Patna price",
    "graphene coating Patna",
    "paint protection film Bihar",
    "Thar PPF Patna",
    "Fortuner ceramic coating",
    "Defender PPF",
    "premium car care Patna",
    "best ceramic coating Patna",
    "कार डिटेलिंग पटना",
  ],
} as const;

export const navLinks = [
  { label: "Paint Check", href: "/#scanner" },
  { label: "Services", href: "/#modules" },
  { label: "Technology", href: "/#technology" },
  { label: "Our Work", href: "/#gallery" },
  { label: "Pricing", href: "/#programs" },
  { label: "Free Report", href: "/#analyzer" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const whatsappLink = (msg = "Hello Detail God India, I'd like to book a free inspection.") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

export const callLink = `tel:${siteConfig.phone}`;
