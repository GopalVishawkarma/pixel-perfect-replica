const Footer = () => {
  const columns = [
    {
      title: "About Us",
      links: ["About Us", "How OwnersLane Works", "Broker-Free Promise", "Verification Process", "Managed vs Self Listing", "Careers"],
    },
    {
      title: "Properties",
      links: ["Properties for Rent Near Me", "Properties for Rent Near Me", "Commercial Properties Near Me", "Residential Properties", "Commercial Properties"],
    },
    {
      title: "Explore",
      links: ["Explore by Location", "Explore by Property Type", "Visit Residential Properties", "Visit Commercial Properties", "Explore by Furnishing Type"],
    },
    {
      title: "For Property Owners",
      links: ["List Property", "Self Listing Plans", "Managed Property Services", "Pricing & Plans", "Post Property for Free"],
    },
    {
      title: "Help & Resources",
      links: ["Frequently Asked Questions", "Safety & Anti-Broker Policy", "Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy"],
    },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">OwnersLane</h3>
            <p className="text-xs text-primary-foreground/60 mb-1">Address</p>
            <p className="text-sm font-semibold mb-4">
              789 Queensberry Street, North Melbourne VIC 3051, Australia.
            </p>
            <p className="text-xs text-primary-foreground/60 mb-1">Total Free Customer Care</p>
            <p className="text-sm font-semibold mb-4">+(088) 123 456 789</p>
            <p className="text-xs text-primary-foreground/60 mb-1">Connect With Support?</p>
            <p className="text-sm font-semibold">hi@homez.com</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-primary-foreground/60">©OwnersLane – All rights reserved</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-sm text-primary-foreground/60">Follow Us</span>
            {["📷", "📘", "✖", "💼", "▶"].map((icon, i) => (
              <a key={i} href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-lg">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
