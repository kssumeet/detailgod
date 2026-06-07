"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * A stylised, procedural concept-vehicle form built from primitives with a
 * deep clearcoat metallic material. It is intentionally abstract — an evocative
 * silhouette of a low GT — so the build ships without external 3D assets while
 * still reading as a premium automotive object under the studio lighting.
 */
export function VehicleModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    // Read the pointer from R3F state inside the loop — no React re-renders.
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -state.pointer.y * 0.12 - 0.04,
      0.05
    );
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06 - 0.2;
  });

  const paint = (
    <meshPhysicalMaterial
      color="#0b1020"
      metalness={0.95}
      roughness={0.18}
      clearcoat={1}
      clearcoatRoughness={0.08}
      reflectivity={1}
      envMapIntensity={1.6}
    />
  );

  const glass = (
    <meshPhysicalMaterial
      color="#05080f"
      metalness={0.2}
      roughness={0.05}
      transmission={0.6}
      transparent
      opacity={0.7}
      envMapIntensity={2}
    />
  );

  return (
    <group ref={group} scale={1.1}>
      {/* Lower body */}
      <RoundedBox args={[4.4, 0.7, 1.9]} radius={0.32} smoothness={8} position={[0, 0, 0]}>
        {paint}
      </RoundedBox>

      {/* Cabin / greenhouse */}
      <RoundedBox args={[2.2, 0.62, 1.5]} radius={0.3} smoothness={8} position={[-0.1, 0.55, 0]}>
        {glass}
      </RoundedBox>

      {/* Hood wedge */}
      <RoundedBox args={[1.5, 0.32, 1.7]} radius={0.18} smoothness={6} position={[1.45, 0.18, 0]}>
        {paint}
      </RoundedBox>

      {/* Accent light bar */}
      <mesh position={[2.18, 0.12, 0]}>
        <boxGeometry args={[0.08, 0.12, 1.5]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={3} toneMapped={false} />
      </mesh>
      <mesh position={[-2.18, 0.12, 0]}>
        <boxGeometry args={[0.08, 0.1, 1.4]} />
        <meshStandardMaterial color="#4FFFB0" emissive="#4FFFB0" emissiveIntensity={2.6} toneMapped={false} />
      </mesh>

      {/* Wheels */}
      {[
        [1.5, -0.35, 0.98],
        [1.5, -0.35, -0.98],
        [-1.5, -0.35, 0.98],
        [-1.5, -0.35, -0.98],
      ].map((p, i) => (
        <group key={i} position={p as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.52, 0.52, 0.42, 32]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.6} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.06, 24]} />
            <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
