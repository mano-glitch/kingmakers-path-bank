import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";
import heroImage from "@/assets/banking-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-bg py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Start Your{" "}
                <span className="text-gradient-primary">Banking Career</span>{" "}
                Today with{" "}
                <span className="text-gradient-accent">Kingmakers</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Specialized Coaching for <strong>IBPS Clerk</strong>, <strong>IBPS PO</strong> & <strong>IBPS RRB</strong>
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Join thousands of successful banking professionals who started their journey with us. 
                Expert faculty, proven methods, and guaranteed results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Book a Free Demo Class
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-hero-outline group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Syllabus PDF
              </Button>
            </div>

            <div className="pt-8">
              <Button className="btn-accent text-xl px-12 py-6">
                Join Coaching Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Successful Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Banking coaching students celebrating success"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            </div>
            
            {/* Floating Success Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-success text-secondary-foreground px-6 py-3 rounded-full shadow-secondary font-semibold animate-bounce">
              🎉 1000+ Success Stories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;