import processImage from "../assets/how-we-work.png";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your vision, goals, and needs, followed Antra.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our team creates detailed designs that reflect your requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "With carefully selected contractors, we manage every phase.",
  },
  {
    number: "04",
    title: "Project Handover",
    description:
      "Upon completion, we conduct a thorough review, making sure all details.",
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F7F7F7]">
      {/* =====================================================
          HEADER
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

            <span>How We Work</span>
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

            <span>How We Work</span>
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
              Description {" "}

              <span className="text-[#CAA05C]">
                Architecture
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
                process for 
              </span>{" "}

              exceptional results
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
          HOW WE WORK CONTENT
      ====================================================== */}

      <div
        className="
          relative
          w-full
          bg-[#F7F7F7]

          px-5
          py-[45px]

          sm:px-8
          sm:py-[55px]

          md:px-10
          md:py-[65px]

          lg:px-[5.8%]
          lg:py-[65px]

          xl:px-[5.8%]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1320px]
            items-center

            grid-cols-1

            gap-12

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-[70px]

            xl:grid-cols-[0.95fr_1.05fr]
            xl:gap-[80px]
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================== */}

          <div
            className="
              relative
              w-full
              max-w-[600px]
              justify-self-center

              lg:justify-self-start
            "
          >
            {/* ---------------------------------------------
                IMAGE
            ---------------------------------------------- */}

            <div
              className="
                w-full
              "
            >
              <img src={processImage} alt="Interior design consultation" />
            </div>
          </div>

          {/* =================================================
              RIGHT PROCESS LIST
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-[28px]

              sm:gap-[30px]

              md:gap-[32px]

              lg:gap-[26px]

              xl:gap-[29px]
            "
          >
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="
                  grid
                  w-full

                  grid-cols-[42px_minmax(0,1fr)]

                  items-start

                  gap-2

                  sm:grid-cols-[48px_minmax(0,1fr)]
                  sm:gap-1

                  lg:grid-cols-[50px_minmax(0,1fr)]
                "
              >
                {/* Number */}
                <div
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center

                    rounded-full

                    bg-[#FAF9F6]

                    font-['Playfair_Display']
                    text-[16px]
                    font-semibold
                    text-black

                    sm:h-[42px]
                    sm:w-[42px]
                    sm:text-[17px]

                    lg:h-[44px]
                    lg:w-[44px]
                    lg:text-[17px]
                  "
                >
                  {step.number}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="
                      m-0
                      p-0

                      font-['Playfair_Display']
                      text-[25px]
                      font-semibold
                      leading-[1.15]
                      text-black

                      sm:text-[28px]

                      md:text-[30px]

                      lg:text-[29px]

                      xl:text-[30px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      m-0
                      mt-[6px]
                      p-0

                      font-[Arial,sans-serif]
                      text-[14px]
                      font-normal
                      leading-[1.4]
                      text-black

                      sm:text-[15px]

                      md:text-[16px]

                      lg:text-[16px]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
