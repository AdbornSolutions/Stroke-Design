import React from "react";

import interior1 from "../../assets/GalleryImages/Interior-1.jpg";
import interior2 from "../../assets/GalleryImages/Interior-2.jpg";
import interior3 from "../../assets/GalleryImages/Interior-3.jpg";
import interior4 from "../../assets/GalleryImages/Interior-4.jpg";
import interior5 from "../../assets/GalleryImages/Interior-5.jpg";
import interior6 from "../../assets/GalleryImages/Interior-6.jpg";
import interior7 from "../../assets/GalleryImages/Interior-7.jpg";
import interior8 from "../../assets/GalleryImages/Interior-8.jpg";

import exterior1 from "../../assets/GalleryImages/Exterior-1.jpg";
import exterior2 from "../../assets/GalleryImages/Exterior-2.jpg";
import exterior3 from "../../assets/GalleryImages/Exterior-3.jpg";
import exterior4 from "../../assets/GalleryImages/Exterior-4.jpg";
import exterior5 from "../../assets/GalleryImages/Exterior-5.jpg";
import exterior6 from "../../assets/GalleryImages/Exterior-6.jpg";
import exterior7 from "../../assets/GalleryImages/Exterior-7.jpg";
import exterior8 from "../../assets/GalleryImages/Exterior-8.jpg";

const GalleryImages = () => {
  const images = [
    // =========================
    // INTERIOR
    // =========================
    {
      id: "interior-1",
      src: interior1,
      alt: "Interior Design Gallery 1",
      layout: "large",
    },
    {
      id: "interior-2",
      src: interior2,
      alt: "Interior Design Gallery 2",
      layout: "large",
    },
    {
      id: "interior-3",
      src: interior3,
      alt: "Interior Design Gallery 3",
      layout: "large",
    },
    {
      id: "interior-4",
      src: interior4,
      alt: "Interior Design Gallery 4",
      layout: "small",
    },
    {
      id: "interior-5",
      src: interior5,
      alt: "Interior Design Gallery 5",
      layout: "small",
    },
    {
      id: "interior-6",
      src: interior6,
      alt: "Interior Design Gallery 6",
      layout: "small",
    },
    {
      id: "interior-7",
      src: interior7,
      alt: "Interior Design Gallery 7",
      layout: "small",
    },
    {
      id: "interior-8",
      src: interior8,
      alt: "Interior Design Gallery 8",
      layout: "small",
    },

    // =========================
    // EXTERIOR
    // =========================
    {
      id: "exterior-1",
      src: exterior1,
      alt: "Exterior Design Gallery 1",
      layout: "large",
    },
    {
      id: "exterior-2",
      src: exterior2,
      alt: "Exterior Design Gallery 2",
      layout: "large",
    },
    {
      id: "exterior-3",
      src: exterior3,
      alt: "Exterior Design Gallery 3",
      layout: "large",
    },
    {
      id: "exterior-4",
      src: exterior4,
      alt: "Exterior Design Gallery 4",
      layout: "small",
    },
    {
      id: "exterior-5",
      src: exterior5,
      alt: "Exterior Design Gallery 5",
      layout: "small",
    },
    {
      id: "exterior-6",
      src: exterior6,
      alt: "Exterior Design Gallery 6",
      layout: "small",
    },
    {
      id: "exterior-7",
      src: exterior7,
      alt: "Exterior Design Gallery 7",
      layout: "small",
    },
    {
      id: "exterior-8",
      src: exterior8,
      alt: "Exterior Design Gallery 8",
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
        {/* =========================
            DESKTOP
            ROW 1 = 3 COLUMNS
            ROW 2 = 4 COLUMNS
            ROW 3 = 2 COLUMNS
            ROW 4 = 3 COLUMNS
            ROW 5 = 4 COLUMNS
            ROW 6 = 2 COLUMNS
        ========================== */}

        <div
          className="
            hidden
            lg:block
          "
        >

          {/* =========================
              FIRST ROW - 3 IMAGES
          ========================== */}

          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
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
          </div>


          {/* =========================
              SECOND ROW - 4 IMAGES
          ========================== */}

          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
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
          </div>


          {/* =========================
              THIRD ROW - 2 IMAGES
          ========================== */}

          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
            {images.slice(7, 9).map((image) => (
              <div
                key={image.id}
                className="
                  group
                  relative
                  col-span-6
                  aspect-[1.45/1]
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


          {/* =========================
              FOURTH ROW - 3 IMAGES
          ========================== */}

          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
            {images.slice(9, 12).map((image) => (
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


          {/* =========================
              FIFTH ROW - 4 IMAGES
          ========================== */}

          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
            {images.slice(12, 16).map((image) => (
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
          </div>
        </div>


        {/* =========================
            TABLET
            3 COLUMNS
        ========================== */}

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


        {/* =========================
            MOBILE
            2 COLUMNS
        ========================== */}

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

export default GalleryImages;