const JourneyOfExcellence = () => {
  const awards = [
    {
      year: "2026",
      items: ["Sustainable Design Merit", "Eco-Living Institute"],
    },
    {
      year: "2025",
      items: ["Best Custom Millwork", "Craftsmanship Guild"],
    },
    {
      year: "2024",
      items: ["Urban Oasis Award", "City Living Magazine"],
    },
    {
      year: "2023",
      items: ["Newcomer to Watch", "Interior Design Review"],
    },
  ];

  return (
    <>
      {/* =========================================================
          MAIN SECTION
          COMPLETELY TRANSPARENT
      ========================================================= */}

      <section className="relative w-full overflow-hidden px-[40px] pt-[30px] pb-[70px] max-[1199px]:px-[25px] max-[1199px]:pt-[25px] max-[1199px]:pb-[60px] max-[900px]:px-[30px] max-[900px]:pt-[25px] max-[767px]:px-[20px] max-[767px]:pt-[22px] max-[767px]:pb-[50px] max-[480px]:px-[15px] max-[480px]:pt-[20px] max-[480px]:pb-[40px] bg-white">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-[150px_minmax(0,1fr)_205px]
            items-start

            min-[1025px]:grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]

            max-[1024px]:grid-cols-[150px_minmax(0,1fr)_205px]

            max-[767px]:block
          "
        >
          {/* =====================================================
              LEFT DECORATIVE AREA
          ===================================================== */}

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

              min-[1025px]:before:w-full
              min-[1025px]:after:left-[72%]

              max-[767px]:h-[75px]

              max-[767px]:before:left-[-20px]
              max-[767px]:before:top-[21px]
              max-[767px]:before:w-[170px]

              max-[767px]:after:left-[106px]
              max-[767px]:after:h-[67px]

              max-[480px]:before:left-[-15px]
              max-[480px]:before:w-[165px]
            "
          >
            {/* =================================================
                HONORS BADGE
            ================================================= */}

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

              <span>Honors</span>
            </div>
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}

          <div
            className="
              w-full
              pt-[46px]

              min-[1025px]:pt-[43px]

              max-[1024px]:pt-[43px]

              max-[767px]:pt-[11px]
            "
          >
            <h2
              className="
                m-0
                p-0

                whitespace-nowrap

                font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
                text-[25px]
                font-bold
                leading-[1.18]
                tracking-normal
                text-black

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
              Journey of Excellence
            </h2>
          </div>

          {/* Empty right column */}

          <div className="hidden min-[768px]:block" />
        </div>

        {/* =========================================================
            AWARDS TIMELINE
        ========================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-[5px]
            w-full
            max-w-[1280px]

            min-[1400px]:max-w-[1380px]

            max-[900px]:mt-[25px]

            max-[767px]:mt-[20px]

            max-[480px]:mt-[15px]
          "
        >
          {/* =====================================================
              DESKTOP HORIZONTAL CONNECTOR
          ===================================================== */}

          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[115px]
              z-0
              h-px
              bg-[#D7D7D7]

              max-[900px]:hidden
            "
          />

          {/* =====================================================
              DESKTOP VERTICAL STEPS
          ===================================================== */}

          <div
            className="
              absolute
              left-[25%]
              top-[78px]
              z-0
              h-[80px]
              w-px
              bg-[#D7D7D7]

              max-[900px]:hidden
            "
          />

          <div
            className="
              absolute
              left-[50%]
              top-[78px]
              z-0
              h-[80px]
              w-px
              bg-[#D7D7D7]

              max-[900px]:hidden
            "
          />

          <div
            className="
              absolute
              left-[75%]
              top-[78px]
              z-0
              h-[80px]
              w-px
              bg-[#D7D7D7]

              max-[900px]:hidden
            "
          />

          {/* =====================================================
              AWARDS GRID
          ===================================================== */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-4
              gap-[20px]
              items-start

              max-[1199px]:gap-[14px]

              max-[900px]:
                grid-cols-2
                gap-x-[35px]
                gap-y-[50px]

              max-[767px]:
                grid-cols-1
                gap-[38px]
            "
          >
            {awards.map((award, index) => {
              const isOddDesktop = index === 1 || index === 3;

              return (
                <article
                  key={award.year}
                  className={`
                    relative
                    min-w-0

                    ${isOddDesktop ? "pt-[95px]" : "pt-0"}

                    max-[900px]:pt-0

                    max-[900px]:pl-[28px]

                    max-[767px]:pl-[32px]

                    max-[480px]:pl-[27px]

                    before:absolute
                    before:hidden

                    max-[900px]:before:block
                    max-[900px]:before:left-0
                    max-[900px]:before:top-0
                    max-[900px]:before:h-full
                    max-[900px]:before:w-[2px]
                    max-[900px]:before:bg-[#D7D7D7]
                    max-[900px]:before:content-['']

                    after:absolute
                    after:hidden

                    max-[900px]:after:block
                    max-[900px]:after:left-[-4px]
                    max-[900px]:after:top-[23px]
                    max-[900px]:after:h-[10px]
                    max-[900px]:after:w-[10px]
                    max-[900px]:after:rounded-full
                    max-[900px]:after:bg-[#D5A044]
                    max-[900px]:after:content-['']

                    max-[767px]:after:top-[19px]

                    max-[480px]:after:top-[19px]
                  `}
                >
                  {/* =================================================
                      YEAR BOX
                  ================================================= */}

                  <div
                    className="
                      inline-flex
                      h-[54px]
                      min-w-[74px]
                      items-center
                      justify-center

                      rounded-[10px]

                      border-[3px]
                      border-[#D5A044]

                      px-[13px]

                      font-serif
                      text-[25px]
                      font-bold
                      leading-none
                      text-[#111111]

                      shadow-[0_1px_3px_rgba(0,0,0,0.05)]

                      max-[1199px]:
                        h-[48px]
                        min-w-[66px]
                        border-2
                        text-[22px]

                      max-[900px]:
                        h-[48px]
                        min-w-[66px]

                      max-[767px]:
                        h-[46px]
                        min-w-[64px]
                        rounded-[8px]
                        px-[11px]
                        text-[21px]

                      max-[480px]:
                        h-[43px]
                        min-w-[60px]
                        text-[19px]
                    "
                  >
                    {award.year}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className={`
                      mt-[22px]
                      font-['Georgia','Times_New_Roman',serif]
                      text-[16px]
                      font-normal
                      leading-[1.65]
                      text-[#111111]

                      ${
                        index === 0
                          ? "max-w-[270px]"
                          : index === 1
                            ? "mx-auto max-w-[250px]"
                            : index === 2
                              ? "mx-auto max-w-[260px]"
                              : "ml-auto max-w-[240px]"
                      }

                      max-[1400px]:text-[16px]

                      max-[1199px]:
                        mt-[20px]
                        text-[14px]

                      max-[900px]:
                        mt-[15px]
                        max-w-full
                        mx-0
                        text-left
                        text-[14px]
                        leading-[1.6]

                      max-[767px]:
                        mt-[15px]
                        text-[14px]

                      max-[480px]:
                        text-[13px]
                    `}
                  >
                    <ul
                      className="
                        m-0
                        pl-[19px]

                        max-[480px]:pl-[17px]
                      "
                    >
                      {award.items.map((item) => (
                        <li
                          key={item}
                          className="
                            mb-[4px]
                            pl-[1px]
                            last:mb-0
                          "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JourneyOfExcellence;
