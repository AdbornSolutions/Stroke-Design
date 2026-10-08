import { m } from "framer-motion";

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
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <PrivacyHero />
      </m.div>

      <OurPrivacy />

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactInformation />
      </m.div>
    </div>
  );
};

export default PrivacyPolicy;
