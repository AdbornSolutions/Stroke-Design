import React from "react";
import stroke1 from "../../assets/Reels/strokes-1.mp4";
import stroke2 from "../../assets/Reels/strokes-2.mp4";
import stroke3 from "../../assets/Reels/strokes-3.mp4";
import stroke4 from "../../assets/Reels/strokes-4.mp4";
import stroke5 from "../../assets/Reels/strokes-5.mp4";
import stroke6 from "../../assets/Reels/strokes-6.mp4";
import stroke7 from "../../assets/Reels/strokes-7.mp4";
import stroke8 from "../../assets/Reels/strokes-8.mp4";

const StrokesReels = () => {
  const videoItems = [
    {
      id: 1,
      src: stroke1,
    },
    {
      id: 2,
      src: stroke2,
    },
    {
      id: 3,
      src: stroke3,
    },
    {
      id: 4,
      src: stroke4,
    },
    {
      id: 5,
      src: stroke5,
    },
    {
      id: 6,
      src: stroke6,
    },
    {
      id: 7,
      src: stroke7,
    },
    {
      id: 8,
      src: stroke8,
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#F7F7F7] px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10 xl:px-12">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">

        {/* Instagram / Brand */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-[8px]
            font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
            text-[25px]
            leading-none
            text-[#111111]

            sm:text-[27px]
            md:text-[29px]
            lg:text-[30px]
          "
        >

          {/* Instagram Icon */}

          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
              h-[25px]
              w-[25px]
              shrink-0

              sm:h-[27px]
              sm:w-[27px]

              md:h-[28px]
              md:w-[28px]
            "
          >
            <defs>
              <linearGradient
                id="instagramGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F58529" />
                <stop offset="35%" stopColor="#DD2A7B" />
                <stop offset="65%" stopColor="#8134AF" />
                <stop offset="100%" stopColor="#515BD4" />
              </linearGradient>
            </defs>

            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              fill="url(#instagramGradient)"
            />

            <rect
              x="6"
              y="6"
              width="12"
              height="12"
              rx="4"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
            />

            <circle
              cx="12"
              cy="12"
              r="3"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
            />

            <circle
              cx="17.3"
              cy="6.8"
              r="1"
              fill="white"
            />
          </svg>


          {/* @ */}

          <span className="text-[25px] sm:text-[27px] md:text-[29px]">
            @
          </span>


          {/* Brand */}

          <span>
            strokes design studio
          </span>

        </div>


        {/* =====================================================
            TAGLINE
        ===================================================== */}

        <div
          className="
            mt-[20px]

            font-[Arial,Helvetica,sans-serif]
            text-[16px]
            font-normal
            tracking-[4px]
            text-[#17283B]

            sm:text-[17px]
            md:text-[18px]

            max-sm:tracking-[2.5px]
          "
        >
          Where Design Meets Experience
          <span className="ml-2">
            ✨
          </span>
        </div>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <div
          className="
            mt-[10px]

            font-[Arial,Helvetica,sans-serif]
            text-[16px]
            font-normal
            tracking-[4px]
            text-[#17283B]

            sm:text-[17px]
            md:text-[18px]

            max-sm:tracking-[2px]
          "
        >
          Architecture
          <span className="mx-[8px]">|</span>
          Interiors
          <span className="mx-[8px]">|</span>
          Project Management
        </div>

      </div>


      {/* =====================================================
          VIDEO GRID
      ===================================================== */}

      <div
        className="
          mx-auto

          mt-[18px]

          grid
          w-full
          max-w-[1000px]

          grid-cols-4
          gap-x-[20px]
          gap-y-[20px]

          max-xl:max-w-[1000px]
          max-xl:gap-x-[18px]

          max-lg:grid-cols-3
          max-lg:max-w-[760px]

          max-md:grid-cols-2
          max-md:max-w-[620px]
          max-md:gap-x-[16px]
          max-md:gap-y-[16px]

          max-sm:gap-x-[12px]
          max-sm:gap-y-[12px]

          max-[480px]:grid-cols-2
          max-[480px]:gap-x-[10px]
          max-[480px]:gap-y-[10px]
        "
      >

        {videoItems.map((video) => (
          <div
            key={video.id}
            className="
              group
              relative
              aspect-[9/16]
              w-full
              overflow-hidden
              rounded-[9px]
              bg-[#D8D5CF]

              sm:rounded-[10px]

              transition-transform
              duration-300
              ease-out

              hover:-translate-y-[2px]
            "
          >

            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
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

                group-hover:scale-[1.015]
              "
            />

          </div>
        ))}

      </div>

    </section>
  );
}

export default StrokesReels;