import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import ExteriorImage1 from "../../assets/optimized/EXTERIOR/Image1.webp";
import ExteriorImage10 from "../../assets/optimized/EXTERIOR/Image10.webp";
import ExteriorImage11 from "../../assets/optimized/EXTERIOR/Image11.webp";
import ExteriorImage12 from "../../assets/optimized/EXTERIOR/Image12.webp";
import ExteriorImage2 from "../../assets/optimized/EXTERIOR/Image2.webp";
import ExteriorImage3 from "../../assets/optimized/EXTERIOR/Image3.webp";
import ExteriorImage4 from "../../assets/optimized/EXTERIOR/Image10.webp";
import ExteriorImage5 from "../../assets/optimized/EXTERIOR/Image5.webp";
import ExteriorImage6 from "../../assets/optimized/EXTERIOR/Image6.webp";
import ExteriorImage7 from "../../assets/optimized/EXTERIOR/Image7.webp";
import ExteriorImage8 from "../../assets/optimized/EXTERIOR/Image8.webp";
import ExteriorImage9 from "../../assets/optimized/EXTERIOR/Image9.webp";

const ExteriorImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "Exterior-1",
      src: ExteriorImage1,
      aspectRatio: 1.3333333333333333,
      alt: "Exterior Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Exterior-2",
      src: ExteriorImage2,
      aspectRatio: 1.4143646408839778,
      alt: "Exterior Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Exterior-3",
      src: ExteriorImage3,
      aspectRatio: 0.7072916666666667,
      alt: "Exterior Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Exterior-4",
      src: ExteriorImage4,
      aspectRatio: 0.75,
      alt: "Exterior Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "Exterior-5",
      src: ExteriorImage5,
      aspectRatio: 1.5,
      alt: "Exterior Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "Exterior-6",
      src: ExteriorImage6,
      aspectRatio: 0.6666666666666666,
      alt: "Exterior Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "Exterior-7",
      src: ExteriorImage7,
      aspectRatio: 0.6666666666666666,
      alt: "Exterior Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "Exterior-8",
      src: ExteriorImage8,
      aspectRatio: 1.5238095238095237,
      alt: "Exterior Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "Exterior-9",
      src: ExteriorImage9,
      aspectRatio: 1.4014598540145986,
      alt: "Exterior Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "Exterior-10",
      src: ExteriorImage10,
      aspectRatio: 0.75,
      alt: "Exterior Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "Exterior-11",
      src: ExteriorImage11,
      aspectRatio: 1.0847457627118644,
      alt: "Exterior Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "Exterior-12",
      src: ExteriorImage12,
      aspectRatio: 1.5,
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

export default ExteriorImages;
