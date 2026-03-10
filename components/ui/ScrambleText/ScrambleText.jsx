"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomText(str) {
  return str
    .split("")
    .map((char) => (char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join("");
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}) {
  const [displayText, setDisplayText] = useState(() =>
    text ? getRandomText(text) : ""
  );

  useEffect(() => {
    if (!text) return;

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
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return <span className={className}>{displayText}</span>;
}
