import React from "react";
import { motion } from "framer-motion";

import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryImages from "../components/Gallery/GalleryImages";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Gallery = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <GalleryHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <GalleryImages />
      </motion.div>
    </div>
  );
};

export default Gallery;
