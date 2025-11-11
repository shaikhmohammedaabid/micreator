import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroBackground from "@/assets/hero-solar-panels.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  Headphones,
  Shield,
  Settings,
  FileCheck,
  Lightbulb
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "",
    systemType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "7878006585",
      description: "Call us for immediate assistance",
      color: "from-[#F6A623] to-[#F6A623]/80"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "micreators@yahoo.com",
      description: "Send us your queries anytime",
      color: "from-[#2E7D32] to-[#2E7D32]/80"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "www.micreators.in",
      description: "Visit our online presence",
      color: "from-primary to-primary/80"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      value: "Godown No. 8, Omega Estate, Nr. Kiran Motors, Sarkhej-Sanand Road, Sarkhej, Ahmedabad - 382210, Gujarat, India",
      description: "Visit us for in-person consultation",
      color: "from-[#F6A623] to-[#F6A623]/80"
    }
  ];

  const supportFeatures = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Net-Metering & Subsidy Support",
      description: "Assistance with documentation and government approvals"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "System Checks & Monitoring",
      description: "On-site performance monitoring and optimization"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Operation & Maintenance",
      description: "Regular maintenance services for long-term reliability"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable After-Sales Service",
      description: "Peace of mind with ongoing technical support"
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
              Contact Us: We're Here to Help You <span className="text-[#2E7D32]">Go Solar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Whether you are planning to reduce your electricity bills at home, upgrade your business to clean energy, or need guidance on solar system options, our team is ready to assist you.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ask questions, request a free site survey, or get a personalized quote. We will respond quickly and guide you with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-[#2E7D32]">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              You can call or email us directly, or simply fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#F6A623]/50">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#2E7D32]">{info.title}</h3>
                  <p className="text-sm font-semibold text-foreground mb-2 break-words">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#2E7D32]/10 to-[#F6A623]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-6 h-6 text-[#2E7D32]" />
                    <CardTitle className="text-2xl">Book a FREE Solar Consultation</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Fill out the form below to schedule a free consultation with our solar experts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-semibold">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-sm font-semibold">City / Location *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="propertyType" className="text-sm font-semibold">Property Type *</Label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange as any}
                          required
                          className="w-full mt-1.5 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select property type</option>
                          <option value="home">Home</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="institutional">Institutional</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="systemType" className="text-sm font-semibold">Preferred System Type</Label>
                        <select
                          id="systemType"
                          name="systemType"
                          value={formData.systemType}
                          onChange={handleChange as any}
                          className="w-full mt-1.5 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select system type</option>
                          <option value="on-grid">On-Grid</option>
                          <option value="off-grid">Off-Grid</option>
                          <option value="hybrid">Hybrid</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold">Your Message / Requirements</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your solar energy needs..."
                        rows={5}
                        className="mt-1.5"
                      />
                    </div>

                    <div className="bg-[#2E7D32]/5 border-l-4 border-[#2E7D32] rounded p-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Response Time:</span> We respond within 24 working hours.
                      </p>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold gap-2 py-6 text-lg"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Visit Our Office */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#F6A623]/10 to-[#2E7D32]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-[#2E7D32]" />
                    <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    You are welcome to meet us in person to discuss your project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Our office is easy to access in the Sarkhej area of Ahmedabad. Our team will guide you with planning, documentation, and technical details in a simple and clear way.
                    </p>

                    <div className="bg-secondary/30 rounded-lg p-4">
                      <h4 className="font-bold text-sm mb-3 text-[#2E7D32] uppercase tracking-wide">Office Location:</h4>
                      <p className="text-sm text-foreground leading-relaxed">
                        <strong>Godown No. 8, Omega Estate</strong><br />
                        Near Kiran Motors<br />
                        Sarkhej–Sanand Road<br />
                        Sarkhej, Ahmedabad 382210<br />
                        Gujarat, India
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Understand system options suitable for your site</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Explore solar solutions with our expert team</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Get guidance on documentation and subsidies</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-[#2E7D32] hover:bg-[#F6A623] text-white font-semibold gap-2"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-[#2E7D32]/5 to-[#F6A623]/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-[#2E7D32]">Quick Contact</h3>
                  <div className="space-y-3">
                    <a href="tel:7878006585" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200">
                      <Phone className="w-5 h-5 text-[#F6A623]" />
                      <div>
                        <p className="text-xs text-muted-foreground">Call Us</p>
                        <p className="font-semibold text-foreground">7878006585</p>
                      </div>
                    </a>
                    <a href="mailto:micreators@yahoo.com" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200">
                      <Mail className="w-5 h-5 text-[#2E7D32]" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email Us</p>
                        <p className="font-semibold text-foreground text-sm">micreators@yahoo.com</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support That Stays With You */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Support That <span className="text-[#2E7D32]">Stays With You</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                We continue to support you even after installation.
              </p>
              <p className="text-base text-muted-foreground">
                Your solar journey does not end at installation. We stay with you to ensure consistent power and long-term value.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {supportFeatures.map((feature, idx) => (
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

      <Footer />
    </div>
  );
};

export default Contact;
