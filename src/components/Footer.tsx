import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "Consulting",
    "Support"
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/img/logo2.png" 
                alt="Arcstark Logo" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="text-xl font-bold text-secondary-foreground mb-4">
                Building the Future of Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                We're passionate about creating innovative digital solutions that 
                help businesses thrive in an ever-evolving technological landscape.
              </p>
            </div>

            {/* Newsletter signup */}
            <div className="max-w-md">
              <h4 className="font-semibold text-secondary-foreground mb-3">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/50 border-border"
                />
                <Button variant="default" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get the latest updates on our projects and tech insights.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 Arcstark. All rights reserved. Built with passion and code.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            {/* Back to top button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Address section in footer */}
      <div className="py-6 border-t border-border/50">
        <p className="text-sm text-center text-muted-foreground">
          <span className="font-semibold">Arcstark Headquarters:</span> 1 Bouar Close Off Bangui Street, Wuse 2, Abuja, Nigeria
        </p>
      </div>
    </footer>
  );
};

export default Footer;