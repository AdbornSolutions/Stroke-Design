import GalleryImage from "../Gallery/GalleryImage";
import useGalleryLayout from "../useGalleryLayout";
import React from "react";

import ResidentialImage1 from "../../assets/optimized/Residential/Image1.webp";
import ResidentialImage2 from "../../assets/optimized/Residential/Image2.webp";
import ResidentialImage3 from "../../assets/optimized/INTERIOR/Image4.webp";
import ResidentialImage4 from "../../assets/optimized/Residential/Image4.webp";
import ResidentialImage5 from "../../assets/optimized/INTERIOR/Image11.webp";
import ResidentialImage6 from "../../assets/optimized/Residential/Image6.webp";
import ResidentialImage7 from "../../assets/optimized/Interior 2D3D Layouts/Image8.webp";
import ResidentialImage8 from "../../assets/optimized/INTERIOR/Image10.webp";
import ResidentialImage9 from "../../assets/optimized/Commercial/Image3.webp";
import ResidentialImage10 from "../../assets/optimized/Residential/Image10.webp";
import ResidentialImage11 from "../../assets/optimized/INTERIOR/Image9.webp";
import ResidentialImage12 from "../../assets/optimized/jaiswal tata capital/Image18.webp";

const ResidentialImages = () => {
  const layout = useGalleryLayout();
  const images = [
    {
      id: "residential-1",
      src: ResidentialImage1,
      aspectRatio: 1.3333333333333333,
      alt: "Residential Design Gallery Image 1",
      layout: "large",
    },
    {
      id: "residential-2",
      src: ResidentialImage2,
      aspectRatio: 1.3333333333333333,
      alt: "Residential Design Gallery Image 2",
      layout: "large",
    },
    {
      id: "residential-3",
      src: ResidentialImage3,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 3",
      layout: "large",
    },
    {
      id: "residential-4",
      src: ResidentialImage4,
      aspectRatio: 1.5,
      alt: "Residential Design Gallery Image 4",
      layout: "small",
    },
    {
      id: "residential-5",
      src: ResidentialImage5,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 5",
      layout: "small",
    },
    {
      id: "residential-6",
      src: ResidentialImage6,
      aspectRatio: 0.75,
      alt: "Residential Design Gallery Image 6",
      layout: "small",
    },
    {
      id: "residential-7",
      src: ResidentialImage7,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 7",
      layout: "small",
    },
    {
      id: "residential-8",
      src: ResidentialImage8,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 8",
      layout: "small",
    },
    {
      id: "residential-9",
      src: ResidentialImage9,
      aspectRatio: 0.44583333333333336,
      alt: "Residential Design Gallery Image 9",
      layout: "small",
    },
    {
      id: "residential-10",
      src: ResidentialImage10,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 10",
      layout: "small",
    },
    {
      id: "residential-11",
      src: ResidentialImage11,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 11",
      layout: "small",
    },
    {
      id: "residential-12",
      src: ResidentialImage12,
      aspectRatio: 0.6666666666666666,
      alt: "Residential Design Gallery Image 12",
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

export default ResidentialImages;