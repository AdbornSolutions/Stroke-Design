import React from "react";
import { m } from "framer-motion";

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
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AwardHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardHighlight />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardsRecognition />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JourneyOfExcellence />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AwardWinningProjects />
      </m.div>
    </div>
  );
};

export default AwardPublication;
