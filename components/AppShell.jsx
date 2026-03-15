import AntiqueTVOverlay from "@/components/ui/AntiqueTV/AntiqueTVOverlay";
import Image from "next/image";

export default function AppShell({
  backgroundImage,
  backgroundSize = "contain",
  backgroundPosition = "center",
  showNoiseOverlay = true,
  children,
}) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Subtle noise texture on black areas */}
      {showNoiseOverlay && <div className="noise-overlay" aria-hidden="true" />}

      {/* Image - centered with black surrounding it on all sides */}
      {backgroundImage && (
        <>
          <div className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center px-1.5 pt-8 pb-4 sm:px-2 sm:pt-12 sm:pb-6">
            <div className="relative h-full w-full">
              <div
                className="image-fade-in absolute inset-0"
              >
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  sizes="100vw"
                  priority
                  className="pointer-events-none select-none"
                  style={{
                    objectFit: backgroundSize,
                    objectPosition: backgroundPosition,
                  }}
                />
              </div>
              {/* Gradient overlay for readability (over image area) */}
              <div
                className="image-fade-in absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.6) 100%)",
              }}
              />
              {/* Antique TV effect: power on -> static -> clear (only on image) */}
              <AntiqueTVOverlay />
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}
