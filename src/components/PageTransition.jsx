import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
