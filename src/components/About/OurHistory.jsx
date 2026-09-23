/* =========================================================
   DATA
========================================================= */

const journeyData = [
  {
    year: "2009",
    title: "The Beginning",
    description:
      "Our journey began in 2009 with a simple vision: to create spaces that are beautiful, functional and deeply connected to the people who use them. Starting with small residential projects, we built our foundation through personalized service and attention to detail.",
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/c1b822f2a6a07583a63f48218917cb28f60aa1da.png",
    alt: "Interior design workspace",
    side: "odd",
  },

  {
    year: "2013",
    title: "Building Our Expertise",
    description:
      "As our experience grew, we expanded our design capabilities and began working on a wider range of residential spaces. This period helped us strengthen our understanding of space planning, materials, lighting and customized furniture solutions.",
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/8b2e4ae2e8333b9c31b59c1ef5648edc882c2ac3.png",
    alt: "Interior design studio",
    side: "even",
  },

  {
    year: "2017",
    title: "Expanding Into New Spaces",
    description:
      "By 2017, we had expanded into larger residential and commercial interior projects. With a growing team of designers, craftsmen and project professionals, we began offering complete solutions from initial concept to final execution.",
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/8b271ca192b73cb014c5ed359199dfa4ae7d7421.png",
    alt: "Design team collaboration",
    side: "odd",
  },

  {
    year: "2021",
    title: "Evolving With Modern Design",
    description:
      "We embraced new design technologies, contemporary materials and advanced visualization methods. Our approach became more collaborative and transparent, allowing clients to experience their spaces through detailed layouts and 3D design before execution began.",
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/0ba0423dcb4a63c4d26ffdf7dd7b31f92aabdab6.png",
    alt: "Modern interior design office",
    side: "even",
  },

  {
    year: "2026",
    title: "Designing the Future",
    description:
      "Today, we continue to create thoughtful residential and commercial interiors that balance creativity, functionality and timeless appeal. With years of experience and a refined network of professionals, we remain committed to designing spaces that inspire everyday living.",
    image:
      "https://mediumslateblue-turtle-686127.hostingersite.com/wp-content/uploads/2026/08/e7becf682bf50382068ec7015bdf15350f50a18c.png",
    alt: "Interior design professionals",
    side: "odd",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const OurHistory = () => {
  return (
    <>
      {/* =====================================================
          PLAYFAIR DISPLAY
      ===================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');

        .company-history-playfair {
          font-family:
            "Playfair Display",
            Georgia,
            "Times New Roman",
            serif;
        }
      `}</style>

      {/* =====================================================
          COMPLETE SECTION
      ===================================================== */}

      <section
        className="
          w-full
          overflow-hidden
          bg-[#f7f7f6]
          text-[#111111]
        "
      >
        {/* ===================================================
            HISTORY HEADER
        =================================================== */}

        <section
          className="
            relative
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
            {/* =============================================
                LEFT DECORATIVE AREA
            ============================================== */}

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
                  bg-black/50

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
                  bg-black/50

                  min-[1200px]:h-[110px]

                  max-[1024px]:left-[108px]
                  max-[1024px]:h-[110px]

                  max-[640px]:left-[108px]
                  max-[640px]:h-[67px]
                "
              />

              {/* ===========================================
                  BADGE
              ============================================ */}

              <div
                className="
                  company-history-playfair
                  absolute
                  left-[2px]
                  top-[50px]
                  z-10
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

                <span>Our History</span>
              </div>
            </div>

            {/* =============================================
                MAIN HEADING
            ============================================== */}

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
                  company-history-playfair
                  m-0
                  w-full
                  max-w-full
                  p-0
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
                  Our History
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
                    Is Full Of Interesting
                  </span>{" "}
                  Stages And Events.
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* ===================================================
            JOURNEY TIMELINE
        =================================================== */}

        <section
          className="
            w-full
            overflow-hidden
            bg-[#f7f7f6]
            px-[25px]
            pb-[55px]
            pt-[45px]

            max-[1024px]:px-5

            max-[767px]:px-[15px]
            max-[767px]:pb-[45px]
            max-[767px]:pt-[38px]

            max-[480px]:px-3

            max-[360px]:px-[10px]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
            "
          >
            {/* =============================================
                CONTINUOUS TIMELINE
            ============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[5px]
                left-1/2
                top-[5px]
                z-0
                w-px
                -translate-x-1/2
                border-l
                border-dashed
                border-[#cfd5d8]

                max-[767px]:left-[19px]
                max-[767px]:translate-x-0

                max-[480px]:left-[17px]

                max-[360px]:left-[15px]
              "
              aria-hidden="true"
            />

            {/* =============================================
                TIMELINE ITEMS
            ============================================== */}

            {journeyData.map((item) => {
              const isOdd = item.side === "odd";

              return (
                <article
                  key={item.year}
                  className="
                    relative
                    z-[2]
                    grid
                    min-h-[290px]
                    w-full
                    grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
                    items-center

                    max-[1024px]:min-h-[260px]
                    max-[1024px]:grid-cols-[minmax(0,1fr)_65px_minmax(0,1fr)]

                    max-[850px]:grid-cols-[minmax(0,1fr)_55px_minmax(0,1fr)]

                    max-[767px]:mb-[75px]
                    max-[767px]:min-h-0
                    max-[767px]:flex
                    max-[767px]:flex-col
                    max-[767px]:items-start
                    max-[767px]:gap-8

                    max-[480px]:mb-[64px]
                    max-[480px]:gap-7

                    max-[360px]:mb-[58px]
                    max-[360px]:gap-6

                    last:mb-0
                  "
                >
                  {/* =======================================
                      IMAGE
                  ======================================== */}

                  <div
                    className={`
                      relative
                      z-[99]
                      w-full
                      max-w-[414px]
                      justify-self-center
                      overflow-hidden
                      rounded-[12px]
                      bg-[#dddddd]
                      my-[60px]

                      max-[1024px]:my-[45px]
                      max-[1024px]:max-w-[260px]

                      max-[850px]:max-w-[235px]

                      max-[767px]:my-0
                      max-[767px]:w-full
                      max-[767px]:max-w-[410px]
                      max-[767px]:self-start
                      max-[767px]:aspect-[1.28/1]

                      max-[480px]:max-w-full
                      max-[480px]:aspect-[1.17/1]
                      max-[480px]:rounded-[11px]

                      ${
                        isOdd
                          ? "col-start-1 row-start-1"
                          : "col-start-3 row-start-1"
                      }
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-500
                        ease-in-out

                        hover:scale-[1.025]
                      "
                    />
                  </div>

                  {/* =======================================
                      CENTER NODE
                  ======================================== */}

                  <div
                    className="
                      relative
                      z-[5]
                      flex
                      h-3
                      w-20
                      items-center
                      justify-center
                      pointer-events-none

                      max-[1024px]:w-[65px]

                      max-[850px]:w-[55px]

                      max-[767px]:absolute
                      max-[767px]:left-[-50px]
                      max-[767px]:top-[46px]
                      max-[767px]:h-[10px]
                      max-[767px]:w-[50px]
                      max-[767px]:block

                      max-[480px]:left-[-44px]
                      max-[480px]:top-[41px]
                      max-[480px]:w-[44px]

                      max-[360px]:left-[-40px]
                      max-[360px]:top-[38px]
                      max-[360px]:w-10
                    "
                  >
                    {/* Desktop connector */}

                    <span
                      className={`
                        absolute
                        top-1/2
                        z-[1]
                        h-px
                        -translate-y-1/2
                        bg-[#cbd3d8]

                        max-[767px]:hidden

                        ${isOdd ? "right-1/2 w-[150px]" : "left-1/2 w-[150px]"}

                        max-[1024px]:w-[92px]

                        max-[850px]:w-[76px]
                      `}
                    />

                    {/* Mobile connector */}

                    <span
                      className="
                        absolute
                        left-5
                        top-1/2
                        z-[1]
                        hidden
                        h-px
                        w-[30px]
                        -translate-y-1/2
                        bg-[#cbd3d8]

                        max-[767px]:block

                        max-[480px]:left-[18px]
                        max-[480px]:w-[26px]

                        max-[360px]:left-4
                        max-[360px]:w-6
                      "
                    />

                    {/* Timeline dot */}

                    <span
                      className="
                        relative
                        z-[4]
                        block
                        h-[10px]
                        w-[10px]
                        shrink-0
                        rounded-full
                        border-2
                        border-[#65879d]
                        bg-white

                        max-[767px]:absolute
                        max-[767px]:left-[15px]
                        max-[767px]:top-1/2
                        max-[767px]:-translate-y-1/2

                        max-[480px]:left-[13px]

                        max-[360px]:left-[11px]
                      "
                    />
                  </div>

                  {/* =======================================
                      CONTENT CARD
                  ======================================== */}

                  <div
                    className={`
                      relative
                      z-[2]
                      w-full
                      max-w-[429px]
                      justify-self-center

                      max-[1024px]:max-w-[260px]

                      max-[767px]:w-full
                      max-[767px]:max-w-[410px]
                      max-[767px]:self-start

                      max-[480px]:max-w-full

                      ${
                        isOdd
                          ? "col-start-3 row-start-1"
                          : "col-start-1 row-start-1"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        w-full
                        max-w-[429px]
                        overflow-visible
                        rounded-[4px]
                        bg-white
                        px-6
                        pb-6
                        pt-[37px]
                        shadow-[0_5px_10px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.07)]

                        max-[1024px]:min-h-[155px]
                        max-[1024px]:px-[21px]
                        max-[1024px]:pb-[21px]
                        max-[1024px]:pt-[34px]

                        max-[767px]:min-h-0
                        max-[767px]:w-full
                        max-[767px]:max-w-full
                        max-[767px]:px-[25px]
                        max-[767px]:pb-[27px]
                        max-[767px]:pt-[43px]

                        max-[480px]:px-5
                        max-[480px]:pb-6
                        max-[480px]:pt-10

                        max-[360px]:px-[17px]
                        max-[360px]:pb-[21px]
                        max-[360px]:pt-[37px]
                      "
                    >
                      {/* =================================
                          YEAR
                      ================================== */}

                      <div
                        className="
                          absolute
                          left-[-20px]
                          top-[-20px]
                          z-10
                          bg-[#f7f7f6]
                          p-[6px]
                          font-sans
                          text-[36px]
                          font-bold
                          leading-none
                          tracking-[-0.8px]
                          text-[#101010]
                          whitespace-nowrap

                          max-[1024px]:left-[-10px]
                          max-[1024px]:top-[-10px]
                          max-[1024px]:text-[24px]

                          max-[767px]:text-[27px]

                          max-[480px]:text-[24px]

                          max-[360px]:left-[-8px]
                          max-[360px]:top-[-8px]
                          max-[360px]:text-[22px]
                        "
                      >
                        {item.year}
                      </div>

                      {/* =================================
                          TITLE
                      ================================== */}

                      <h3
                        className="
                          company-history-playfair
                          m-0
                          mb-4
                          ml-[52px]
                          mt-[-26px]
                          p-0
                          text-left
                          text-[32px]
                          font-normal
                          leading-[1.05]
                          text-[#161616]

                          max-[1024px]:text-[22px]

                          max-[767px]:ml-0
                          max-[767px]:mt-[-7px]
                          max-[767px]:mb-[18px]
                          max-[767px]:text-[27px]
                          max-[767px]:leading-[1.08]

                          max-[480px]:text-[24px]
                          max-[480px]:mb-4

                          max-[360px]:text-[22px]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* =================================
                          DESCRIPTION
                      ================================== */}

                      <p
                        className="
                          m-0
                          p-0
                          text-left
                          font-sans
                          text-[16px]
                          font-normal
                          leading-[1.38]
                          text-[#202020]

                          max-[1024px]:text-[10.5px]
                          max-[1024px]:leading-[1.36]

                          max-[767px]:text-[13px]
                          max-[767px]:leading-[1.5]

                          max-[480px]:text-[12px]
                          max-[480px]:leading-[1.46]

                          max-[360px]:text-[11.5px]
                          max-[360px]:leading-[1.44]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default OurHistory;
