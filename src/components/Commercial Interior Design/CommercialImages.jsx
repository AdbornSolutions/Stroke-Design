import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import CommercialImage1 from "../../assets/optimized/Commercial/Image1.webp";
import CommercialImage10 from "../../assets/optimized/Commercial/Image10.webp";
import CommercialImage11 from "../../assets/optimized/Commercial/Image11.webp";
import CommercialImage12 from "../../assets/optimized/Commercial/Image12.webp";
import CommercialImage2 from "../../assets/optimized/Commercial/Image2.webp";
import CommercialImage3 from "../../assets/optimized/Commercial/Image3.webp";
import CommercialImage4 from "../../assets/optimized/Commercial/Image4.webp";
import CommercialImage5 from "../../assets/optimized/Commercial/Image5.webp";
import CommercialImage6 from "../../assets/optimized/Commercial/Image6.webp";
import CommercialImage7 from "../../assets/optimized/Commercial/Image7.webp";
import CommercialImage8 from "../../assets/optimized/Commercial/Image8.webp";
import CommercialImage9 from "../../assets/optimized/Commercial/Image9.webp";

const CommercialImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "Commercial-1",
      src: CommercialImage1,
      aspectRatio: 0.6666666666666666,
      alt: "Commercial Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "Commercial-2",
      src: CommercialImage2,
      aspectRatio: 1.5,
      alt: "Commercial Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "Commercial-3",
      src: CommercialImage3,
      aspectRatio: 0.44583333333333336,
      alt: "Commercial Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "Commercial-4",
      src: CommercialImage4,
      aspectRatio: 1.3333333333333333,
      alt: "Commercial Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "Commercial-5",
      src: CommercialImage5,
      aspectRatio: 1.3333333333333333,
      alt: "Commercial Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "Commercial-6",
      src: CommercialImage6,
      aspectRatio: 1.5,
      alt: "Commercial Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "Commercial-7",
      src: CommercialImage7,
      aspectRatio: 1.5,
      alt: "Commercial Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "Commercial-8",
      src: CommercialImage8,
      aspectRatio: 0.44583333333333336,
      alt: "Commercial Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "Commercial-9",
      src: CommercialImage9,
      aspectRatio: 0.75,
      alt: "Commercial Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "Commercial-10",
      src: CommercialImage10,
      aspectRatio: 1.5,
      alt: "Commercial Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "Commercial-11",
      src: CommercialImage11,
      aspectRatio: 1.5,
      alt: "Commercial Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "Commercial-12",
      src: CommercialImage12,
      aspectRatio: 0.6666666666666666,
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

export default CommercialImages;
