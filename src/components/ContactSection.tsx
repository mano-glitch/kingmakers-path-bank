import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Clock,
  Send
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Our Center",
      details: [
        "123 Banking Street, Education Hub",
        "New Delhi - 110001",
        "Near Metro Station"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      details: [
        "info@kingmakers.edu",
        "admissions@kingmakers.edu",
        "support@kingmakers.edu"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9 AM - 7 PM",
        "Sunday: 10 AM - 5 PM",
        "24/7 Online Support"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us & <span className="text-gradient-primary">Quick Enrollment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your banking career journey? Get in touch with us for personalized 
            guidance and quick enrollment in our coaching programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Quick Enrollment Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Course Interested *</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, course: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ibps-clerk">IBPS Clerk Coaching</SelectItem>
                        <SelectItem value="ibps-po">IBPS PO Coaching</SelectItem>
                        <SelectItem value="ibps-rrb">IBPS RRB Coaching</SelectItem>
                        <SelectItem value="all-exams">All Banking Exams</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message (Optional)</label>
                  <Textarea
                    placeholder="Tell us about your preparation level and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Enrollment Form
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Our counselors will contact you within 24 hours to discuss your requirements.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                        {info.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Quick Contact */}
            <Card className="bg-gradient-success text-secondary-foreground">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick WhatsApp Support</h3>
                <p className="mb-4 opacity-90">
                  Get instant answers to your queries on WhatsApp
                </p>
                <Button className="bg-white text-secondary hover:bg-white/90">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Find Us on Map</h3>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Banking Street, Education Hub, New Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;