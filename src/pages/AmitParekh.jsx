import { m } from "framer-motion";

import AmitParekhHero from "../components/Amit Parekh/AmitParekhHero";
import AmitParekhImages from "../components/Amit Parekh/AmitParekhImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const AmitParekh = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AmitParekhHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AmitParekhImages />
      </m.div>
    </div>
  );
};

export default AmitParekh;
