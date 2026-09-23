import React from "react";

import blogImage1 from "../../assets/blog-image-1.png";
import blogImage2 from "../../assets/blog-image-2.png";
import blogImage3 from "../../assets/blog-image-3.png";


const LatestBlogs = () => {

  const blogPosts = [
    {
      id: 1,
      image: blogImage1,
      date: "June 2, 2025",
      author: "By Admin",
      title: "Innovative Interior Ideas To Refresh Your Living Space",
      description:
        "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're updating a single.",
    },

    {
      id: 2,
      image: blogImage2,
      date: "June 2, 2025",
      author: "By Admin",
      title: "Innovative Interior Ideas To Refresh Your Living Space",
      description:
        "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living.",
    },

    {
      id: 3,
      image: blogImage3,
      date: "June 2, 2025",
      author: "By Admin",
      title: "Elevate Every Corner With Sleek Interior Concepts",
      description:
        "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you're updating a single.",
    },
  ];


  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F7F7]

        px-[clamp(38px,5vw,72px)]
        pt-5
        pb-[50px]

        max-md:px-[38px]
        max-md:pb-[40px]

        max-sm:px-4
        max-sm:pt-[22px]
        max-sm:pb-[30px]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

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

        {/* ===================================================
            LEFT DECORATIVE AREA
        =================================================== */}

        <div
          className="
            relative
            isolate
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

              max-[1024px]:w-[180px]

              max-[640px]:left-0
              max-[640px]:top-[21px]
              max-[640px]:w-[200px]
            "
          />


          {/* Vertical line */}

          <span
            className="
              absolute
              left-[85%]
              top-0
              z-0
              h-[150px]
              w-[2px]
              bg-black/50

              max-[1200px]:h-[110px]

              max-[1024px]:left-[142px]
              max-[1024px]:h-[110px]

              max-[640px]:left-[168px]
              max-[640px]:top-0
              max-[640px]:h-[67px]
            "
          />


          {/* =================================================
              BADGE
          ================================================= */}

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
              Straight From The Newroom
            </span>

          </div>

        </div>


        {/* ===================================================
            MAIN HEADING
        =================================================== */}

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

            <span
              className="
                block
                whitespace-nowrap

                max-[640px]:whitespace-normal
              "
            >
              Take a look at
            </span>


            <span
              className="
                block
                whitespace-nowrap

                max-[640px]:whitespace-normal
              "
            >

              <span className="text-[#CAA05C]">
                our latest blog
              </span>

              {" "}&amp; articles.

            </span>

          </h2>

        </div>

      </div>


      {/* =====================================================
          BLOG CARDS
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[8px]
          grid
          w-full
          max-w-[1270px]
          grid-cols-3
          items-start
          gap-x-[31px]

          max-xl:gap-x-[24px]

          max-lg:gap-x-[18px]

          max-md:grid-cols-1
          max-md:gap-y-[30px]
          max-md:mt-[10px]

          max-sm:gap-y-[28px]
        "
      >

        {blogPosts.map((post, index) => {

          const featured = index === 1;

          return (
            <article
              key={post.id}
              className="
                group
                w-full
                min-w-0
              "
            >

              {/* =================================================
                  BLOG IMAGE
              ================================================= */}

              <div
                className={`
                  relative
                  w-full
                  overflow-hidden
                  rounded-[12px]
                  bg-[#D9D9D9]

                  ${
                    featured
                      ? `
                        h-[535px]

                        max-xl:h-[480px]
                        max-lg:h-[430px]

                        max-md:h-[380px]

                        max-sm:h-[280px]

                        max-[480px]:h-[235px]
                      `
                      : `
                        h-[282px]

                        max-xl:h-[260px]
                        max-lg:h-[235px]

                        max-md:h-[320px]

                        max-sm:h-[280px]

                        max-[480px]:h-[235px]
                      `
                  }
                `}
              >

                <img
                  src={post.image}
                  alt={post.title}
                  draggable={false}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center

                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-[1.02]
                  "
                />


                {/* =================================================
                    FEATURED CARD OVERLAY
                ================================================= */}

                {featured && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/65
                      via-black/5
                      to-transparent
                    "
                  />
                )}


                {/* =================================================
                    FEATURED CARD CONTENT
                ================================================= */}

                {featured && (
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10

                      p-[18px]

                      max-sm:p-[15px]
                    "
                  >

                    <div
                      className="
                        mb-[5px]
                        text-[12px]
                        font-normal
                        leading-[1.2]
                        text-white

                        max-sm:text-[10px]
                      "
                    >
                      {post.date}{" "}
                      <span className="opacity-70">
                        •
                      </span>{" "}
                      {post.author}
                    </div>


                    <h3
                      className="
                        m-0
                        max-w-[95%]

                        font-[Arial,Helvetica,sans-serif]
                        text-[13px]
                        font-bold
                        leading-[1.25]
                        text-white

                        max-sm:text-[11px]
                      "
                    >
                      {post.title}
                    </h3>

                  </div>
                )}

              </div>


              {/* =================================================
                  NORMAL CARD CONTENT
              ================================================= */}

              {!featured && (
                <div
                  className="
                    pt-[4px]
                    font-[Arial,Helvetica,sans-serif]
                  "
                >

                  {/* DATE */}

                  <div
                    className="
                      text-[12px]
                      font-normal
                      leading-[1.25]
                      text-[#111111]

                      max-sm:text-[11px]
                    "
                  >
                    {post.date}{" "}
                    <span>
                      •
                    </span>{" "}
                    {post.author}
                  </div>


                  {/* TITLE */}

                  <h3
                    className="
                      m-0
                      mt-[4px]

                      font-[Arial,Helvetica,sans-serif]
                      text-[13px]
                      font-bold
                      leading-[1.25]
                      text-[#000000]

                      max-sm:text-[12px]
                    "
                  >
                    {post.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      m-0
                      mt-[3px]
                      max-w-[430px]

                      font-[Arial,Helvetica,sans-serif]
                      text-[12px]
                      font-normal
                      leading-[1.45]
                      text-[#111111]

                      max-sm:max-w-full
                      max-sm:text-[11px]
                      max-sm:leading-[1.45]
                    "
                  >
                    {post.description}
                  </p>

                </div>
              )}

            </article>
          );

        })}

      </div>

    </section>
  );
}

export default LatestBlogs;