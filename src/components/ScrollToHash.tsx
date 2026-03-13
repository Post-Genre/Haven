import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const offset = element.offsetTop - 75;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}