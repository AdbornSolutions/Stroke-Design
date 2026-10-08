import { m } from "framer-motion";

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

      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <ServiceHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurServices />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <HowWeWork />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <ImageGallery />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <Testimonials />
      </m.div>

    </div>
  );
};

export default Services;
