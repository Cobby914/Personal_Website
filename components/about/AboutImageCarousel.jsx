"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

function getCircularDistance(fromIndex, toIndex, length) {
  const directDistance = Math.abs(toIndex - fromIndex);
  return Math.min(directDistance, length - directDistance);
}

const CARD_WIDTH = 240;
const CARD_GAP = 20;

export default function AboutImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [missingImages, setMissingImages] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [expandedSlide, setExpandedSlide] = useState(null);
  const trackOffset = activeIndex * (CARD_WIDTH + CARD_GAP);

  function markAsMissing(src) {
    setMissingImages((prev) => ({ ...prev, [src]: true }));
  }

  function renderPolaroid(slide, isActive, index) {
    const isMissing = Boolean(missingImages[slide.src]);
    const canExpand = !isMissing;
    const imageCount = ABOUT_CAROUSEL_IMAGES.length;
    const distanceFromActive = getCircularDistance(index, activeIndex, imageCount);
    const shouldEagerLoad = distanceFromActive <= 1;
    const imageQuality = isActive ? 70 : 55;

    return (
      <button
        type="button"
        onClick={() => canExpand && setExpandedSlide(slide)}
        disabled={!canExpand}
        className={`relative flex h-[300px] w-[240px] flex-shrink-0 items-center justify-center rounded-sm bg-white p-3 pb-10 shadow-2xl transition-all duration-500 ease-out hover:z-30 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_28px_60px_rgba(0,0,0,0.4)] sm:h-[320px] sm:p-4 sm:pb-12 ${
          isActive ? "z-20 -translate-y-1 scale-105 opacity-100" : "z-10 scale-95 opacity-70"
        } ${canExpand ? "cursor-zoom-in" : "cursor-default"} disabled:opacity-100`}
      >
        {isMissing ? (
          <div className="flex h-full w-full flex-col items-center justify-center border border-gray-200 bg-gray-100 px-8 text-center">
            <p className="text-lg font-semibold text-gray-800">Add your photo here</p>
            <p className="mt-3 text-sm text-gray-600">{slide.filePath}</p>
          </div>
        ) : (
          <div className="relative h-full w-full border border-gray-200 bg-gray-100">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 220px, 240px"
              className="object-contain"
              onError={() => markAsMissing(slide.src)}
              quality={imageQuality}
              priority={shouldEagerLoad}
              loading={shouldEagerLoad ? "eager" : "lazy"}
              fetchPriority={isActive ? "high" : "auto"}
            />
          </div>
        )}
      </button>
    );
  }

  function goToSlide(index) {
    setActiveIndex(getWrappedIndex(index, ABOUT_CAROUSEL_IMAGES.length));
  }

  useEffect(() => {
    if (isPaused || expandedSlide) return;

    const intervalId = setInterval(() => {
      setActiveIndex((current) =>
        getWrappedIndex(current + 1, ABOUT_CAROUSEL_IMAGES.length)
      );
    }, 3500);

    return () => clearInterval(intervalId);
  }, [isPaused, expandedSlide]);

  useEffect(() => {
    if (!expandedSlide) return undefined;

    function handleEscClose(event) {
      if (event.key === "Escape") {
        setExpandedSlide(null);
      }
    }

    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, [expandedSlide]);

  return (
    <section className="relative w-full px-6 pb-20 sm:px-8 md:pb-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>

          <div
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/35 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="w-full px-4 py-6 sm:px-8 sm:py-8">
              <div className="overflow-hidden">
                <div
                  className="flex items-end gap-5 transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${trackOffset}px))`,
                  }}
                >
                  {ABOUT_CAROUSEL_IMAGES.map((slide, index) => (
                    <div key={slide.src} className={index === activeIndex ? "photo-pickup-drop" : ""}>
                      {renderPolaroid(slide, index === activeIndex, index)}
                    </div>
                  ))}
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

          {expandedSlide && (
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
              onClick={() => setExpandedSlide(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Expanded photo"
            >
              <div
                className="relative w-full max-w-5xl rounded-xl bg-white p-3 shadow-2xl sm:p-4"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setExpandedSlide(null)}
                  className="absolute right-3 top-3 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-black"
                >
                  Close
                </button>
                <Image
                  src={expandedSlide.src}
                  alt={expandedSlide.alt}
                  width={1600}
                  height={1200}
                  sizes="100vw"
                  quality={80}
                  className="max-h-[85vh] w-full rounded-md bg-gray-100 object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
