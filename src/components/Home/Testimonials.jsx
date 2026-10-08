import GalleryImage from "../Gallery/GalleryImage";
import { useEffect, useRef, useState } from "react";
import testimonial_bg from "../../assets/optimized/testimonials_bg_image.webp";

const testimonials = [
  {
    name: "Rahul Singh",
    role: "Architect, India",
    text: `“Their team understood exactly what I wanted. The final space feels elegant, practical and beautifully balanced. The attention to detail throughout the entire project was excellent!”`,
  },
  {
    name: "Khushi Sharma",
    role: "Home Owner, India",
    text: `“The entire design process was smooth and professional. They transformed our ideas into a sophisticated interior that feels warm, modern and completely personal to us.”`,
  },
  {
    name: "Ravi Zha",
    role: "Business Owner, India",
    text: `“I absolutely love my new modern living room! The clean lines, neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!”`,
  },
  {
    name: "Devendra Raj",
    role: "Entrepreneur, India",
    text: `“From planning to execution, every element was handled thoughtfully. Our interior now looks much more spacious, refined and professionally designed.”`,
  },
  {
    name: "Shruti Gupta",
    role: "Home Owner, India",
    text: `“The transformation exceeded our expectations. They created a beautiful combination of comfort, functionality and modern style while keeping the space naturally inviting.”`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoSlideRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const pointerStartRef = useRef(null);

  /*
    ============================================================
    NORMAL CAROUSEL SETTINGS
    ============================================================
  */

  const AUTO_SLIDE_DELAY = 3000;
  const SLIDE_DURATION = 500;

  /*
    ============================================================
    NORMALIZE INDEX
    ============================================================
  */

  const normalize = (index) => {
    return (
      ((index % testimonials.length) + testimonials.length) %
      testimonials.length
    );
  };

  /*
    ============================================================
    NEXT SLIDE
    ============================================================
  */

  const nextSlide = () => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setCurrentIndex((prev) => normalize(prev + 1));

    clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      animationTimeoutRef.current = null;
    }, SLIDE_DURATION);
  };

  /*
    ============================================================
    PREVIOUS SLIDE
    ============================================================
  */

  const previousSlide = () => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setCurrentIndex((prev) => normalize(prev - 1));

    clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      animationTimeoutRef.current = null;
    }, SLIDE_DURATION);
  };

  /*
    ============================================================
    AUTO SLIDER
    ============================================================
  */

  const startAutoSlide = () => {
    clearTimeout(resumeTimeoutRef.current);
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = null;

    if (
      document.hidden ||
      isHoveredRef.current ||
      pointerStartRef.current !== null ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    autoSlideRef.current = setInterval(() => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      setCurrentIndex((prev) => normalize(prev + 1));
      animationTimeoutRef.current = setTimeout(() => {
        isAnimatingRef.current = false;
        animationTimeoutRef.current = null;
      }, SLIDE_DURATION);
    }, AUTO_SLIDE_DELAY);
  };

  const stopAutoSlide = () => {
    clearTimeout(resumeTimeoutRef.current);
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = null;
  };

  const resumeAutoSlide = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(
      () => {
        resumeTimeoutRef.current = null;
        startAutoSlide();
      },
      SLIDE_DURATION + 200,
    );
  };

  /*
    ============================================================
    START AUTO SLIDER
    ============================================================
  */

  useEffect(() => {
    startAutoSlide();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        resumeAutoSlide();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(autoSlideRef.current);
      clearTimeout(animationTimeoutRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  /*
    ============================================================
    POINTER / SWIPE SUPPORT
    ============================================================
  */

  const handlePointerDown = (event) => {
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    stopAutoSlide();
  };

  const handlePointerUp = (event) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;

    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    /*
      Ignore vertical movement.
    */

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      startAutoSlide();
      return;
    }

    /*
      Ignore very small movement.
    */

    if (Math.abs(deltaX) < 35) {
      startAutoSlide();
      return;
    }

    /*
      Swipe left → next
      Swipe right → previous
    */

    if (deltaX < 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    /*
      Restart automatic slider.
    */

    resumeAutoSlide();
  };

  const handlePointerCancel = () => {
    pointerStartRef.current = null;
    resumeAutoSlide();
  };

  const handleMouseEnter = (event) => {
    if (event.pointerType === "touch") return;
    isHoveredRef.current = true;
    stopAutoSlide();
  };

  const handleMouseLeave = (event) => {
    if (event.pointerType === "touch") return;
    isHoveredRef.current = false;
    resumeAutoSlide();
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="
        relative
        w-full
        overflow-hidden
        text-[#111111]
        mt-12
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="
          relative
          z-0
          w-full

          h-[320px]

          max-[1200px]:h-[285px]
          max-[1024px]:h-[250px]
          max-[767px]:h-[185px]
          max-[480px]:h-[145px]
        "
      >
        <GalleryImage aspectRatio={1.2121212121212122}
          src={testimonial_bg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="
            absolute
            left-1/2
            top-0
            z-10
            block
            w-[100%]
            max-w-none
            -translate-x-1/2

            object-contain
            object-top
            pointer-events-none
            select-none

            max-[1200px]:w-[105%]
            max-[1024px]:w-[112%]
            max-[767px]:w-[135%]
            max-[480px]:w-[155%]
          "
        />
      </div>

      {/* =====================================================
          TESTIMONIAL HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-[clamp(149px,21vw,302px)_minmax(0,1fr)]
          items-start
          px-[clamp(38px,5vw,72px)]
          pt-20
          pb-20

          max-[1024px]:grid-cols-[149px_minmax(0,1fr)]
          max-[1024px]:px-[38px]

          max-[767px]:block
          max-[767px]:px-4
          max-[767px]:pb-[25px]
        "
      >
        {/* LEFT DESIGN */}

        <div
          className="
            relative
            h-[110px]
            w-full

            max-[767px]:h-[74px]
            max-[767px]:w-[150px]
          "
        >
          {/* Horizontal line */}

          <span
            className="
              absolute
              left-0
              top-8
              h-[2px]
              w-full
              bg-black/50

              max-[767px]:top-[21px]
              max-[767px]:w-[150px]
            "
          />

          {/* Vertical line */}

          <span
            className="
              absolute
              left-[75%]
              top-0
              h-[110px]
              w-[2px]
              bg-black/50

              max-[1024px]:left-[108px]

              max-[767px]:left-[108px]
              max-[767px]:h-[67px]
            "
          />

          {/* Badge */}

          <div
            className="
              absolute
              left-[2px]
              top-[50px]
              z-10
              inline-flex
              min-h-[21px]
              items-center
              justify-center
              gap-[6px]
              whitespace-nowrap
              rounded-full
              border
              border-[#CAA05C]
              bg-white
              px-[7px]
              py-[7px]
              font-['Playfair_Display',Georgia,serif]
              text-[clamp(8px,1.11vw,16px)]
              font-semibold
              leading-none
              text-[#1E1E1E]

              max-[1024px]:top-[42px]
              max-[1024px]:text-[8px]

              max-[767px]:top-8
              max-[767px]:px-2
              max-[767px]:py-1
              max-[767px]:text-[10px]
            "
          >
            <span
              className="
                h-2
                w-2
                min-h-2
                min-w-2
                rounded-full
                bg-[#1E1E1E]

                max-[767px]:h-[7px]
                max-[767px]:w-[7px]
              "
            />

            <span>Our Clients Say</span>
          </div>
        </div>

        {/* HEADING */}

        <div
          className="
            relative
            z-10
            w-full
            pt-[clamp(45px,3.75vw,54px)]

            max-[1024px]:pt-[45px]

            max-[767px]:pt-[10px]
          "
        >
          <h2
            id="testimonials-heading"
            className="
              m-0
              p-0
              font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
              text-[clamp(25px,3.35vw,48px)]
              font-bold
              leading-[1.2]
              text-black

              max-[1024px]:text-[25px]

              max-[767px]:text-[25px]
              max-[767px]:leading-[1.12]

              max-[380px]:text-[23px]
            "
          >
            <span className="block">
              Here’s what{" "}
              <span className="text-[#CAA05C]">
                Warm Words Our
              </span>
            </span>

            <span className="block">
              <span className="text-[#CAA05C]">
                Clients
              </span>{" "}
              Say
            </span>
          </h2>
        </div>
      </div>

      {/* =====================================================
          QUOTE ICON
      ===================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          mb-7
          flex
          h-[38px]
          w-[38px]
          items-center
          justify-center
          rounded-full
          bg-[#062F2A]

          max-[767px]:mb-[22px]
          max-[767px]:h-9
          max-[767px]:w-9
        "
      >
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-white"
        >
          <path
            d="
              M8.4 8.5
              C5.2 10 3.5 12.6 3.5 16
              c0 4.2 2.5 6.6 6 6.6
              3.1 0 5.3-2.1 5.3-5.2
              0-2.8-1.9-4.8-4.6-4.8
              -.6 0-1.1.1-1.5.2
              .7-1.6 1.9-2.8 3.6-3.7
              L8.4 8.5
              zm13.3 0
              c-3.2 1.5-4.9 4.1-4.9 7.5
              0 4.2 2.5 6.6 6 6.6
              3.1 0 5.3-2.1 5.3-5.2
              0-2.8-1.9-4.8-4.6-4.8
              -.6 0-1.1.1-1.5.2
              .7-1.6 1.9-2.8 3.6-3.7
              l-3.9-.6z
            "
          />
        </svg>
      </div>

      {/* =====================================================
          NORMAL CAROUSEL CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          w-full
          max-w-[1000px]
          overflow-hidden
          px-5
          pb-[45px]
        "
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onLostPointerCapture={handlePointerCancel}
      >
        {/* =====================================================
            SLIDER TRACK
        ===================================================== */}

        <div
          className="
            flex
            w-full
            transition-transform
            duration-500
            ease-in-out
          "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                w-full
                min-w-full
                flex-shrink-0
              "
            >
              {/* =================================================
                  TESTIMONIAL TEXT
              ================================================= */}

              <div
                className="
                  mx-auto
                  flex
                  min-h-[54px]
                  max-w-[620px]
                  items-center
                  justify-center
                  px-2
                "
              >
                <p
                  className="
                    m-0
                    p-0
                    text-center
                    text-[13px]
                    font-normal
                    leading-[1.28]
                    text-[#111111]

                    max-[767px]:text-[12px]
                    max-[767px]:leading-[1.45]

                    max-[480px]:text-[11.5px]
                    max-[480px]:leading-[1.5]
                  "
                >
                  {testimonial.text}
                </p>
              </div>

              {/* =================================================
                  CONNECTOR
              ================================================= */}

              <div
                className="
                  mx-auto
                  mt-5
                  flex
                  h-[67px]
                  w-5
                  flex-col
                  items-center
                "
              >
                <span className="h-[52px] w-px bg-[#222222]" />

                <svg
                  viewBox="0 0 16 16"
                  className="
                    mt-[-4px]
                    h-[13px]
                    w-[13px]
                    fill-none
                    stroke-[#222222]
                  "
                >
                  <path
                    d="M4 6l4 4 4-4"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* =================================================
                  CLIENT
              ================================================= */}

              <div className="text-center">
                <h3 className="m-0 mb-1 text-[13px] font-semibold">
                  {testimonial.name}
                </h3>

                <p className="m-0 text-[7px] text-[#333333]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            ARROWS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-[15px]
            z-40
            flex
            w-full
            items-center
            justify-between
            px-[10px]

            max-[767px]:px-[2px]
          "
        >
          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => {
              stopAutoSlide();
              previousSlide();

              resumeAutoSlide();
            }}
            className="
              pointer-events-auto
              flex
              h-[30px]
              w-[30px]
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-[#2d2d2d]
              bg-[#EAE9E5]
              text-[#111111]
              transition-all

              hover:border-[#062F2A]
              hover:bg-[#062F2A]
              hover:text-white

              active:scale-90
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
            >
              <path
                d="M14.5 6.5L9 12l5.5 5.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => {
              stopAutoSlide();
              nextSlide();

              resumeAutoSlide();
            }}
            className="
              pointer-events-auto
              flex
              h-[30px]
              w-[30px]
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-[#2d2d2d]
              bg-[#EAE9E5]
              text-[#111111]
              transition-all

              hover:border-[#062F2A]
              hover:bg-[#062F2A]
              hover:text-white

              active:scale-90
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current"
            >
              <path
                d="M9.5 6.5L15 12l-5.5 5.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
