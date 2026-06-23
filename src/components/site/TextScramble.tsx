"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Characters to scramble through */
  chars?: string;
  /** Duration per character in ms */
  speed?: number;
  /** Delay before starting in ms */
  delay?: number;
  /** Whether to trigger on scroll into view */
  triggerOnView?: boolean;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#_abcdefghijklmnopqrstuvwxyz0123456789";

export function TextScramble({
  text,
  className = "",
  chars = DEFAULT_CHARS,
  speed = 30,
  delay = 0,
  triggerOnView = false,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(triggerOnView ? "" : text);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const length = text.length;

    const interval = () => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iteration < length) {
        iteration += 1 / 2; // half-character increments for smoother feel
        frameRef.current = window.setTimeout(interval, speed);
      }
    };

    frameRef.current = window.setTimeout(interval, delay);
  }, [text, chars, speed, delay]);

  useEffect(() => {
    if (!triggerOnView) {
      scramble();
      return () => {
        if (frameRef.current) clearTimeout(frameRef.current);
      };
    }
  }, [triggerOnView, scramble]);

  useEffect(() => {
    if (!triggerOnView || hasTriggered) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [triggerOnView, hasTriggered, scramble]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {displayText || "\u00A0"}
    </span>
  );
}
