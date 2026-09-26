import expertsImage from "../../assets/experts.png";

const OurExperts = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F7F7F7]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section
        className="
          w-full
          overflow-hidden
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
    pb-20

    sm:px-6

    md:px-8

    lg:grid-cols-[clamp(149px,21vw,302px)_minmax(0,1fr)]
    lg:px-10

    xl:px-12
  "
        >
          {/* =================================================
      LEFT DECORATIVE AREA
  ================================================== */}

          <div
            className="
      relative
      h-[74px]
      w-[150px]

      sm:h-[80px]

      md:h-[110px]
      md:w-[149px]

      lg:h-[110px]
      lg:w-full
    "
          >
            {/* Horizontal Line */}
            <span
              className="
        absolute
        left-0
        top-[21px]

        h-[2px]
        w-[150px]

        bg-black/50

        md:top-[32px]
        md:w-full
      "
            />

            {/* Vertical Line */}
            <span
              className="
        absolute
        left-[108px]
        top-0

        h-[67px]
        w-[2px]

        bg-black/50

        md:h-[110px]

        lg:left-[75%]
      "
            />

            {/* Badge */}
            <div
              className="
        absolute
        left-[2px]
        top-[32px]
        z-10

        inline-flex
        min-h-[20px]
        max-w-max
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
        text-[10px]
        font-semibold
        leading-none
        tracking-normal
        text-[#1E1E1E]

        md:top-[42px]
        md:px-[7px]
        md:text-[8px]

        lg:top-[50px]
        lg:px-[7px]
        lg:py-[7px]
        lg:text-[clamp(8px,1.11vw,16px)]
      "
            >
              <span
                className="
          block
          h-[7px]
          w-[7px]
          min-h-[7px]
          min-w-[7px]
          shrink-0
          rounded-full
          bg-[#1E1E1E]

          lg:h-[8px]
          lg:w-[8px]
          lg:min-h-[8px]
          lg:min-w-[8px]
        "
              />

              <span>
                Amazing Design <span className="block md:inline">Team</span>
              </span>
            </div>
          </div>

          {/* =================================================
      MAIN HEADER
  ================================================== */}

          <div
            className="
      relative
      z-10
      w-full
      pt-[10px]

      md:pt-[45px]

      lg:pt-[clamp(45px,3.75vw,54px)]
    "
          >
            <h2
              className="
        m-0
        w-full
        p-0

        font-['Playfair_Display']
        text-[25px]
        font-bold
        leading-[1.12]
        tracking-normal
        text-black

        sm:text-[27px]

        md:text-[30px]

        lg:text-[clamp(25px,3.35vw,48px)]
        lg:leading-[1.20]
      "
            >
              <span
                className="
          block
          lg:whitespace-nowrap
        "
              >
                Meet the <span className="text-[#CAA05C]">Our Experts</span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTS CONTENT
      ====================================================== */}

      <section
        className="
          w-full
          overflow-hidden
          bg-[#F7F7F7]

          pb-[45px]

          sm:pb-[55px]

          md:pb-[65px]

          lg:pb-[70px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            items-center

            grid-cols-1

            px-4

            sm:px-6

            md:px-8
            gap-[35px]

            md:grid-cols-[1fr_1fr]
            md:gap-[30px]

            lg:grid-cols-[0.95fr_1.05fr_1fr]
            lg:items-center
            lg:gap-[16px]
            lg:px-10

            xl:grid-cols-[0.95fr_1.05fr_1fr]
            xl:gap-[16px]
            xl:px-12
          "
        >
          {/* =================================================
              LEFT EXPERT
          ================================================== */}

          <div
            className="
              w-full
              max-w-[430px]
              justify-self-center

              md:max-w-[430px]
              md:justify-self-start

              lg:max-w-[410px]
            "
          >
            {/* Name */}
            <h3
              className="
                m-0
                p-0

                font-['Playfair_Display']
                text-[34px]
                font-semibold
                leading-[1.08]
                text-black

                sm:text-[38px]

                md:text-[40px]

                lg:text-[38px]

                xl:text-[40px]
              "
            >
              Ar. Ujwal Nimgade
            </h3>

            {/* Designation */}
            <p
              className="
                mt-[12px]
                mb-0

                font-[Arial,sans-serif]
                text-[13px]
                font-normal
                uppercase
                leading-none
                tracking-[0.2px]
                text-black

                sm:text-[14px]

                lg:text-[13px]
              "
            >
              PRINCIPAL ARCHITECT
            </p>

            {/* Description */}
            <p
              className="
                mt-[19px]
                mb-0

                text-justify

                font-[Arial,sans-serif]
                text-[14px]
                font-normal
                leading-[1.85]
                text-[#333333]

                sm:text-[15px]
                sm:leading-[1.75]

                md:text-[14px]
                md:leading-[1.8]

                lg:text-[14px]
                lg:leading-[1.85]
              "
            >
              Founder of SDS has worked on a variety of projects across India.
              His extensive attention to concept development & detailing brings
              out unique and innovative ideas and hence enriches the project in
              a very personalised manner.
              <br />
              With an experience of more than 17 years, he achieves a good
              balance between design concept and functionality, which is a very
              crucial aspect for modern projects. His passion for design and
              client-focused approach brings great value to their works.
            </p>
          </div>

          {/* =================================================
              CENTER IMAGE
          ================================================== */}

          <div
            className="
              relative
              w-full
              max-w-[400px]
              justify-self-center

              md:col-span-1

              lg:max-w-[400px]
              lg:justify-self-center
            "
          >
            <div
              className="
                relative
                aspect-[1.05/1]
                w-full
                overflow-hidden
                rounded-[15px]

                sm:rounded-[16px]

                lg:rounded-[16px]
              "
            >
              <img
                src={expertsImage}
                alt="Ujwal and Bhuvaneshwari Nimgade"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>
          </div>

          {/* =================================================
              RIGHT EXPERT
          ================================================== */}

          <div
            className="
              w-full
              max-w-[430px]
              justify-self-center

              md:col-span-2

              lg:col-span-1
              lg:max-w-[410px]
              lg:justify-self-end
            "
          >
            {/* Name */}
            <h3
              className="
                m-0
                p-0

                font-['Playfair_Display']
                text-[34px]
                font-semibold
                leading-[1.02]
                text-black

                sm:text-[38px]

                md:text-[40px]

                lg:text-[38px]

                xl:text-[40px]
              "
            >
              Id. Bhuvaneshwari
              <br />
              Nimgade
            </h3>

            {/* Designation */}
            <p
              className="
                mt-[12px]
                mb-0

                font-[Arial,sans-serif]
                text-[13px]
                font-normal
                uppercase
                leading-none
                tracking-[0.2px]
                text-black

                sm:text-[14px]

                lg:text-[13px]
              "
            >
              PRINCIPAL DESIGNER
            </p>

            {/* Description */}
            <p
              className="
                mt-[19px]
                mb-0

                text-justify

                font-[Arial,sans-serif]
                text-[14px]
                font-normal
                leading-[1.85]
                text-[#333333]

                sm:text-[15px]
                sm:leading-[1.75]

                md:text-[14px]
                md:leading-[1.8]

                lg:text-[14px]
                lg:leading-[1.85]
              "
            >
              Co-Founder of SDS has an extensive experience in the design and
              development of contemporary residential, retail, commercial, and
              hospitality interior projects. She is a versatile designer with an
              ability to effortlessly conceive elegant concepts and then
              translate them into functional and inspiring spaces. Her core
              design forte is spatial planning by functional requirements with
              innovative ideas. She adopts a design style which covers the vast
              spectrum of traditional, rustic, vernacular to ultra modern and
              contemporary style of Interior Design, which is suitable to
              client’s perception and aspirations.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurExperts;
