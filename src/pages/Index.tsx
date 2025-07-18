import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TawkChatWidget from "@/components/TawkChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <TawkChatWidget propertyId="6437ad9e4247f20fefef5d2c" widgetId="1gdif2l9n" />
    </div>
  );
};

export default Index;
