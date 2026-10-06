import React from "react";
import { motion } from "framer-motion";

import JainMandirHero from "../components/Jain Mandir Exterior and Interior/JainMandirHero";
import JainMandirImages from "../components/Jain Mandir Exterior and Interior/JainMandirImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const JainMandir = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <JainMandirHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JainMandirImages />
      </motion.div>
    </div>
  );
};

export default JainMandir;
