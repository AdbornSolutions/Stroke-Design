import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScrolling = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [pathname]);

  return null;
};

export default SmoothScrolling;
