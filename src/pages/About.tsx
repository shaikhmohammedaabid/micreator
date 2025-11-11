import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Zap, Leaf, Users, Target, Lightbulb, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import innovationImg from "@/assets/Innovation.png";
import qualityExcellenceImg from "@/assets/Quality Excellence.png";
import customerFirstImg from "@/assets/Customer First.png";
import sustainabilityImg from "@/assets/Sustainability.png";
import severImg from "@/assets/sever.png";

// Counter Animation Component
interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const CounterAnimation = ({ end, duration = 2000, suffix = "", decimals = 0 }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-primary mb-2">
      {formatNumber(count)}{suffix}
    </div>
  );
};

const About = () => {
  const values = [
    {
      image: innovationImg,
      title: "Innovation",
      description: "Pioneering cutting-edge solar solutions that push the boundaries of renewable energy technology."
    },
    {
      image: qualityExcellenceImg,
      title: "Quality Excellence",
      description: "Delivering premium solar products and services with unwavering commitment to excellence."
    },
    {
      image: customerFirstImg,
      title: "Customer First",
      description: "Building lasting relationships through exceptional service and personalized solar solutions."
    },
    {
      image: sustainabilityImg,
      title: "Sustainability",
      description: "Committed to creating a greener future through sustainable energy practices and solutions."
    }
  ];

  const stats = [
    { icon: Sun, value: 500, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 1000, suffix: "+", label: "Happy Customers" },
    { icon: Zap, value: 50, suffix: "MW+", label: "Energy Generated" },
    { icon: Leaf, value: 30, suffix: "K+", label: "Tons CO₂ Saved" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-primary">MI Creators</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leading the solar revolution with innovative renewable energy solutions. 
              We're committed to making clean, sustainable energy accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Our <span className="text-primary">Mission</span></h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower homes and businesses with sustainable solar energy solutions that reduce carbon footprint 
                  and energy costs while contributing to a cleaner, greener planet for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Our <span className="text-primary">Vision</span></h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted solar energy provider, recognized for innovation, quality, and commitment 
                  to making renewable energy the primary power source for communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Our <span className="text-primary">Impact</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase our commitment to sustainable energy solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CounterAnimation 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2500}
                  />
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that drive everything we do at MI Creators
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center leading-tight">Our <span className="text-primary">Story</span></h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Founded with a vision to revolutionize the energy landscape, MI Creators has been at the forefront 
                of the solar energy movement. What started as a small team of passionate engineers and environmental 
                advocates has grown into a leading provider of comprehensive solar solutions.
              </p>
              <p className="text-lg">
                We believe that access to clean, renewable energy shouldn't be a luxury—it should be available to 
                everyone. This belief drives us to innovate, to improve, and to make solar energy more efficient, 
                affordable, and accessible with each passing day.
              </p>
              <p className="text-lg">
                Today, we're proud to have helped thousands of homes and businesses transition to sustainable energy, 
                reducing their carbon footprint while lowering their energy costs. But we're just getting started. 
                Our commitment to innovation and sustainability continues to push us forward as we work toward a 
                future powered entirely by renewable energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-background/95 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                      <Sparkles className="w-4 h-4" />
                      <span>Start Your Solar Journey</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                      Ready to Go <span className="text-primary">Solar?</span>
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      Join thousands of satisfied customers who've made the switch to clean, sustainable energy. 
                      Let's create a greener future together.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-8">
                      {[
                        "Free consultation & site assessment",
                        "Customized solar solutions",
                        "Expert installation & support"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 text-foreground">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm md:text-base font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="flex-1">
                        <Button 
                          size="lg" 
                          className="w-full bg-[#F6A623] hover:bg-[#2E7D32] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <span>Get a Free Quote</span>
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link to="/services" className="flex-1">
                        <Button 
                          size="lg" 
                          className="w-full bg-[#2E7D32] hover:bg-[#F6A623] text-white border-2 border-[#2E7D32] hover:border-[#F6A623] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Explore Services
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Side - Visual Element */}
                  <div className="relative bg-primary/5 p-8 md:p-12 flex items-center justify-center border-l border-primary/10">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
                    </div>

                    {/* Central Icon Display */}
                    <div className="relative z-10 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-background border-4 border-primary/20 shadow-xl flex items-center justify-center p-4">
                          <img 
                            src={severImg} 
                            alt="Solar Energy"
                            className="w-full h-full object-contain animate-spin"
                            style={{ animationDuration: '20s' }}
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        {/* Stats Mini Cards */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
                            <div className="text-xs md:text-sm text-muted-foreground font-medium">Projects</div>
                          </div>
                          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1000+</div>
                            <div className="text-xs md:text-sm text-muted-foreground font-medium">Customers</div>
                          </div>
                        </div>

                        <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/20 shadow-lg">
                          <div className="flex items-center justify-center gap-2 text-foreground">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-sm md:text-base font-semibold">Trusted Solar Partner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
