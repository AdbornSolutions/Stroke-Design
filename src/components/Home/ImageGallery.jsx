import { useEffect, useRef } from "react";
import interior1 from "../../assets/GalleryImages/Interior-1.jpg";
import interior2 from "../../assets/GalleryImages/Interior-2.jpg";
import interior3 from "../../assets/GalleryImages/Interior-3.jpg";
import interior4 from "../../assets/GalleryImages/Interior-4.jpg";
import interior5 from "../../assets/GalleryImages/Interior-5.jpg";
import interior6 from "../../assets/GalleryImages/Interior-6.jpg";
import interior7 from "../../assets/GalleryImages/Interior-7.jpg";
import interior8 from "../../assets/GalleryImages/Interior-8.jpg";

import exterior1 from "../../assets/GalleryImages/Exterior-1.jpg";
import exterior2 from "../../assets/GalleryImages/Exterior-2.jpg";
import exterior3 from "../../assets/GalleryImages/Exterior-3.jpg";
import exterior4 from "../../assets/GalleryImages/Exterior-4.jpg";
import exterior5 from "../../assets/GalleryImages/Exterior-5.jpg";
import exterior6 from "../../assets/GalleryImages/Exterior-6.jpg";
import exterior7 from "../../assets/GalleryImages/Exterior-7.jpg";
import exterior8 from "../../assets/GalleryImages/Exterior-8.jpg";

/* =========================================================
   ROW 1
========================================================= */

const row1Images = [
  {
    src: interior1,
    alt: "Interior project 1",
    type: "a",
  },
  {
    src: interior2,
    alt: "Interior project 2",
    type: "b",
  },
  {
    src: interior3,
    alt: "Interior project 3",
    type: "c",
  },
  {
    src: interior4,
    alt: "Interior project 4",
    type: "d",
  },
  {
    src: interior5,
    alt: "Interior project 5",
    type: "a",
  },
  {
    src: interior6,
    alt: "Interior project 6",
    type: "b",
  },
  {
    src: interior7,
    alt: "Interior project 7",
    type: "c",
  },
  {
    src: interior8,
    alt: "Interior project 8",
    type: "d",
  },
];

/* =========================================================
   ROW 2
========================================================= */

const row2Images = [
  {
    src: exterior1,
    alt: "Interior project 9",
    type: "a",
  },
  {
    src: exterior2,
    alt: "Interior project 10",
    type: "b",
  },
  {
    src: exterior3,
    alt: "Interior project 11",
    type: "c",
  },
  {
    src: exterior4,
    alt: "Interior project 12",
    type: "d",
  },
  {
    src: exterior5,
    alt: "Interior project 13",
    type: "a",
  },
  {
    src: exterior6,
    alt: "Interior project 14",
    type: "b",
  },
  {
    src: exterior7,
    alt: "Interior project 15",
    type: "c",
  },
  {
    src: exterior8,
    alt: "Interior project 16",
    type: "d",
  },
];
 
/* =========================================================
   CARD SIZE CLASSES
========================================================= */

const getCardSize = (row, type) => {
  if (row === "row1") {
    if (type === "a") {
      return `
        w-[100px] h-[65px]
        min-[361px]:w-[112px] min-[361px]:h-[72px]
        min-[481px]:w-[128px] min-[481px]:h-[82px]
        min-[768px]:w-[165px] min-[768px]:h-[105px]
        min-[1025px]:w-[195px] min-[1025px]:h-[122px]
        min-[1400px]:w-[245px] min-[1400px]:h-[150px]
      `;
    }

    if (type === "b") {
      return `
        w-[150px] h-[86px]
        min-[361px]:w-[166px] min-[361px]:h-[94px]
        min-[481px]:w-[192px] min-[481px]:h-[108px]
        min-[768px]:w-[250px] min-[768px]:h-[132px]
        min-[1025px]:w-[292px] min-[1025px]:h-[154px]
        min-[1400px]:w-[365px] min-[1400px]:h-[190px]
      `;
    }

    if (type === "c") {
      return `
        w-[120px] h-[65px]
        min-[361px]:w-[132px] min-[361px]:h-[72px]
        min-[481px]:w-[152px] min-[481px]:h-[82px]
        min-[768px]:w-[195px] min-[768px]:h-[105px]
        min-[1025px]:w-[232px] min-[1025px]:h-[122px]
        min-[1400px]:w-[290px] min-[1400px]:h-[150px]
      `;
    }

    return `
      w-[70px] h-[53px]
      min-[361px]:w-[76px] min-[361px]:h-[58px]
      min-[481px]:w-[88px] min-[481px]:h-[66px]
      min-[768px]:w-[108px] min-[768px]:h-[82px]
      min-[1025px]:w-[124px] min-[1025px]:h-[95px]
      min-[1400px]:w-[155px] min-[1400px]:h-[116px]
    `;
  }

  /* =====================================================
     ROW 2
  ===================================================== */

  if (type === "a") {
    return `
      w-[76px] h-[65px]
      min-[361px]:w-[82px] min-[361px]:h-[72px]
      min-[481px]:w-[94px] min-[481px]:h-[82px]
      min-[768px]:w-[120px] min-[768px]:h-[105px]
      min-[1025px]:w-[138px] min-[1025px]:h-[122px]
      min-[1400px]:w-[175px] min-[1400px]:h-[150px]
    `;
  }

  if (type === "b") {
    return `
      w-[150px] h-[84px]
      min-[361px]:w-[166px] min-[361px]:h-[92px]
      min-[481px]:w-[190px] min-[481px]:h-[106px]
      min-[768px]:w-[248px] min-[768px]:h-[130px]
      min-[1025px]:w-[292px] min-[1025px]:h-[150px]
      min-[1400px]:w-[365px] min-[1400px]:h-[185px]
    `;
  }

  if (type === "c") {
    return `
      w-[120px] h-[65px]
      min-[361px]:w-[132px] min-[361px]:h-[72px]
      min-[481px]:w-[152px] min-[481px]:h-[82px]
      min-[768px]:w-[195px] min-[768px]:h-[105px]
      min-[1025px]:w-[232px] min-[1025px]:h-[122px]
      min-[1400px]:w-[290px] min-[1400px]:h-[150px]
    `;
  }

  return `
    w-[96px] h-[53px]
    min-[361px]:w-[105px] min-[361px]:h-[58px]
    min-[481px]:w-[122px] min-[481px]:h-[66px]
    min-[768px]:w-[155px] min-[768px]:h-[82px]
    min-[1025px]:w-[184px] min-[1025px]:h-[95px]
    min-[1400px]:w-[232px] min-[1400px]:h-[116px]
  `;
};

/* =========================================================
   IMAGE SET
========================================================= */

function GallerySet({ images, row }) {
  return (
    <div
      className={`
        flex
        flex-nowrap
        gap-[5px]
        pr-[5px]

        min-[361px]:gap-[5px]
        min-[361px]:pr-[5px]

        min-[481px]:gap-[6px]
        min-[481px]:pr-[6px]

        min-[768px]:gap-[7px]
        min-[768px]:pr-[7px]

        min-[1025px]:gap-[8px]
        min-[1025px]:pr-[8px]

        min-[1400px]:gap-[10px]
        min-[1400px]:pr-[10px]

        ${row === "row1" ? "items-end" : "items-start"}
      `}
    >
      {images.map((image, index) => (
        <div
          key={`${row}-${index}`}
          className={`
            group
            relative
            flex-none
            overflow-hidden
            bg-[#dddddd]

            rounded-[6px]

            min-[768px]:rounded-[7px]

            min-[1025px]:rounded-[8px]

            min-[1400px]:rounded-[10px]

            ${getCardSize(row, image.type)}
          `}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            draggable="false"
            className="
              block
              h-full
              w-full
              select-none
              object-cover
              object-center
              transition-transform
              duration-[450ms]
              ease-out

              group-hover:scale-[1.035]
            "
          />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   INFINITE ANIMATED ROW
========================================================= */

function AnimatedGalleryRow({ images, direction, speed, row }) {
  const rowRef = useRef(null);
  const trackRef = useRef(null);
  const originalSetRef = useRef(null);

  const animationRef = useRef(null);

  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);

  const pausedRef = useRef(false);

  useEffect(() => {
    const rowElement = rowRef.current;
    const track = trackRef.current;
    const originalSet = originalSetRef.current;

    if (!rowElement || !track || !originalSet) {
      return;
    }

    /* =====================================================
       CREATE CLONE
    ===================================================== */

    const clone = originalSet.cloneNode(true);

    clone.setAttribute("aria-hidden", "true");

    track.appendChild(clone);

    /* =====================================================
       GET SET WIDTH
    ===================================================== */

    const getSetWidth = () => {
      return originalSet.getBoundingClientRect().width;
    };

    /* =====================================================
       RESET POSITION
    ===================================================== */

    const resetPosition = () => {
      const width = getSetWidth();

      if (!width) return;

      if (direction === "right") {
        positionRef.current = -width;
      } else {
        positionRef.current = 0;
      }

      track.style.transform = `translate3d(
          ${positionRef.current}px,
          0,
          0
        )`;
    };

    /* =====================================================
       ANIMATION
    ===================================================== */

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = Math.min(time - lastTimeRef.current, 40);

      lastTimeRef.current = time;

      if (!pausedRef.current) {
        const width = getSetWidth();

        if (width > 0) {
          const movement = speed * (delta / 16.67);

          /* LEFT */

          if (direction === "left") {
            positionRef.current -= movement;

            if (Math.abs(positionRef.current) >= width) {
              positionRef.current += width;
            }
          } else {
            /* RIGHT */
            positionRef.current += movement;

            if (positionRef.current >= 0) {
              positionRef.current -= width;
            }
          }

          track.style.transform = `translate3d(
              ${positionRef.current}px,
              0,
              0
            )`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    /* =====================================================
       HOVER PAUSE
    ===================================================== */

    const handleMouseEnter = () => {
      pausedRef.current = true;
    };

    const handleMouseLeave = () => {
      pausedRef.current = false;
    };

    /* =====================================================
       TOUCH PAUSE
    ===================================================== */

    const handleTouchStart = () => {
      pausedRef.current = true;
    };

    const handleTouchEnd = () => {
      pausedRef.current = false;
    };

    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        resetPosition();
      }, 150);
    };

    /* =====================================================
       EVENTS
    ===================================================== */

    rowElement.addEventListener("mouseenter", handleMouseEnter);

    rowElement.addEventListener("mouseleave", handleMouseLeave);

    rowElement.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    rowElement.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    /* =====================================================
       INITIALIZE
    ===================================================== */

    const initialize = () => {
      resetPosition();

      lastTimeRef.current = null;

      animationRef.current = requestAnimationFrame(animate);
    };

    if (document.readyState === "complete") {
      initialize();
    } else {
      window.addEventListener("load", initialize, {
        once: true,
      });
    }

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(animationRef.current);

      clearTimeout(resizeTimer);

      rowElement.removeEventListener("mouseenter", handleMouseEnter);

      rowElement.removeEventListener("mouseleave", handleMouseLeave);

      rowElement.removeEventListener("touchstart", handleTouchStart);

      rowElement.removeEventListener("touchend", handleTouchEnd);

      window.removeEventListener("resize", handleResize);

      window.removeEventListener("load", initialize);

      if (track.contains(clone)) {
        track.removeChild(clone);
      }
    };
  }, [direction, speed, images]);

  return (
    <div
      ref={rowRef}
      className={`
        relative
        w-full
        overflow-hidden

        ${
          row === "row1"
            ? `
              mb-[5px]

              min-[481px]:mb-[6px]

              min-[768px]:mb-[7px]

              min-[1025px]:mb-[10px]
            `
            : ""
        }

        min-[1025px]:-ml-[8px]
      `}
    >
      <div
        ref={trackRef}
        className="
          flex
          w-max
          flex-nowrap
          will-change-transform
        "
      >
        <div ref={originalSetRef}>
          <GallerySet images={images} row={row} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ImageGallery = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f3f3f3]

        pt-[42px]
        pb-[28px]

        min-[361px]:pt-[48px]
        min-[361px]:pb-[30px]

        min-[481px]:pt-[55px]
        min-[481px]:pb-[35px]

        min-[768px]:pt-[70px]
        min-[768px]:pb-[45px]

        min-[1025px]:pt-[85px]
        min-[1025px]:pb-[55px]

        min-[1400px]:pt-[95px]
        min-[1400px]:pb-[65px]
      "
    >
      {/* =====================================================
          BACKGROUND "gallery" TEXT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          z-0
          -translate-x-1/2
          whitespace-nowrap

          top-[-5px]

          font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
          text-[34vw]
          font-bold
          leading-none
          text-black
          opacity-[0.03]

          min-[361px]:top-[-10px]
          min-[361px]:text-[32vw]

          min-[481px]:top-[-15px]
          min-[481px]:text-[30vw]

          min-[768px]:top-[-45px]
          min-[768px]:text-[20vw]
          min-[768px]:opacity-[0.035]

          min-[1025px]:top-[-70px]
          min-[1025px]:text-[21vw]

          min-[1400px]:top-[-75px]
          min-[1400px]:text-[clamp(220px,21vw,340px)]
        "
      >
        gallery
      </div>

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-[2]
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* ===================================================
            ROW 1
        =================================================== */}

        <AnimatedGalleryRow
          images={row1Images}
          direction="left"
          speed={0.35}
          row="row1"
        />

        {/* ===================================================
            ROW 2
        =================================================== */}

        <AnimatedGalleryRow
          images={row2Images}
          direction="right"
          speed={0.28}
          row="row2"
        />
      </div>
    </section>
  );
};

export default ImageGallery;
