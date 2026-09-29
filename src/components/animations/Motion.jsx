import { easeOut } from "framer-motion";

/* =========================================================
   1. FADE UP
   Use for: headings, paragraphs, sections
========================================================= */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};


/* =========================================================
   2. FADE LEFT
   Use for: text/content coming from left
========================================================= */

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};


/* =========================================================
   3. FADE RIGHT
   Use for: images/content coming from right
========================================================= */

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};


/* =========================================================
   4. SCALE IN
   Use for: images, cards, projects, gallery
========================================================= */

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};


/* =========================================================
   5. STAGGER
   Use for: cards, services, blogs, experts, etc.
========================================================= */

export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};