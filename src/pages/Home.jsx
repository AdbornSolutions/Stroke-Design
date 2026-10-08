import { m } from "framer-motion";

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
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <HeroSlider />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <AboutSection />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <ServiceSection1 />
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
          <ServiceSection2 />
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
          <OurExperts />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <Testimonials />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <LatestBlogs />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
        >
          <StrokesReels />
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <ImageGallery />
        </m.div>
      </main>
    </div>
  );
};

export default Home;