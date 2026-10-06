import { motion } from "framer-motion";

import RenovationHero from "../components/Renovation And Remodeling/RenovationHero";
import RenovationImages from "../components/Renovation And Remodeling/RenovationImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Renovation = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <RenovationHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <RenovationImages />
      </motion.div>
    </div>
  );
};

export default Renovation;
