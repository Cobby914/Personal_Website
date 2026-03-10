"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}) {
  // Start with final text so server and client match (avoids hydration error)
  const [displayText, setDisplayText] = useState(text ?? "");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!text || hasAnimated) return;

    const startTimeout = setTimeout(() => {
      let iteration = 0;

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration += 1 / 2;

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
          setHasAnimated(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed, hasAnimated]);

  return <span className={className}>{displayText}</span>;
}
