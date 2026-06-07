import { cn } from "@/lib/utils";

/** Decorative HUD corner brackets — used to frame panels like a diagnostic UI. */
export function HudFrame({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <span className="hud-corner left-0 top-0 border-l border-t" />
      <span className="hud-corner right-0 top-0 border-r border-t" />
      <span className="hud-corner bottom-0 left-0 border-b border-l" />
      <span className="hud-corner bottom-0 right-0 border-b border-r" />
    </div>
  );
}
