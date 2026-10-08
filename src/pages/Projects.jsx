import React from "react";
import { m } from "framer-motion";

import ProjectHero from "../components/Projects/ProjectHero";
import OurProject from "../components/Projects/OurProject";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Projects = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ProjectHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurProject />
      </m.div>
    </div>
  );
};

export default Projects;
