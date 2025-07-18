import React from 'react';
import { MessageCircle } from 'lucide-react';

const TawkChatButton = () => {
  const openTawkChat = () => {
    // Open Tawk.to chat widget
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <button
      onClick={openTawkChat}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Open Chat"
    >
      {/* Pulse animation ring */}
      <span className="absolute w-full h-full rounded-full animate-ping bg-primary/40"></span>
      
      {/* Message Icon */}
      <MessageCircle className="w-8 h-8 animate-pulse group-hover:animate-none" />
    </button>
  );
};

export default TawkChatButton;