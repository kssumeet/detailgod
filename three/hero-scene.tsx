"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float, Lightformer, AdaptiveDpr } from "@react-three/drei";
import { VehicleModel } from "./vehicle-model";
import { Particles } from "./particles";
import { useIsMobile } from "@/hooks/use-media-query";

export default function HeroScene() {
  const isMobile = useIsMobile();
  const wrapRef = useRef<HTMLDivElement>(null);
  // Only run the render loop while the hero is on screen.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <Canvas
        dpr={[1, isMobile ? 1.25 : 1.6]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 1.4, 7], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <color attach="background" args={["#030303"]} />
        <fog attach="fog" args={["#030303", 8, 22]} />

        <ambientLight intensity={0.4} />
        <spotLight position={[6, 8, 4]} angle={0.5} penumbra={1} intensity={2.2} color="#00D4FF" />
        <spotLight position={[-6, 5, -3]} angle={0.6} penumbra={1} intensity={1.6} color="#4FFFB0" />
        <directionalLight position={[0, 6, 6]} intensity={1} />

        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
            <VehicleModel />
          </Float>
          {/* Static shadow (frames={1}) — renders once instead of every frame. */}
          <ContactShadows
            position={[0, -0.95, 0]}
            opacity={0.55}
            scale={14}
            blur={2.6}
            far={4}
            frames={1}
            color="#00D4FF"
          />
          <Particles count={isMobile ? 350 : 800} />

          {/* Procedural studio environment — no external HDR fetch needed. */}
          <Environment resolution={128} frames={1}>
            <Lightformer intensity={2} position={[0, 4, -6]} scale={[10, 6, 1]} color="#00D4FF" />
            <Lightformer intensity={1.4} position={[-5, 2, 2]} scale={[6, 6, 1]} color="#4FFFB0" />
            <Lightformer intensity={1.2} position={[5, 1, 3]} scale={[6, 6, 1]} color="#ffffff" />
            <Lightformer intensity={3} position={[0, -2, 4]} scale={[8, 2, 1]} color="#0a0a0a" />
          </Environment>
        </Suspense>

        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
