const WORDS = [
  "PAINT PROTECTION FILM",
  "CERAMIC COATING",
  "GRAPHENE PROTECTION",
  "CAR DETAILING",
  "VEHICLE RESTORATION",
  "CUSTOM PAINTING",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-card/30 py-5">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-bold tracking-[0.15em] text-white/30">
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8" aria-hidden>
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg font-bold tracking-[0.15em] text-white/30">
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
