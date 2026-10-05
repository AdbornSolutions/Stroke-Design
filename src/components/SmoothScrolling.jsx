import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScrolling = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    // Enable native smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
};

export default SmoothScrolling;
