import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/mi-creators-logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Solar On-Grid Systems",
    "Solar Off-Grid Systems",
    "Solar Water Pumps",
    "Solar Street Lights",
    "EV Chargers",
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="MI Creators" className="h-16 mb-6" />
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering homes and businesses with clean, renewable solar energy solutions.
              Creating a sustainable future, one installation at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-start text-white/70 hover:text-accent transition-colors group"
              >
                <Phone className="h-5 w-5 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+1 234 567 890</span>
              </a>
              <a
                href="mailto:info@micreators.com"
                className="flex items-start text-white/70 hover:text-accent transition-colors group"
              >
                <Mail className="h-5 w-5 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>info@micreators.com</span>
              </a>
              <div className="flex items-start text-white/70">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Godown No.: 8, Omega Estate, Nr. Kiran Motors, Sarkhej-Sanand Road, Sarkhej, Ahmedabad-382210, Gujarat, India.</span>
              </div>
            </div>

            <Button className="mt-6 bg-accent hover:bg-accent/90 w-full">
              Request a Callback
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MI Creators Solar Energy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
