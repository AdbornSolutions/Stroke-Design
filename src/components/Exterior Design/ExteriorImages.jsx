import React from "react";

import ExteriorImage1 from "../../assets/Exterior/Image1.jpg";
import ExteriorImage2 from "../../assets/Exterior/Image2.jpg";
import ExteriorImage3 from "../../assets/Exterior/Image3.jpg";
import ExteriorImage4 from "../../assets/Exterior/Image4.jpg";
import ExteriorImage5 from "../../assets/Exterior/Image5.jpg";
import ExteriorImage6 from "../../assets/Exterior/Image6.jpg";
import ExteriorImage7 from "../../assets/Exterior/Image7.jpg";
import ExteriorImage8 from "../../assets/Exterior/Image8.jpg";
import ExteriorImage9 from "../../assets/Exterior/Image9.jpg";
import ExteriorImage10 from "../../assets/Exterior/Image10.jpg";
import ExteriorImage11 from "../../assets/Exterior/Image11.jpg";
import ExteriorImage12 from "../../assets/Exterior/Image12.jpg";

const ExteriorImages = () => {
  const images = [
    {
      id: "Exterior-1",
      src: ExteriorImage1,
      alt: "Exterior Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Exterior-2",
      src: ExteriorImage2,
      alt: "Exterior Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Exterior-3",
      src: ExteriorImage3,
      alt: "Exterior Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Exterior-4",
      src: ExteriorImage4,
      alt: "Exterior Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "Exterior-5",
      src: ExteriorImage5,
      alt: "Exterior Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "Exterior-6",
      src: ExteriorImage6,
      alt: "Exterior Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "Exterior-7",
      src: ExteriorImage7,
      alt: "Exterior Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "Exterior-8",
      src: ExteriorImage8,
      alt: "Exterior Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "Exterior-9",
      src: ExteriorImage9,
      alt: "Exterior Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "Exterior-10",
      src: ExteriorImage10,
      alt: "Exterior Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "Exterior-11",
      src: ExteriorImage11,
      alt: "Exterior Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "Exterior-12",
      src: ExteriorImage12,
      alt: "Exterior Design Gallery Image 12",
      layout: "small",
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
            ROW 3 → 3 IMAGES
            ROW 4 → 2 IMAGES
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

          {images.slice(7, 10).map((image) => (
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
              FOURTH ROW - 2 IMAGES
          ========================== */}

          {images.slice(10, 12).map((image) => (
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

export default ExteriorImages;