import { m } from "framer-motion";

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

      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <AboutHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AboutIntro />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurHistory />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurExperts />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <AboutAchievement />
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

      {/* 
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <LatestBlogs />
      </m.div>
      */}

    </div>
  );
};

export default About;
