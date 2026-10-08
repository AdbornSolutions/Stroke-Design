import { m } from "framer-motion";

import InteriorHero from "../components/Interior Design Consultation/InteriorHero";
import InteriorImages from "../components/Interior Design Consultation/InteriorImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Interior = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <InteriorHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <InteriorImages />
      </m.div>
    </div>
  );
};

export default Interior;
