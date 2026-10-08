import { m } from "framer-motion";

import ExteriorHero from "../components/Exterior Design/ExteriorHero";
import ExteriorImages from "../components/Exterior Design/ExteriorImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Exterior = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ExteriorHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ExteriorImages />
      </m.div>
    </div>
  );
};

export default Exterior;
