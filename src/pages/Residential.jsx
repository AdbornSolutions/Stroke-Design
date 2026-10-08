import { m } from "framer-motion";

import ResidentialHero from "../components/Residential Interior Design/ResidentialHero";
import ResidentialImages from "../components/Residential Interior Design/ResidentialImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Residential = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ResidentialHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ResidentialImages />
      </m.div>
    </div>
  );
};

export default Residential;
