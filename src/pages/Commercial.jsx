import { m } from "framer-motion";

import CommercialHero from "../components/Commercial Interior Design/CommercialHero";
import CommercialImages from "../components/Commercial Interior Design/CommercialImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Commercial = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <CommercialHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <CommercialImages />
      </m.div>
    </div>
  );
};

export default Commercial;
