import { motion } from "framer-motion";

import AboutAchievement from "../components/About/AboutAchievement";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import OurHistory from "../components/About/OurHistory";
import ImageGallery from "../components/Home/ImageGallery";
// import LatestBlogs from "../components/Home/LatestBlogs";
import OurExperts from "../components/Home/OurExperts";
import Testimonials from "../components/Home/Testimonials";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const About = () => {
  return (
    <div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AboutHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AboutIntro />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurHistory />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurExperts />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AboutAchievement />
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

      {/* 
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <LatestBlogs />
      </motion.div>
      */}

    </div>
  );
};

export default About;
