"use client";

import { Instagram, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks, whatsappLink } from "@/config/site";
import { services } from "@/config/services";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-edge py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 font-display text-sm font-bold text-accent">
                D
              </span>
              <span className="font-display text-base font-bold tracking-[0.15em] text-white">
                DETAIL GOD <span className="text-accent">INDIA</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Automotive preservation specialists. Advanced paint protection, ceramic engineering and
              vehicle enhancement designed for perfection.
            </p>
            <div className="mt-5 flex gap-2">
              <Social href={siteConfig.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href={whatsappLink()} label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </Social>
            </div>
          </div>

          {/* Services */}
          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.id} href="#modules">
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Contact">
            <FooterLink href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</FooterLink>
            <FooterLink href={`mailto:${siteConfig.email}`}>{siteConfig.email}</FooterLink>
            <li className="flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              {siteConfig.address.locality}, {siteConfig.address.region}
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
          >
            Designed &amp; Developed by{" "}
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text font-bold text-transparent">
              {siteConfig.credit}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:text-accent" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{title}</h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-sm text-muted transition-colors hover:text-white">
        {children}
      </a>
    </li>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/60 hover:text-accent"
    >
      {children}
    </a>
  );
}
