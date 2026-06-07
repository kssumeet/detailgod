"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Loader2, CheckCircle2, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { HudFrame } from "@/components/ui/hud-frame";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { submitLead } from "@/lib/leads";
import { siteConfig, whatsappLink, callLink } from "@/config/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    await submitLead({ ...values, source: "contact" });
    setSubmitted(true);
  };

  const mapSrc = `https://maps.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}&z=12&output=embed`;

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* animated backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-accent/10 blur-[100px] will-change-transform"
        whileInView={{ x: [0, 60, 0], y: [0, 40, 0] }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-highlight/10 blur-[100px] will-change-transform"
        whileInView={{ x: [0, -50, 0], y: [0, -30, 0] }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-edge relative">
        <SectionHeading
          eyebrow="Initiate Contact // Book"
          title="Reserve Your Bay"
          description="Book a consultation or send your vehicle details. Our preservation engineers respond within hours."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: contact + map */}
          <div className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={whatsappLink()} className="panel group flex items-center gap-3 p-4 transition-colors hover:border-highlight/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-highlight/30 bg-highlight/5 text-highlight">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-white">WhatsApp</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">Instant reply</div>
                </div>
              </a>
              <a href={callLink} className="panel group flex items-center gap-3 p-4 transition-colors hover:border-accent/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/5 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-white">Call Us</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{siteConfig.phone}</div>
                </div>
              </a>
            </div>

            <div className="panel flex items-start gap-3 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="text-sm text-muted">
                <span className="font-display font-bold text-white">{siteConfig.name}</span>
                <br />
                {siteConfig.address.locality}, {siteConfig.address.region}, {siteConfig.address.country}
              </div>
            </div>

            <div className="panel relative min-h-[220px] flex-1 overflow-hidden p-1.5">
              <HudFrame />
              <iframe
                title="Detail God India location"
                src={mapSrc}
                className="h-full min-h-[210px] w-full rounded-xl border-0 grayscale invert-[0.92] [color-scheme:light]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: appointment form */}
          <div className="panel relative p-6 md:p-8">
            <HudFrame />
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[360px] flex-col items-center justify-center gap-3 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-highlight" />
                <h3 className="font-display text-2xl font-bold text-white">Appointment Requested</h3>
                <p className="max-w-sm text-sm text-muted">
                  We&apos;ve received your details. A preservation engineer will confirm your booking shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name?.message}>
                    <input {...register("name")} className={inputCls} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className={inputCls} placeholder="+91…" inputMode="tel" />
                  </Field>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} className={inputCls} placeholder="you@email.com" inputMode="email" />
                  </Field>
                  <Field label="Vehicle Model" error={errors.vehicleModel?.message}>
                    <input {...register("vehicleModel")} className={inputCls} placeholder="e.g. Audi RS7" />
                  </Field>
                </div>
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="Which service are you interested in?"
                  />
                </Field>
                <Button type="submit" size="lg" variant="primary" className="mt-2 w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Book Appointment <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-white/10 bg-background/60 px-3 py-2.5 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-accent/60";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{label}</span>
      {children}
      {error && <span className="mt-1 block font-mono text-[10px] text-warning">{error}</span>}
    </label>
  );
}
