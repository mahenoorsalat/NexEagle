import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import nexeagleLogo from "@/assets/nexeagle-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Why NexEagle", href: "#why-nexeagle" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={nexeagleLogo} alt="NexEagle Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NexEagle
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1">AI-Powered Healthcare</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+918074906808" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 8074906808</span>
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a href="tel:+918074906808" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8074906808</span>
              </a>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                Book Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
