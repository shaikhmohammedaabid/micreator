import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, FileText, Home, MapPin, Phone, Sun, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import heroBackground from "@/assets/hero-solar-panels.jpg";


const Services = () => {
  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Experienced Team",
      description: "Skilled professionals with years of experience in solar project execution and technology support."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Government Support",
      description: "Expert guidance on government renewable-energy initiatives and subsidy schemes."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Future-Ready Solutions",
      description: "Cutting-edge solar technology designed for tomorrow's energy needs."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Affordable Power",
      description: "Transform your rooftop into an efficient, cost-effective power source."
    }
  ];

  const processSteps = [
    {
      title: "Site Survey & Feasibility",
      description: "Our experts evaluate your property and energy needs to design the perfect solar solution.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "System Design & Compliance",
      description: "We handle all technical designs, net-metering applications, and subsidy paperwork.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation by certified technicians with minimal disruption to your property.",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Monitoring & Maintenance",
      description: "Ongoing support, performance monitoring, and regular maintenance for optimal system performance.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground} 
            alt="Solar Panels Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#F6A623' }}>
              Trusted Solar Services for <span className="text-primary">Homes & Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">Where sunlight meets smart solutions.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold transition-colors duration-300"
              >
                Get Free Site Survey
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-[#2E7D32] hover:bg-[#F6A623] text-white font-semibold transition-colors duration-300"
              >
                Request Quote
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Experienced Team</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Govt-backed Schemes</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Future-ready Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className=" bg-background">
        <div className="container mx-auto px-4">
          <ServicesGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">MI Creators?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to delivering exceptional solar solutions with a focus on quality and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.03)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              <span>Simple & Transparent</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A simple, transparent journey from initial consultation to system activation and beyond.
            </p>
          </div>
          
          {/* Process Timeline */}
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.75rem] top-24 w-0.5 h-32 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
                )}

                {/* Step Container */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 group">
                  {/* Number Badge with Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-[#F6A623] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                        <span className="text-3xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>
                    {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-[#F6A623] transition-all duration-500 group-hover:w-full"
                        style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      Step {index + 1} of {processSteps.length}
                    </span>
                  </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex flex-col items-center gap-6 bg-card/50 backdrop-blur-sm p-10 rounded-2xl border-2 border-primary/20 shadow-xl max-w-2xl mx-auto">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Ready to Get <span className="text-primary">Started?</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Let our experts guide you through every step of your solar journey
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Your Free Survey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2E7D32]/5 via-background to-[#F6A623]/5">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2E7D32]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#F6A623]/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32]/10 to-[#F6A623]/10 text-[#2E7D32] px-5 py-2.5 rounded-full mb-6 text-sm font-semibold border border-[#2E7D32]/20">
                <FileText className="w-4 h-4" />
                <span>Government Schemes & Subsidies</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Maximize Your Savings with <span className="text-[#2E7D32]">Government Support</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                MI Creators is your trusted partner in navigating government renewable-energy initiatives, ensuring you get maximum benefits and hassle-free approvals.
              </p>
            </div>

            {/* Split Layout: Content + Benefits */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Main Content Card */}
              <div className="order-2 lg:order-1">
                <Card className="p-8 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30 shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Complete Documentation Support</h3>
                        <p className="text-muted-foreground">
                          We handle all paperwork, applications, and liaison with government bodies so you don't have to worry about complex procedures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Net-Metering Approvals</h3>
                        <p className="text-muted-foreground">
                          Expert assistance with electricity board applications, ensuring quick approvals and seamless grid connectivity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#F6A623] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Subsidy Maximization</h3>
                        <p className="text-muted-foreground">
                          We identify all eligible subsidies and incentives, helping you reduce upfront costs significantly.
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                          <span>State Subsidies</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#F6A623]" />
                          <span>Central Schemes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Tax Benefits</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right: Benefits Grid */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 text-center bg-gradient-to-br from-[#2E7D32]/10 to-[#2E7D32]/5 border-2 border-[#2E7D32]/20 hover:border-[#2E7D32]/40 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-[#2E7D32] mb-2">30-40%</div>
                    <p className="text-sm font-medium text-muted-foreground">Subsidy on Residential Systems</p>
                  </Card>
                  
                  <Card className="p-6 text-center bg-gradient-to-br from-[#F6A623]/10 to-[#F6A623]/5 border-2 border-[#F6A623]/20 hover:border-[#F6A623]/40 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-[#F6A623] mb-2">100%</div>
                    <p className="text-sm font-medium text-muted-foreground">Documentation Assistance</p>
                  </Card>
                  
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-primary mb-2">Fast</div>
                    <p className="text-sm font-medium text-muted-foreground">Net-Metering Approvals</p>
                  </Card>
                  
                  <Card className="p-6 text-center bg-gradient-to-br from-[#2E7D32]/10 to-[#F6A623]/10 border-2 border-[#2E7D32]/20 hover:border-[#F6A623]/40 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#2E7D32] to-[#F6A623] bg-clip-text text-transparent mb-2">Zero</div>
                    <p className="text-sm font-medium text-muted-foreground">Hidden Charges</p>
                  </Card>
                </div>

                {/* Info Box */}
                <Card className="p-6 bg-gradient-to-r from-[#2E7D32]/5 to-[#F6A623]/5 border-2 border-dashed border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">Recognized Partner</h4>
                      <p className="text-sm text-muted-foreground">
                        MI Creators is an authorized partner under PM Surya Ghar Yojana and Gujarat state solar schemes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center animate-fade-in">
              <Card className="inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-card to-card/50 backdrop-blur-sm border-2 border-primary/20 shadow-2xl max-w-4xl">
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Need Help with Subsidy Applications?
                  </h3>
                  <p className="text-muted-foreground">
                    Our experts will guide you through every step and maximize your savings.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="bg-[#2E7D32] hover:bg-[#F6A623] text-white font-semibold transition-colors duration-300 gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Learn About Subsidies
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold transition-all duration-300 gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Experts
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
