import React, { useRef } from "react";

const projects = [
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-24-4.png",
    titleLight: "2BHK Home",
    titleBold: "Interior",
    location: "Pune",
    alt: "2BHK Home Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-25-3.png",
    titleBold: "Studio Apartment Interior",
    location: "Mumbai",
    alt: "Studio Apartment Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-26-18.png",
    titleBold: "3BHK Luxury Apartment",
    location: "Mumbai",
    alt: "3BHK Luxury Apartment",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-27-5.png",
    titleBold: "Modern Villa Interior",
    location: "Mumbai",
    alt: "Modern Villa Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-28-6.png",
    titleBold: "Duplex House Interior",
    location: "Nagpur",
    alt: "Duplex House Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-29-6.png",
    titleBold: "Modern Kitchen Interior",
    location: "Nagpur",
    alt: "Modern Kitchen Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-30-24.png",
    titleBold: "Compact Home Interior",
    location: "Hyderabad",
    alt: "Compact Home Interior",
  },
  {
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/Rectangle-31.png",
    titleBold: "Luxury Residential Interior",
    location: "Hyderabad",
    alt: "Luxury Residential Interior",
  },
];

const ServiceSection2 = () => {
  const trackRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.querySelector("[data-project-card]");

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;

    const gap = window.innerWidth <= 480
      ? 26
      : window.innerWidth <= 900
        ? 26
        : 26;

    const scrollAmount = (cardWidth + gap) * 2;

    trackRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f5f1]
      "
    >

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1400px]
          items-start

          grid-cols-1

          px-4
          py-[20px]
          pb-[30px]

          sm:px-6
          md:px-[38px]
          md:py-[30px]
          md:pb-[25px]

          lg:grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]
          lg:px-10
          lg:pb-[24px]
        "
      >

        {/* =================================================
            LEFT DECORATIVE AREA
        ================================================== */}

        <div
          className="
            relative
            hidden
            h-[115px]
            w-full

            lg:block
          "
        >

          {/* Horizontal line */}
          <div
            className="
              absolute
              left-0
              top-[33px]
              h-px
              w-full
              bg-[#BDBDBD]
            "
          />

          {/* Vertical line */}
          <div
            className="
              absolute
              left-[72%]
              top-0
              h-[112px]
              w-px
              bg-[#C6C6C6]
            "
          />

          {/* Badge */}
          <div
            className="
              absolute
              left-[1px]
              top-[42px]
              z-10

              inline-flex
              items-center
              justify-center
              gap-[5px]

              whitespace-nowrap
              rounded-full

              border
              border-[#CAA05C]

              bg-transparent

              px-[9px]
              py-[5px]

              font-['Playfair_Display']
              text-[14px]
              font-semibold
              leading-none
              text-[#1E1E1E]
            "
          >
            <span
              className="
                block
                h-[8px]
                w-[8px]
                shrink-0
                rounded-full
                bg-[#111111]
              "
            />

            <span>Our Services</span>
          </div>

        </div>


        {/* =================================================
            MOBILE DECORATIVE AREA
        ================================================== */}

        <div
          className="
            relative
            block
            h-[75px]
            w-[150px]

            lg:hidden
          "
        >

          {/* Horizontal line */}
          <div
            className="
              absolute
              left-[-20px]
              top-[21px]
              h-px
              w-[170px]
              bg-[#BDBDBD]

              max-[480px]:left-[-16px]
              max-[480px]:w-[166px]
            "
          />

          {/* Vertical line */}
          <div
            className="
              absolute
              left-[106px]
              top-0
              h-[67px]
              w-px
              bg-[#C6C6C6]
            "
          />

          {/* Badge */}
          <div
            className="
              absolute
              left-0
              top-[32px]
              z-10

              inline-flex
              items-center
              justify-center
              gap-[5px]

              whitespace-nowrap
              rounded-full

              border
              border-[#CAA05C]

              bg-transparent

              px-[8px]
              py-[4px]

              font-['Playfair_Display']
              text-[11px]
              font-semibold
              leading-none
              text-[#1E1E1E]
            "
          >
            <span
              className="
                block
                h-[7px]
                w-[7px]
                shrink-0
                rounded-full
                bg-[#111111]
              "
            />

            <span>Our Services</span>
          </div>

        </div>


        {/* =================================================
            MAIN HEADING
        ================================================== */}

        <div
          className="
            w-full
            pt-[11px]

            lg:col-start-2
            lg:pt-[43px]
            lg:pr-[20px]
          "
        >

          <h2
            className="
              m-0
              p-0

              font-['Playfair_Display']
              text-[25px]
              font-bold
              leading-[1.18]
              tracking-normal
              text-black

              sm:text-[27px]

              md:text-[30px]

              lg:text-[clamp(34px,3.15vw,48px)]
              lg:leading-[1.12]
            "
          >

            {/* First line */}
            <span
              className="
                block

                lg:whitespace-nowrap
              "
            >
              Creative{" "}

              <span className="text-[#CAA05C]">
                Projects That
              </span>
            </span>


            {/* Second line */}
            <span
              className="
                block

                lg:whitespace-nowrap
              "
            >
              <span className="text-[#CAA05C]">
                Define
              </span>{" "}

              Our Style
            </span>

          </h2>

        </div>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <div
          className="
            w-full
            pt-[24px]

            lg:col-start-3
            lg:pt-[111px]
          "
        >

          <p
            className="
              m-0
              w-full
              max-w-[500px]

              font-[Arial,sans-serif]
              text-[14px]
              font-normal
              leading-[1.3]
              tracking-normal
              text-black

              sm:text-[15px]

              lg:max-w-[330px]
              lg:text-[clamp(12px,1.05vw,16px)]
              lg:leading-[1.15]
            "
          >
            Our portfolio showcases a diverse range of projects, from
            beautifully crafted residential spaces to functional and
            stylish commercial interiors.
          </p>

        </div>

      </div>

      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]

          px-5

          sm:px-6

          md:px-8

          lg:px-10
        "
      >

        {/* =================================================
            FADE EDGES
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[60px]
            left-0
            top-0
            z-[5]
            hidden
            w-[90px]

            bg-gradient-to-r
            from-[#f7f5f1]
            to-transparent

            md:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[60px]
            right-0
            top-0
            z-[5]
            hidden
            w-[90px]

            bg-gradient-to-l
            from-[#f7f5f1]
            to-transparent

            md:block
          "
        />


        {/* =================================================
            PREVIOUS BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => scrollGallery(-1)}
          aria-label="Previous projects"
          className="
            absolute
            left-[-6px]
            top-[44%]
            z-10
            hidden

            h-[44px]
            w-[44px]

            -translate-y-1/2

            items-center
            justify-center

            rounded-full
            border
            border-[#e5e0d8]

            bg-white

            text-[28px]
            font-normal
            leading-none
            text-[#2b2621]

            shadow-[0_6px_18px_rgba(0,0,0,0.08)]

            transition-colors
            duration-200

            hover:bg-[#efece5]

            lg:flex
          "
        >
          <span className="-mt-[3px]">
            ‹
          </span>
        </button>


        {/* =================================================
            NEXT BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => scrollGallery(1)}
          aria-label="Next projects"
          className="
            absolute
            right-[-6px]
            top-[44%]
            z-10
            hidden

            h-[44px]
            w-[44px]

            -translate-y-1/2

            items-center
            justify-center

            rounded-full
            border
            border-[#e5e0d8]

            bg-white

            text-[28px]
            font-normal
            leading-none
            text-[#2b2621]

            shadow-[0_6px_18px_rgba(0,0,0,0.08)]

            transition-colors
            duration-200

            hover:bg-[#efece5]

            lg:flex
          "
        >
          <span className="-mt-[3px]">
            ›
          </span>
        </button>


        {/* =================================================
            SCROLL TRACK
        ================================================== */}

        <div
          ref={trackRef}
          className="
            flex
            items-start
            gap-[26px]

            overflow-x-auto

            scroll-smooth
            snap-x
            snap-mandatory

            px-[2px]
            pb-5
            pt-1

            [scrollbar-width:none]
            [-ms-overflow-style:none]

            [&::-webkit-scrollbar]:hidden
          "
        >

          {projects.map((project, index) => (
            <article
              key={`${project.titleBold}-${index}`}
              data-project-card
              className={`
                group
                w-[300px]
                shrink-0
                snap-start

                max-[900px]:w-[240px]
                max-[900px]:mt-0

                max-[900px]:[&:nth-child(even)]:mt-[30px]

                max-[480px]:w-[200px]

                ${
                  index % 2 === 1
                    ? "mt-[50px]"
                    : "mt-0"
                }
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  h-[380px]
                  w-full

                  overflow-hidden
                  rounded-[14px]

                  bg-transparent

                  max-[900px]:h-[300px]

                  max-[480px]:h-[260px]
                "
              >

                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="
                    block
                    h-full
                    w-full

                    object-cover

                    transition-transform
                    duration-[600ms]
                    ease-out

                    group-hover:scale-[1.05]
                  "
                />

              </div>


              {/* =================================================
                  TITLE
              ================================================== */}

              <div
                className="
                  mt-[18px]

                  font-['Georgia','Times_New_Roman',serif]
                  text-[22px]
                  leading-[1.3]
                  text-[#2b2621]

                  max-[900px]:text-[18px]
                "
              >

                {project.titleLight && (
                  <span className="font-normal text-[#6f675c]">
                    {project.titleLight}{" "}
                  </span>
                )}

                <span className="font-bold text-[#2b2621]">
                  {project.titleBold}
                </span>

              </div>


              {/* =================================================
                  LOCATION
              ================================================== */}

              <div
                className="
                  mt-[4px]

                  font-['Georgia','Times_New_Roman',serif]
                  text-[14px]
                  italic
                  text-[#9a9186]
                "
              >
                {project.location}
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServiceSection2;