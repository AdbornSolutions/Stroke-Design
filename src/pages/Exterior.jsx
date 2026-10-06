import { motion } from "framer-motion";

import ExteriorHero from "../components/Exterior Design/ExteriorHero";
import ExteriorImages from "../components/Exterior Design/ExteriorImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Exterior = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ExteriorHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ExteriorImages />
      </motion.div>
    </div>
  );
};

export default Exterior;
