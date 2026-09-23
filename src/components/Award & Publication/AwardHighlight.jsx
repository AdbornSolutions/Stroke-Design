import React from "react";

const AwardHighlight = () => {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-10 lg:px-16 xl:px-[7.7%]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1250px]
          grid-cols-1
          items-center
          gap-10

          md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          md:gap-12

          lg:grid-cols-[568px_minmax(0,1fr)]
          lg:gap-[70px]

          xl:gap-[70px]
        "
      >
        {/* =====================================================
            AWARD IMAGE
        ===================================================== */}

        <div className="w-full">
          <img
            src="/images/awards/interior-designer-of-the-year.jpg"
            alt="Interior Designer of the Year award collection"
            className="
              block
              aspect-[568/378]
              w-full
              rounded-[18px]
              object-cover
              object-center
            "
          />
        </div>

        {/* =====================================================
            AWARD CONTENT
        ===================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            justify-center

            md:min-h-[378px]
          "
        >
          {/* TITLE */}

          <h2
            className="
              m-0
              font-['Arial',Helvetica,sans-serif]
              text-[32px]
              font-bold
              leading-[1.15]
              tracking-[-0.5px]
              text-black

              sm:text-[36px]

              md:text-[34px]

              lg:text-[38px]

              xl:text-[40px]
            "
          >
            Interior Designer of the Year
          </h2>

          {/* AWARD NAME */}

          <p
            className="
              m-0
              mt-2

              font-['Arial',Helvetica,sans-serif]
              text-[15px]
              font-normal
              leading-[1.5]
              text-[#173f73]
            "
          >
            Design Excellence Awards - 2026
          </p>

          {/* DESCRIPTION */}

          <p
            className="
              m-0
              mt-7
              max-w-[570px]

              font-['Arial',Helvetica,sans-serif]
              text-[15px]
              font-normal
              leading-[1.7]
              text-[#777777]

              sm:text-[16px]
            "
          >
            Awarded for our comprehensive work on ‘The Serene Residence’,
            highlighting our innovative approach to integrating natural
            light, sustainable materials, and bespoke craftsmanship in
            residential design.
          </p>

          {/* PROJECT LINK */}

          <a
            href="#award-winning-project"
            className="
              mt-6
              inline-flex
              w-fit
              items-center

              font-['Arial',Helvetica,sans-serif]
              text-[14px]
              font-medium
              uppercase
              leading-none
              text-black

              transition-colors
              duration-200

              hover:text-[#CAA05C]
            "
          >
            VIEW AWARD WINNING PROJECT
            <span className="ml-1 text-[17px] leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AwardHighlight;