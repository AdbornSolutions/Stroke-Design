import { motion } from "framer-motion";

import CommercialHero from "../components/Commercial Interior Design/CommercialHero";
import CommercialImages from "../components/Commercial Interior Design/CommercialImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Commercial = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <CommercialHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <CommercialImages />
      </motion.div>
    </div>
  );
};

export default Commercial;
