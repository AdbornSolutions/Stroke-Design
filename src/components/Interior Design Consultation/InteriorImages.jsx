import React from "react";

import InteriorImage1 from "../../assets/Interior/Image1.jpg";
import InteriorImage2 from "../../assets/Interior/Image2.jpg";
import InteriorImage3 from "../../assets/Interior/Image3.jpg";
import InteriorImage4 from "../../assets/Interior/Image4.jpg";
import InteriorImage5 from "../../assets/Interior/Image5.jpg";
import InteriorImage6 from "../../assets/Interior/Image6.jpg";
import InteriorImage7 from "../../assets/Interior/Image7.jpg";
import InteriorImage8 from "../../assets/Interior/Image8.jpg";
import InteriorImage9 from "../../assets/Interior/Image9.jpg";
import InteriorImage10 from "../../assets/Interior/Image10.jpg";
import InteriorImage11 from "../../assets/Interior/Image11.jpg";
import InteriorImage12 from "../../assets/Interior/Image12.jpg";

const InteriorImages = () => {
  const images = [
    {
      id: "Interior-1",
      src: InteriorImage1,
      alt: "Interior Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Interior-2",
      src: InteriorImage2,
      alt: "Interior Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Interior-3",
      src: InteriorImage3,
      alt: "Interior Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Interior-4",
      src: InteriorImage4,
      alt: "Interior Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "Interior-5",
      src: InteriorImage5,
      alt: "Interior Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "Interior-6",
      src: InteriorImage6,
      alt: "Interior Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "Interior-7",
      src: InteriorImage7,
      alt: "Interior Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "Interior-8",
      src: InteriorImage8,
      alt: "Interior Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "Interior-9",
      src: InteriorImage9,
      alt: "Interior Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "Interior-10",
      src: InteriorImage10,
      alt: "Interior Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "Interior-11",
      src: InteriorImage11,
      alt: "Interior Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "Interior-12",
      src: InteriorImage12,
      alt: "Interior Design Gallery Image 12",
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

export default InteriorImages;