"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const rotatingWords = ["qmbitious", "scalable", "distinctive", "reliable"];
const typingDelay = 1500;
const typingSpeed = 88;
const deletingSpeed = 48;

export function HeroHeadline() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const wordSlotRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);
  const [displayWord, setDisplayWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = media.matches;

    if (media.matches) {
      gsap.set(heading.querySelectorAll("[data-hero-line]"), {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      return;
    }

    const ctx = gsap.context(() => {
      const lines = heading.querySelectorAll("[data-hero-line]");

      gsap.fromTo(
        lines,
        {
          yPercent: 115,
          opacity: 0,
          filter: "blur(14px)",
        },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.1,
        }
      );

      if (wordSlotRef.current) {
        gsap.fromTo(
          wordSlotRef.current,
          { opacity: 0, y: 12, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: 0.55,
            ease: "power3.out",
          }
        );
      }
    }, headingRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (reduceMotionRef.current) {
      setDisplayWord(rotatingWords[0]);
      return;
    }

    let isActive = true;

    const clearTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const schedule = (callback: () => void, delay: number) => {
      clearTimer();
      timerRef.current = window.setTimeout(() => {
        if (isActive) callback();
      }, delay);
    };

    const typeWord = (wordIndex: number, charIndex: number) => {
      const word = rotatingWords[wordIndex];
      setDisplayWord(word.slice(0, charIndex));

      if (!isActive) return;

      if (charIndex < word.length) {
        schedule(() => typeWord(wordIndex, charIndex + 1), typingSpeed);
        return;
      }

      schedule(() => deleteWord(wordIndex, word.length), typingDelay);
    };

    const deleteWord = (wordIndex: number, charIndex: number) => {
      const word = rotatingWords[wordIndex];
      setDisplayWord(word.slice(0, charIndex));

      if (!isActive) return;

      if (charIndex > 0) {
        schedule(() => deleteWord(wordIndex, charIndex - 1), deletingSpeed);
        return;
      }

      const nextWordIndex = (wordIndex + 1) % rotatingWords.length;
      schedule(() => typeWord(nextWordIndex, 0), 220);
    };

    setDisplayWord(rotatingWords[0]);
    schedule(() => typeWord(0, 1), 700);

    return () => {
      isActive = false;
      clearTimer();
    };
  }, []);

  const headline = `Software, web & mobile built for ${rotatingWords[0]} brands.`;
  const minWordWidth = `${Math.max(...rotatingWords.map((word) => word.length))}ch`;

  return (
    <h1
      ref={headingRef}
      aria-label={headline}
      className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
    >
      <span data-hero-line className="block overflow-hidden">
        <span className="inline-block">Software, web &amp; mobile</span>
      </span>
      <span data-hero-line className="block overflow-hidden">
        <span className="inline-block">built for </span>
        <span className="inline-flex items-baseline gap-2 align-baseline text-lime">
          <span
            ref={wordSlotRef}
            className="inline-flex min-w-[11ch] mx-4 items-baseline justify-start"
            style={{ minWidth: minWordWidth }}
            aria-hidden="true"
          >
            <span className="inline-block tabular-nums">{displayWord}</span>
            <span className="ml-0.5 inline-block animate-pulse text-lime/70">|</span>
          </span>
        </span>
        <span className="inline"> brands.</span>
      </span>
    </h1>
  );
}