import { m } from "framer-motion";

import SwatibenShahHero from "../components/Swatiben Shah/SwatibenShahHero";
import SwatibenShahImages from "../components/Swatiben Shah/SwatibenShahImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const SwatibenShah = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <SwatibenShahHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <SwatibenShahImages />
      </m.div>
    </div>
  );
};

export default SwatibenShah;
