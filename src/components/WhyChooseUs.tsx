import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Monitor, 
  Trophy,
  BookOpen,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Faculty",
      description: "Experienced educators with deep banking knowledge and proven teaching methods",
      stats: "15+ Years Experience"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Mock Tests",
      description: "Regular practice tests that simulate actual exam conditions and patterns",
      stats: "500+ Practice Tests"
    },
    {
      icon: <Monitor className="w-8 h-8 text-accent" />,
      title: "Online & Offline Classes",
      description: "Flexible learning options to suit your schedule and learning preferences",
      stats: "24/7 Online Access"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Proven Results",
      description: "Track record of successful students placed in top banks across India",
      stats: "95% Success Rate"
    }
  ];

  const achievements = [
    {
      number: "1000+",
      label: "Successful Students",
      icon: <CheckCircle className="w-6 h-6 text-secondary" />
    },
    {
      number: "50+",
      label: "Expert Trainers",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      number: "10+",
      label: "Years of Excellence",
      icon: <Star className="w-6 h-6 text-accent" />
    },
    {
      number: "24/7",
      label: "Student Support",
      icon: <Clock className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">Kingmakers</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've been shaping banking careers for over a decade with our comprehensive 
            approach, expert guidance, and unwavering commitment to student success.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-elegant text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="text-sm font-semibold text-gradient-primary">
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-muted-foreground">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Our <span className="text-gradient-accent">Proven</span> Coaching Strategy
            </h3>
            <p className="text-muted-foreground text-lg">
              We follow a systematic approach that has helped thousands of students 
              achieve their banking career dreams.
            </p>
            
            <div className="space-y-4">
              {[
                "Comprehensive syllabus coverage with updated material",
                "Regular assessments and personalized feedback",
                "Doubt clearing sessions and one-on-one mentoring", 
                "Current affairs and banking awareness updates",
                "Interview preparation and personality development"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-elegant">
            <div className="text-center space-y-6">
              <BookOpen className="w-16 h-16 text-primary mx-auto" />
              <h4 className="text-2xl font-bold">Ready to Start?</h4>
              <p className="text-muted-foreground">
                Join our next batch and take the first step towards your banking career
              </p>
              <div className="pt-4">
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  Next Batch Starts
                </div>
                <div className="text-xl font-semibold text-accent">
                  January 15, 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;