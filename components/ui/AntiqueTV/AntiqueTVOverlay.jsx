"use client";

import { useState, useEffect } from "react";

const PHASES = {
  BLACK: 0,
  POWER_ON: 1,
  DONE: 2,
};

export default function AntiqueTVOverlay({ onComplete }) {
  const [phase, setPhase] = useState(PHASES.BLACK);

  // Phase timing - no static, just black -> power on -> done
  useEffect(() => {
    const timers = [];

    // Black screen: 0-800ms
    timers.push(setTimeout(() => setPhase(PHASES.POWER_ON), 800));

    // Power on sweep runs 0.7s, then done at 1500ms
    timers.push(
      setTimeout(() => {
        setPhase(PHASES.DONE);
        onComplete?.();
      }, 1500)
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
    </div>
  );
}
