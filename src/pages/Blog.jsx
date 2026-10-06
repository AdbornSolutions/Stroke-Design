import React from "react";
import { motion } from "framer-motion";

import BlogHero from "../components/Blogs/BlogHero";
import OurBlogs from "../components/Blogs/OurBlogs";
import LeaveReply from "../components/Blogs/LeaveReply";

import {
  fadeUp,
  viewport,
} from "../components/MotionVariants";

const Blog = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <BlogHero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurBlogs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <LeaveReply />
      </motion.div>
    </div>
  );
};

export default Blog;
