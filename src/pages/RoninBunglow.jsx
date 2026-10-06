import { motion } from "framer-motion";

import RoninBunglowHero from "../components/Ronin Bunglow/RoninBunglowHero";
import RoninBunglowImages from "../components/Ronin Bunglow/RoninBunglowImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const RoninBunglow = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <RoninBunglowHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <RoninBunglowImages />
      </motion.div>
    </div>
  );
};

export default RoninBunglow;
