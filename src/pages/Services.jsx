import { motion } from "framer-motion";

import HowWeWork from "../components/Home/HowWeWork";
import ImageGallery from "../components/Home/ImageGallery";
import Testimonials from "../components/Home/Testimonials";
import OurServices from "../components/Services/OurServices";
import ServiceHero from "../components/Services/ServiceHero";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Services = () => {
  return (
    <div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ServiceHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurServices />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <HowWeWork />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ImageGallery />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <Testimonials />
      </motion.div>

    </div>
  );
};

export default Services;
