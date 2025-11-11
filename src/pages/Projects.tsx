import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-solar-panels.jpg";
import {
  Building2,
  Factory,
  Home,
  School,
  Sprout,
  Sun,
  CheckCircle2,
  Zap,
  TrendingDown,
  Leaf,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Lightbulb,
  Target,
  Settings
} from "lucide-react";

const Projects = () => {
  const projectCategories = [
    {
      id: 1,
      icon: <Home className="w-8 h-8" />,
      title: "Residential Rooftop Solar",
      description: "Clean, consistent, and cost-saving solar power solutions for households and apartment buildings. We help homeowners reduce electricity bills and improve energy independence.",
      idealFor: "Homes, bungalows, apartments, gated communities",
      benefits: [
        "Stable & reliable energy supply",
        "Reduced monthly electricity cost",
        "Seamless integration with home electrical setup"
      ],
      color: "from-[#F6A623]/10 to-[#F6A623]/5"
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Solar Installations",
      description: "Solar systems designed for shops, offices, complexes, malls, and commercial buildings that seek cost efficiency and sustainability.",
      idealFor: "Offices, retail spaces, commercial complexes",
      benefits: [
        "Lower operational energy expenses",
        "Enhanced sustainability profile",
        "Smart monitoring for power management"
      ],
      color: "from-[#2E7D32]/10 to-[#2E7D32]/5"
    },
    {
      id: 3,
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial & Factory Solar Power Plants",
      description: "Large-capacity systems built to support heavy energy loads in manufacturing units and industrial facilities.",
      idealFor: "Manufacturing units, warehouses, industrial parks",
      benefits: [
        "Reduces high energy consumption cost",
        "Reliable performance for long operating hours",
        "Helps meet sustainability and compliance goals"
      ],
      color: "from-primary/10 to-primary/5"
    },
    {
      id: 4,
      icon: <School className="w-8 h-8" />,
      title: "Institutional & Campus Solar Solutions",
      description: "Rooftop and ground-mounted systems for schools, colleges, hostels, hospitals, and social organizations.",
      idealFor: "Educational institutions, hospitals, community centers",
      benefits: [
        "Stable power for large facilities",
        "Significant savings over time",
        "Supports environmental responsibility and awareness"
      ],
      color: "from-[#F6A623]/10 to-[#F6A623]/5"
    },
    {
      id: 5,
      icon: <Sprout className="w-8 h-8" />,
      title: "Agriculture / Solar Pumping Systems",
      description: "Sustainable water pumping without dependency on fuel or grid supply.",
      idealFor: "Farms, agricultural land, rural water supply",
      benefits: [
        "Zero running cost",
        "Reliable operation in rural and remote zones",
        "Long-term protection against power shortages"
      ],
      color: "from-[#2E7D32]/10 to-[#2E7D32]/5"
    },
    {
      id: 6,
      icon: <Sun className="w-8 h-8" />,
      title: "Public & Outdoor Solar Lighting",
      description: "Solar street and pathway lighting for community spaces, industrial campuses, societies, parks, and rural areas.",
      idealFor: "Streets, pathways, parks, public spaces",
      benefits: [
        "Night-long illumination with zero electricity cost",
        "Low maintenance build",
        "Works effectively even in low-sunlight regions"
      ],
      color: "from-primary/10 to-primary/5"
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Residential Rooftop Installation – Ahmedabad",
      description: "A compact on-grid solar system designed for daily home usage and long-term savings.",
      capacity: "XX kW",
      systemType: "On-Grid",
      output: "~XXXX units",
      outcome: "Significantly reduced monthly electricity bills and increased energy independence.",
      icon: <Home className="w-6 h-6" />,
      badge: "Residential"
    },
    {
      id: 2,
      title: "Commercial Office Building – Gujarat",
      description: "Solar power plant optimized for consistent daytime load.",
      capacity: "XX kW",
      systemType: "On-Grid with Net Metering",
      output: "~XXXX units",
      outcome: "Lowered energy expenses and boosted sustainability footprint.",
      icon: <Building2 className="w-6 h-6" />,
      badge: "Commercial"
    },
    {
      id: 3,
      title: "Industrial Facility Installation – Sanand",
      description: "Heavy-load solar system engineered for 10+ hours daily usage.",
      capacity: "XX kW",
      systemType: "Hybrid / On-Grid",
      output: "~XXXX units",
      outcome: "Reliable power supply and major reduction in electricity consumption cost.",
      icon: <Factory className="w-6 h-6" />,
      badge: "Industrial"
    },
    {
      id: 4,
      title: "Institutional Campus Solar Lighting – Ahmedabad",
      description: "Outdoor solar street lighting for safe pathways and public areas.",
      capacity: "XX+ Street Lights",
      systemType: "All-in-One LED Solar Units",
      output: "Zero electricity cost",
      outcome: "Zero electricity cost for nighttime lighting with long-lasting operation.",
      icon: <School className="w-6 h-6" />,
      badge: "Institutional"
    }
  ];

  const reliabilityFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Thoughtful System Design",
      description: "Every site is surveyed & planned for best sunlight exposure"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Components",
      description: "Standard-approved panels, inverters, and supporting hardware"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Government Scheme Support",
      description: "We assist with all documentation and compliance"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Long-Term Service",
      description: "Dedicated support for maximum system uptime"
    }
  ];

  const expectedResults = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Lower Electricity Bills",
      description: "Significant reduction in monthly energy costs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Dependable Energy Supply",
      description: "Consistent power generation year-round"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Reduced Carbon Footprint",
      description: "Clean, renewable energy for a greener future"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Future-Proof Power",
      description: "Sustainable energy solution for decades"
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
              <Lightbulb className="w-4 h-4" />
              <span>Where sunlight meets smart solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F6A623' }}>
              Our Projects: Bringing Solar Power to <span className="text-[#2E7D32]">Homes, Businesses, and Industries</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              At MI Creators, we are dedicated to building reliable solar energy systems that deliver real, measurable results.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every project we complete reflects thoughtful design, quality components, and a commitment to long-term performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold transition-colors duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Request Free Site Survey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white font-semibold transition-all duration-300 gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Get Project Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Categories <span className="text-[#2E7D32]">We Work On</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From residential rooftops to large industrial installations, we deliver solar solutions for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#F6A623]/50">
                <CardHeader className={`bg-gradient-to-br ${category.color} pb-4`}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#2E7D32] mb-2 uppercase tracking-wide">Ideal For:</p>
                    <p className="text-sm text-muted-foreground">{category.idealFor}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#2E7D32] mb-3 uppercase tracking-wide">Benefits:</p>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Project <span className="text-[#2E7D32]">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real installations delivering real results across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#F6A623]/50">
                <CardHeader className="bg-gradient-to-r from-[#2E7D32]/10 to-[#F6A623]/10 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-[#F6A623] text-white hover:bg-[#2E7D32]">
                          {project.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center text-white flex-shrink-0 ml-4">
                      {project.icon}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-secondary/30 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Capacity</div>
                      <div className="font-bold text-sm text-[#2E7D32]">{project.capacity}</div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">System Type</div>
                      <div className="font-bold text-sm text-[#2E7D32]">{project.systemType}</div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-3">
                      <div className="text-xs text-muted-foreground mb-1">Monthly Output</div>
                      <div className="font-bold text-sm text-[#2E7D32]">{project.output}</div>
                    </div>
                  </div>

                  <div className="bg-[#2E7D32]/5 border-l-4 border-[#2E7D32] rounded p-4">
                    <p className="text-xs font-semibold text-[#2E7D32] mb-2 uppercase tracking-wide">Outcome:</p>
                    <p className="text-sm text-foreground">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Projects Perform */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Our Projects <span className="text-[#2E7D32]">Perform</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality and precision ensures every installation delivers optimal performance for years to come.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reliabilityFeatures.map((feature, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-[#F6A623]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Results <span className="text-[#2E7D32]">You Can Expect</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Solar is not just a system — it's an upgrade to how you power your life and business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectedResults.map((result, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center mx-auto mb-4 text-white">
                    {result.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2E7D32] to-[#2E7D32]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Your Solar Project Today
            </h2>
            <p className="text-xl mb-4 text-white/90">
              Ready to bring clean energy to your home or organization?
            </p>
            <p className="text-lg mb-8 text-white/80">
              We'll help you choose the right system and handle everything from survey to installation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-[#F6A623] hover:bg-white hover:text-[#2E7D32] text-white font-semibold transition-all duration-300 gap-2"
              >
                Request Free Site Survey
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-[#2E7D32] hover:bg-[#F6A623] hover:text-white font-semibold transition-all duration-300 gap-2"
              >
                Get Project Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2E7D32] font-semibold transition-all duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Talk to an Expert
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
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/70">Email</div>
                  <div className="font-semibold text-sm">micreators@yahoo.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-6 h-6 flex-shrink-0" />
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

export default Projects;
