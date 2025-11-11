import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-solar-panels.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Battery, 
  Zap, 
  Shield, 
  Award, 
  TrendingUp,
  CheckCircle2,
  Star,
  ArrowRight,
  Package,
  Gauge,
  Timer,
  Leaf,
  IndianRupee,
  ShoppingCart,
  Phone
} from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "panels", name: "Solar Panels", icon: Sun },
    { id: "inverters", name: "Inverters", icon: Zap },
    { id: "batteries", name: "Batteries", icon: Battery },
  ];

  const productCategories = [
    {
      id: 1,
      category: "panels",
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Panels (Modules)",
      description: "Turn sunlight into clean, reliable energy with high-efficiency solar panels designed for varied roof types and installation needs.",
      productTypes: [
        "Monocrystalline Solar Panels",
        "Polycrystalline Solar Panels",
        "Half-Cut Technology Panels",
        "Bifacial Modules",
        "Premium Residential & Industrial Grade Panels"
      ],
      benefits: [
        "High performance under diverse weather conditions",
        "Long lifespan and stable energy output",
        "Suitable for homes, businesses, and large-scale plants"
      ],
      color: "from-[#F6A623]/20 to-[#F6A623]/5"
    },
    {
      id: 2,
      category: "inverters",
      icon: <Zap className="w-8 h-8" />,
      title: "Solar Inverters (On-Grid / Off-Grid / Hybrid)",
      description: "Your inverter is the brain of the solar system. We provide reliable inverter solutions that ensure smooth energy conversion and management.",
      productTypes: [
        "On-Grid Solar Inverters",
        "Off-Grid Solar Inverters",
        "Hybrid Inverters with Battery Support",
        "Smart Monitoring Inverters"
      ],
      benefits: [
        "Optimized power conversion for maximum energy yield",
        "Seamless switching between grid and solar modes",
        "Smart monitoring and fault detection"
      ],
      color: "from-[#2E7D32]/20 to-[#2E7D32]/5"
    },
    {
      id: 3,
      category: "batteries",
      icon: <Battery className="w-8 h-8" />,
      title: "Solar Batteries & Energy Storage",
      description: "Store excess solar power to use during nights, cloudy days, or power cuts.",
      productTypes: [
        "Lithium-ion Battery Packs",
        "Tubular Solar Batteries",
        "Hybrid Storage Systems",
        "Backup Systems for Homes & Offices"
      ],
      benefits: [
        "Reduced dependency on grid power",
        "Improved backup reliability",
        "Longer life and efficient performance"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 4,
      category: "lighting",
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Street Lights",
      description: "Energy-saving outdoor lighting that operates automatically and works even in low-sunlight conditions.",
      productTypes: [
        "All-in-One Solar Street Lights",
        "Semi-Integrated Solar Lights",
        "Pole-Mounted Outdoor Lights",
        "Campus / Pathway / Garden Lighting"
      ],
      benefits: [
        "Zero electricity cost",
        "Low maintenance and long service life",
        "Ideal for residential, industrial, and municipal spaces"
      ],
      color: "from-[#F6A623]/20 to-[#F6A623]/5"
    },
    {
      id: 5,
      category: "heaters",
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Water Heaters",
      description: "Heat water efficiently without electricity, reducing your monthly energy bills.",
      productTypes: [
        "ETC Solar Water Heaters",
        "FPC Solar Water Heaters",
        "Residential & Industrial Capacity Models"
      ],
      benefits: [
        "Cost-effective energy savings",
        "Works efficiently in most climates",
        "Suitable for homes, hostels, hotels, and industries"
      ],
      color: "from-[#2E7D32]/20 to-[#2E7D32]/5"
    },
    {
      id: 6,
      category: "pumps",
      icon: <Zap className="w-8 h-8" />,
      title: "Solar Pumps & Lift Irrigation Systems",
      description: "Reliable and efficient water pumping powered entirely by sunlight—perfect for agriculture and rural systems.",
      productTypes: [
        "DC Solar Pumps",
        "AC Solar Pumps",
        "Surface and Submersible Pumps"
      ],
      benefits: [
        "Zero fuel and electricity dependency",
        "Durable and low maintenance",
        "Ideal for farms, gardens, and water supply projects"
      ],
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 7,
      category: "bos",
      icon: <Package className="w-8 h-8" />,
      title: "Balance of System (BOS) Components",
      description: "Quality BOS components ensure your solar system runs safely, efficiently, and for years.",
      productTypes: [
        "DC & AC Distribution Boxes (DCDB / ACDB)",
        "MC4 Connectors & DC Cabling",
        "Earthing & Lightning Protection",
        "Mounting Structures for all roof types"
      ],
      benefits: [
        "Enhances system reliability and safety",
        "Supports consistent performance",
        "Compatible with multiple installation designs"
      ],
      color: "from-[#F6A623]/20 to-[#F6A623]/5"
    }
  ];

  const filteredCategories = selectedCategory === "all" 
    ? productCategories 
    : productCategories.filter(p => p.category === selectedCategory);

  const whyChooseOurProducts = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Brands",
      description: "Only top-tier, certified brands with proven track records"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Warranty Backed",
      description: "Comprehensive warranties from 5 to 30 years"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Efficiency",
      description: "Latest technology for maximum energy generation"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Sustainable products with minimal carbon footprint"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Package className="w-4 h-4" />
              <span>Where sunlight meets smart solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F6A623' }}>
              Products: Powering Progress with <span className="text-[#2E7D32]">Reliable Solar Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              At MI Creators, we offer carefully selected solar products designed for long-term performance, efficiency, and durability.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're upgrading your home, business, or industrial facility, our product range ensures dependable power generation with low maintenance and maximum savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold transition-colors duration-300 gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Request Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white font-semibold transition-all duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseOurProducts.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`gap-2 ${
                    selectedCategory === cat.id 
                      ? "bg-[#2E7D32] hover:bg-[#F6A623]" 
                      : "hover:border-[#2E7D32] hover:text-[#2E7D32]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#2E7D32]">Product Range</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solar solutions for every need—from panels to complete system components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#F6A623]/50 hover:-translate-y-2 flex flex-col h-full">
                <CardHeader className={`bg-gradient-to-br ${category.color} pb-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F6A623]/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-xl mb-2 group-hover:text-[#2E7D32] transition-colors duration-300">{category.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Benefits */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-bold text-xs mb-3 text-[#2E7D32] flex items-center gap-2 uppercase tracking-wide">
                      <Award className="w-3.5 h-3.5" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground font-medium leading-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <Button 
                      className="w-full bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold gap-2 transition-all duration-300"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Get Quote
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white font-semibold gap-2 transition-all duration-300"
                      size="sm"
                    >
                      <Phone className="w-4 h-4" />
                      Talk to Expert
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Selection Assistance */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Help Choosing the <span className="text-[#2E7D32]">Right Products?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Selecting the correct system depends on several key factors. We guide you through every step, ensuring the solution fits your energy goals and long-term planning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F6A623]/10 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-[#F6A623]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Roof Size & Direction</h4>
                    <p className="text-sm text-muted-foreground">Optimal panel placement for maximum sunlight capture</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E7D32]/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Electricity Usage Patterns</h4>
                    <p className="text-sm text-muted-foreground">Right-sized system based on your consumption</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F6A623]/10 flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-5 h-5 text-[#F6A623]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Budget & Subsidy Eligibility</h4>
                    <p className="text-sm text-muted-foreground">Maximize savings with government schemes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2E7D32]/10 flex items-center justify-center flex-shrink-0">
                    <Battery className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Backup Requirements</h4>
                    <p className="text-sm text-muted-foreground">Battery storage for uninterrupted power</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get Product Recommendation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Warranty & Service Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Warranty & <span className="text-[#2E7D32]">After-Sales Support</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your long-term solar journey is supported by our dedicated service team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center mx-auto mb-4 text-white">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">Genuine Components</h3>
                <p className="text-sm text-muted-foreground">
                  We supply genuine and approved components backed by manufacturer warranties
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center mx-auto mb-4 text-white">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Expert installation by certified technicians ensuring optimal performance
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center mx-auto mb-4 text-white">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">AMC / O&M Services</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing AMC and O&M service options for smooth, long-term performance
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E7D32] to-[#2E7D32]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Let's help you choose the right solar product configuration for your home or business.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Request a product recommendation or book a free site survey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-[#F6A623] hover:bg-white hover:text-[#2E7D32] text-white font-semibold transition-all duration-300 gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Get Product Recommendation
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-[#2E7D32] hover:bg-[#F6A623] hover:text-white font-semibold transition-all duration-300 gap-2"
              >
                Request Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2E7D32] font-semibold transition-all duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Talk to Our Solar Experts
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/70">Call Us</div>
                  <div className="font-semibold">7878006585</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-sm text-white/70">Email</div>
                  <div className="font-semibold text-sm">micreators@yahoo.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-sm text-white/70">Location</div>
                  <div className="font-semibold text-sm">Sarkhej, Ahmedabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
