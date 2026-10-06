import { motion } from "framer-motion";

import AmitParekhHero from "../components/Amit Parekh/AmitParekhHero";
import AmitParekhImages from "../components/Amit Parekh/AmitParekhImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const AmitParekh = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AmitParekhHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AmitParekhImages />
      </motion.div>
    </div>
  );
};

export default AmitParekh;
