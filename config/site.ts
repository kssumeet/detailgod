export const siteConfig = {
  name: "Detail God India",
  shortName: "DETAIL GOD",
  legalName: "Detail God India",
  tagline: "The Future of Automotive Preservation.",
  description:
    "Advanced paint protection, ceramic engineering and vehicle enhancement designed for perfection. Detail God India are automotive preservation specialists for luxury and performance vehicles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://detailgodindia.com",
  locale: "en_IN",
  city: "India",
  email: "contact@detailgodindia.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+919999999999",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999",
  instagram: "https://instagram.com/detailgodindia",
  address: {
    street: "Innovation Drive",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560001",
    country: "IN",
  },
  geo: { lat: 12.9716, lng: 77.5946 },
  credit: "Arobuz Digital Engineering",
  keywords: [
    "Paint Protection Film India",
    "Ceramic Coating",
    "Graphene Coating",
    "Paint Correction",
    "Luxury Car Detailing",
    "PPF Bengaluru",
    "Automotive Preservation",
    "Detail God India",
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
