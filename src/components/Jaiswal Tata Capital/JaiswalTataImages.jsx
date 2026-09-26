import jaiswaltataimage1 from "../../assets/jaiswal tata capital/Image1.jpg";
import jaiswaltataimage10 from "../../assets/jaiswal tata capital/Image10.jpg";
import jaiswaltataimage11 from "../../assets/jaiswal tata capital/Image11.jpg";
import jaiswaltataimage12 from "../../assets/jaiswal tata capital/Image12.jpg";
import jaiswaltataimage13 from "../../assets/jaiswal tata capital/Image13.jpg";
import jaiswaltataimage14 from "../../assets/jaiswal tata capital/Image14.jpg";
import jaiswaltataimage15 from "../../assets/jaiswal tata capital/Image15.jpg";
import jaiswaltataimage16 from "../../assets/jaiswal tata capital/Image16.jpg";
import jaiswaltataimage17 from "../../assets/jaiswal tata capital/Image17.jpg";
import jaiswaltataimage18 from "../../assets/jaiswal tata capital/Image18.jpg";
import jaiswaltataimage19 from "../../assets/jaiswal tata capital/Image19.jpg";
import jaiswaltataimage2 from "../../assets/jaiswal tata capital/Image2.jpg";
import jaiswaltataimage3 from "../../assets/jaiswal tata capital/Image3.jpg";
import jaiswaltataimage4 from "../../assets/jaiswal tata capital/Image4.jpg";
import jaiswaltataimage5 from "../../assets/jaiswal tata capital/Image5.jpg";
import jaiswaltataimage6 from "../../assets/jaiswal tata capital/Image6.jpg";
import jaiswaltataimage7 from "../../assets/jaiswal tata capital/Image7.jpg";
import jaiswaltataimage8 from "../../assets/jaiswal tata capital/Image8.jpg";
import jaiswaltataimage9 from "../../assets/jaiswal tata capital/Image9.jpg";

const JaiswalTataImages = () => {
  const images = [
    // =========================
    // JAISWAL TATA CAPITAL
    // =========================
    {
      id: "jaiswaltata-1",
      src: jaiswaltataimage1,
      alt: "Jaiswal Tata Capital Gallery Image 1",
      layout: "large",
    },
    {
      id: "jaiswaltata-2",
      src: jaiswaltataimage2,
      alt: "Jaiswal Tata Capital Gallery Image 2",
      layout: "large",
    },
    {
      id: "jaiswaltata-3",
      src: jaiswaltataimage3,
      alt: "Jaiswal Tata Capital Gallery Image 3",
      layout: "large",
    },
    {
      id: "jaiswaltata-4",
      src: jaiswaltataimage4,
      alt: "Jaiswal Tata Capital Gallery Image 4",
      layout: "small",
    },
    {
      id: "jaiswaltata-5",
      src: jaiswaltataimage5,
      alt: "Jaiswal Tata Capital Gallery Image 5",
      layout: "small",
    },
    {
      id: "jaiswaltata-6",
      src: jaiswaltataimage6,
      alt: "Jaiswal Tata Capital Gallery Image 6",
      layout: "small",
    },
    {
      id: "jaiswaltata-7",
      src: jaiswaltataimage7,
      alt: "Jaiswal Tata Capital Gallery Image 7",
      layout: "small",
    },
    {
      id: "jaiswaltata-8",
      src: jaiswaltataimage8,
      alt: "Jaiswal Tata Capital Gallery Image 8",
      layout: "small",
    },
    {
      id: "jaiswaltata-9",
      src: jaiswaltataimage9,
      alt: "Jaiswal Tata Capital Gallery Image 9",
      layout: "small",
    },
    {
      id: "jaiswaltata-10",
      src: jaiswaltataimage10,
      alt: "Jaiswal Tata Capital Gallery Image 10",
      layout: "large",
    },
    {
      id: "jaiswaltata-11",
      src: jaiswaltataimage11,
      alt: "Jaiswal Tata Capital Gallery Image 11",
      layout: "large",
    },
    {
      id: "jaiswaltata-12",
      src: jaiswaltataimage12,
      alt: "Jaiswal Tata Capital Gallery Image 12",
      layout: "large",
    },
    {
      id: "jaiswaltata-13",
      src: jaiswaltataimage13,
      alt: "Jaiswal Tata Capital Gallery Image 13",
      layout: "small",
    },
    {
      id: "jaiswaltata-14",
      src: jaiswaltataimage14,
      alt: "Jaiswal Tata Capital Gallery Image 14",
      layout: "small",
    },
    {
      id: "jaiswaltata-15",
      src: jaiswaltataimage15,
      alt: "Jaiswal Tata Capital Gallery Image 15",
      layout: "small",
    },
    {
      id: "jaiswaltata-16",
      src: jaiswaltataimage16,
      alt: "Jaiswal Tata Capital Gallery Image 16",
      layout: "small",
    },
    {
      id: "jaiswaltata-17",
      src: jaiswaltataimage17,
      alt: "Jaiswal Tata Capital Gallery Image 17",
      layout: "small",
    },
    {
      id: "jaiswaltata-18",
      src: jaiswaltataimage18,
      alt: "Jaiswal Tata Capital Gallery Image 18",
      layout: "large",
    },
    {
      id: "jaiswaltata-19",
      src: jaiswaltataimage19,
      alt: "Jaiswal Tata Capital Gallery Image 19",
      layout: "large",
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
          {/* =================================================
              DESKTOP GALLERY
              ROW 1 → 3 IMAGES
              ROW 2 → 4 IMAGES
              ROW 3 → 2 IMAGES
              ROW 4 → 3 IMAGES
              ROW 5 → 4 IMAGES
              ROW 6 → 3 IMAGES
          ================================================== */}

          <div
            className="
              hidden

              lg:grid
              lg:grid-cols-12
              lg:gap-[20px]

              xl:gap-[22px]
            "
          >
            {/* =========================
                FIRST ROW - 3 IMAGES
            ========================== */}

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

            {/* =========================
                SECOND ROW - 4 IMAGES
            ========================== */}

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

            {/* =========================
                THIRD ROW - 2 IMAGES
            ========================== */}

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

            {/* =========================
                FOURTH ROW - 3 IMAGES
            ========================== */}

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

            {/* =========================
                FIFTH ROW - 4 IMAGES
            ========================== */}

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

            {/* =========================
                SIXTH ROW - 3 IMAGES
            ========================== */}

            {images.slice(16, 19).map((image) => (
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
          </div>

          {/* =================================================
              TABLET
              3 COLUMNS
          ================================================== */}

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

          {/* =================================================
              MOBILE
              2 COLUMNS
          ================================================== */}

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

export default JaiswalTataImages;
