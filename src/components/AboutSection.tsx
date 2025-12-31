import { Sparkles, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Expert Care",
      description: "Our skilled professionals use advanced techniques tailored to your unique needs.",
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Every treatment plan is customized to achieve your individual beauty goals.",
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "We use only FDA-approved products and maintain the highest safety standards.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Where Beauty Meets
              <span className="italic"> Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Elivion Aesthetics, we believe that everyone deserves to feel 
              confident in their own skin. Our state-of-the-art clinic in Parañaque 
              offers a sanctuary where advanced aesthetic treatments meet 
              compassionate care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Founded on the principles of safety, artistry, and personalized attention, 
              we specialize in non-invasive and minimally invasive procedures that 
              enhance your natural beauty while maintaining authentic results.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl" />
            <div className="absolute inset-8 bg-secondary rounded-2xl shadow-elevated" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display text-6xl md:text-8xl font-bold text-foreground/10">
                  EA
                </div>
                <p className="font-display text-xl text-foreground mt-4">
                  Elivion Aesthetics
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Your beauty, our passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
