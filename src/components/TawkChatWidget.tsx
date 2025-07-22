import { useEffect } from "react";

const TawkChatWidget = () => {
  useEffect(() => {
    if (document.getElementById("tawk-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/687fcc9c98697b19177cd966/1j0pjelrb";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, []);

  return null;
};

export default TawkChatWidget;
