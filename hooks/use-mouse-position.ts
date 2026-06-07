"use client";

import { useEffect, useRef, useState } from "react";

interface Pointer {
  x: number; // -1 .. 1 relative to viewport center
  y: number;
}

/** Normalised pointer position, throttled to animation frames. */
export function useMousePosition(): Pointer {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setPointer({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
        frame.current = undefined;
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return pointer;
}
