import AmitImage1 from "../../assets/Amit Parekh/image1.webp";
import AmitImage2 from "../../assets/Amit Parekh/image2.webp";
import AmitImage3 from "../../assets/Amit Parekh/image3.webp";
import AmitImage4 from "../../assets/Amit Parekh/image4.webp";
import AmitImage5 from "../../assets/Amit Parekh/image5.webp";
import AmitImage6 from "../../assets/Amit Parekh/image6.webp";
import AmitImage7 from "../../assets/Amit Parekh/image7.webp";
import AmitImage8 from "../../assets/Amit Parekh/image8.webp";

const AmitParekhImages = () => {
  const images = [
    {
      id: "amit-1",
      src: AmitImage1,
      alt: "Amit Parekh Gallery Image 1",
      layout: "large",
    },
    {
      id: "amit-2",
      src: AmitImage2,
      alt: "Amit Parekh Gallery Image 2",
      layout: "large",
    },
    {
      id: "amit-3",
      src: AmitImage3,
      alt: "Amit Parekh Gallery Image 3",
      layout: "large",
    },
    {
      id: "amit-4",
      src: AmitImage4,
      alt: "Amit Parekh Gallery Image 4",
      layout: "small",
    },
    {
      id: "amit-5",
      src: AmitImage5,
      alt: "Amit Parekh Gallery Image 5",
      layout: "small",
    },
    {
      id: "amit-6",
      src: AmitImage6,
      alt: "Amit Parekh Gallery Image 6",
      layout: "small",
    },
    {
      id: "amit-7",
      src: AmitImage7,
      alt: "Amit Parekh Gallery Image 7",
      layout: "small",
    },
    {
      id: "amit-8",
      src: AmitImage8,
      alt: "Amit Parekh Gallery Image 8",
      layout: "small",
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
          <div
            className="
              hidden

              lg:grid
              lg:grid-cols-12
              lg:gap-[20px]

              xl:gap-[22px]
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

            {images.slice(3, 5).map((image) => (
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

            {images.slice(5, 8).map((image) => (
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

export default AmitParekhImages;
