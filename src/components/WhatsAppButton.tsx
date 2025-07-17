import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "+2347000000000"; // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Arcstark%21%20I%27m%20interested%20in%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse animation ring */}
      <span className="absolute w-full h-full rounded-full animate-ping bg-[#25D366]/40"></span>
      
      {/* WhatsApp Icon */}
      <MessageCircle className="w-8 h-8 animate-float group-hover:animate-none" />
    </a>
  );
};

export default WhatsAppButton;