import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExamOverview from "@/components/ExamOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExamOverview />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kingmakers School of Banking</h3>
              <p className="text-sm opacity-90">
                Your trusted partner for banking exam preparation and career success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>IBPS Clerk Coaching</li>
                <li>IBPS PO Coaching</li>
                <li>IBPS RRB Coaching</li>
                <li>Mock Test Series</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>About Us</li>
                <li>Success Stories</li>
                <li>Faculty</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+91 98765 43210</li>
                <li>info@kingmakers.edu</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Kingmakers School of Banking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
