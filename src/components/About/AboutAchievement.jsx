import React from "react";

const awards = [
  {
    year: "2025",
    category: "Interior Design",
    title: "Best Residential Design",
    image: "YOUR-2025-IMAGE-URL",
  },
  {
    year: "2024",
    category: "Architecture",
    title: "Top Commercial Design",
    image: "YOUR-2024-IMAGE-URL",
  },
  {
    year: "2023",
    category: "Community center",
    title: "Sustainable Design Award",
    image: "YOUR-2023-IMAGE-URL",
  },
  {
    year: "2022",
    category: "Interior Design",
    title: (
      <>
        Creative office space
        <br />
        Award
      </>
    ),
    image: "YOUR-2022-IMAGE-URL",
  },
];

const AboutAchievements = () => {
  return (
    <>
      <section className="w-full overflow-hidden bg-white">


        {/* =======================================================
            HEADER / INTRO
        ======================================================== */}

        <section
          className="
            w-full
            overflow-hidden
            px-[clamp(38px,5vw,72px)]
            pb-3
            pt-5

            min-[1200px]:pb-[22px]

            max-[1024px]:px-[38px]
            max-[1024px]:pr-7

            max-[640px]:px-4
            max-[640px]:pb-[30px]
            max-[640px]:pt-[22px]

            max-[380px]:px-[14px]
          "
        >

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1400px]
              grid-cols-[clamp(149px,21vw,302px)_minmax(0,1fr)]
              items-start

              max-[1024px]:grid-cols-[149px_minmax(0,1fr)]

              max-[640px]:block
            "
          >


            {/* =================================================
                LEFT DECORATIVE AREA
            ================================================== */}

            <div
              className="
                relative
                h-[110px]
                w-full

                max-[640px]:h-[74px]
                max-[640px]:w-[150px]
              "
            >

              {/* Horizontal line */}

              <span
                className="
                  absolute
                  left-0
                  top-8
                  z-0
                  h-[2px]
                  w-full
                  bg-[#00000080]

                  max-[640px]:top-[21px]
                  max-[640px]:w-[150px]
                "
              />


              {/* Vertical line */}

              <span
                className="
                  absolute
                  left-[75%]
                  top-0
                  z-0
                  h-[150px]
                  w-[2px]
                  bg-[#00000080]

                  min-[1200px]:h-[110px]

                  max-[1024px]:left-[108px]
                  max-[1024px]:h-[110px]

                  max-[640px]:left-[108px]
                  max-[640px]:h-[67px]
                "
              />


              {/* =================================================
                  BADGE
              ================================================== */}

              <div
                className="
                  absolute
                  left-[2px]
                  top-[50px]
                  z-[5]
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
                  tracking-normal
                  text-[#1E1E1E]

                  max-[1024px]:top-[42px]
                  max-[1024px]:text-[8px]

                  max-[640px]:top-8
                  max-[640px]:gap-[5px]
                  max-[640px]:px-2
                  max-[640px]:py-1
                  max-[640px]:text-[10px]
                "
              >

                {/* Dot */}

                <span
                  className="
                    block
                    h-2
                    w-2
                    min-h-2
                    min-w-2
                    shrink-0
                    rounded-full
                    bg-[#1E1E1E]

                    max-[640px]:h-[7px]
                    max-[640px]:w-[7px]
                    max-[640px]:min-h-[7px]
                    max-[640px]:min-w-[7px]
                  "
                />

                <span>
                  Award &amp; Achievement
                </span>

              </div>

            </div>


            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <div
              className="
                relative
                z-[2]
                w-full
                pt-[clamp(45px,3.75vw,54px)]

                max-[1024px]:pt-[45px]

                max-[640px]:pt-[10px]
              "
            >

              <h2
                className="
                  m-0
                  w-full
                  max-w-full
                  p-0
                  font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
                  text-[clamp(25px,3.35vw,48px)]
                  font-bold
                  not-italic
                  leading-[1.20]
                  tracking-normal
                  text-black

                  max-[1024px]:text-[25px]
                  max-[1024px]:leading-[1.22]

                  max-[640px]:text-[25px]
                  max-[640px]:leading-[1.12]

                  max-[380px]:text-[23px]
                "
              >

                {/* FIRST LINE */}

                <span
                  className="
                    block
                    whitespace-nowrap

                    max-[640px]:whitespace-normal
                  "
                >
                  Design that
                </span>


                {/* SECOND LINE */}

                <span
                  className="
                    block
                    whitespace-nowrap

                    max-[640px]:whitespace-normal
                  "
                >

                  <span
                    className="
                      font-bold
                      text-[#CAA05C]
                    "
                  >
                    Speaks our industry Awards
                  </span>

                </span>

              </h2>

            </div>

          </div>

        </section>


        {/* =======================================================
            AWARDS TIMELINE
        ======================================================== */}

        <section
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-[25px]
            py-[35px]

            max-[900px]:px-5
            max-[900px]:py-[35px]

            max-[600px]:px-[15px]
            max-[600px]:py-[25px]

            max-[380px]:px-[10px]
          "
        >

          {/* =====================================================
              DESKTOP / TABLET GRID
          ====================================================== */}

          <div
            className="
              relative
              grid
              w-full
              grid-cols-4

              max-[900px]:grid-cols-2
              max-[900px]:gap-y-[45px]

              max-[600px]:flex
              max-[600px]:flex-col
              max-[600px]:gap-0
            "
          >


            {/* =================================================
                MOBILE VERTICAL TIMELINE
            ================================================== */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                hidden
                bg-[#777777]

                max-[600px]:left-5
                max-[600px]:top-[45px]
                max-[600px]:bottom-[45px]
                max-[600px]:block
                max-[600px]:w-px

                max-[380px]:left-[15px]
              "
            />


            {/* =================================================
                AWARD ITEMS
            ================================================== */}

            {awards.map((award, index) => (
              <div
                key={award.year}
                className="
                  relative
                  min-w-0
                  text-center

                  max-[600px]:grid
                  max-[600px]:min-h-[140px]
                  max-[600px]:grid-cols-[42px_105px_1fr]
                  max-[600px]:items-center
                  max-[600px]:py-[15px]
                  max-[600px]:text-left

                  max-[380px]:grid-cols-[35px_85px_1fr]
                "
              >


                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    mb-[19px]
                    h-[78px]
                    w-[100px]
                    rounded-[9px]
                    bg-[#d9d9d9]
                    bg-cover
                    bg-center
                    bg-no-repeat

                    max-[900px]:h-[90px]
                    max-[900px]:w-[115px]

                    max-[600px]:col-start-2
                    max-[600px]:mb-0
                    max-[600px]:h-[72px]
                    max-[600px]:w-[90px]
                    max-[600px]:self-center

                    max-[380px]:h-[65px]
                    max-[380px]:w-[75px]
                  "
                  style={{
                    backgroundImage: `url("${award.image}")`,
                  }}
                >

                  {/* Category label */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      inline-flex
                      translate-y-0
                      items-center
                      whitespace-nowrap
                      rounded-[10px]
                      border
                      border-[#d2a04f]
                      bg-[#f6f1e8]
                      px-1
                      py-[1px]
                      text-[8px]
                      font-medium
                      leading-[1.2]
                      text-[#111111]

                      max-[600px]:text-[7px]
                    "
                  >
                    {award.category}
                  </span>

                </div>


                {/* =================================================
                    TIMELINE LINE + DOT
                ================================================== */}

                <div
                  className={`
                    relative
                    flex
                    h-[18px]
                    w-full
                    items-center
                    justify-center

                    max-[600px]:absolute
                    max-[600px]:left-0
                    max-[600px]:top-0
                    max-[600px]:grid
                    max-[600px]:h-full
                    max-[600px]:w-[42px]
                    max-[600px]:translate-x-0

                    max-[380px]:w-[35px]

                    ${
                      index === 0
                        ? ""
                        : ""
                    }
                  `}
                >

                  {/* Desktop horizontal line */}

                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      -translate-y-1/2
                      bg-[#717171]

                      max-[600px]:hidden

                      ${
                        index === 0
                          ? "bg-[linear-gradient(to_right,#c99a51_0,#c99a51_2px,#717171_2px,#717171_100%)]"
                          : ""
                      }

                      ${
                        index === 1
                          ? "max-[900px]:w-1/2 max-[900px]:left-0"
                          : ""
                      }

                      ${
                        index === 2
                          ? "max-[900px]:w-1/2 max-[900px]:left-1/2"
                          : ""
                      }

                      ${
                        index === 3
                          ? "max-[900px]:w-1/2 max-[900px]:left-0"
                          : ""
                      }
                    `}
                  />


                  {/* Desktop / mobile dot */}

                  <span
                    className="
                      relative
                      z-[2]
                      h-[10px]
                      w-[10px]
                      shrink-0
                      rounded-full
                      bg-[#c99a51]

                      max-[600px]:absolute
                      max-[600px]:left-[15px]
                      max-[600px]:top-1/2
                      max-[600px]:-translate-y-1/2

                      max-[380px]:left-[10px]
                    "
                  />

                </div>


                {/* =================================================
                    AWARD CONTENT
                ================================================== */}

                <div
                  className="
                    max-[600px]:col-start-3
                    max-[600px]:row-start-1
                    max-[600px]:pl-[10px]
                  "
                >

                  {/* Year */}

                  <h3
                    className="
                      m-[2px_0_4px]
                      font-[Georgia,'Times_New_Roman',serif]
                      text-[28px]
                      font-bold
                      leading-none
                      text-[#050505]

                      max-[900px]:text-[27px]

                      max-[600px]:m-0
                      max-[600px]:mb-2
                      max-[600px]:text-[27px]

                      max-[380px]:text-[24px]
                    "
                  >
                    {award.year}
                  </h3>


                  {/* Award title */}

                  <div
                    className="
                      mx-auto
                      mt-2
                      w-[90%]
                      text-[13px]
                      font-normal
                      leading-[1.15]
                      text-[#111111]

                      max-[900px]:max-w-[200px]
                      max-[900px]:text-[13px]

                      max-[600px]:mx-0
                      max-[600px]:mt-0
                      max-[600px]:w-full
                      max-[600px]:text-[13px]
                      max-[600px]:leading-[1.35]

                      max-[380px]:text-[12px]
                    "
                  >
                    {award.title}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </section>
    </>
  );
};

export default AboutAchievements;