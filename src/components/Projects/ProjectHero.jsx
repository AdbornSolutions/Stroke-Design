import servicehero from "../../assets/about-hero.png";

const ProjectHero = () => {
  return (
    <section className="relative min-h-[511px] w-full overflow-hidden">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <img
        src={servicehero}
        alt="Services - Interior Design"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =====================================================
          OPTIONAL DARK OVERLAY
          Very subtle - keeps the text readable
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/10
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10

          mx-auto
          w-full
          max-w-[1440px]

          px-[50px]
          pb-[48px]

          sm:px-[35px]
          sm:pb-[40px]

          md:px-[45px]
          md:pb-[48px]

          lg:px-[50px]
          lg:pb-[50px]

          xl:px-[55px]
          xl:pb-[55px]
        "
      >
        {/* ===============================================
            PAGE TITLE
        =============================================== */}

        <h1
          className="
            m-0
            font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
            text-[52px]
            font-semibold
            leading-[1]
            tracking-[-1px]
            text-white

            sm:text-[48px]

            md:text-[56px]

            lg:text-[64px]

            xl:text-[70px]

            max-sm:text-[42px]
          "
        >
          Projects
        </h1>

        {/* ===============================================
            BREADCRUMB
        =============================================== */}

        <div
          className="
            mt-[18px]

            font-['Arial',Helvetica,sans-serif]
            text-[17px]
            font-medium
            leading-none
            text-white

            sm:mt-[16px]
            sm:text-[16px]

            md:mt-[18px]
            md:text-[17px]

            lg:text-[18px]

            max-sm:mt-[14px]
            max-sm:text-[14px]
          "
        >
          <span>Home</span>

          <span className="mx-[4px]">/</span>

          <span>Projects</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
