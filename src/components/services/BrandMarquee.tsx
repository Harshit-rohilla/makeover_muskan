const BRANDS = [
  "MAC",
  "NARS",
  "Charlotte Tilbury",
  "Huda Beauty",
  "Laura Mercier",
  "Urban Decay",
  "Smashbox",
  "BECCA",
  "Too Faced",
  "Dior Beauty",
  "Tarte",
  "d'alba",
];

function BrandItem({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-6 shrink-0">
      <span
        className="text-cream/80 text-sm sm:text-base font-medium tracking-widest uppercase whitespace-nowrap"
        style={{ fontFamily: "var(--font-display), serif" }}
      >
        {name}
      </span>
      <span className="text-rose/60 text-xs" aria-hidden="true">◆</span>
    </span>
  );
}

export default function BrandMarquee() {
  return (
    <section
      className="w-full py-14 sm:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-charcoal)" }}
      aria-label="Brands in our makeup kit"
    >
      <p
        className="text-center text-xs uppercase tracking-[0.25em] text-cream/40 mb-8"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Brands in My Kit
      </p>

      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee">
          {/* Render twice so the loop is seamless */}
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <BrandItem key={`${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
