import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { serviceBySlug, serviceSlugs } from "@/config/service-pages";
import { serviceDetailSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

// Only the six service slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const detail = serviceBySlug(service);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `/${detail.slug}` },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}/${detail.slug}`,
      title: `${detail.metaTitle} | ${siteConfig.name}`,
      description: detail.metaDescription,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${detail.metaTitle} | ${siteConfig.name}`,
      description: detail.metaDescription,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const detail = serviceBySlug(service);
  if (!detail) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceDetailSchema(detail)) }}
      />
      <ServicePage detail={detail} />
    </>
  );
}
