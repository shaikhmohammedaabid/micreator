const steps = [
  {
    number: "1",
    title: "Speak to a Solar Consultant",
    description:
      "Connect with our expert team to discuss your energy needs and explore the best solar solutions for your property.",
  },
  {
    number: "2",
    title: "We'll Design Your Solar Panel System",
    description:
      "Our engineers create a custom solar design optimized for maximum efficiency and savings tailored to your space.",
  },
  {
    number: "3",
    title: "Schedule Your 1 Day Install",
    description:
      "Professional installation completed in just one day with minimal disruption to your daily routine.",
  },
  {
    number: "4",
    title: "Start Saving on Your Electricity Bill",
    description:
      "Begin generating clean energy immediately and watch your electricity costs drop month after month.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start your solar journey and begin saving on energy costs
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.75rem] top-24 w-0.5 h-32 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              )}

              {/* Step Container */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 group">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-[#F6A623] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-xl p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-[#F6A623] transition-all duration-500 group-hover:w-full"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      Step {index + 1} of {steps.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex flex-col items-center gap-4 bg-card p-8 rounded-2xl border border-border shadow-lg max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">Ready to Get <span className="text-primary">Started?</span></h3>
            <p className="text-muted-foreground">
              Connect with our solar experts and begin your journey to clean energy
            </p>
            <button className="bg-[#F6A623] hover:bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
