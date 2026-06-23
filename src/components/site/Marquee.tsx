"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marquee as MagicMarquee } from "@/components/ui/marquee";

gsap.registerPlugin(ScrollTrigger);

const logos = ["Atlas", "Northwind", "Helios", "Vector", "Lumen", "Quanta", "Orbital", "Foundry", "Pulse", "Mercer"];

export function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Scroll-velocity effect: speed up marquee based on scroll */
      const marqueeRows = sectionRef.current?.querySelectorAll("[data-marquee-row]");
      if (marqueeRows?.length) {
        gsap.to(marqueeRows, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
          x: (i) => (i % 2 === 0 ? -60 : 60),
          ease: "none",
        });
      }

      /* Section entrance */
      gsap.from(sectionRef.current!, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-white/10 bg-surface/40 py-10 overflow-hidden">
      <div className="container-x mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams at
        </p>
      </div>

      {/* Row 1: forward direction */}
      <div data-marquee-row className="relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <MagicMarquee pauseOnHover className="[--duration:35s] [--gap:3rem]">
          {logos.map((name) => (
            <span
              key={name}
              className="font-display text-3xl font-semibold tracking-tight text-muted-foreground/50 transition-colors duration-300 hover:text-lime cursor-default"
            >
              {name}
            </span>
          ))}
        </MagicMarquee>
      </div>

      {/* Row 2: reverse direction */}
      <div data-marquee-row className="relative mt-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <MagicMarquee reverse pauseOnHover className="[--duration:40s] [--gap:3rem]">
          {logos.map((name) => (
            <span
              key={name}
              className="font-display text-2xl font-semibold tracking-tight text-muted-foreground/30 transition-colors duration-300 hover:text-foreground/60 cursor-default"
            >
              {name}
            </span>
          ))}
        </MagicMarquee>
      </div>
    </section>
  );
}
