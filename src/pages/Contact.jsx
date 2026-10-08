import { m } from "framer-motion";

import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import ContactInformation from "../components/Contact/ContactInformation";

import { fadeUp, viewport } from "../components/MotionVariants";

const Contact = () => {
  return (
    <div>
      <m.div initial="hidden" animate="visible" variants={fadeUp}>
        <ContactHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactInformation />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactForm />
      </m.div>
    </div>
  );
};

export default Contact;
