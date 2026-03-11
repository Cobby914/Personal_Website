"use client";

import { useEffect, useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

const ABOUT_CAROUSEL_IMAGES = [
  {
    src: "/images/about-carousel/A69221D0-FF86-419F-BED7-2980811E1E73.jpg",
    alt: "About carousel image 1",
    label: "Image 1",
    filePath: "public/images/about-carousel/A69221D0-FF86-419F-BED7-2980811E1E73.jpg",
  },
  {
    src: "/images/about-carousel/IMG_1262.jpg",
    alt: "About carousel image 2",
    label: "Image 2",
    filePath: "public/images/about-carousel/IMG_1262.jpg",
  },
  {
    src: "/images/about-carousel/IMG_2750.jpg",
    alt: "About carousel image 3",
    label: "Image 3",
    filePath: "public/images/about-carousel/IMG_2750.jpg",
  },
  {
    src: "/images/about-carousel/IMG_6203.PNG",
    alt: "About carousel image 4",
    label: "Image 4",
    filePath: "public/images/about-carousel/IMG_6203.PNG",
  },
  {
    src: "/images/about-carousel/IMG_4741.jpg",
    alt: "About carousel image 5",
    label: "Image 5",
    filePath: "public/images/about-carousel/IMG_4741.jpg",
  },
  {
    src: "/images/about-carousel/IMG_4618.jpg",
    alt: "About carousel image 6",
    label: "Image 6",
    filePath: "public/images/about-carousel/IMG_4618.jpg",
  },
  {
    src: "/images/about-carousel/IMG_6129.jpg",
    alt: "About carousel image 7",
    label: "Image 7",
    filePath: "public/images/about-carousel/IMG_6129.jpg",
  },
  {
    src: "/images/about-carousel/IMG_4298.jpg",
    alt: "About carousel image 8",
    label: "Image 8",
    filePath: "public/images/about-carousel/IMG_4298.jpg",
  },
  {
    src: "/images/about-carousel/IMG_5121.jpg",
    alt: "About carousel image 9",
    label: "Image 9",
    filePath: "public/images/about-carousel/IMG_5121.jpg",
  },
  {
    src: "/images/about-carousel/IMG_5573.jpg",
    alt: "About carousel image 10",
    label: "Image 10",
    filePath: "public/images/about-carousel/IMG_5573.jpg",
  },
];

function getWrappedIndex(index, length) {
  return (index + length) % length;
}

export default function AboutImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [missingImages, setMissingImages] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  const prevIndex = getWrappedIndex(activeIndex - 1, ABOUT_CAROUSEL_IMAGES.length);
  const nextIndex = getWrappedIndex(activeIndex + 1, ABOUT_CAROUSEL_IMAGES.length);
  const activeSlide = ABOUT_CAROUSEL_IMAGES[activeIndex];
  const prevSlide = ABOUT_CAROUSEL_IMAGES[prevIndex];
  const nextSlide = ABOUT_CAROUSEL_IMAGES[nextIndex];

  function markAsMissing(src) {
    setMissingImages((prev) => ({ ...prev, [src]: true }));
  }

  function renderPolaroid(slide, cardClassName = "") {
    const isMissing = Boolean(missingImages[slide.src]);
    return (
      <div
        className={`flex h-full w-full items-center justify-center rounded-sm bg-white p-3 pb-10 shadow-2xl sm:p-4 sm:pb-12 ${cardClassName}`}
      >
        {isMissing ? (
          <div className="flex h-full w-full flex-col items-center justify-center border border-gray-200 bg-gray-100 px-8 text-center">
            <p className="text-lg font-semibold text-gray-800">Add your photo here</p>
            <p className="mt-3 text-sm text-gray-600">{slide.filePath}</p>
          </div>
        ) : (
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full border border-gray-200 bg-gray-100 object-contain"
            onError={() => markAsMissing(slide.src)}
          />
        )}
      </div>
    );
  }

  function goToSlide(index) {
    setActiveIndex(getWrappedIndex(index, ABOUT_CAROUSEL_IMAGES.length));
  }

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) =>
        getWrappedIndex(current + 1, ABOUT_CAROUSEL_IMAGES.length)
      );
    }, 3500);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section className="relative w-full px-6 pb-20 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>

          <div
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="aspect-[4/3] w-full px-4 py-6 sm:px-8 sm:py-8">
              <div className="relative mx-auto h-full w-full max-w-[760px]">
                <div className="absolute left-1 top-1/2 z-10 h-[90%] w-[44%] -translate-y-1/2 -rotate-6 opacity-70 sm:left-3">
                  {renderPolaroid(prevSlide)}
                </div>
                <div className="absolute right-1 top-1/2 z-10 h-[90%] w-[44%] -translate-y-1/2 rotate-6 opacity-70 sm:right-3">
                  {renderPolaroid(nextSlide)}
                </div>
                <div className="absolute left-1/2 top-1/2 z-20 h-full w-[62%] -translate-x-1/2 -translate-y-1/2">
                  {renderPolaroid(activeSlide, "ring-1 ring-black/5")}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/50 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/70"
              aria-label="Previous image"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/50 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black/70"
              aria-label="Next image"
            >
              Next
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {ABOUT_CAROUSEL_IMAGES.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${slide.label}`}
                  className={`h-2.5 rounded-full transition ${
                    isActive ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>

          <p className="mt-4 text-center text-sm text-white/70">
            Carousel loads images from `public/images/about-carousel/`.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
