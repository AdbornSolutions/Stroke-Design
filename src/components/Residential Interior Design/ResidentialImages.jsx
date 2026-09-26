import React from "react";

import ResidentialImage1 from "../../assets/Residential/Image1.jpg";
import ResidentialImage2 from "../../assets/Residential/Image2.jpg";
import ResidentialImage3 from "../../assets/Residential/Image3.jpg";
import ResidentialImage4 from "../../assets/Residential/Image4.jpg";
import ResidentialImage5 from "../../assets/Residential/Image5.jpg";
import ResidentialImage6 from "../../assets/Residential/Image6.jpg";
import ResidentialImage7 from "../../assets/Residential/Image7.jpg";
import ResidentialImage8 from "../../assets/Residential/Image8.jpg";
import ResidentialImage9 from "../../assets/Residential/Image9.jpg";
import ResidentialImage10 from "../../assets/Residential/Image10.jpg";
import ResidentialImage11 from "../../assets/Residential/Image11.jpg";
import ResidentialImage12 from "../../assets/Residential/Image12.jpg";

const ResidentialImages = () => {
  const images = [
    {
      id: "residential-1",
      src: ResidentialImage1,
      alt: "Residential Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "residential-2",
      src: ResidentialImage2,
      alt: "Residential Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "residential-3",
      src: ResidentialImage3,
      alt: "Residential Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "residential-4",
      src: ResidentialImage4,
      alt: "Residential Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "residential-5",
      src: ResidentialImage5,
      alt: "Residential Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "residential-6",
      src: ResidentialImage6,
      alt: "Residential Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "residential-7",
      src: ResidentialImage7,
      alt: "Residential Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "residential-8",
      src: ResidentialImage8,
      alt: "Residential Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "residential-9",
      src: ResidentialImage9,
      alt: "Residential Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "residential-10",
      src: ResidentialImage10,
      alt: "Residential Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "residential-11",
      src: ResidentialImage11,
      alt: "Residential Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "residential-12",
      src: ResidentialImage12,
      alt: "Residential Design Gallery Image 12",
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

export default ResidentialImages;