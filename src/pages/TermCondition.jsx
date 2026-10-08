import { m } from "framer-motion";

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
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <TermsHero />
      </m.div>

      <OurTerms />

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

export default TermCondition;
