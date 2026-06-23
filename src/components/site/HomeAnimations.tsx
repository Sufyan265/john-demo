"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HomeAnimationsProps {
  children: ReactNode;
}

export function HomeAnimations({ children }: HomeAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Section heading clip-reveals ── */
      const sectionHeadings = document.querySelectorAll("[data-gsap-heading]");
      sectionHeadings.forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          clipPath: "inset(0 0 100% 0)",
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      /* ── Section label reveals ── */
      const sectionLabels = document.querySelectorAll("[data-gsap-label]");
      sectionLabels.forEach((label) => {
        gsap.from(label, {
          scrollTrigger: {
            trigger: label,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      /* ── Section description reveals ── */
      const sectionDescs = document.querySelectorAll("[data-gsap-desc]");
      sectionDescs.forEach((desc) => {
        gsap.from(desc, {
          scrollTrigger: {
            trigger: desc,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2,
        });
      });

      /* ── Hero parallax: content moves faster, image slower ── */
      const heroContent = document.querySelector("[data-hero-content]");
      const heroVisual = document.querySelector("[data-hero-visual]");

      if (heroContent) {
        gsap.to(heroContent, {
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: -80,
          opacity: 0.3,
          ease: "none",
        });
      }

      if (heroVisual) {
        gsap.to(heroVisual, {
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          y: 40,
          ease: "none",
        });
      }

      /* ── Footer watermark scroll scrub ── */
      const watermark = document.querySelector("[data-footer-watermark]");
      if (watermark) {
        gsap.to(watermark, {
          scrollTrigger: {
            trigger: watermark,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          x: -120,
          ease: "none",
        });
      }

      /* ── Footer columns stagger ── */
      const footerCols = document.querySelectorAll("[data-footer-col]");
      if (footerCols.length) {
        gsap.from(footerCols, {
          scrollTrigger: {
            trigger: footerCols[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
