export default function AppShell({
  backgroundImage,
  children,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage})` }
            : undefined
        }
      />

      {/* Overlay for readability when using background image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}
