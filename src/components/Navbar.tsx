import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu,
  X,
  ChevronDown,
  PhoneOutgoing
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "py-2 bg-background/95 backdrop-blur-md shadow-md" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/img/logo2.png"
                alt="Arcstark Logo"
                className={`transition-all duration-300 w-auto ${scrolled ? "h-14 -mt-1" : "h-24 -mt-4 sm:h-28 sm:-mt-6"
                  }`}
              />



            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="hero" 
                size="sm" 
                className="group"
                onClick={() => scrollToSection("#booking")}
              >
                <PhoneOutgoing className="w-4 h-4 group-hover:animate-pulse" />
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 border-b border-muted text-foreground hover:text-primary transition-colors duration-300 text-lg font-medium"
              >
                {item.title}
              </a>
            ))}
            <Button 
              variant="hero" 
              className="w-full mt-4 group"
              onClick={() => scrollToSection("#booking")}
            >
              <PhoneOutgoing className="w-5 h-5 group-hover:animate-pulse" />
              Book Consultation
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;