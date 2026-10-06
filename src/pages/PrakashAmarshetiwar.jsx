import { motion } from "framer-motion";

import PrakashAmarshetiwarHero from "../components/Prakash Amarshetiwar/PrakashAmarshetiwarHero";
import PrakashAmarshetiwarImages from "../components/Prakash Amarshetiwar/PrakashAmarshetiwarImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const PrakashAmarshetiwar = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <PrakashAmarshetiwarHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <PrakashAmarshetiwarImages />
      </motion.div>
    </div>
  );
};

export default PrakashAmarshetiwar;
