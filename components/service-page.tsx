"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, ScanLine } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { HudFrame } from "@/components/ui/hud-frame";
import { Process } from "@/sections/process";
import { Pricing } from "@/sections/pricing";
import { Testimonials } from "@/sections/testimonials";
import { FAQ } from "@/sections/faq";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { serviceDetails } from "@/config/service-pages";
import { services } from "@/config/services";
import { siteConfig, whatsappLink } from "@/config/site";
import { fadeUp, inViewOnce, stagger } from "@/animations/variants";
import type { ServiceDetail } from "@/types";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export function ServicePage({ detail }: { detail: ServiceDetail }) {
  const related = detail.related
    .map((id) => {
      const sd = serviceDetails.find((s) => s.id === id);
      const svc = services.find((s) => s.id === id);
      return sd && svc ? { ...sd, icon: svc.icon } : null;
    })
    .filter(Boolean) as (ServiceDetail & { icon: (typeof services)[number]["icon"] })[];

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden">
          <Image
            src={img(detail.heroImageId)}
            alt={detail.heroTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

          <div className="container-edge relative z-10 pb-16 pt-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Link href="/" className="transition-colors hover:text-accent">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/#modules" className="transition-colors hover:text-accent">Services</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">{detail.heroTitle}</span>
            </nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="max-w-3xl">
              <motion.span variants={fadeUp} className="eyebrow">{detail.heroEyebrow}</motion.span>
              <motion.h1
                variants={fadeUp}
                className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight text-gradient sm:text-5xl md:text-6xl"
              >
                {detail.heroTitle}
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {detail.heroIntro}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Button asChild size="lg" variant="primary">
                    <a href="#contact"><ScanLine className="h-4 w-4" /> Book Free Inspection</a>
                  </Button>
                </Magnetic>
                <Button asChild size="lg" variant="outline">
                  <a href={whatsappLink(`Hi Detail God India, I'd like a quote for ${detail.heroTitle}.`)}>
                    WhatsApp Us <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <span className="ml-1 font-mono text-xs text-muted">
                  From <span className="font-bold text-accent">{detail.priceFrom}</span>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative py-24 md:py-32">
          <div className="container-edge">
            <SectionHeading
              eyebrow="Why It Matters"
              title={`What ${detail.heroTitle.split(" in ")[0]} Does For Your Car`}
              description="Engineered for how you actually drive in Patna and Bihar — not a generic spec sheet."
            />
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {detail.benefits.map((b) => (
                <motion.div key={b.title} variants={fadeUp} className="panel p-6">
                  <Check className="h-6 w-6 text-highlight" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY INDIA */}
        <section className="relative overflow-hidden py-20">
          <div className="pointer-events-none absolute inset-0 bg-accent-radial opacity-40" />
          <div className="container-edge relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inViewOnce}
              className="panel relative overflow-hidden p-8 md:p-10"
            >
              <HudFrame />
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
                <div>
                  <span className="eyebrow">Built For Indian Conditions</span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                    Made for Patna&apos;s roads &amp; weather
                  </h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {detail.whyIndia.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shared, conversion-focused sections */}
        <Process />
        <Pricing />
        <Testimonials />

        {/* Service-specific FAQ */}
        <FAQ
          items={detail.faqs}
          eyebrow="FAQ // This Service"
          title={`${detail.heroTitle.split(" in ")[0]} — Common Questions`}
          description="Quick answers about this service in Patna. Still unsure? WhatsApp us — we reply in Hindi or English."
        />

        {/* Related services */}
        {related.length > 0 && (
          <section className="relative py-20">
            <div className="container-edge">
              <span className="eyebrow">Explore More</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">Related Services</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="panel group flex items-center justify-between gap-4 p-6 transition-colors hover:border-accent/50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-accent">
                        <r.icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-lg font-bold text-white">
                        {r.heroTitle.split(" in ")[0]}
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
    </>
  );
}
