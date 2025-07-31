import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2, Code, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Civil Construction", href: "#construction" },
    { name: "MEP Services", href: "#mep" },
    { name: "Interior Design", href: "#interior" },
    { name: "Electrical & Fixtures", href: "#electrical" },
    { name: "IT Development", href: "#it-services" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              EPC<span className="text-primary">Solutions</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.href)}
                      className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-feature rounded-md transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Contact
            </a>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>7587542440</span>
              </div>
              <Button size="sm">
                Get Quote
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="space-y-2">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-feature rounded-md transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.href)}
                      className="block w-full text-left py-1 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-feature rounded-md transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>

              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>7587542440</span>
                </div>
                <Button size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;