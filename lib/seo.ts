import { siteConfig } from "@/config/site";
import { faqs, missionLogs } from "@/config/content";
import { services } from "@/config/services";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoDetailing", "AutomotiveBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    sameAs: [siteConfig.instagram],
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(missionLogs.length),
      bestRating: "5",
    },
    review: missionLogs.map((m) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: String(m.rating), bestRating: "5" },
      author: { "@type": "Person", name: m.client },
      reviewBody: m.note,
      itemReviewed: { "@type": "Service", name: m.treatment },
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
  };
}

export function serviceSchema() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    serviceType: s.title,
    provider: { "@type": "AutoDetailing", name: siteConfig.name, url: siteConfig.url },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
