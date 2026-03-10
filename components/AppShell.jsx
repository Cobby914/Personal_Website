import AntiqueTVOverlay from "@/components/ui/AntiqueTV/AntiqueTVOverlay";

export default function AppShell({
  backgroundImage,
  children,
}) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Image - centered with black surrounding it on all sides */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 flex items-center justify-center px-1.5 pt-8 pb-4 sm:px-2 sm:pt-12 sm:pb-6">
            <div className="relative h-full w-full">
              <div
                className="image-fade-in absolute inset-0 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "contain",
                }}
              />
              {/* Gradient overlay for readability (over image area) */}
              <div
                className="image-fade-in absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)",
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
