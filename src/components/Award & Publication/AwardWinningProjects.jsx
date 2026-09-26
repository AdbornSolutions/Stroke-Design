import AwardWinningProject1 from "../../assets/AwardWinningProject1.png";
import AwardWinningProject2 from "../../assets/AwardWinningProject2.png";
import AwardWinningProject3 from "../../assets/AwardWinningProject3.png";

const AwardWinningProjects = () => {
  const projects = {
    main: AwardWinningProject1,

    topRight: AwardWinningProject2,

    bottomRight: AwardWinningProject3,
  };

  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-white
          mt-12

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
    relative
    w-full
    overflow-hidden
    px-4
    pt-[30px]
    pb-10

    sm:px-6
    md:px-8
    lg:px-10
    xl:px-12
  "
      >
        <div
          className="
      mx-auto
      grid
      w-full
      max-w-[1260px]
      grid-cols-[150px_minmax(0,1fr)_205px]
      items-start

      max-[767px]:grid-cols-1
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

        max-[767px]:h-[75px]
        max-[767px]:before:left-[-20px]
        max-[767px]:before:top-[21px]
        max-[767px]:before:w-[170px]
        max-[767px]:after:left-[106px]
        max-[767px]:after:h-[67px]
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

          max-[767px]:left-0
          max-[767px]:top-[32px]
          max-[767px]:text-[11px]
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

              <span>Projects</span>
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
        max-[767px]:pt-[11px]
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

          max-[767px]:whitespace-normal
          max-[767px]:text-[27px]
          max-[767px]:leading-[1.12]
          max-[480px]:text-[25px]
        "
            >
              <span className="block whitespace-nowrap max-[767px]:whitespace-normal">
                Award Winning Projects
              </span>
            </h2>
          </div>
        </div>
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
            max-w-[1310px]

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
