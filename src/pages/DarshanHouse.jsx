import { motion } from "framer-motion";

import DarshanHouseHero from "../components/DARSHAN House/DarshanHouseHero";
import DarshanHouseImages from "../components/DARSHAN House/DarshanHouseImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const DarshanHouse = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <DarshanHouseHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <DarshanHouseImages />
      </motion.div>
    </div>
  );
};

export default DarshanHouse;
