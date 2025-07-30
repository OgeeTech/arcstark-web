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

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-secondary text-white w-full relative">
      <div className="container mx-auto px-6 py-10">
        {/* Newsletter signup */}
        <div className="mb-6 max-w-md">
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              className="bg-white text-black border-none"
            />
            <Button variant="default" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Get the latest updates on our projects and tech insights.
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-700 pt-6">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © 2025 Arcstark. All rights reserved.
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="hover:bg-white hover:text-black"
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
            className="hover:bg-white hover:text-black border-white"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Address */}
        <div className="mt-4 text-center text-sm text-gray-400">
          Arcstark HQ: 1 Bouar Close Off Bangui Street, Wuse 2, Abuja, Nigeria
        </div>
      </div>
    </footer>
  );
};

export default Footer;
