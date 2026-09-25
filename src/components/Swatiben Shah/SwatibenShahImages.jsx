import React from "react";

import SwatibenImages1 from "../../assets/Swatiben Shah/Image1.jpg";
import SwatibenImages2 from "../../assets/Swatiben Shah/Image2.jpg";
import SwatibenImages3 from "../../assets/Swatiben Shah/Image3.jpg";
import SwatibenImages4 from "../../assets/Swatiben Shah/Image4.jpg";
import SwatibenImages5 from "../../assets/Swatiben Shah/Image5.jpg";
import SwatibenImages6 from "../../assets/Swatiben Shah/Image6.jpg";

const SwatibenShahImages = () => {
  const images = [
    // =========================
    // SWATIBEN SHAH
    // =========================
    {
      id: "swatiben-1",
      src: SwatibenImages1,
      alt: "Swatiben Shah Gallery Image 1",
      layout: "large",
    },
    {
      id: "swatiben-2",
      src: SwatibenImages2,
      alt: "Swatiben Shah Gallery Image 2",
      layout: "large",
    },
    {
      id: "swatiben-3",
      src: SwatibenImages3,
      alt: "Swatiben Shah Gallery Image 3",
      layout: "large",
    },
    {
      id: "swatiben-4",
      src: SwatibenImages4,
      alt: "Swatiben Shah Gallery Image 4",
      layout: "large",
    },
    {
      id: "swatiben-5",
      src: SwatibenImages5,
      alt: "Swatiben Shah Gallery Image 5",
      layout: "large",
    },
    {
      id: "swatiben-6",
      src: SwatibenImages6,
      alt: "Swatiben Shah Gallery Image 6",
      layout: "large",
    },
  ];

  return (
    <>
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
              ROW 2 → 3 IMAGES
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
                SECOND ROW - 3 IMAGES
            ========================== */}

            {images.slice(3, 6).map((image) => (
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
    </>
  );
};

export default SwatibenShahImages;