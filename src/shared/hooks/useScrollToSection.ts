import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const goToSection = useCallback(
    (sectionId: string) => {
      if (location.pathname !== "/") {
        navigate("/");
        const interval = setInterval(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToSection(sectionId);
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 2000);
        return;
      }
      scrollToSection(sectionId);
    },
    [location.pathname, navigate, scrollToSection]
  );

  return { goToSection, scrollToSection };
}
