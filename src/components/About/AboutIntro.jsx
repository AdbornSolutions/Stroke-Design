import React from "react";
import aboutbedroom from "../../assets/about-bedroom.png";
import aboutkitchen from "../../assets/about-kitchen.png";

const AboutIntro = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-16 xl:px-[9.2%]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          gap-10
          lg:grid-cols-[1fr_1fr]
          lg:gap-[40px]
          xl:gap-[55px]
        "
      >
        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="relative min-w-0">
          {/* Badge */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#CAA05C]
              bg-white
              px-[10px]
              py-[6px]
              font-['Playfair_Display',Georgia,serif]
              text-[13px]
              font-semibold
              leading-none
              text-[#171717]

              sm:text-[14px]
            "
          >
            <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#171717]" />
            <span>Started in 2009</span>
          </div>

          {/* Main Heading */}
          <h2
            className="
              m-0
              max-w-[650px]
              font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
              text-[40px]
              font-bold
              leading-[1.08]
              tracking-[-1px]
              text-black

              sm:text-[46px]
              md:text-[50px]
              lg:text-[43px]
              xl:text-[48px]
            "
          >
            Architecture Meets{" "}
            <span className="text-[#CAA05C]">Interior</span>
            <br />
            <span className="text-[#CAA05C]">Design</span>
          </h2>

          {/* =================================================
              EXPERIENCE + BEDROOM IMAGE
          ================================================== */}
          <div
            className="
              mt-12
              flex
              items-end
              gap-5

              sm:mt-14
              sm:gap-6

              lg:mt-[50px]
              lg:gap-5

              xl:mt-[52px]
              xl:gap-6
            "
          >
            {/* 20 Years */}
            <div
              className="
                flex
                shrink-0
                flex-col
                justify-end
                pb-1
              "
            >
              <div
                className="
                  font-sans
                  text-[170px]
                  font-bold
                  leading-[0.72]
                  tracking-[-8px]
                  text-[#D2A54F]

                  sm:text-[190px]
                  md:text-[205px]

                  lg:text-[170px]
                  xl:text-[200px]
                "
              >
                20
              </div>

              <div
                className="
                  ml-auto
                  mt-5
                  w-[105px]
                  font-sans
                  text-[19px]
                  font-bold
                  leading-[1.05]
                  text-black

                  sm:text-[20px]
                  lg:text-[18px]
                  xl:text-[20px]
                "
              >
                Years of
                <br />
                Experience
              </div>
            </div>

            {/* Bedroom Image */}
            <div
              className="
                relative
                min-w-0
                flex-1
                overflow-hidden
                rounded-[14px]

                lg:max-w-[305px]
                xl:max-w-[310px]
              "
            >
              <img
                src={aboutbedroom}
                alt="Luxury bedroom interior"
                className="
                  block
                  aspect-[0.84]
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}
        <div
          className="
            flex
            min-w-0
            flex-col

            lg:pt-[-0px]
          "
        >
          {/* Kitchen Image */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-[14px]
            "
          >
            <img
              src={aboutkitchen}
              alt="Modern kitchen interior"
              className="
                block
                aspect-[1.45]
                h-auto
                w-full
                object-cover
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-5
              mb-0
              max-w-[570px]
              font-sans
              text-[17px]
              font-normal
              leading-[1.8]
              tracking-[0.3px]
              text-[#111111]
              text-justify

              sm:text-[18px]
              sm:leading-[1.75]

              md:text-[19px]
              md:leading-[1.75]

              lg:mt-5
              lg:text-[17px]
              lg:leading-[1.8]

              xl:text-[18px]
            "
          >
            We believe that every space has the power to inspire, and that
            great design brings that inspiration to life. Our mission is to
            craft environments that stir creativity, evoke emotion, and
            reflect the essence of those who inhabit them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;