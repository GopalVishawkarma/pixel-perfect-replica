import { Phone, Heart, User, Download } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-primary px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-primary text-xs font-bold">🤝</span>
          </div>
          <div>
            <span className="text-primary-foreground font-semibold text-sm">OwnersLane</span>
            <span className="text-primary-foreground text-xs ml-1">"Own Your Lane"</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">★</span>
              ))}
              <span className="text-primary-foreground text-xs ml-1">(5.0)</span>
            </div>
          </div>
        </div>
        <button className="border border-primary-foreground text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary-foreground hover:text-primary transition-colors">
          Download App <Download size={16} />
        </button>
      </div>

      {/* Main nav */}
      <nav className="bg-background px-6 lg:px-12 py-3 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-foreground">OwnersLane</h1>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">For Buyers</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">For Tenants</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">For Owners</a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Pricings</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+9168588666" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone size={16} /> +91 685 88666
          </a>
          <Heart size={20} className="text-foreground cursor-pointer hover:text-primary" />
          <button className="border-2 border-primary text-primary px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            Post Property <span className="ml-1 text-xs">₹999</span>
          </button>
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center cursor-pointer hover:bg-muted">
            <User size={18} className="text-foreground" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
