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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!text || hasAnimated) return;

    let intervalId;
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
      let iteration = 0;

      intervalId = setInterval(() => {
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
          clearInterval(intervalId);
          setDisplayText(text);
          setHasAnimated(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, delay, speed, hasAnimated]);

  return (
    <span
      className={className}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.15s ease-out" }}
    >
      {displayText}
    </span>
  );
}
