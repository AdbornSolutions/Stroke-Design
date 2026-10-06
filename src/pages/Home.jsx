import { motion } from "framer-motion";

import AboutIntro from "../components/Home/AboutIntro";
import AboutSection from "../components/Home/AboutSection";
import HeroSlider from "../components/Home/HeroSlider";
import HowWeWork from "../components/Home/HowWeWork";
import ImageGallery from "../components/Home/ImageGallery";
import LatestBlogs from "../components/Home/LatestBlogs";
import OurExperts from "../components/Home/OurExperts";
import ServiceSection1 from "../components/Home/ServiceSection1";
import ServiceSection2 from "../components/Home/OurProjects";
import StrokesReels from "../components/Home/StrokesReels";
import Testimonials from "../components/Home/Testimonials";

import {
  fadeUp,
  scaleIn,
  viewport,
} from "../components/MotionVariants";

const Home = () => {
  return (
    <div>
      <main>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <HeroSlider />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <ServiceSection1 />
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
          <ServiceSection2 />
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
          <OurExperts />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <LatestBlogs />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
        >
          <StrokesReels />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <ImageGallery />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;