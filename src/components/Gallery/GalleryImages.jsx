import React from "react";

const GalleryImages = () => {
  const images = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      alt: "Interior Design Gallery 1",
      layout: "large",
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      alt: "Interior Design Gallery 2",
      layout: "large",
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Interior Design Gallery 3",
      layout: "large",
    },
    {
      id: 4,
      src: "/images/gallery-4.jpg",
      alt: "Interior Design Gallery 4",
      layout: "small",
    },
    {
      id: 5,
      src: "/images/gallery-5.jpg",
      alt: "Interior Design Gallery 5",
      layout: "small",
    },
    {
      id: 6,
      src: "/images/gallery-6.jpg",
      alt: "Interior Design Gallery 6",
      layout: "small",
    },
    {
      id: 7,
      src: "/images/gallery-7.jpg",
      alt: "Interior Design Gallery 7",
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
            ROW 1 → 3 COLUMNS
            ROW 2 → 4 COLUMNS
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

          {images.slice(3).map((image) => (
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