import React from "react";

import AwardWinningProject1 from "../../assets/AwardWinningProject1.png";
import AwardWinningProject2 from "../../assets/AwardWinningProject2.png";
import AwardWinningProject3 from "../../assets/AwardWinningProject3.png";

const AwardWinningProjects = () => {
  const projects = {
    main:
      AwardWinningProject1,

    topRight:
      AwardWinningProject2,

    bottomRight:
      AwardWinningProject3,
  };

  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white

          px-[40px]
          pt-[30px]
          pb-[40px]

          max-[1199px]:px-[30px]
          max-[1199px]:pt-[28px]

          max-[767px]:px-[20px]
          max-[767px]:pt-[22px]
          max-[767px]:pb-[30px]

          max-[480px]:px-[16px]
          max-[480px]:pt-[20px]
        "
      >

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]

            grid-cols-[150px_minmax(0,1fr)_205px]

            items-start

            min-[1025px]:
              grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]

            max-[1024px]:
              grid-cols-[150px_minmax(0,1fr)_205px]

            max-[767px]:
              block
          "
        >

          {/* ====================================================
              LEFT DECORATIVE AREA
          ==================================================== */}

          <div
            className="
              relative
              h-[115px]
              w-full

              before:absolute
              before:left-0
              before:top-[33px]
              before:h-px
              before:w-[150px]
              before:bg-[#BDBDBD]
              before:content-['']

              after:absolute
              after:left-[106px]
              after:top-0
              after:h-[112px]
              after:w-px
              after:bg-[#C6C6C6]
              after:content-['']

              min-[1025px]:
                before:w-full

              min-[1025px]:
                after:left-[72%]

              max-[767px]:
                h-[75px]

              max-[767px]:
                before:left-[-20px]

              max-[767px]:
                before:top-[21px]

              max-[767px]:
                before:w-[170px]

              max-[767px]:
                after:left-[106px]

              max-[767px]:
                after:h-[67px]

              max-[480px]:
                before:left-[-16px]

              max-[480px]:
                before:w-[166px]
            "
          >

            {/* ==================================================
                PROJECTS BADGE
            ================================================== */}

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

                px-[7px]
                py-[4px]
                pl-[5px]

                font-['Playfair_Display',Georgia,serif]
                text-[10px]
                font-semibold
                leading-none

                text-[#1E1E1E]

                min-[1025px]:
                  px-[9px]
                  py-[5px]
                  pl-[6px]
                  text-[14px]

                max-[767px]:
                  left-0
                  top-[32px]
                  px-[8px]
                  py-[4px]
                  pl-[5px]
                  text-[11px]

                max-[480px]:
                  text-[10px]
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

                  min-[1025px]:
                    h-[8px]
                    w-[8px]
                "
              />

              <span>Projects</span>

            </div>
          </div>


          {/* ====================================================
              MAIN HEADING
          ==================================================== */}

          <div
            className="
              w-full

              pt-[46px]

              min-[1025px]:
                pt-[43px]

              max-[1024px]:
                pt-[43px]

              max-[767px]:
                pt-[11px]
            "
          >

            <h1
              className="
                m-0
                p-0

                font-['Playfair_Display',Georgia,'Times_New_Roman',serif]

                text-[25px]
                font-bold
                leading-[1.18]

                tracking-normal

                text-black

                whitespace-nowrap

                min-[1025px]:
                  text-[clamp(34px,3.15vw,48px)]
                  leading-[1.12]

                max-[1024px]:
                  text-[32px]

                max-[767px]:
                  whitespace-normal
                  text-[27px]
                  leading-[1.12]

                max-[480px]:
                  text-[25px]
              "
            >
              Award Winning Projects
            </h1>

          </div>


          {/* Empty third column */}

          <div className="hidden min-[768px]:block" />

        </div>


        {/* ========================================================
            PROJECT IMAGE GRID
        ======================================================== */}

        <div
          className="
            mx-auto
            mt-[15px]

            grid
            w-full
            max-w-[1210px]

            grid-cols-[1fr_0.98fr]

            gap-[18px]

            min-[1200px]:
              mt-[10px]

            max-[900px]:
              grid-cols-1
              gap-[18px]

            max-[767px]:
              mt-[15px]
              gap-[14px]
          "
        >

          {/* ====================================================
              LEFT LARGE IMAGE
          ==================================================== */}

          <div
            className="
              relative
              h-[525px]
              w-full
              overflow-hidden
              rounded-[12px]

              max-[1199px]:
                h-[500px]

              max-[1024px]:
                h-[450px]

              max-[900px]:
                h-[430px]

              max-[767px]:
                h-auto
                aspect-[1.15/1]

              max-[480px]:
                aspect-[1.05/1]
            "
          >

            <img
              src={projects.main}
              alt="Award winning interior design project"
              className="
                absolute
                inset-0
                h-full
                w-full

                object-cover
                object-center

                transition-transform
                duration-500

                hover:scale-[1.02]
              "
            />

          </div>


          {/* ====================================================
              RIGHT COLUMN
          ==================================================== */}

          <div
            className="
              grid
              grid-rows-[1fr_1fr]

              gap-[18px]

              max-[767px]:
                gap-[14px]
            "
          >

            {/* ==================================================
                TOP RIGHT IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-[255px]
                w-full
                overflow-hidden

                rounded-[12px]

                max-[1199px]:
                  h-[241px]

                max-[1024px]:
                  h-[216px]

                max-[900px]:
                  h-[300px]

                max-[767px]:
                  h-auto
                  aspect-[2.3/1]

                max-[480px]:
                  aspect-[1.8/1]
              "
            >

              <img
                src={projects.topRight}
                alt="Award winning residential interior"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full

                  object-cover
                  object-center

                  transition-transform
                  duration-500

                  hover:scale-[1.02]
                "
              />

            </div>


            {/* ==================================================
                BOTTOM RIGHT IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-[255px]
                w-full
                overflow-hidden

                rounded-[12px]

                max-[1199px]:
                  h-[241px]

                max-[1024px]:
                  h-[216px]

                max-[900px]:
                  h-[300px]

                max-[767px]:
                  h-auto
                  aspect-[2.3/1]

                max-[480px]:
                  aspect-[1.8/1]
              "
            >

              <img
                src={projects.bottomRight}
                alt="Award winning interior design"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full

                  object-cover
                  object-center

                  transition-transform
                  duration-500

                  hover:scale-[1.02]
                "
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default AwardWinningProjects;