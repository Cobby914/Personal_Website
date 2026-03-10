export default function AppShell({
  backgroundImage,
  children,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Image - centered with black surrounding it on all sides */}
      {backgroundImage && (
        <div className="absolute inset-0 flex items-center justify-center p-[min.5vw,.5vh)]">
          <div
            className="h-full w-full max-h-[min(130vh,180vw)] max-w-[min(130vh,180vw)] bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "contain",
            }}
          />
        </div>
      )}

      {/* Gradient overlay for readability */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}
