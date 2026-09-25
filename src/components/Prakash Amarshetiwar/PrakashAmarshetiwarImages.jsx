import React from "react";

import PrakashImage1 from "../../assets/Prakash Amarshetiwar/Image1.jpg";
import PrakashImage2 from "../../assets/Prakash Amarshetiwar/Image2.jpg";
import PrakashImage3 from "../../assets/Prakash Amarshetiwar/Image3.jpg";
import PrakashImage4 from "../../assets/Prakash Amarshetiwar/Image4.jpg";
import PrakashImage5 from "../../assets/Prakash Amarshetiwar/Image5.jpg";
import PrakashImage6 from "../../assets/Prakash Amarshetiwar/Image6.jpg";
import PrakashImage7 from "../../assets/Prakash Amarshetiwar/Image7.jpg";
import PrakashImage8 from "../../assets/Prakash Amarshetiwar/Image8.jpg";
import PrakashImage9 from "../../assets/Prakash Amarshetiwar/Image9.jpg";
import PrakashImage10 from "../../assets/Prakash Amarshetiwar/Image10.jpg";
import PrakashImage11 from "../../assets/Prakash Amarshetiwar/Image11.jpg";
import PrakashImage12 from "../../assets/Prakash Amarshetiwar/Image12.jpg";
import PrakashImage13 from "../../assets/Prakash Amarshetiwar/Image13.jpg";
import PrakashImage14 from "../../assets/Prakash Amarshetiwar/Image14.jpg";

const PrakashAmarshetiwarImages = () => {
  const images = [
    {
      id: "prakash-1",
      src: PrakashImage1,
      alt: "Prakash Amarshetiwar Gallery Image 1",
      layout: "large",
    },
    {
      id: "prakash-2",
      src: PrakashImage2,
      alt: "Prakash Amarshetiwar Gallery Image 2",
      layout: "large",
    },
    {
      id: "prakash-3",
      src: PrakashImage3,
      alt: "Prakash Amarshetiwar Gallery Image 3",
      layout: "large",
    },
    {
      id: "prakash-4",
      src: PrakashImage4,
      alt: "Prakash Amarshetiwar Gallery Image 4",
      layout: "small",
    },
    {
      id: "prakash-5",
      src: PrakashImage5,
      alt: "Prakash Amarshetiwar Gallery Image 5",
      layout: "small",
    },
    {
      id: "prakash-6",
      src: PrakashImage6,
      alt: "Prakash Amarshetiwar Gallery Image 6",
      layout: "small",
    },
    {
      id: "prakash-7",
      src: PrakashImage7,
      alt: "Prakash Amarshetiwar Gallery Image 7",
      layout: "small",
    },
    {
      id: "prakash-8",
      src: PrakashImage8,
      alt: "Prakash Amarshetiwar Gallery Image 8",
      layout: "small",
    },
    {
      id: "prakash-9",
      src: PrakashImage9,
      alt: "Prakash Amarshetiwar Gallery Image 9",
      layout: "small",
    },
    {
      id: "prakash-10",
      src: PrakashImage10,
      alt: "Prakash Amarshetiwar Gallery Image 10",
      layout: "small",
    },
    {
      id: "prakash-11",
      src: PrakashImage11,
      alt: "Prakash Amarshetiwar Gallery Image 11",
      layout: "small",
    },
    {
      id: "prakash-12",
      src: PrakashImage12,
      alt: "Prakash Amarshetiwar Gallery Image 12",
      layout: "small",
    },
    {
      id: "prakash-13",
      src: PrakashImage13,
      alt: "Prakash Amarshetiwar Gallery Image 13",
      layout: "small",
    },
    {
      id: "prakash-14",
      src: PrakashImage14,
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

export default PrakashAmarshetiwarImages;