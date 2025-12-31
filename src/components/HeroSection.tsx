import { Button } from "@/components/ui/button";
import banner from "@/assets/banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Elivion Aesthetics - Elevate Your Beauty"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-down opacity-0">
            <span className="inline-block px-4 py-2 bg-primary/20 text-foreground/80 text-xs font-medium tracking-widest uppercase rounded-full mb-8">
              Premium Aesthetics Clinic
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            Reveal Your
            <span className="block italic text-primary">Natural Beauty</span>
          </h1>

          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-in-up opacity-0 animation-delay-200">
            Experience transformative aesthetic treatments in a serene, 
            luxurious environment. Where science meets artistry to enhance 
            your unique beauty.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in opacity-0 animation-delay-500">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "2K+", label: "Happy Clients" },
              { value: "50+", label: "Treatments" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
