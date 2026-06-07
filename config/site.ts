export const siteConfig = {
  name: "Detail God India",
  shortName: "DETAIL GOD",
  legalName: "Detail God",
  tagline: "The Future of Automotive Preservation.",
  positioning: "Where technology, people and car care converge.",
  description:
    "Detail God Patna — where technology, people and car care converge. PPF, ceramic & graphene coating, detailing, restoration and painting for luxury and performance vehicles in Patna, Bihar.",
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
  credit: "Arobuz Digital Engineering",
  keywords: [
    "Car Detailing Patna",
    "Paint Protection Film Patna",
    "PPF Patna",
    "Ceramic Coating Patna",
    "Graphene Coating Patna",
    "Car Restoration Patna",
    "Car Painting Patna",
    "Detail God Patna",
  ],
} as const;

export const navLinks = [
  { label: "Scanner", href: "#scanner" },
  { label: "Modules", href: "#modules" },
  { label: "Technology", href: "#technology" },
  { label: "Gallery", href: "#gallery" },
  { label: "Programs", href: "#programs" },
  { label: "Analyzer", href: "#analyzer" },
  { label: "Contact", href: "#contact" },
] as const;

export const whatsappLink = (msg = "Hello Detail God India, I'd like to book a consultation.") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

export const callLink = `tel:${siteConfig.phone}`;
