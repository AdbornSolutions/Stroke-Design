import { motion } from "framer-motion";

import ContactInformation from "../components/Contact/ContactInformation";
import OurPrivacy from "../components/Privacy Policy/OurPrivacy";
import PrivacyHero from "../components/Privacy Policy/PrivacyHero";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const PrivacyPolicy = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <PrivacyHero />
      </motion.div>

      <OurPrivacy />

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

export default PrivacyPolicy;
