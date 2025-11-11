import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Battery, Droplet, Lightbulb, Car, ArrowRight, CheckCircle2 } from "lucide-react";
import solarOnGrid from "@/assets/services/solar-ongrid.jpg";
import solarOffGrid from "@/assets/services/solar-offgrid.jpg";
import solarWaterPump from "@/assets/services/solar-waterpump.jpg";
import solarStreetLight from "@/assets/services/solar-streetlight.jpg";
import evCharger from "@/assets/services/ev-charger.jpg";

const services = [
  {
    image: solarOnGrid,
    icon: Zap,
    title: "Solar On-Grid Systems",
    description:
      "Connect to the grid and save on electricity bills. Net metering allows you to sell excess power back to the utility.",
    features: ["Grid-tied inverters", "Net metering", "Cost savings", "Easy maintenance"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    image: solarOffGrid,
    icon: Battery,
    title: "Solar Off-Grid Systems",
    description:
      "Complete energy independence with battery storage. Perfect for remote locations and backup power needs.",
    features: ["Battery storage", "Energy independence", "Remote power", "Zero utility bills"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    image: solarWaterPump,
    icon: Droplet,
    title: "Solar Water Pump Systems",
    description:
      "Efficient water pumping solutions for agriculture and irrigation. Reduce diesel costs and maintenance.",
    features: ["Agricultural use", "Low maintenance", "Cost-effective", "Eco-friendly"],
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    image: solarStreetLight,
    icon: Lightbulb,
    title: "Solar Street Lights",
    description:
      "Autonomous outdoor lighting for streets, pathways, and public spaces. No electrical wiring required.",
    features: ["Auto on/off", "No wiring needed", "Weather resistant", "Long lifespan"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    image: evCharger,
    icon: Car,
    title: "EV Chargers",
    description:
      "Fast and reliable electric vehicle charging stations. Smart metering and network connectivity options.",
    features: ["Smart metering", "Network connected", "User authentication", "IP65 rated"],
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-semibold">
            <Zap className="h-4 w-4" />
            <span>Premium Solar Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Our <span className="text-primary">Solar Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive renewable energy systems designed for homes, businesses,
            and communities with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-slide-up flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <CardHeader className="relative pb-4">
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 space-y-6">
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-2 text-sm group/feature"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn h-12 mt-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
