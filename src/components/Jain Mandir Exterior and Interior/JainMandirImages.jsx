import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import jainmandirimage1 from "../../assets/optimized/Commercial/Image10.webp";
import jainmandirimage10 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image10.webp";
import jainmandirimage11 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image11.webp";
import jainmandirimage12 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image12.webp";
import jainmandirimage13 from "../../assets/optimized/Commercial/Image10.webp";
import jainmandirimage2 from "../../assets/optimized/Commercial/Image12.webp";
import jainmandirimage3 from "../../assets/optimized/Commercial/Image1.webp";
import jainmandirimage4 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image4.webp";
import jainmandirimage5 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image5.webp";
import jainmandirimage6 from "../../assets/optimized/Commercial/Image11.webp";
import jainmandirimage7 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image7.webp";
import jainmandirimage8 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image8.webp";
import jainmandirimage9 from "../../assets/optimized/Jain Mandir Exterior and Interior/Image9.webp";

const JainMandirImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "jainmandir-1",
      src: jainmandirimage1,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 1",
      layout: "small",
    },
    {
      id: "jainmandir-2",
      src: jainmandirimage2,
      aspectRatio: 0.6666666666666666,
      alt: "Jain Mandir Gallery Image 2",
      layout: "small",
    },
    {
      id: "jainmandir-3",
      src: jainmandirimage3,
      aspectRatio: 0.6666666666666666,
      alt: "Jain Mandir Gallery Image 3",
      layout: "small",
    },
    {
      id: "jainmandir-4",
      src: jainmandirimage4,
      aspectRatio: 0.6666666666666666,
      alt: "Jain Mandir Gallery Image 4",
      layout: "small",
    },
    {
      id: "jainmandir-5",
      src: jainmandirimage5,
      aspectRatio: 0.6666666666666666,
      alt: "Jain Mandir Gallery Image 5",
      layout: "small",
    },
    {
      id: "jainmandir-6",
      src: jainmandirimage6,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 6",
      layout: "small",
    },
    {
      id: "jainmandir-7",
      src: jainmandirimage7,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 7",
      layout: "small",
    },
    {
      id: "jainmandir-8",
      src: jainmandirimage8,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 8",
      layout: "small",
    },
    {
      id: "jainmandir-9",
      src: jainmandirimage9,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 9",
      layout: "small",
    },
    {
      id: "jainmandir-10",
      src: jainmandirimage10,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 10",
      layout: "small",
    },
    {
      id: "jainmandir-11",
      src: jainmandirimage11,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 11",
      layout: "small",
    },
    {
      id: "jainmandir-12",
      src: jainmandirimage12,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 12",
      layout: "small",
    },
    {
      id: "jainmandir-13",
      src: jainmandirimage13,
      aspectRatio: 1.5,
      alt: "Jain Mandir Gallery Image 13",
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
            {images.slice(0, 4).map((image) => (
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

            {images.slice(4, 7).map((image) => (
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

            {images.slice(7, 11).map((image) => (
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

            {images.slice(11, 13).map((image) => (
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

export default JainMandirImages;
