import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mi-creators-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Decorative Top Accent Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] animate-pulse" />
      
      <header
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "mt-2 mx-4"
            : "mt-4 mx-4"
        }`}
      >
        <div 
          className="relative overflow-hidden rounded-2xl transition-all duration-500 bg-background/80 backdrop-blur-xl shadow-2xl border border-primary/20"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse opacity-50" />
          
          <div className="relative container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo with Animation */}
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  {/* <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300 rounded-full" /> */}
                  <img
                    src={logo}
                    alt="MI Creators Solar Energy"
                    className="relative h-12 md:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                        location.pathname === link.path
                          ? "text-accent"
                          : "text-foreground group-hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-300 ${
                        location.pathname === link.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                    {/* Hover Background */}
                    <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-all duration-300 group"
                >
                  <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Call Us</span>
                </a>
                <Button 
                  size="lg" 
                  className="relative overflow-hidden bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold rounded-xl shadow-lg hover:shadow-accent/50 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                    Get Free Quote
                  </span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? "bg-accent text-white rotate-90" 
                    : "bg-primary/10 text-foreground hover:bg-accent/20"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <nav className="lg:hidden mt-6 pb-4 space-y-2 animate-fade-in">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 animate-slide-up ${
                      location.pathname === link.path
                        ? "bg-accent/20 text-accent border-l-4 border-accent"
                        : "text-foreground hover:bg-primary/10 hover:translate-x-2"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-border mt-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 py-3 px-4 text-sm font-medium text-foreground hover:text-accent transition-colors rounded-lg hover:bg-primary/10"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Us: +1 234 567 890</span>
                  </a>
                  <Button 
                    size="lg" 
                    className="w-full bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Get Free Quote
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
