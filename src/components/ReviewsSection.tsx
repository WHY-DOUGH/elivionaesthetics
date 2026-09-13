import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria S.",
    treatment: "Hydrafacial",
    rating: 5,
    text: "My skin has never looked better. The staff was so gentle and professional, and the clinic itself feels like a luxury spa.",
  },
  {
    name: "Carmen L.",
    treatment: "Lip Enhancement",
    rating: 5,
    text: "I was nervous about injectables, but they made me feel completely at ease. The results are natural and exactly what I wanted.",
  },
  {
    name: "Angela R.",
    treatment: "Skin Tightening",
    rating: 5,
    text: "From consultation to treatment, everything was seamless. I appreciate how they personalized the plan for my concerns.",
  },
  {
    name: "Ofelia Castro",
    treatment: "Rejuvinating Serum",
    rating: 5,
    text: "So good!!!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16 bg-card border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Client Love
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              What Our Clients
              <span className="italic"> Say</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-medium">5.0</span>
            <span className="text-muted-foreground text-sm">
              average rating
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-500"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-foreground">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {review.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
