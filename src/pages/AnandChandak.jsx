import { m } from "framer-motion";

import AnandChadakHero from "../components/Anand Chandak/AnandChandakHero";
import AnandChandakImages from "../components/Anand Chandak/AnandChandakImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const AnandChandak = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AnandChadakHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AnandChandakImages />
      </m.div>
    </div>
  );
};

export default AnandChandak;
