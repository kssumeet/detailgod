"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig, callLink, whatsappLink } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/80 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <nav className="container-edge flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-md border border-accent/50" />
              <span className="absolute inset-0 animate-pulse-ring rounded-md border border-accent/40" />
              <span className="font-display text-sm font-bold text-accent">D</span>
            </span>
            <span className="font-display text-sm font-bold tracking-[0.18em] text-white">
              DETAIL GOD
              <span className="ml-1 text-accent">·</span>
              <span className="ml-1 font-mono text-[10px] tracking-ultra text-muted">IN</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={callLink}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent/60 hover:text-accent sm:flex"
              aria-label={`Call ${siteConfig.name}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <Magnetic className="hidden md:block">
              <Button asChild size="sm" variant="primary">
                <a href={whatsappLink()}>Book Consultation</a>
              </Button>
            </Magnetic>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-edge flex h-16 items-center justify-between md:h-20">
              <span className="font-display text-sm font-bold tracking-[0.18em] text-white">MENU</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="container-edge flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="border-b border-border py-4 font-display text-3xl font-bold text-white"
                >
                  <span className="mr-3 font-mono text-xs text-accent">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
              <Button asChild size="lg" variant="primary" className="mt-8">
                <a href={whatsappLink()}>Book Consultation</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
