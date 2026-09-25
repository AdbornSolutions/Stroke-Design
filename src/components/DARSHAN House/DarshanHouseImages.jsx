import React from "react";

import DarshanImage1 from "../../assets/DARSHAN House/Image1.jpg";
import DarshanImage2 from "../../assets/DARSHAN House/Image2.jpg";
import DarshanImage3 from "../../assets/DARSHAN House/Image3.jpg";
import DarshanImage4 from "../../assets/DARSHAN House/Image4.jpg";
import DarshanImage5 from "../../assets/DARSHAN House/Image5.jpg";
import DarshanImage6 from "../../assets/DARSHAN House/Image6.jpg";
import DarshanImage7 from "../../assets/DARSHAN House/Image7.jpg";
import DarshanImage8 from "../../assets/DARSHAN House/Image8.jpg";
import DarshanImage9 from "../../assets/DARSHAN House/Image9.jpg";

const DarshanHouseImages = () => {
  const images = [
    // =========================
    // DARSHAN HOUSE
    // =========================
    {
      id: "darshan-1",
      src: DarshanImage1,
      alt: "Darshan House Gallery Image 1",
      layout: "large",
    },
    {
      id: "darshan-2",
      src: DarshanImage2,
      alt: "Darshan House Gallery Image 2",
      layout: "large",
    },
    {
      id: "darshan-3",
      src: DarshanImage3,
      alt: "Darshan House Gallery Image 3",
      layout: "large",
    },
    {
      id: "darshan-4",
      src: DarshanImage4,
      alt: "Darshan House Gallery Image 4",
      layout: "small",
    },
    {
      id: "darshan-5",
      src: DarshanImage5,
      alt: "Darshan House Gallery Image 5",
      layout: "small",
    },
    {
      id: "darshan-6",
      src: DarshanImage6,
      alt: "Darshan House Gallery Image 6",
      layout: "small",
    },
    {
      id: "darshan-7",
      src: DarshanImage7,
      alt: "Darshan House Gallery Image 7",
      layout: "small",
    },
    {
      id: "darshan-8",
      src: DarshanImage8,
      alt: "Darshan House Gallery Image 8",
      layout: "small",
    },
    {
      id: "darshan-9",
      src: DarshanImage9,
      alt: "Darshan House Gallery Image 9",
      layout: "large",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <div
        className="
          mx-auto
          w-full
          px-[18px]
          py-[15px]

          sm:px-[24px]
          sm:py-[20px]

          md:px-[32px]
          md:py-[24px]

          lg:px-[42px]
          lg:py-[28px]

          xl:px-[48px]
        "
      >

        {/* =================================================
            DESKTOP GALLERY
            ROW 1 → 3 IMAGES
            ROW 2 → 4 IMAGES
            ROW 3 → 2 IMAGES
        ================================================== */}

        <div
          className="
            hidden

            lg:grid
            lg:grid-cols-12
            lg:gap-[20px]

            xl:gap-[22px]
          "
        >

          {/* =========================
              FIRST ROW - 3 IMAGES
          ========================== */}

          {images.slice(0, 3).map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                col-span-4
                aspect-[1.52/1]
                overflow-hidden
                rounded-[18px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
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
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ))}

          {/* =========================
              SECOND ROW - 4 IMAGES
          ========================== */}

          {images.slice(3, 7).map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                col-span-3
                aspect-[0.88/1]
                overflow-hidden
                rounded-[18px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
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
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ))}

          {/* =========================
              THIRD ROW - 2 IMAGES
          ========================== */}

          {images.slice(7, 9).map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                col-span-6
                aspect-[1.52/1]
                overflow-hidden
                rounded-[18px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
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
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ))}
        </div>

        {/* =================================================
            TABLET
            3 COLUMNS
        ================================================== */}

        <div
          className="
            hidden
            md:grid
            md:grid-cols-3
            md:gap-[20px]

            lg:hidden
          "
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                aspect-[1/1.05]
                overflow-hidden
                rounded-[16px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
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
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ))}
        </div>

        {/* =================================================
            MOBILE
            2 COLUMNS
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-[14px]

            md:hidden
          "
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="
                group
                relative
                aspect-[0.88/1]
                overflow-hidden
                rounded-[14px]
              "
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
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
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DarshanHouseImages;