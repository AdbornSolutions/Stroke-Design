import React from "react";

/* =========================================================
   PROJECTS DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Residential Interior Design",
    description:
      "Tailored design projects for private homes, including room makeovers and complete home transformations.",
    image: "/images/projects/residential-interior.jpg",
    column: "left",
  },

  {
    id: 2,
    title: "Commercial Interior Design",
    description:
      "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
    image: "/images/projects/commercial-interior.jpg",
    column: "center",
  },

  {
    id: 3,
    title: "Interior Design Consultation",
    description:
      "Providing professional advice on concepts, color schemes & material selection.",
    image: "/images/projects/interior-consultation.jpg",
    column: "right",
  },

  {
    id: 4,
    title: "Architecture Design",
    description:
      "Thoughtful architectural planning that combines functionality, aesthetics and the character of every project.",
    image: "/images/projects/architecture.jpg",
    column: "left",
  },

  {
    id: 5,
    title: "Hospitality Interior Design",
    description:
      "Creating memorable hospitality environments with carefully considered layouts, materials and design details.",
    image: "/images/projects/hospitality.jpg",
    column: "center",
  },

  {
    id: 6,
    title: "Kitchen Interior Design",
    description:
      "Functional kitchen spaces designed around comfort, storage, usability and contemporary aesthetics.",
    image: "/images/projects/kitchen.jpg",
    column: "right",
  },

  {
    id: 7,
    title: "Office Interior Design",
    description:
      "Modern workplace interiors designed to improve productivity, comfort and the overall working experience.",
    image: "/images/projects/office.jpg",
    column: "left",
  },

  {
    id: 8,
    title: "Retail Interior Design",
    description:
      "Strategic retail environments that combine visual identity, customer experience and practical functionality.",
    image: "/images/projects/retail.jpg",
    column: "center",
  },

  {
    id: 9,
    title: "Project Management",
    description:
      "End-to-end project coordination ensuring design execution, quality and timely completion.",
    image: "/images/projects/project-management.jpg",
    column: "right",
  },
];


/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  title,
  description,
  image,
  tall = false,
}) => {
  return (
    <article
      className={`
        group
        w-full
        overflow-hidden

        ${tall ? "mb-0" : ""}
      `}
    >

      {/* IMAGE */}

      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-[11px]
          bg-[#dedede]

          ${tall
            ? "h-[390px] sm:h-[420px] lg:h-[390px] xl:h-[390px]"
            : "h-[175px] sm:h-[190px] lg:h-[175px] xl:h-[175px]"
          }
        `}
      >

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            block
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

      </div>


      {/* CONTENT */}

      <div className="pt-[2px]">

        <h3
          className="
            m-0
            p-0

            font-['Arial',Helvetica,sans-serif]
            text-[13px]
            font-bold
            leading-[1.25]
            text-black

            sm:text-[13px]
            lg:text-[13px]
          "
        >
          {title}
        </h3>


        <p
          className="
            m-0
            mt-[4px]
            max-w-[310px]
            p-0

            font-['Arial',Helvetica,sans-serif]
            text-[12px]
            font-normal
            leading-[1.65]
            text-[#888888]

            sm:text-[12px]
            lg:text-[12px]
          "
        >
          {description}
        </p>

      </div>

    </article>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const OurProject = () => {
  return (
    <>
      {/* =====================================================
          GOOGLE FONT
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
      `}</style>


      {/* =====================================================
          OUR projects SECTION
      ====================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#F7F7F7]

          px-10
          pb-10
          pt-[30px]

          max-[1024px]:px-[38px]
          max-[1024px]:pb-[35px]

          max-[767px]:px-5
          max-[767px]:pb-[35px]
          max-[767px]:pt-[22px]

          max-[480px]:px-4
          max-[480px]:pb-[30px]
          max-[480px]:pt-5
        "
      >


        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]
            items-start

            max-[1024px]:grid-cols-[150px_minmax(0,1fr)_205px]

            max-[767px]:block
          "
        >


          {/* =================================================
              LEFT DECORATION
          ================================================== */}

          <div
            className="
              relative
              h-[115px]
              w-full

              max-[767px]:h-[75px]
              max-[767px]:w-[150px]
            "
          >

            {/* Horizontal line */}

            <span
              className="
                absolute
                left-0
                top-[33px]
                h-px
                w-full
                bg-[#BDBDBD]

                max-[767px]:left-[-20px]
                max-[767px]:top-[21px]
                max-[767px]:w-[170px]

                max-[480px]:left-[-16px]
                max-[480px]:w-[166px]
              "
            />


            {/* Vertical line */}

            <span
              className="
                absolute
                left-[72%]
                top-0
                h-[112px]
                w-px
                bg-[#C6C6C6]

                max-[1024px]:left-[106px]

                max-[767px]:left-[106px]
                max-[767px]:h-[67px]
              "
            />


            {/* =================================================
                BADGE
            ================================================== */}

            <div
              className="
                absolute
                left-[1px]
                top-[42px]
                z-[5]

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
                py-1

                font-['Playfair_Display',Georgia,serif]
                text-[14px]
                font-semibold
                leading-none

                text-[#1E1E1E]

                max-[1024px]:px-[7px]
                max-[1024px]:py-1
                max-[1024px]:text-[10px]

                max-[767px]:left-0
                max-[767px]:top-8
                max-[767px]:px-2
                max-[767px]:py-1
                max-[767px]:text-[11px]
              "
            >

              <span
                className="
                  block
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#111111]

                  max-[767px]:h-[7px]
                  max-[767px]:w-[7px]
                "
              />

              <span>
                Our projects
              </span>

            </div>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <div
            className="
              w-full
              px-0
              pt-[43px]

              max-[1024px]:pt-[46px]

              max-[767px]:px-0
              max-[767px]:pb-0
              max-[767px]:pt-[11px]
            "
          >

            <h2
              className="
                m-0
                p-0

                font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
                text-[clamp(34px,3.15vw,48px)]
                font-bold
                leading-[1.12]
                tracking-normal
                text-black

                max-[1024px]:text-[25px]

                max-[767px]:text-[27px]
                max-[767px]:leading-[1.12]

                max-[480px]:text-[25px]
              "
            >

              <span
                className="
                  block
                  whitespace-nowrap

                  max-[767px]:whitespace-normal
                "
              >
                Explore our{" "}
                <span className="text-[#CAA05C]">
                  projects
                </span>
              </span>

            </h2>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div
            className="
              w-full
              pt-[111px]

              max-[767px]:hidden
            "
          >
            <p
              className="
                m-0
                max-w-[330px]
                p-0

                font-['Arial',Helvetica,sans-serif]
                text-[clamp(12px,1.05vw,16px)]
                font-normal
                leading-[1.15]
                text-black
              "
            >
              Transforming spaces through thoughtful
              architecture and interior design.
            </p>
          </div>

        </div>


        {/* =====================================================
            BOTTOM DECORATIVE LINE
        ====================================================== */}

        <span
          className="
            absolute
            bottom-0
            left-[56.3%]
            h-3
            w-px
            bg-[#8D8D8D]

            max-[767px]:hidden
          "
        />


        {/* =====================================================
            projects GRID
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-[25px]
            grid
            w-full
            max-w-[1010px]
            grid-cols-3
            items-start
            gap-x-[30px]

            max-[1024px]:max-w-[900px]
            max-[1024px]:gap-x-5

            max-[767px]:mt-[25px]
            max-[767px]:grid-cols-1
            max-[767px]:gap-x-0
            max-[767px]:gap-y-[35px]
          "
        >


          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-[66px]

              max-[767px]:gap-[35px]
            "
          >

            <ProjectCard
              title={projects[0].title}
              description={projects[0].description}
              image={projects[0].image}
            />

            <ProjectCard
              title={projects[3].title}
              description={projects[3].description}
              image={projects[3].image}
              tall
            />

            <ProjectCard
              title={projects[6].title}
              description={projects[6].description}
              image={projects[6].image}
            />

          </div>


          {/* =================================================
              CENTER COLUMN
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-[64px]

              max-[767px]:gap-[35px]
            "
          >

            <ProjectCard
              title={projects[1].title}
              description={projects[1].description}
              image={projects[1].image}
              tall
            />

            <ProjectCard
              title={projects[4].title}
              description={projects[4].description}
              image={projects[4].image}
            />

            <ProjectCard
              title={projects[7].title}
              description={projects[7].description}
              image={projects[7].image}
            />

          </div>


          {/* =================================================
              RIGHT COLUMN
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-[66px]

              max-[767px]:gap-[35px]
            "
          >

            <ProjectCard
              title={projects[2].title}
              description={projects[2].description}
              image={projects[2].image}
            />

            <ProjectCard
              title={projects[5].title}
              description={projects[5].description}
              image={projects[5].image}
              tall
            />

            <ProjectCard
              title={projects[8].title}
              description={projects[8].description}
              image={projects[8].image}
            />

          </div>

        </div>

      </section>
    </>
  );
};

export default OurProject;