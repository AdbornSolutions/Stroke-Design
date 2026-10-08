import React from "react";
import { m } from "framer-motion";

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
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <BlogHero />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <OurBlogs />
      </m.div>

      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <LeaveReply />
      </m.div>
    </div>
  );
};

export default Blog;
