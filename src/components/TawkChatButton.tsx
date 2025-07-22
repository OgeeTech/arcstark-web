import React from "react";
import { MessageCircle } from "lucide-react";

// Fix: define a minimal type for Tawk_API
type TawkAPIType = {
  maximize?: () => void;
  [key: string]: unknown;
};

declare global {
  interface Window {
    Tawk_API?: TawkAPIType;
    Tawk_LoadStart?: Date;
  }
}

const TawkChatButton = () => {
  const openTawkChat = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.warn("Tawk.to chat is not yet ready.");
    }
  };

  return (
    <button
      onClick={openTawkChat}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Open Chat"
    >
      <span className="absolute w-full h-full rounded-full animate-ping bg-primary/40"></span>
      <MessageCircle className="w-8 h-8 animate-pulse group-hover:animate-none" />
    </button>
  );
};

export default TawkChatButton;
