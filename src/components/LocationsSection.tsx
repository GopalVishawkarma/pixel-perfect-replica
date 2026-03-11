const locations = [
  "Andheri", "Panvel", "Thane", "Kalyan",
  "Dadar", "Kharghar", "Dombivali", "Sion",
];

const LocationBadge = ({ name }: { name: string }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors">
    <div className="w-14 h-14 rounded-full border-2 border-red-500 flex items-center justify-center bg-background">
      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
        <span className="text-primary-foreground text-[8px] font-bold text-center leading-tight">
          {name}
        </span>
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-foreground text-sm">{name}</h4>
      <p className="text-xs text-muted-foreground">0 Properties</p>
    </div>
  </div>
);

const LocationsSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
        Explore Properties By Location
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-10">
        India's preferred workspace partner welcomes you to its world of amazing experiences.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((loc) => (
          <LocationBadge key={loc} name={loc} />
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
