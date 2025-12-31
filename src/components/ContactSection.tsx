import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "2nd Floor, Park and Shop Incorporation, Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila",
    href: "https://maps.google.com/?q=Park+and+Shop+Incorporation+Dr+Arcadio+Santos+Ave+Parañaque",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "0998 248 5390",
    href: "tel:09982485390",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "elivionaestheticclinic@gmail.com",
    href: "mailto:elivionaestheticclinic@gmail.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Saturday: 10AM - 7PM",
    href: null,
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/elivion_aesthetics",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/people/Elivion-Aesthetics/61575220839387/",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://tiktok.com/@elivionaesthetics",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Ready to Begin Your
            <span className="italic"> Transformation?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Book your consultation today and let our experts craft a 
            personalized treatment plan just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-6 bg-background rounded-xl shadow-soft"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-background" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Book Your Free Consultation
            </h3>
            <p className="text-background/70 text-lg mb-8">
              Take the first step towards your aesthetic goals. Our team is 
              ready to answer your questions and guide you through our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="elegant"
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href="tel:09982485390">Call Now</a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                asChild
              >
                <a
                  href="https://m.me/61575220839387"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
