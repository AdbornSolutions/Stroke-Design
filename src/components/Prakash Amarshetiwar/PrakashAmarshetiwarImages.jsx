import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import PrakashImage1 from "../../assets/optimized/Prakash Amarshetiwar/Image1.webp";
import PrakashImage10 from "../../assets/optimized/Prakash Amarshetiwar/Image10.webp";
import PrakashImage11 from "../../assets/optimized/Prakash Amarshetiwar/Image11.webp";
import PrakashImage12 from "../../assets/optimized/Prakash Amarshetiwar/Image12.webp";
import PrakashImage13 from "../../assets/optimized/Prakash Amarshetiwar/Image13.webp";
import PrakashImage14 from "../../assets/optimized/EXTERIOR/Image11.webp";
import PrakashImage2 from "../../assets/optimized/Prakash Amarshetiwar/Image2.webp";
import PrakashImage3 from "../../assets/optimized/Prakash Amarshetiwar/Image3.webp";
import PrakashImage4 from "../../assets/optimized/Prakash Amarshetiwar/Image4.webp";
import PrakashImage5 from "../../assets/optimized/Prakash Amarshetiwar/Image5.webp";
import PrakashImage6 from "../../assets/optimized/Prakash Amarshetiwar/Image6.webp";
import PrakashImage7 from "../../assets/optimized/Prakash Amarshetiwar/Image7.webp";
import PrakashImage8 from "../../assets/optimized/Prakash Amarshetiwar/Image8.webp";
import PrakashImage9 from "../../assets/optimized/Prakash Amarshetiwar/Image9.webp";

const PrakashAmarshetiwarImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "prakash-1",
      src: PrakashImage1,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 1",
      layout: "large",
    },
    {
      id: "prakash-2",
      src: PrakashImage2,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 2",
      layout: "large",
    },
    {
      id: "prakash-3",
      src: PrakashImage3,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 3",
      layout: "large",
    },
    {
      id: "prakash-4",
      src: PrakashImage4,
      aspectRatio: 0.6666666666666666,
      alt: "Prakash Amarshetiwar Gallery Image 4",
      layout: "small",
    },
    {
      id: "prakash-5",
      src: PrakashImage5,
      aspectRatio: 0.6666666666666666,
      alt: "Prakash Amarshetiwar Gallery Image 5",
      layout: "small",
    },
    {
      id: "prakash-6",
      src: PrakashImage6,
      aspectRatio: 0.6666666666666666,
      alt: "Prakash Amarshetiwar Gallery Image 6",
      layout: "small",
    },
    {
      id: "prakash-7",
      src: PrakashImage7,
      aspectRatio: 0.6666666666666666,
      alt: "Prakash Amarshetiwar Gallery Image 7",
      layout: "small",
    },
    {
      id: "prakash-8",
      src: PrakashImage8,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 8",
      layout: "small",
    },
    {
      id: "prakash-9",
      src: PrakashImage9,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 9",
      layout: "small",
    },
    {
      id: "prakash-10",
      src: PrakashImage10,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 10",
      layout: "small",
    },
    {
      id: "prakash-11",
      src: PrakashImage11,
      aspectRatio: 1.4368568755846585,
      alt: "Prakash Amarshetiwar Gallery Image 11",
      layout: "small",
    },
    {
      id: "prakash-12",
      src: PrakashImage12,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 12",
      layout: "small",
    },
    {
      id: "prakash-13",
      src: PrakashImage13,
      aspectRatio: 1.5,
      alt: "Prakash Amarshetiwar Gallery Image 13",
      layout: "small",
    },
    {
      id: "prakash-14",
      src: PrakashImage14,
      aspectRatio: 1.0847457627118644,
      alt: "Prakash Amarshetiwar Gallery Image 14",
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

            {images.slice(5, 9).map((image) => (
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

            {images.slice(12, 14).map((image) => (
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

export default PrakashAmarshetiwarImages;
