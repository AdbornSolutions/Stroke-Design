import { motion } from "framer-motion";

import SwatibenShahHero from "../components/Swatiben Shah/SwatibenShahHero";
import SwatibenShahImages from "../components/Swatiben Shah/SwatibenShahImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const SwatibenShah = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <SwatibenShahHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <SwatibenShahImages />
      </motion.div>
    </div>
  );
};

export default SwatibenShah;
