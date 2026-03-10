"use client";

import { useState, useEffect, useRef } from "react";

const PHASES = {
  BLACK: 0,
  POWER_ON: 1,
  STATIC: 2,
  CLEARING: 3,
  DONE: 4,
};

export default function AntiqueTVOverlay({ onComplete }) {
  const [phase, setPhase] = useState(PHASES.BLACK);
  const [staticOpacity, setStaticOpacity] = useState(1);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Static noise animation - runs when in STATIC or CLEARING phase
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || (phase !== PHASES.STATIC && phase !== PHASES.CLEARING)) return;

    const ctx = canvas.getContext("2d");
    const width = 640;
    const height = 640;
    canvas.width = width;
    canvas.height = height;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    const drawStatic = () => {
      for (let i = 0; i < data.length; i += 4) {
        const gray = Math.floor(Math.random() * 256);
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(drawStatic);
    };
    drawStatic();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [phase]);

  // Phase timing
  useEffect(() => {
    const timers = [];

    // Black screen: 0-800ms
    timers.push(setTimeout(() => setPhase(PHASES.POWER_ON), 800));

    // Power on: 800-1500ms
    timers.push(setTimeout(() => setPhase(PHASES.STATIC), 1500));

    // Static: 1500-3000ms (shorter duration)
    timers.push(
      setTimeout(() => {
        setPhase(PHASES.CLEARING);
      }, 3000)
    );

    // Clearing - fade out over 1000ms
    const clearStart = 3000;
    const clearDuration = 1000;
    const steps = 15;
    for (let i = 0; i <= steps; i++) {
      const delay = clearStart + (i / steps) * clearDuration;
      timers.push(
        setTimeout(() => {
          setStaticOpacity(1 - i / steps);
        }, delay)
      );
    }

    // Done: 4000ms
    timers.push(
      setTimeout(() => {
        setPhase(PHASES.DONE);
        setStaticOpacity(0);
        onComplete?.();
      }, 4000)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === PHASES.DONE) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-20"
      aria-hidden="true"
    >
      {/* Black screen (phase 0) */}
      {phase === PHASES.BLACK && (
        <div className="absolute inset-0 bg-black" />
      )}

      {/* Power-on: horizontal line sweep */}
      {phase === PHASES.POWER_ON && (
        <div className="absolute inset-0 overflow-hidden bg-black">
          <div
            className="tv-sweep-line absolute left-0 right-0 h-1 bg-white/40"
            style={{
              boxShadow: "0 0 20px 5px rgba(255,255,255,0.4)",
            }}
          />
        </div>
      )}

      {/* Static overlay */}
      {(phase === PHASES.STATIC || phase === PHASES.CLEARING) && (
        <div
          className="absolute inset-0"
          style={{ opacity: staticOpacity }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              imageRendering: "pixelated",
              imageRendering: "crisp-edges",
            }}
          />
        </div>
      )}
    </div>
  );
}
