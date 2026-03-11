"use client";

import { useState } from "react";
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

  const activeSlide = ABOUT_CAROUSEL_IMAGES[activeIndex];
  const isMissing = Boolean(missingImages[activeSlide.src]);

  function goToSlide(index) {
    setActiveIndex(getWrappedIndex(index, ABOUT_CAROUSEL_IMAGES.length));
  }

  return (
    <section className="relative w-full px-6 pb-20 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-3xl">
        <AnimateOnScroll>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-sm">
            <div className="aspect-[4/3] w-full">
              {isMissing ? (
                <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center">
                  <p className="text-lg font-semibold text-white">Add your photo here</p>
                  <p className="mt-3 text-sm text-white/80">{activeSlide.filePath}</p>
                </div>
              ) : (
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="h-full w-full object-cover"
                  onError={() =>
                    setMissingImages((prev) => ({ ...prev, [activeSlide.src]: true }))
                  }
                />
              )}
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
