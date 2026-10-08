import { m } from "framer-motion";

import RoninBunglowHero from "../components/Ronin Bunglow/RoninBunglowHero";
import RoninBunglowImages from "../components/Ronin Bunglow/RoninBunglowImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const RoninBunglow = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <RoninBunglowHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <RoninBunglowImages />
      </m.div>
    </div>
  );
};

export default RoninBunglow;
