const reviewImages = [
  { src: "/placeholder.svg", alt: "Client review screenshot 1" },
  { src: "/placeholder.svg", alt: "Client review screenshot 2" },
  { src: "/placeholder.svg", alt: "Client review screenshot 3" },
  { src: "/placeholder.svg", alt: "Client review screenshot 4" },
  { src: "/placeholder.svg", alt: "Client review screenshot 5" },
  { src: "/placeholder.svg", alt: "Client review screenshot 6" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 bg-card border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Client Love
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            What Our Clients
            <span className="italic"> Say</span>
          </h2>
        </div>

        {/* Review Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviewImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group aspect-[4/5] bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
