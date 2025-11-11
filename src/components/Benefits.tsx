import { DollarSign, Leaf, Wrench, Battery, MapPin, TrendingDown } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Significantly reduce your monthly electricity bills and enjoy long-term savings on energy costs.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Reduce your carbon footprint and contribute to a cleaner, greener planet for future generations.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description: "Solar systems require minimal upkeep with no moving parts, ensuring hassle-free operation.",
  },
  {
    icon: Battery,
    title: "Energy Independence",
    description: "Generate your own power and reduce dependence on traditional utility companies.",
  },
  {
    icon: MapPin,
    title: "Remote Power Supply",
    description: "Perfect solution for remote locations where grid connection is difficult or impossible.",
  },
  {
    icon: TrendingDown,
    title: "Budget Friendly",
    description: "Government incentives and schemes make solar more affordable than ever before.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Why Choose <span className="text-primary">Solar Energy?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the compelling benefits that make solar energy the smart choice for your home or business.
          </p>
        </div>

        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/30 hover:-translate-y-1 w-[350px] flex-shrink-0"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-primary-glow group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </Marquee>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center bg-card border-2 border-primary/20 rounded-full px-8 py-4 shadow-md">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm md:text-base font-medium text-foreground">
                Supported by Government Renewable Energy Initiatives & Schemes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
