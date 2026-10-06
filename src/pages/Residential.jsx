import { motion } from "framer-motion";

import ResidentialHero from "../components/Residential Interior Design/ResidentialHero";
import ResidentialImages from "../components/Residential Interior Design/ResidentialImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Residential = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ResidentialHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ResidentialImages />
      </motion.div>
    </div>
  );
};

export default Residential;
