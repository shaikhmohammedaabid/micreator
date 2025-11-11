import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import solar1 from "@/assets/gallery/solar-1.jpg";
import solar2 from "@/assets/gallery/solar-2.jpg";
import solar3 from "@/assets/gallery/solar-3.jpg";
import solar4 from "@/assets/gallery/solar-4.jpg";
import solar5 from "@/assets/gallery/solar-5.jpg";
import solar6 from "@/assets/gallery/solar-6.jpg";
import solar7 from "@/assets/gallery/solar-7.jpg";
import solar8 from "@/assets/gallery/solar-8.jpg";
import solar9 from "@/assets/gallery/solar-9.jpg";
import solar10 from "@/assets/gallery/solar-10.jpg";
import solar11 from "@/assets/gallery/solar-11.jpg";
import solar12 from "@/assets/gallery/solar-12.jpg";

const Hero = () => {
  const images = [
    solar1, solar2, solar3, solar4, solar5, solar6,
    solar7, solar8, solar9, solar10, solar11, solar12
  ];

  const baseStartAngle = 20;
  const baseEndAngle = 160;
  const baseImageCount = 12;
  const radiusLg = 480;
  const radiusMd = 360;
  const radiusSm = 260;
  const cardSizeLg = 120;
  const cardSizeMd = 100;
  const cardSizeSm = 80;

  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
    imageCount: 12,
  });

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm, imageCount: 6 });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd, imageCount: 9 });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg, imageCount: 12 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleImages = images.slice(0, dimensions.imageCount);
  const count = Math.max(visibleImages.length, 2);
  
  // Calculate arc size proportionally to maintain consistent density
  const arcRatio = dimensions.imageCount / baseImageCount;
  const totalArcSize = (baseEndAngle - baseStartAngle) * arcRatio;
  const startAngle = baseStartAngle + ((baseEndAngle - baseStartAngle) - totalArcSize) / 2;
  const endAngle = startAngle + totalArcSize;
  
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 min-h-screen flex flex-col pt-24 md:pt-28 pb-16 md:pb-24 lg:pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          height: dimensions.radius * 1.2,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {visibleImages.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            
            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div 
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-border bg-card transition-transform hover:scale-105 w-full h-full"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <img
                    src={src}
                    alt={`Solar project ${i + 1}`}
                    className="block w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div className="text-center max-w-3xl px-6 opacity-0 animate-fade-in-content" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6 animate-pulse">
            <Zap className="h-4 w-4" />
            <span>Powering 5,000+ Homes & Businesses</span>
          </div>
          
          {/* Main Heading with Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block animate-fade-in" style={{ color: '#F6A623' }}>
              Power Your Future
            </span>
            <span className="block mt-2 animate-fade-in" style={{ color: '#2E7D32', animationDelay: '200ms' }}>
              with Clean Solar Energy
            </span>
          </h1>
          
          {/* Description with animated underline accent */}
          <div className="relative mt-6 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Join thousands of homeowners and businesses saving money while creating a sustainable future. 
              Our intelligent platform makes solar energy <span className="relative inline-block">
                <span className="relative z-10 text-accent font-semibold">simple, affordable, and accessible</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 -rotate-1"></span>
              </span>.
            </p>
          </div>
          
          {/* CTA Buttons with Creative Design */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="relative overflow-hidden w-full sm:w-auto bg-[#F6A623] hover:bg-[#2E7D32] text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 group border-2 border-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                Get A Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden w-full sm:w-auto border-2 bg-[#2E7D32] hover:bg-[#F6A623] text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                See Our Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>

        </div>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
        @keyframes fade-in-content {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .animate-fade-in-content {
          animation-name: fade-in-content;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
