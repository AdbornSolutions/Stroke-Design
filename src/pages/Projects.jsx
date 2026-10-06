import React from "react";
import { motion } from "framer-motion";

import ProjectHero from "../components/Projects/ProjectHero";
import OurProject from "../components/Projects/OurProject";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Projects = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ProjectHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurProject />
      </motion.div>
    </div>
  );
};

export default Projects;
