const sectors = [107, 76, 51, 143, 104, 73, 52];

const PropertyLinks = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto border-t border-border">
      {["Visit Residential Properties", "Visit Comercial Properties"].map((title) => (
        <div key={title} className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground mb-6">
            {title.includes("Residential")
              ? "Visit Aadhaar-verified homes and explore properties that are physically checked for authenticity."
              : "Visit Offices, Shops, And Commercial Spaces That Are Verified And Ready For Business Use."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            {Array.from({ length: 8 }).map((_, col) =>
              sectors.map((s) => (
                <a
                  key={`${col}-${s}`}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  Flats For Sale In Sector {s}
                </a>
              ))
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PropertyLinks;
