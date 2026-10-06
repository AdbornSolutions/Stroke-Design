import React from "react";
import { motion } from "framer-motion";

import AwardHero from "../components/Award & Publication/AwardHero";
import AwardHighlight from "../components/Award & Publication/AwardHighlight";
import AwardsRecognition from "../components/Award & Publication/AwardsRecognition";
import JourneyOfExcellence from "../components/Award & Publication/JourneyOfExcellence";
import AwardWinningProjects from "../components/Award & Publication/AwardWinningProjects";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const AwardPublication = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AwardHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardHighlight />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardsRecognition />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JourneyOfExcellence />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardWinningProjects />
      </motion.div>
    </div>
  );
};

export default AwardPublication;
