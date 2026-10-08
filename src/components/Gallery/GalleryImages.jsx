import GalleryImage from "./GalleryImage";
import imageDimensions from "../../assets/GalleryImages/optimized/dimensions.json";
import useGalleryLayout from "../useGalleryLayout";
import interior1 from "../../assets/GalleryImages/optimized/Interior-1.webp";
import interior2 from "../../assets/GalleryImages/optimized/Interior-2.webp";
import interior3 from "../../assets/GalleryImages/optimized/Interior-3.webp";
import interior4 from "../../assets/GalleryImages/optimized/Interior-4.webp";
import interior5 from "../../assets/GalleryImages/optimized/Interior-5.webp";
import interior6 from "../../assets/GalleryImages/optimized/Interior-6.webp";
import interior7 from "../../assets/GalleryImages/optimized/Interior-7.webp";
import interior8 from "../../assets/GalleryImages/optimized/Interior-8.webp";

import exterior1 from "../../assets/GalleryImages/optimized/Exterior-1.webp";
import exterior2 from "../../assets/GalleryImages/optimized/Exterior-2.webp";
import exterior3 from "../../assets/GalleryImages/optimized/Exterior-3.webp";
import exterior4 from "../../assets/GalleryImages/optimized/Exterior-4.webp";
import exterior5 from "../../assets/GalleryImages/optimized/Exterior-5.webp";
import exterior6 from "../../assets/GalleryImages/optimized/Exterior-6.webp";
import exterior7 from "../../assets/GalleryImages/optimized/Exterior-7.webp";
import exterior8 from "../../assets/GalleryImages/optimized/Exterior-8.webp";


function imageSizes(image, desktopColumns, desktopAspect) {
  const { width, height } = imageDimensions[image.id];
  const ratio = width / height;
  const slot = (columns, spacing, aspect) => {
    const crop = Math.max(1, ratio / aspect);
    return `calc(${(100 * crop / columns).toFixed(3)}vw - ${(spacing * crop / columns).toFixed(3)}px)`;
  };
  return [
    `(max-width: 639px) ${slot(2, 50, 0.88)}`,
    `(max-width: 767px) ${slot(2, 62, 0.88)}`,
    `(max-width: 1023px) ${slot(3, 104, 1 / 1.05)}`,
    `(max-width: 1279px) ${slot(desktopColumns, 84 + 20 * (desktopColumns - 1), desktopAspect)}`,
    slot(desktopColumns, 96 + 22 * (desktopColumns - 1), desktopAspect),
  ].join(", ");
}

const GalleryImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "interior-1",
      src: interior1,
      alt: "Interior Design Gallery 1",
      layout: "large",
    },
    {
      id: "interior-2",
      src: interior2,
      alt: "Interior Design Gallery 2",
      layout: "large",
    },
    {
      id: "interior-3",
      src: interior3,
      alt: "Interior Design Gallery 3",
      layout: "large",
    },
    {
      id: "interior-4",
      src: interior4,
      alt: "Interior Design Gallery 4",
      layout: "small",
    },
    {
      id: "interior-5",
      src: interior5,
      alt: "Interior Design Gallery 5",
      layout: "small",
    },
    {
      id: "interior-6",
      src: interior6,
      alt: "Interior Design Gallery 6",
      layout: "small",
    },
    {
      id: "interior-7",
      src: interior7,
      alt: "Interior Design Gallery 7",
      layout: "small",
    },
    {
      id: "interior-8",
      src: interior8,
      alt: "Interior Design Gallery 8",
      layout: "small",
    },

    {
      id: "exterior-1",
      src: exterior1,
      alt: "Exterior Design Gallery 1",
      layout: "large",
    },
    {
      id: "exterior-2",
      src: exterior2,
      alt: "Exterior Design Gallery 2",
      layout: "large",
    },
    {
      id: "exterior-3",
      src: exterior3,
      alt: "Exterior Design Gallery 3",
      layout: "large",
    },
    {
      id: "exterior-4",
      src: exterior4,
      alt: "Exterior Design Gallery 4",
      layout: "small",
    },
    {
      id: "exterior-5",
      src: exterior5,
      alt: "Exterior Design Gallery 5",
      layout: "small",
    },
    {
      id: "exterior-6",
      src: exterior6,
      alt: "Exterior Design Gallery 6",
      layout: "small",
    },
    {
      id: "exterior-7",
      src: exterior7,
      alt: "Exterior Design Gallery 7",
      layout: "small",
    },
    {
      id: "exterior-8",
      src: exterior8,
      alt: "Exterior Design Gallery 8",
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
            lg:block
          "
        >
          <div
            className="
              grid
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
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
                  alt={image.alt}
                  sizes={imageSizes(image, 3, 1.52)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
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
                  alt={image.alt}
                  sizes={imageSizes(image, 4, 0.88)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
            {images.slice(7, 9).map((image) => (
              <div
                key={image.id}
                className="
                  group
                  relative
                  col-span-6
                  aspect-[1.45/1]
                  overflow-hidden
                  rounded-[18px]
                "
              >
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  sizes={imageSizes(image, 2, 1.45)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
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
                  alt={image.alt}
                  sizes={imageSizes(image, 3, 1.52)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
              grid-cols-12
              gap-[20px]
              mb-[20px]

              xl:gap-[22px]
              xl:mb-[22px]
            "
          >
            {images.slice(12, 16).map((image) => (
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
                  alt={image.alt}
                  sizes={imageSizes(image, 4, 0.88)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
                  alt={image.alt}
                  sizes={imageSizes(image, 3, 0.9523809523809523)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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
                  alt={image.alt}
                  sizes={imageSizes(image, 2, 0.88)}
                  loading={images.indexOf(image) < (layout === "mobile" ? 2 : 3) ? "eager" : "lazy"}
                  decoding="async"
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

export default GalleryImages;
