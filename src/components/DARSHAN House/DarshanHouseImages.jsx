import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import DarshanImage1 from "../../assets/optimized/DARSHAN House/Image1.webp";
import DarshanImage2 from "../../assets/optimized/DARSHAN House/Image2.webp";
import DarshanImage3 from "../../assets/optimized/DARSHAN House/Image3.webp";
import DarshanImage4 from "../../assets/optimized/DARSHAN House/Image4.webp";
import DarshanImage5 from "../../assets/optimized/DARSHAN House/Image5.webp";
import DarshanImage6 from "../../assets/optimized/DARSHAN House/Image6.webp";
import DarshanImage7 from "../../assets/optimized/DARSHAN House/Image7.webp";
import DarshanImage8 from "../../assets/optimized/DARSHAN House/Image8.webp";
import DarshanImage9 from "../../assets/optimized/DARSHAN House/Image9.webp";

const DarshanHouseImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "darshan-1",
      src: DarshanImage1,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 1",
      layout: "large",
    },
    {
      id: "darshan-2",
      src: DarshanImage2,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 2",
      layout: "large",
    },
    {
      id: "darshan-3",
      src: DarshanImage3,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 3",
      layout: "large",
    },
    {
      id: "darshan-4",
      src: DarshanImage4,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 4",
      layout: "small",
    },
    {
      id: "darshan-5",
      src: DarshanImage5,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 5",
      layout: "small",
    },
    {
      id: "darshan-6",
      src: DarshanImage6,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 6",
      layout: "small",
    },
    {
      id: "darshan-7",
      src: DarshanImage7,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 7",
      layout: "small",
    },
    {
      id: "darshan-8",
      src: DarshanImage8,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 8",
      layout: "small",
    },
    {
      id: "darshan-9",
      src: DarshanImage9,
      aspectRatio: 1.7777777777777777,
      alt: "Darshan House Gallery Image 9",
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

          {images.slice(7, 9).map((image) => (
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

export default DarshanHouseImages;
