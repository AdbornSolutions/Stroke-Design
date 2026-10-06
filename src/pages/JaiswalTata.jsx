import { motion } from "framer-motion";

import JaiswalTataHero from "../components/Jaiswal Tata Capital/JaiswalTataHero";
import JaiswalTataImages from "../components/Jaiswal Tata Capital/JaiswalTataImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const JaiswalTata = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <JaiswalTataHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <JaiswalTataImages />
      </motion.div>
    </div>
  );
};

export default JaiswalTata;
