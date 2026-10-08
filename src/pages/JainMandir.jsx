import React from "react";
import { m } from "framer-motion";

import JainMandirHero from "../components/Jain Mandir Exterior and Interior/JainMandirHero";
import JainMandirImages from "../components/Jain Mandir Exterior and Interior/JainMandirImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const JainMandir = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <JainMandirHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JainMandirImages />
      </m.div>
    </div>
  );
};

export default JainMandir;
