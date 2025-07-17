import { useEffect } from "react";

// Declare global variables for Tawk.to
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

interface TawkChatWidgetProps {
  propertyId: string;
  widgetId: string;
}

const TawkChatWidget = ({ propertyId, widgetId }: TawkChatWidgetProps) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Inject Tawk.to script
    const injectScript = () => {
      try {
        const firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        } else {
          document.head.appendChild(script);
        }
      } catch (error) {
        console.error("Error injecting Tawk.to script:", error);
      }
    };

    // Initialize Tawk.to global variables
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Add script to DOM
    injectScript();

    // Clean up
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [propertyId, widgetId]);

  return null; // No DOM output
};

export default TawkChatWidget;