import React from "react";
import image1 from "../../assets/hero-2.png";
import image2 from "../../assets/hero-3.png";
import image3 from "../../assets/hero-4.png";

const services = [
  {
    number: "01",
    tag: "Kitchens",
    title: (
      <>
        A Modern <br />
        Modular Kitchen
      </>
    ),
    description: "Clean Lines, Premium Materials, Effortless Style",
    image: image1,
    link: "#",
  },
  {
    number: "02",
    tag: "2BHK",
    title: (
      <>
        Modern 2BHK
        <br />
        Interiors
      </>
    ),
    description: "Clean Lines, Warm Textures, Modern Comfort",
    image: image2,
    link: "#",
  },
  {
    number: "03",
    tag: "3BHK",
    title: (
      <>
        Permium 3BHK
        <br />
        Interiors
      </>
    ),
    description: "Clean Lines, Warm Textures, Modern Comfort",
    image: image3,
    link: "#",
  },
];

const ServiceSection1 = () => {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        overflow-visible
        bg-[#F7F7F7]
      "
    >
      {/* =====================================================
          SERVICES HEADER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1400px]
          items-start

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
        {/* =====================================================
            LEFT DECORATIVE AREA
        ====================================================== */}

        <div
          className="
            relative
            hidden
            h-[115px]
            w-full

            lg:block
          "
        >
          {/* Horizontal Line */}
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

          {/* Vertical Line */}
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

          {/* Our Services Badge */}
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

              bg-white

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

        {/* =====================================================
            MOBILE DECORATIVE AREA
        ====================================================== */}

        <div
          className="
            relative
            block
            h-[75px]
            w-[150px]

            lg:hidden
          "
        >
          {/* Horizontal Line */}
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

          {/* Vertical Line */}
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

              bg-white

              px-[8px]
              py-[4px]

              font-['Playfair_Display']
              text-[11px]
              font-semibold
              leading-none
              text-[#1E1E1E]

              max-[480px]:text-[11px]
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

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

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
            {/* First Line */}
            <span
              className="
                block
                whitespace-normal

                lg:whitespace-nowrap
              "
            >
              Explore our
            </span>

            {/* Second Line */}
            <span
              className="
                block
                text-[#CAA05C]
                whitespace-normal

                lg:whitespace-nowrap
              "
            >
              comprehensive services
            </span>
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

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
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects
            crafted with precision.
          </p>
        </div>
      </div>

      {/* =====================================================
          STACKING SERVICES CARDS
      ====================================================== */}

      <div
        className="
          relative
          isolate
          mx-auto
          w-full
          max-w-[1400px]

          px-4
          pb-[60px]

          sm:px-5

          md:px-6
          md:pb-[80px]

          lg:px-5
          lg:pb-[100px]

          min-[1441px]:max-w-[1700px]
          min-[1441px]:px-[30px]
        "
      >
        {services.map((service, index) => (
          <div
            key={service.number}
            className="
              group
              sticky
              top-[10px]

              flex
              h-[50vh]
              min-h-[470px]
              w-full

              flex-col
              items-start
              justify-end

              overflow-hidden
              rounded-[16px]

              bg-cover
              bg-center
              bg-no-repeat

              p-[18px]

              shadow-[0_25px_60px_rgba(0,0,0,0.20)]

              transition-transform
              duration-500

              sm:top-[10px]

              md:top-[15px]
              md:h-[80vh]
              md:min-h-[600px]
              md:rounded-[18px]
              md:p-[32px]

              lg:top-[20px]
              lg:h-[90vh]
              lg:min-h-[650px]
              lg:rounded-[22px]
              lg:p-[40px]
            "
            style={{
              backgroundImage: `url("${service.image}")`,
              zIndex: index + 1,
            }}
          >
            {/* =================================================
                DARK GRADIENT
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-[1]

                bg-gradient-to-t
                from-black/[0.78]
                via-black/[0.45]
                via-[28%]
                to-transparent
                to-[80%]
              "
            />

            {/* =================================================
                TOP TAG
            ================================================== */}

            <span
              className="
                absolute
                left-[18px]
                top-[18px]
                z-[3]

                inline-flex
                items-center
                justify-center

                rounded-full
                border
                border-[#CAA05C]

                bg-black/[0.12]

                px-[14px]
                py-[7px]

                font-[Arial,sans-serif]
                text-[12px]
                font-normal
                leading-[1.2]
                text-white

                md:left-[26px]
                md:top-[26px]
                md:px-[16px]
                md:py-[8px]
                md:text-[14px]

                lg:left-[32px]
                lg:top-[32px]
                lg:px-[18px]
                lg:py-[8px]
            "
            >
              {service.tag}
            </span>

            {/* =================================================
                NUMBER
            ================================================== */}

            <span
              className="
                absolute
                right-[18px]
                top-[20px]
                z-[3]

                font-[Arial,sans-serif]
                text-[26px]
                font-bold
                leading-none
                text-white

                md:right-[26px]
                md:top-[26px]
                md:text-[32px]

                lg:right-[32px]
                lg:top-[26px]
                lg:text-[38px]
            "
            >
              {service.number}
            </span>

            {/* =================================================
                CARD CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-[3]

                w-full
                max-w-full

                text-left

                md:max-w-[520px]

                lg:max-w-[590px]
            "
            >
              {/* Heading */}
              <h2
                className="
                  m-0
                  mb-[8px]
                  p-0

                  font-['Playfair_Display']
                  text-[25px]
                  font-bold
                  leading-[1.15]
                  text-white

                  sm:text-[27px]

                  md:mb-[12px]
                  md:text-[38px]
                  md:leading-[1.12]

                  lg:text-[44px]
                "
              >
                {service.title}
              </h2>

              {/* Description */}
              <p
                className="
                  m-0
                  mb-[16px]
                  p-0

                  font-[Arial,sans-serif]
                  text-[12.5px]
                  font-normal
                  leading-[1.5]
                  text-[#f1efe9]

                  md:mb-[22px]
                  md:text-[13px]

                  lg:text-[15px]
                  lg:leading-[1.6]
                "
              >
                {service.description}
              </p>

              {/* CTA */}
              <a
                href={service.link}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-[8px]

                  rounded-full
                  border
                  border-[#CAA05C]

                  bg-transparent

                  px-[16px]
                  py-[9px]
                  pr-[10px]

                  font-[Arial,sans-serif]
                  text-[12px]
                  font-medium
                  leading-none
                  text-white
                  no-underline

                  transition-all
                  duration-300

                  hover:bg-[#CAA05C]

                  md:gap-[10px]
                  md:px-[20px]
                  md:py-[11px]
                  md:pr-[12px]
                  md:text-[14px]
                "
              >
                <span>More About Us</span>

                {/* Arrow Circle */}
                <span
                  className="
                    inline-flex
                    h-[24px]
                    w-[24px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#CAA05C]
                    text-[13px]
                    text-[#1c1a17]

                    transition-transform
                    duration-300

                    md:h-[28px]
                    md:w-[28px]
                    md:text-[15px]

                    group-hover:bg-white
                    group-hover:text-[#CAA05C]
                    group-hover:rotate-45
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection1;
