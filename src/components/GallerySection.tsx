import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: heroBg, alt: "Elivion Aesthetics clinic interior" },
  { src: treatment1, alt: "Professional facial treatment" },
  { src: treatment2, alt: "Injectable aesthetic treatment" },
  { src: treatment3, alt: "Relaxing body treatment" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Our Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            A Glimpse into
            <span className="italic"> Our World</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the serene atmosphere and professional care that awaits you at Elivion Aesthetics.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
