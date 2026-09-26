import React from "react";

import CommercialImage1 from "../../assets/Commercial/Image1.jpg";
import CommercialImage2 from "../../assets/Commercial/Image2.jpg";
import CommercialImage3 from "../../assets/Commercial/Image3.jpg";
import CommercialImage4 from "../../assets/Commercial/Image4.jpg";
import CommercialImage5 from "../../assets/Commercial/Image5.jpg";
import CommercialImage6 from "../../assets/Commercial/Image6.jpg";
import CommercialImage7 from "../../assets/Commercial/Image7.jpg";
import CommercialImage8 from "../../assets/Commercial/Image8.jpg";
import CommercialImage9 from "../../assets/Commercial/Image9.jpg";
import CommercialImage10 from "../../assets/Commercial/Image10.jpg";
import CommercialImage11 from "../../assets/Commercial/Image11.jpg";
import CommercialImage12 from "../../assets/Commercial/Image12.jpg";

const CommercialImages = () => {
  const images = [
    {
      id: "Commercial-1",
      src: CommercialImage1,
      alt: "Commercial Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Commercial-2",
      src: CommercialImage2,
      alt: "Commercial Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Commercial-3",
      src: CommercialImage3,
      alt: "Commercial Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Commercial-4",
      src: CommercialImage4,
      alt: "Commercial Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "Commercial-5",
      src: CommercialImage5,
      alt: "Commercial Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "Commercial-6",
      src: CommercialImage6,
      alt: "Commercial Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "Commercial-7",
      src: CommercialImage7,
      alt: "Commercial Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "Commercial-8",
      src: CommercialImage8,
      alt: "Commercial Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "Commercial-9",
      src: CommercialImage9,
      alt: "Commercial Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "Commercial-10",
      src: CommercialImage10,
      alt: "Commercial Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "Commercial-11",
      src: CommercialImage11,
      alt: "Commercial Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "Commercial-12",
      src: CommercialImage12,
      alt: "Commercial Design Gallery Image 12",
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

          {/* =========================
              THIRD ROW - 3 IMAGES
          ========================== */}

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

export default CommercialImages;