import { m } from "framer-motion";

import PrakashAmarshetiwarHero from "../components/Prakash Amarshetiwar/PrakashAmarshetiwarHero";
import PrakashAmarshetiwarImages from "../components/Prakash Amarshetiwar/PrakashAmarshetiwarImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const PrakashAmarshetiwar = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <PrakashAmarshetiwarHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <PrakashAmarshetiwarImages />
      </m.div>
    </div>
  );
};

export default PrakashAmarshetiwar;
