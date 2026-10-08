import { m } from "framer-motion";

import RenovationHero from "../components/Renovation And Remodeling/RenovationHero";
import RenovationImages from "../components/Renovation And Remodeling/RenovationImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Renovation = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <RenovationHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <RenovationImages />
      </m.div>
    </div>
  );
};

export default Renovation;
