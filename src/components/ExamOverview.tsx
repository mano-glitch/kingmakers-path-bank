import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  ArrowRight,
  BookOpen,
  Award,
  Clock
} from "lucide-react";

const ExamOverview = () => {
  const exams = [
    {
      title: "IBPS Clerk",
      description: "Start your banking career as a Clerk in public sector banks",
      features: [
        "Age: 20-28 years",
        "Graduation required",
        "No interview",
        "Prelims + Mains"
      ],
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      color: "from-primary to-primary-light"
    },
    {
      title: "IBPS PO", 
      description: "Become a Probationary Officer with leadership opportunities",
      features: [
        "Age: 20-30 years",
        "Graduation required", 
        "Interview included",
        "Prelims + Mains + Interview"
      ],
      icon: <Award className="w-8 h-8 text-secondary" />,
      color: "from-secondary to-secondary-light"
    },
    {
      title: "IBPS RRB",
      description: "Join Regional Rural Banks and serve rural communities",
      features: [
        "Multiple positions",
        "Local language needed",
        "Rural focus",
        "Officer & Assistant roles"
      ],
      icon: <Users className="w-8 h-8 text-accent" />,
      color: "from-accent to-accent-light"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Banking Exam <span className="text-gradient-primary">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to a successful banking career. We provide specialized coaching 
            for all major banking exams with proven strategies and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {exams.map((exam, index) => (
            <Card key={index} className="card-feature group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${exam.color} bg-opacity-10`}>
                    {exam.icon}
                  </div>
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold">{exam.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exam.description}</p>
                
                <ul className="space-y-2">
                  {exam.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full mt-6 group-hover:scale-105 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8 text-primary-foreground">
            <div className="space-y-2">
              <GraduationCap className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-sm opacity-90">Banking Vacancies Yearly</div>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">₹25-45K</div>
              <div className="text-sm opacity-90">Average Monthly Salary</div>
            </div>
            <div className="space-y-2">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">20+ Banks</div>
              <div className="text-sm opacity-90">Participating Banks</div>
            </div>
            <div className="space-y-2">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold">Job Security</div>
              <div className="text-sm opacity-90">Government Backing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamOverview;