import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const defaultProperty = {
  verified: true,
  title: "1BHK Apartment for Rent",
  location: "Andheri West, Mumbai",
  owner: "Proffessional | 26 Yrs Old | Male",
  price: "₹45K",
  deposit: "+1.8L Deposit",
  area: "720 sq ft",
  type: "1BHK",
  furnishing: "Semi Furnished",
  amenities: ["1 Bath", "East Facing", "1 Open Parking", "Floor 12/22"],
  contactName: "Suraj",
};

interface PropertiesSectionProps {
  title: string;
  subtitle: string;
}

const PropertiesSection = ({ title, subtitle }: PropertiesSectionProps) => {
  const images = [property1, property2, property1, property2];

  return (
    <section className="py-12 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground mb-8">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <PropertyCard key={i} image={img} {...defaultProperty} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;
