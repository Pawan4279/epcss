import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Zap, 
  Paintbrush, 
  Wrench, 
  Code, 
  Smartphone,
  Database,
  Globe
} from "lucide-react";
import itServicesImage from "@/assets/it-services.jpg";

const Services = () => {
  const constructionServices = [
    {
      icon: Building2,
      title: "Civil Construction",
      description: "Complete civil engineering solutions for residential and commercial projects",
      skills: ["Foundation Work", "Structural Design", "Project Management", "Quality Control"]
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "Mechanical, Electrical, and Plumbing solutions for modern buildings",
      skills: ["HVAC Systems", "Electrical Installation", "Plumbing Networks", "Fire Safety"]
    },
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Creative interior solutions that blend functionality with aesthetics",
      skills: ["Space Planning", "3D Visualization", "Material Selection", "Custom Design"]
    },
    {
      icon: Wrench,
      title: "Fixtures & Electrical",
      description: "Professional installation and maintenance of fixtures and electrical systems",
      skills: ["Lighting Design", "Power Distribution", "Safety Systems", "Maintenance"]
    }
  ];

  const itServices = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern web applications using cutting-edge technologies",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions and database management",
      skills: ["Node.js", "Express.js", "MongoDB", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android",
      skills: ["Flutter", "Dart", "Mobile UI/UX", "App Store Deployment"]
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development services for complete digital solutions",
      skills: ["MERN Stack", "DevOps", "Cloud Services", "Project Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        
        {/* Construction Services */}
        <div id="construction" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Construction <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive construction services delivering quality and innovation across all building disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionServices.map((service, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-feature rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div id="it-services">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              IT <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern technology solutions powered by the latest frameworks and development practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {itServices.map((service, index) => (
                <Card key={index} className="shadow-soft hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="w-12 h-12 bg-feature rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <img
                src={itServicesImage}
                alt="IT Services"
                className="rounded-lg shadow-soft w-full h-auto"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;