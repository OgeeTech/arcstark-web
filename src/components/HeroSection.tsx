import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, Eye } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-orange/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/cf190ce2-6628-496c-8441-e25dc1418eff.png" 
            alt="Arcstark Logo" 
            className="mx-auto h-32 w-auto animate-glow"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
          Modern Tech
          <span className="block text-primary bg-gradient-primary bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Transforming ideas into cutting-edge digital experiences. 
          We build the future, one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="group"
          >
            <Eye className="w-5 h-5" />
            See Our Work
          </Button>
          
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => scrollToSection('booking')}
          >
            <Calendar className="w-5 h-5" />
            Book a Session
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="animate-bounce cursor-pointer" 
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;