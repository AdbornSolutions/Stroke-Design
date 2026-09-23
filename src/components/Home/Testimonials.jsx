import React, { useEffect, useRef, useState } from "react";
import testimonial_bg from "../../assets/testimonials_bg_image.png"

const testimonials = [
  {
    name: "Daniel James",
    role: "Architect, United States",
    text: `“Their team understood exactly what I wanted. The final space feels elegant, practical and beautifully balanced. The attention to detail throughout the entire project was excellent!”`,
    image: "/images/testimonials/daniel.jpg",
  },
  {
    name: "Sophia Miller",
    role: "Home Owner, Australia",
    text: `“The entire design process was smooth and professional. They transformed our ideas into a sophisticated interior that feels warm, modern and completely personal to us.”`,
    image: "/images/testimonials/sophia.jpg",
  },
  {
    name: "Ravi Zha",
    role: "Business Owner, United Kingdom",
    text: `“I absolutely love my new modern living room! The clean lines, neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommend their modern interior design services!”`,
    image: "/images/testimonials/ravi.jpg",
  },
  {
    name: "Michael Peter",
    role: "Entrepreneur, Singapore",
    text: `“From planning to execution, every element was handled thoughtfully. Our interior now looks much more spacious, refined and professionally designed.”`,
    image: "/images/testimonials/michael.jpg",
  },
  {
    name: "Emma Lee",
    role: "Home Owner, Canada",
    text: `“The transformation exceeded our expectations. They created a beautiful combination of comfort, functionality and modern style while keeping the space naturally inviting.”`,
    image: "/images/testimonials/emma.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [changing, setChanging] = useState(false);
  const [direction, setDirection] = useState("next");

  const timerRef = useRef(null);
  const autoSlideRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const currentIndexRef = useRef(currentIndex);
  const changingRef = useRef(changing);

  const normalize = (index) => {
    return (
      ((index % testimonials.length) + testimonials.length) %
      testimonials.length
    );
  };

  const getOffset = (avatarIndex, activeIndex) => {
    let offset = avatarIndex - activeIndex;

    const half = Math.floor(testimonials.length / 2);

    if (offset > half) offset -= testimonials.length;
    if (offset < -half) offset += testimonials.length;

    return offset;
  };

  const getPosition = (avatarIndex) => {
    return getOffset(avatarIndex, currentIndex) + 2;
  };

  const goTo = (requestedIndex, requestedDirection) => {
    const newIndex = normalize(requestedIndex);
    const activeIndex = currentIndexRef.current;

    if (changingRef.current || newIndex === activeIndex) return;

    const oldIndex = activeIndex;

    let newDirection = requestedDirection;

    if (!newDirection) {
      const forward = normalize(newIndex - oldIndex);

      newDirection =
        forward <= Math.floor(testimonials.length / 2)
          ? "next"
          : "prev";
    }

    setDirection(newDirection);
    changingRef.current = true;
    setChanging(true);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      currentIndexRef.current = newIndex;
      setCurrentIndex(newIndex);

      setTimeout(() => {
        changingRef.current = false;
        setChanging(false);
      }, 280);
    }, 180);
  };

  const nextSlide = () => {
    goTo(currentIndexRef.current + 1, "next");
  };

  const previousSlide = () => {
    goTo(currentIndexRef.current - 1, "prev");
  };

  const startAutoSlide = () => {
    clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(() => {
      if (!changingRef.current) {
        nextSlide();
      }
    }, 2000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideRef.current);
  };

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    changingRef.current = changing;
  }, [currentIndex, changing]);

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleAvatarClick = (index) => {
    if (index === currentIndex) return;

    const offset = getOffset(index, currentIndex);

    stopAutoSlide();

    goTo(index, offset > 0 ? "next" : "prev");

    setTimeout(() => {
      startAutoSlide();
    }, 750);
  };

  const handlePointerDown = (event) => {
    touchStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    };

    stopAutoSlide();
  };

  const handlePointerUp = (event) => {
    const { x, y } = touchStartRef.current;

    const deltaX = event.clientX - x;
    const deltaY = event.clientY - y;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      startAutoSlide();
      return;
    }

    if (Math.abs(deltaX) < 35) {
      startAutoSlide();
      return;
    }

    if (deltaX < 0) {
      nextSlide();
    } else {
      previousSlide();
    }

    setTimeout(() => {
      startAutoSlide();
    }, 750);
  };

  const activeTestimonial = testimonials[currentIndex];

  const desktopPositions = [
    "left-0 top-[30px]",
    "left-[80px] top-[15px]",
    "left-[165px] top-0",
    "left-[250px] top-[15px]",
    "left-[330px] top-[30px]",
  ];

  const tabletPositions = [
    "max-[1024px]:left-0 max-[1024px]:top-7",
    "max-[1024px]:left-[70px] max-[1024px]:top-[14px]",
    "max-[1024px]:left-[145px] max-[1024px]:top-0",
    "max-[1024px]:left-[220px] max-[1024px]:top-[14px]",
    "max-[1024px]:left-[290px] max-[1024px]:top-7",
  ];

  const mobilePositions = [
    "max-[767px]:left-0 max-[767px]:top-6",
    "max-[767px]:left-[60px] max-[767px]:top-3",
    "max-[767px]:left-[122px] max-[767px]:top-0",
    "max-[767px]:left-[185px] max-[767px]:top-3",
    "max-[767px]:left-[245px] max-[767px]:top-6",
  ];

  const smallPositions = [
    "max-[480px]:left-0 max-[480px]:top-[21px]",
    "max-[480px]:left-[52px] max-[480px]:top-[10px]",
    "max-[480px]:left-[107px] max-[480px]:top-0",
    "max-[480px]:left-[162px] max-[480px]:top-[10px]",
    "max-[480px]:left-[215px] max-[480px]:top-[21px]",
  ];

  const getPositionClass = (position) => {
    const safePosition =
      position >= 0 && position <= 4 ? position : 2;

    return [
      desktopPositions[safePosition],
      tabletPositions[safePosition],
      mobilePositions[safePosition],
      smallPositions[safePosition],
    ].join(" ");
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#EAE9E5]
        text-[#111111]
      "
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
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

        {/* BUILDING */}
        <img
          src={testimonial_bg}
          alt="Stroke Design Studio"
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
          pt-0
          pb-[12px]

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
          AVATAR ARC
      ===================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          mb-[18px]
          h-[105px]
          w-[380px]
          max-w-full
          select-none
          touch-pan-y

          max-[1024px]:h-[100px]
          max-[1024px]:w-[340px]

          max-[767px]:mb-[17px]
          max-[767px]:h-[87px]
          max-[767px]:w-[285px]

          max-[480px]:mb-[15px]
          max-[480px]:h-[78px]
          max-[480px]:w-[250px]

          max-[360px]:w-[220px]
        "
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >

        {testimonials.map((testimonial, index) => {
          const position = getPosition(index);
          const isActive = index === currentIndex;

          return (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => handleAvatarClick(index)}
              aria-label={
                isActive
                  ? `Current testimonial from ${testimonial.name}`
                  : `View testimonial from ${testimonial.name}`
              }
              className={`
                absolute
                z-[1]
                flex
                h-[50px]
                w-[50px]
                cursor-pointer
                items-center
                justify-center
                border-0
                bg-transparent
                p-0
                outline-none
                transition-all
                duration-[550ms]
                ease-[cubic-bezier(.22,.61,.36,1)]

                ${getPositionClass(position)}

                max-[1024px]:h-[50px]
                max-[1024px]:w-[50px]

                max-[767px]:h-10
                max-[767px]:w-10

                max-[480px]:h-[35px]
                max-[480px]:w-[35px]

                max-[360px]:h-[34px]
                max-[360px]:w-[34px]

                ${isActive ? "z-[5]" : ""}
              `}
            >

              {/* Outer active border */}
              <span
                className={`
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[58px]
                  w-[58px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[12px]
                  border
                  transition-all
                  duration-[400ms]

                  max-[767px]:h-12
                  max-[767px]:w-12

                  max-[480px]:h-[43px]
                  max-[480px]:w-[43px]

                  ${
                    isActive
                      ? "scale-100 border-[#1d1d1d] opacity-100"
                      : "scale-[.84] border-transparent opacity-0"
                  }
                `}
              />

              {/* Inner active border */}
              <span
                className={`
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[52px]
                  w-[52px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[9px]
                  border
                  transition-all
                  duration-[400ms]

                  max-[767px]:h-[43px]
                  max-[767px]:w-[43px]

                  max-[480px]:h-[38px]
                  max-[480px]:w-[38px]

                  ${
                    isActive
                      ? "scale-100 border-black/20 opacity-100"
                      : "scale-[.86] border-transparent opacity-0"
                  }
                `}
              />

              <img
                src={testimonial.image}
                alt={testimonial.name}
                draggable={false}
                className={`
                  block
                  h-[50px]
                  w-[50px]
                  rounded-[11px]
                  object-cover
                  object-center
                  saturate-[.9]
                  pointer-events-none
                  select-none

                  max-[767px]:h-10
                  max-[767px]:w-10
                  max-[767px]:rounded-[9px]

                  max-[480px]:h-[35px]
                  max-[480px]:w-[35px]
                  max-[480px]:rounded-[8px]

                  max-[360px]:h-[34px]
                  max-[360px]:w-[34px]

                  ${
                    isActive
                      ? "rounded-[8px] saturate-100"
                      : ""
                  }
                `}
              />
            </button>
          );
        })}
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
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-30
          mx-auto
          grid
          w-full
          max-w-[1000px]
          grid-cols-[50px_minmax(0,1fr)_50px]
          items-start
          gap-x-[22px]
          px-5
          pb-[45px]

          max-[1024px]:grid-cols-[45px_minmax(0,1fr)_45px]
          max-[1024px]:gap-x-[14px]

          max-[767px]:grid-cols-[36px_minmax(0,1fr)_36px]
          max-[767px]:gap-x-[7px]

          max-[480px]:grid-cols-[31px_minmax(0,1fr)_31px]
          max-[480px]:gap-x-[5px]
        "
      >

        {/* PREVIOUS */}

        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => {
            stopAutoSlide();
            previousSlide();

            setTimeout(startAutoSlide, 750);
          }}
          className="
            mt-[15px]
            flex
            h-[30px]
            w-[30px]
            cursor-pointer
            items-center
            justify-center
            justify-self-center
            rounded-full
            border
            border-[#2d2d2d]
            bg-transparent
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


        {/* TESTIMONIAL CONTENT */}

        <div className="min-w-0 w-full">

          <div
            className="
              mx-auto
              flex
              min-h-[54px]
              max-w-[620px]
              items-center
              justify-center
              overflow-hidden
            "
          >
            <p
              className={`
                m-0
                p-0
                text-center
                text-[13px]
                font-normal
                leading-[1.28]
                text-[#111111]
                transition-all
                duration-[550ms]

                max-[767px]:text-[12px]
                max-[767px]:leading-[1.45]

                max-[480px]:text-[11.5px]
                max-[480px]:leading-[1.5]

                ${
                  changing
                    ? direction === "next"
                      ? "-translate-x-[55px] opacity-0"
                      : "translate-x-[55px] opacity-0"
                    : "translate-x-0 opacity-100"
                }
              `}
            >
              {activeTestimonial.text}
            </p>
          </div>


          {/* CONNECTOR */}

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


          {/* CLIENT */}

          <div
            className={`
              text-center
              transition-all
              duration-[550ms]

              ${
                changing
                  ? direction === "next"
                    ? "-translate-x-[45px] opacity-0"
                    : "translate-x-[45px] opacity-0"
                  : "translate-x-0 opacity-100"
              }
            `}
          >
            <h3 className="m-0 mb-1 text-[13px] font-semibold">
              {activeTestimonial.name}
            </h3>

            <p className="m-0 text-[7px] text-[#333333]">
              {activeTestimonial.role}
            </p>
          </div>
        </div>


        {/* NEXT */}

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => {
            stopAutoSlide();
            nextSlide();

            setTimeout(startAutoSlide, 750);
          }}
          className="
            mt-[15px]
            flex
            h-[30px]
            w-[30px]
            cursor-pointer
            items-center
            justify-center
            justify-self-center
            rounded-full
            border
            border-[#2d2d2d]
            bg-transparent
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
    </section>
  );
}

export default Testimonials;