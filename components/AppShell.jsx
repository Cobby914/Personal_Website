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

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </main>
  );
}
