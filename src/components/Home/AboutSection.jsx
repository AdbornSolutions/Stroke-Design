import React from "react";

import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F7F7]
        px-4
        py-[20px]
        pb-[30px]

        sm:px-6
        sm:py-[25px]

        md:px-[38px]
        md:py-[30px]
        md:pb-[35px]

        lg:px-10
        lg:py-[30px]
        lg:pb-[24px]
      "
    >

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1400px]
          items-start

          lg:grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]
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

          {/* About Us Badge */}
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

            {/* Dot */}
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

            <span>
              About us
            </span>

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

              sm:left-[-20px]
              sm:w-[170px]
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

          {/* Mobile Badge */}
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

              min-[481px]:text-[12px]
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

            <span>
              About us
            </span>

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
              font-bold

              text-[25px]
              leading-[1.12]
              tracking-normal
              text-black

              sm:text-[27px]

              md:text-[30px]

              lg:text-[clamp(34px,3.15vw,48px)]
              lg:leading-[1.12]
            "
          >

            {/* =================================================
                FIRST LINE
            ================================================== */}

            <span
              className="
                block

                lg:whitespace-nowrap
              "
            >

              <span>
                We Shape{" "}
              </span>

              <span className="text-[#CAA05C]">
                Interior Design,
              </span>

            </span>


            {/* =================================================
                SECOND LINE
            ================================================== */}

            <span
              className="
                block

                lg:whitespace-nowrap
              "
            >

              <span className="text-[#CAA05C]">
                Crafting
              </span>

              <span>
                {" "}Timeless and Inspiring
              </span>

              <br className="hidden lg:block" />

              <span>
                {" "}Spaces
              </span>

            </span>

          </h2>

        </div>


        {/* =====================================================
            RIGHT EMPTY COLUMN
            Preserves original 3-column layout
        ====================================================== */}

        <div className="hidden lg:block" />

      </div>


      {/* =====================================================
          IMAGE GRID
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          mt-10
          grid
          w-full
          max-w-[1200px]

          grid-cols-1

          items-start

          gap-8

          sm:mt-12
          sm:gap-9

          md:grid-cols-3
          md:gap-7

          lg:mt-10
          lg:gap-10

          xl:gap-11
        "
      >

        {/* =====================================================
            IMAGE 1
        ====================================================== */}

        <div
          className="
            w-full

            md:mt-2

            lg:mt-4
          "
        >

          <div
            className="
              group
              w-full
              overflow-hidden
              rounded-[12px]
            "
          >

            <img
              src={about1}
              alt="Interior living room design"
              className="
                block
                aspect-[0.92]
                h-auto
                w-full

                object-cover

                transition-transform
                duration-700
                ease-out

                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>


        {/* =====================================================
            IMAGE 2
        ====================================================== */}

        <div
          className="
            w-full

            md:mt-12

            lg:mt-16
          "
        >

          <div
            className="
              group
              w-full
              overflow-hidden
              rounded-[12px]
            "
          >

            <img
              src={about2}
              alt="Luxury bedroom interior"
              className="
                block
                aspect-[0.92]
                h-auto
                w-full

                object-cover

                transition-transform
                duration-700
                ease-out

                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>


        {/* =====================================================
            IMAGE 3
        ====================================================== */}

        <div
          className="
            w-full

            md:mt-20

            lg:mt-24
          "
        >

          <div
            className="
              group
              w-full
              overflow-hidden
              rounded-[12px]
            "
          >

            <img
              src={about3}
              alt="Modern kitchen interior"
              className="
                block
                aspect-[0.92]
                h-auto
                w-full

                object-cover

                transition-transform
                duration-700
                ease-out

                group-hover:scale-[1.03]
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM DECORATIVE LINE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-[56.3%]

          hidden

          h-[12px]
          w-px

          bg-[#8D8D8D]

          lg:block
        "
      />

    </section>
  );
};

export default AboutSection;