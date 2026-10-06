import { motion } from "framer-motion";

import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import ContactInformation from "../components/Contact/ContactInformation";

import { fadeUp, viewport } from "../components/MotionVariants";

const Contact = () => {
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <ContactHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactInformation />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
