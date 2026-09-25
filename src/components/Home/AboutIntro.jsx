import React from "react";

import backgroundImage from "../../assets/about-bg.png";
import interiorImage from "../../assets/about-interior.png";

const stats = [
  {
    number: "20+",
    title: "Years experience",
    description:
      "Improving homes with expert craftsmanship for years",
  },
  {
    number: "200+",
    title: "Projects completed",
    description:
      "Over 250 successful projects delivered with quality and care",
  },
  {
    number: "30+",
    title: "Team of Contractors",
    description:
      "Our team of 30 experts ensures top-quality results",
  },
];

const AboutIntro = () => {
  return (
    <section
      id="about-intro"
      className="w-full overflow-hidden"
    >

      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#171512]
        "
      >

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[700px]
            w-full
            max-w-[1440px]
            items-center

            px-6
            py-16

            sm:px-8
            sm:py-20

            md:min-h-[720px]
            md:px-10

            lg:min-h-[700px]
            lg:px-14
            lg:py-20

            xl:px-[70px]
          "
        >

          <div
            className="
              grid
              w-full
              grid-cols-1
              items-center
              gap-10

              lg:grid-cols-[1fr_0.95fr]
              lg:gap-12

              xl:gap-16
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="max-w-[680px] text-left">

              {/* Started Badge */}
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  border
                  border-[#CAA05C]

                  bg-black/20

                  px-4
                  py-2

                  font-['Playfair_Display']
                  text-[14px]
                  font-semibold
                  leading-none
                  text-white

                  backdrop-blur-[2px]

                  sm:mb-7
                  sm:px-[18px]
                  sm:py-[9px]
                "
              >
                <span
                  className="
                    h-[13px]
                    w-[13px]
                    shrink-0
                    rounded-full
                    bg-white
                  "
                />

                <span>
                  Started in 2009
                </span>
              </div>


              {/* Main Heading */}
              <h1
                className="
                  m-0
                  max-w-[650px]

                  font-['Playfair_Display']
                  text-[39px]
                  font-bold
                  leading-[1.02]
                  tracking-[-1px]
                  text-white

                  sm:text-[46px]
                  sm:leading-[1.04]

                  md:text-[52px]

                  lg:text-[48px]

                  xl:text-[52px]
                  2xl:text-[58px]
                "
              >
                Where Spaces Inspire,
                <br />

                <span>
                  and{" "}
                </span>

                <span className="text-[#CAA05C]">
                  Design Comes
                </span>

                <br />

                <span className="text-[#CAA05C]">
                  Alive
                </span>
              </h1>


              {/* Feature List */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3

                  sm:mt-8
                  sm:gap-[10px]
                "
              >

                {/* Feature 1 */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    font-[Arial,sans-serif]
                    text-[15px]
                    font-bold
                    leading-[1.3]
                    text-white

                    sm:text-[16px]
                  "
                >
                  <span
                    className="
                      h-[13px]
                      w-[13px]
                      shrink-0
                      rounded-full
                      bg-[#CAA05C]
                    "
                  />

                  <span>
                    Latest technologies
                  </span>
                </div>


                {/* Feature 2 */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    font-[Arial,sans-serif]
                    text-[15px]
                    font-bold
                    leading-[1.3]
                    text-white

                    sm:text-[16px]
                  "
                >
                  <span
                    className="
                      h-[13px]
                      w-[13px]
                      shrink-0
                      rounded-full
                      bg-[#CAA05C]
                    "
                  />

                  <span>
                    High-Quality Designs
                  </span>
                </div>


                {/* Feature 3 */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    font-[Arial,sans-serif]
                    text-[15px]
                    font-bold
                    leading-[1.3]
                    text-white

                    sm:text-[16px]
                  "
                >
                  <span
                    className="
                      h-[13px]
                      w-[13px]
                      shrink-0
                      rounded-full
                      bg-[#CAA05C]
                    "
                  />

                  <span>
                    Residential Design
                  </span>
                </div>

              </div>


              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-[650px]

                  font-[Arial,sans-serif]
                  text-[15px]
                  font-semibold
                  leading-[1.55]
                  text-white

                  sm:mt-8
                  sm:text-[16px]
                  sm:leading-[1.7]

                  md:text-[17px]
                "
              >
                Whether it’s your home, office, or a commercial project,
                we are always dedicated to bringing your vision to life.
                Our numbers speak better than words:
              </p>

            </div>


            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div
              className="
                relative
                w-full

                lg:flex
                lg:justify-end
              "
            >

              <div
                className="
                  relative
                  w-full
                  overflow-hidden

                  rounded-[18px]

                  shadow-[0_25px_70px_rgba(0,0,0,0.45)]

                  sm:rounded-[20px]

                  md:rounded-[22px]

                  lg:max-w-[630px]
                  lg:rounded-[20px]

                  xl:max-w-[640px]
                  xl:rounded-[22px]
                "
              >

                <img
                  src={interiorImage}
                  alt="Interior design living room"
                  className="
                    block
                    aspect-[1.08]
                    h-auto
                    w-full

                    object-cover
                    object-center

                    transition-transform
                    duration-700

                    hover:scale-[1.02]
                  "
                />

              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          STATS SECTION
      ====================================================== */}

      <div
        className="
          w-full
          bg-[#F7F6F3]
          px-6
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-[58px]

          xl:px-[70px]
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1240px]

            grid-cols-1

            gap-10

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12

            lg:grid-cols-3
            lg:gap-x-[70px]
            lg:gap-y-0
          "
        >

          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className="
                w-full
                text-left
              "
            >

              {/* Number */}
              <div
                className="
                  font-[Arial,sans-serif]
                  text-[42px]
                  font-bold
                  leading-none
                  tracking-[-1.5px]
                  text-black

                  sm:text-[44px]

                  md:text-[46px]

                  lg:text-[48px]
                "
              >
                {stat.number}
              </div>


              {/* Divider */}
              <div
                className="
                  mt-[7px]
                  h-px
                  w-full
                  bg-[#969696]
                "
              />


              {/* Title */}
              <h3
                className="
                  m-0
                  mt-[11px]
                  p-0

                  font-[Arial,sans-serif]
                  text-[27px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.5px]
                  text-black

                  sm:text-[28px]

                  md:text-[29px]

                  lg:text-[30px]
                "
              >
                {stat.title}
              </h3>


              {/* Description */}
              <p
                className="
                  m-0
                  mt-[12px]
                  max-w-[390px]
                  p-0

                  font-[Arial,sans-serif]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  text-[#555555]

                  sm:text-[16px]

                  md:text-[17px]
                "
              >
                {stat.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutIntro;