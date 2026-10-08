import { m } from "framer-motion";

import DarshanHouseHero from "../components/DARSHAN House/DarshanHouseHero";
import DarshanHouseImages from "../components/DARSHAN House/DarshanHouseImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const DarshanHouse = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <DarshanHouseHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <DarshanHouseImages />
      </m.div>
    </div>
  );
};

export default DarshanHouse;
