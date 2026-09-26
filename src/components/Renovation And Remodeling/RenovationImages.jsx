import RenovationImage1 from "../../assets/Renovation And Remodeling/Image1.jpg";
import RenovationImage2 from "../../assets/Renovation And Remodeling/Image2.jpg";
import RenovationImage3 from "../../assets/Renovation And Remodeling/Image3.jpg";
import RenovationImage4 from "../../assets/Renovation And Remodeling/Image4.jpg";
import RenovationImage5 from "../../assets/Renovation And Remodeling/Image5.jpg";
import RenovationImage6 from "../../assets/Renovation And Remodeling/Image6.jpg";

const RenovationImages = () => {
  const images = [
    {
      id: "Renovation-1",
      src: RenovationImage1,
      alt: "Renovation Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Renovation-2",
      src: RenovationImage2,
      alt: "Renovation Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Renovation-3",
      src: RenovationImage3,
      alt: "Renovation Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Renovation-4",
      src: RenovationImage4,
      alt: "Renovation Design Gallery Image 4",
      layout: "large",
    },
    {
      id: "Renovation-5",
      src: RenovationImage5,
      alt: "Renovation Design Gallery Image 5",
      layout: "large",
    },
    {
      id: "Renovation-6",
      src: RenovationImage6,
      alt: "Renovation Design Gallery Image 6",
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
  );
};

export default RenovationImages;
