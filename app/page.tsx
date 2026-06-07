import dynamic from "next/dynamic";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Hero } from "@/sections/hero";
import { Scanner } from "@/sections/scanner";
import { Storytelling } from "@/sections/storytelling";
import { Services } from "@/sections/services";
import { Marquee } from "@/components/marquee";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const ProtectionVisualizer = dynamic(() =>
  import("@/sections/protection-visualizer").then((m) => m.ProtectionVisualizer)
);
const BeforeAfter = dynamic(() => import("@/sections/before-after").then((m) => m.BeforeAfter));
const Technology = dynamic(() => import("@/sections/technology").then((m) => m.Technology));
const Gallery = dynamic(() => import("@/sections/gallery").then((m) => m.Gallery));
const Testimonials = dynamic(() => import("@/sections/testimonials").then((m) => m.Testimonials));
const Process = dynamic(() => import("@/sections/process").then((m) => m.Process));
const Analyzer = dynamic(() => import("@/sections/analyzer").then((m) => m.Analyzer));
const Pricing = dynamic(() => import("@/sections/pricing").then((m) => m.Pricing));
const Contact = dynamic(() => import("@/sections/contact").then((m) => m.Contact));
const FAQ = dynamic(() => import("@/sections/faq").then((m) => m.FAQ));
const Footer = dynamic(() => import("@/sections/footer").then((m) => m.Footer));

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Scanner />
        <Storytelling />
        <Services />
        <Marquee />
        <ProtectionVisualizer />
        <BeforeAfter />
        <Technology />
        <Gallery />
        <Testimonials />
        <Process />
        <Analyzer />
        <Pricing />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
