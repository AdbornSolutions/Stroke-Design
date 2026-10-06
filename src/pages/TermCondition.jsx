import { motion } from "framer-motion";

import ContactInformation from "../components/Contact/ContactInformation";
import OurTerms from "../components/Terms & Conditions/OurTerms";
import TermsHero from "../components/Terms & Conditions/TermsHero";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const TermCondition = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <TermsHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurTerms />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactInformation />
      </motion.div>
    </div>
  );
};

export default TermCondition;
