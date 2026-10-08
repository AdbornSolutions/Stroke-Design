import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import AnandImage1 from "../../assets/optimized/Anand Chandak/Image1.webp";
import AnandImage2 from "../../assets/optimized/Anand Chandak/Image2.webp";
import AnandImage3 from "../../assets/optimized/Anand Chandak/Image3.webp";
import AnandImage4 from "../../assets/optimized/Anand Chandak/Image4.webp";
import AnandImage5 from "../../assets/optimized/Anand Chandak/Image5.webp";
import AnandImage6 from "../../assets/optimized/Anand Chandak/Image6.webp";
import AnandImage7 from "../../assets/optimized/Anand Chandak/Image7.webp";

const AnandChandakImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "anand-1",
      src: AnandImage1,
      aspectRatio: 1.4883720930232558,
      alt: "Anand Chandak Gallery Image 1",
      layout: "large",
    },
    {
      id: "anand-2",
      src: AnandImage2,
      aspectRatio: 1.5,
      alt: "Anand Chandak Gallery Image 2",
      layout: "large",
    },
    {
      id: "anand-3",
      src: AnandImage3,
      aspectRatio: 0.6666666666666666,
      alt: "Anand Chandak Gallery Image 3",
      layout: "large",
    },
    {
      id: "anand-4",
      src: AnandImage4,
      aspectRatio: 1.5,
      alt: "Anand Chandak Gallery Image 4",
      layout: "small",
    },
    {
      id: "anand-5",
      src: AnandImage5,
      aspectRatio: 0.746875,
      alt: "Anand Chandak Gallery Image 5",
      layout: "small",
    },
    {
      id: "anand-6",
      src: AnandImage6,
      aspectRatio: 1.5,
      alt: "Anand Chandak Gallery Image 6",
      layout: "small",
    },
    {
      id: "anand-7",
      src: AnandImage7,
      aspectRatio: 1.5,
      alt: "Anand Chandak Gallery Image 7",
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
          {layout === "desktop" && (<div
            className="
              hidden

              lg:grid
              lg:grid-cols-12
              lg:gap-[20px]

              xl:gap-[22px]
            "
          >
            {images.slice(0, 2).map((image) => (
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

            {images.slice(2, 5).map((image) => (
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

            {images.slice(5, 7).map((image) => (
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
    </>
  );
};

export default AnandChandakImages;
