import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks and responsive design.",
      features: ["React & Next.js", "E-commerce Solutions", "CMS Development"],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["React Native", "Flutter", "Native Development"],
      color: "accent",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description:
        "Scalable server architectures, APIs, and database solutions for your applications.",
      features: ["Node.js & Python", "Database Design", "API Development"],
      color: "orange",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud infrastructure setup, deployment, and optimization for maximum performance.",
      features: ["AWS & Azure", "DevOps", "Container Solutions"],
      color: "purple",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your applications and improve user satisfaction with expert optimization.",
      features: ["Code Optimization", "Caching Strategies", "Performance Monitoring"],
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary group-hover:bg-primary group-hover:text-primary-foreground";
      case "accent":
        return "text-accent group-hover:bg-accent group-hover:text-accent-foreground";
      case "orange":
        return "text-orange-500 group-hover:bg-orange-500 group-hover:text-white";
      case "purple":
        return "text-purple-500 group-hover:bg-purple-500 group-hover:text-white";
      default:
        return "text-primary group-hover:bg-primary group-hover:text-primary-foreground";
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white lg:scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive tech solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-0 overflow-hidden relative rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <div className="mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${getColorClasses(
                      service.color
                    )} bg-${service.color}/10`}
                  >
                    <service.icon className="w-7 h-7 transition-all duration-300" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-primary-foreground hover:bg-primary"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
