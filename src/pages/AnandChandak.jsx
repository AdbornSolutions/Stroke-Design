import { motion } from "framer-motion";

import AnandChadakHero from "../components/Anand Chandak/AnandChandakHero";
import AnandChandakImages from "../components/Anand Chandak/AnandChandakImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const AnandChandak = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AnandChadakHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AnandChandakImages />
      </motion.div>
    </div>
  );
};

export default AnandChandak;
