"use client";

export default function ScrollCue() {
  return (
    <div
      className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
      style={{
        textShadow: "0 1px 3px rgba(0,0,0,0.9)",
      }}
    >
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
