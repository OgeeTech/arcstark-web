import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  // === Project Data ===
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "Web Development",
      link: "#",
      github: "#"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for financial data with interactive charts and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Python", "PostgreSQL"],
      category: "Data Visualization",
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans and progress monitoring.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile Development",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered SaaS",
      description: "Intelligent business automation platform with machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["Next.js", "Python", "TensorFlow", "AWS"],
      category: "AI/ML",
      link: "#",
      github: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours and CRM integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Laravel", "MySQL"],
      category: "Web Development",
      link: "#",
      github: "#"
    },
    {
      title: "IoT Monitoring System",
      description: "Industrial IoT dashboard for monitoring sensors and equipment in real-time.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["React", "MQTT", "InfluxDB", "Docker"],
      category: "IoT",
      link: "#",
      github: "#"
    }
  ];

  return (
    // === Portfolio Section Starts ===
    <section id="portfolio" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-card hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category badge */}
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              {/* Project Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
    // === Portfolio Section Ends ===
  );
};

export default PortfolioSection;
