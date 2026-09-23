import React from "react";

const AwardsRecognition = () => {
  const awards = [
    {
      year: "2025",
      title: "Best Residential Interior",
      organization: "Global architecture & design awards",
    },
    {
      year: "2024",
      title: "Excellence In Materiality",
      organization: "Interior Space Honors",
    },
    {
      year: "2023",
      title: "Emerging Studio of the year",
      organization: "Design Vanguard",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* =====================================================
          AWARDS HEADER
      ===================================================== */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          px-[40px]
          pt-[30px]
          pb-[24px]

          sm:px-[40px]

          md:px-[38px]

          lg:px-[40px]

          xl:px-[5vw]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-[150px_minmax(0,1fr)_205px]
            items-start
          "
        >

          {/* =================================================
              LEFT DECORATION
          ================================================= */}

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

              lg:after:left-[72%]
              lg:before:w-full
            "
          >

            {/* Badge */}

            <div
              className="
                absolute
                left-[1px]
                top-[42px]
                z-10

                inline-flex
                min-h-[25px]
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

                lg:px-[9px]
                lg:py-[5px]
                lg:pl-[6px]
                lg:text-[14px]
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

                  lg:h-[8px]
                  lg:w-[8px]
                "
              />

              <span>Honors</span>
            </div>
          </div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <div
            className="
              w-full
              px-0
              pt-[46px]

              lg:pt-[43px]
            "
          >
            <h2
              className="
                m-0
                p-0

                font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
                text-[25px]
                font-bold
                leading-[1.18]
                tracking-normal
                text-black

                lg:text-[clamp(34px,3.15vw,48px)]
                lg:leading-[1.12]
              "
            >
              <span className="block whitespace-nowrap max-md:whitespace-normal">
                Awards &amp; Recognition
              </span>
            </h2>
          </div>

        </div>
      </div>


      {/* =====================================================
          AWARDS CARDS
      ===================================================== */}

      <div
        className="
          w-full
          px-[40px]
          pb-[60px]

          sm:px-[40px]

          md:px-[38px]

          lg:px-[40px]

          xl:px-[5.5vw]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1285px]

            grid-cols-1
            gap-[20px]

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-[30px]
          "
        >

          {awards.map((award) => (
            <article
              key={award.year}
              className="
                group

                min-h-[152px]
                w-full

                rounded-[18px]

                bg-white

                px-[20px]
                py-[21px]

                shadow-[0_5px_13px_rgba(0,0,0,0.28)]

                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:shadow-[0_8px_18px_rgba(0,0,0,0.32)]

                sm:px-[20px]

                md:min-h-[152px]

                lg:h-[152px]
                lg:px-[20px]
              "
            >

              {/* YEAR */}

              <h3
                className="
                  m-0
                  p-0

                  font-['Arial',Helvetica,sans-serif]
                  text-[25px]
                  font-bold
                  leading-none
                  text-black

                  md:text-[25px]
                "
              >
                {award.year}
              </h3>


              {/* TITLE + LINE */}

              <div className="mt-[28px]">

                <h4
                  className="
                    m-0
                    border-b
                    border-[#222222]

                    pb-[3px]

                    font-['Arial',Helvetica,sans-serif]
                    text-[20px]
                    font-normal
                    leading-[1.15]

                    text-black

                    sm:text-[20px]

                    md:text-[20px]

                    lg:text-[20px]
                  "
                >
                  {award.title}
                </h4>

              </div>


              {/* ORGANIZATION */}

              <p
                className="
                  m-0
                  pt-[5px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[15px]
                  font-normal
                  leading-[1.2]

                  text-[#173F73]

                  sm:text-[15px]
                "
              >
                {award.organization}
              </p>

            </article>
          ))}

        </div>
      </div>

    </section>
  );
};

export default AwardsRecognition;