import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      position: "SBI Clerk - Mumbai",
      image: "PS",
      content: "Kingmakers transformed my preparation strategy. The mock tests were exactly like the actual exam. I cleared IBPS Clerk in my first attempt!",
      rating: 5,
      exam: "IBPS Clerk 2023"
    },
    {
      name: "Rahul Kumar",
      position: "PNB PO - Delhi",
      image: "RK", 
      content: "The faculty here is exceptional. Their interview preparation helped me gain confidence. Highly recommend for serious banking aspirants.",
      rating: 5,
      exam: "IBPS PO 2023"
    },
    {
      name: "Anita Singh",
      position: "RRB Officer - Bihar",
      image: "AS",
      content: "Online classes were very convenient for me. The study material was comprehensive and the doubt-clearing sessions were really helpful.",
      rating: 5,
      exam: "IBPS RRB 2023"
    },
    {
      name: "Vikash Gupta",
      position: "BOB Clerk - Rajasthan", 
      image: "VG",
      content: "I was weak in quantitative aptitude. The personalized attention and extra practice sessions helped me overcome my weakness.",
      rating: 5,
      exam: "IBPS Clerk 2023"
    },
    {
      name: "Sneha Patel",
      position: "Canara Bank PO - Gujarat",
      image: "SP",
      content: "The current affairs coverage and banking awareness classes were excellent. It gave me an edge in the exam.",
      rating: 5,
      exam: "IBPS PO 2023"
    },
    {
      name: "Amit Yadav",
      position: "UCO Bank Officer - UP",
      image: "AY",
      content: "From zero banking knowledge to clearing IBPS RRB Officer - Kingmakers made it possible. Thank you for the excellent guidance!",
      rating: 5,
      exam: "IBPS RRB 2023"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Success <span className="text-gradient-primary">Stories</span> & Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real students who achieved their banking dreams with Kingmakers. 
            Their success is our greatest achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant hover-lift">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30" />
                
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-accent font-medium">{testimonial.exam}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center">
          <div className="text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6">Our Success in Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Students Placed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm opacity-90">Partner Banks</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">4.8/5</div>
                <div className="text-sm opacity-90">Student Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-muted-foreground mb-8">Join thousands of successful banking professionals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Start Your Journey Today
            </button>
            <button className="btn-hero-outline">
              Talk to Our Counselors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;