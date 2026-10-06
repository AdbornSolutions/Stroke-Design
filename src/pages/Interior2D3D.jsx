import { motion } from "framer-motion";

import InteriorHero from "../components/Interior Design Consultation/InteriorHero";
import InteriorImages from "../components/Interior Design Consultation/InteriorImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Interior = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <InteriorHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <InteriorImages />
      </motion.div>
    </div>
  );
};

export default Interior;
