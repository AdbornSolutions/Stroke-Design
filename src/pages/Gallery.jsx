import React from "react";
import { m } from "framer-motion";

import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryImages from "../components/Gallery/GalleryImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Gallery = () => {
  return (
    <div>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <GalleryHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <GalleryImages />
      </m.div>
    </div>
  );
};

export default Gallery;
