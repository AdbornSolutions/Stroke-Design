import { useEffect, useState } from "react";

import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";
import hero4 from "../../assets/hero-4.png";

const slides = [hero1, hero2, hero3, hero4];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-[520px] w-full overflow-hidden sm:h-[560px] lg:h-[559px]"
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            className="relative h-full min-w-full shrink-0"
          >
            <img
              src={image}
              alt={`Interior Design ${index + 1}`}
              className="block h-full w-full object-cover"
              draggable="false"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="mx-auto flex h-full w-full max-w-[1422px] items-center px-6 sm:px-10 md:px-14 lg:px-[7%]">
          <div className="pointer-events-auto max-w-[680px]">
            <p className="mb-4 font-sans text-[15px] font-medium text-white sm:text-[16px] md:mb-5 md:text-[17px]">
              Fast and Reliable
            </p>

            <h1 className="max-w-[680px] font-sans text-[42px] font-bold leading-[0.98] tracking-[-1.5px] text-white sm:text-[52px] md:text-[62px] lg:text-[70px]">
              Find Your Inspired
              <br />
              Interior Design
            </h1>

            <div className="lg:ml-[6.25rem]">
              <p className="mt-7 max-w-[610px] font-serif text-[15px] font-bold leading-[1.35] text-white sm:text-[16px] md:mt-8 md:text-[17px]">
                Whether it's your home, office, or a commercial project,
                <br className="hidden sm:block" />
                we are always dedicated to bringing your vision to life.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex min-h-[58px] items-center justify-center rounded-full border border-[#CAA05C] px-9 font-sans text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#FFFFFF75] hover:text-[#2F2F2F] sm:mt-8 sm:px-10 sm:text-[16px]"
              >
                Make a discovery call
              </a>
            </div>

          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center text-white/80 transition-colors hover:text-white sm:left-3 md:left-5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M15 5L8 12L15 19" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center text-white/80 transition-colors hover:text-white sm:right-3 md:right-5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 5L16 12L9 19" />
        </svg>
      </button>

    </section>
  );
};

export default HeroSlider;