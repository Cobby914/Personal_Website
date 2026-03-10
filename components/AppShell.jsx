export default function AppShell({
  backgroundImage,
  children,
}) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Image - centered with black surrounding it on all sides */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 flex items-center justify-center p-[min(.5vw,.5h)]">
            <div
              className="h-full w-full max-h-[min(130vh,200vw)] max-w-[min(130vh,200vw)] bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "contain",
              }}
            />
          </div>
          {/* Gradient overlay for readability (over image area) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}
