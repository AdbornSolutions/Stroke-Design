import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import RenovationImage1 from "../../assets/optimized/Renovation And Remodeling/Image1.webp";
import RenovationImage2 from "../../assets/optimized/Renovation And Remodeling/Image2.webp";
import RenovationImage3 from "../../assets/optimized/Renovation And Remodeling/Image3.webp";
import RenovationImage4 from "../../assets/optimized/Renovation And Remodeling/Image4.webp";
import RenovationImage5 from "../../assets/optimized/Renovation And Remodeling/Image5.webp";
import RenovationImage6 from "../../assets/optimized/Renovation And Remodeling/Image6.webp";

const RenovationImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "Renovation-1",
      src: RenovationImage1,
      aspectRatio: 0.75,
      alt: "Renovation Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Renovation-2",
      src: RenovationImage2,
      aspectRatio: 0.75,
      alt: "Renovation Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Renovation-3",
      src: RenovationImage3,
      aspectRatio: 0.75,
      alt: "Renovation Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Renovation-4",
      src: RenovationImage4,
      aspectRatio: 0.75,
      alt: "Renovation Design Gallery Image 4",
      layout: "large",
    },
    {
      id: "Renovation-5",
      src: RenovationImage5,
      aspectRatio: 0.75,
      alt: "Renovation Design Gallery Image 5",
      layout: "large",
    },
    {
      id: "Renovation-6",
      src: RenovationImage6,
      aspectRatio: 0.75,
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
        {layout === "desktop" && (<div
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
              <GalleryImage
                src={image.src}
                  aspectRatio={image.aspectRatio}
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
              <GalleryImage
                src={image.src}
                  aspectRatio={image.aspectRatio}
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
        </div>)}

        {layout === "tablet" && (<div
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
              <GalleryImage
                src={image.src}
                  aspectRatio={image.aspectRatio}
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
        </div>)}

        {layout === "mobile" && (<div
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
              <GalleryImage
                src={image.src}
                  aspectRatio={image.aspectRatio}
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
        </div>)}
      </div>
    </section>
  );
};

export default RenovationImages;
