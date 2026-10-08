import { m } from "framer-motion";

import JaiswalTataHero from "../components/Jaiswal Tata Capital/JaiswalTataHero";
import JaiswalTataImages from "../components/Jaiswal Tata Capital/JaiswalTataImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const JaiswalTata = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <JaiswalTataHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JaiswalTataImages />
      </m.div>
    </div>
  );
};

export default JaiswalTata;
