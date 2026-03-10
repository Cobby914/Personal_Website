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

      {/* Gradient overlay for readability when using background image */}
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
