"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NumberTicker } from "@/components/ui/number-ticker";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: 1, title: "Discover", desc: "Workshops, audits and a sharp product brief. We pressure-test the idea before a pixel is drawn." },
  { n: 2, title: "Design", desc: "Brand, flows, prototypes — iterated weekly with your team in the loop." },
  { n: 3, title: "Build", desc: "Cross-functional pods ship to staging every Friday. No black boxes." },
  { n: 4, title: "Launch & scale", desc: "Go-to-market, observability, growth experiments. We stay in the trenches." },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Step cards stagger reveal */
      const cards = sectionRef.current?.querySelectorAll("[data-process-step]");
      if (cards?.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector("[data-process-grid]"),
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      /* Connecting progress line draws as user scrolls */
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector("[data-process-grid]"),
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <span data-gsap-label className="text-xs uppercase tracking-[0.2em] text-lime">How we work</span>
          <h2 data-gsap-heading className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
            A process tuned for momentum.
          </h2>
        </div>

        {/* Connecting progress line */}
        <div className="relative mt-14">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-lime via-lime/60 to-lime/20 origin-left z-10 hidden lg:block"
            style={{ transformOrigin: "left center" }}
          />

          <div data-process-grid className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                data-process-step
                className="group bg-background p-8 md:p-10 transition-colors duration-300 hover:bg-surface"
              >
                <div className="font-display text-5xl font-semibold text-lime/30 transition-colors duration-300 group-hover:text-lime">
                  <NumberTicker
                    value={s.n}
                    className="text-inherit"
                    delay={0.3}
                  />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                {/* Step indicator dot */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lime/30 transition-colors duration-300 group-hover:bg-lime" />
                  <div className="h-px flex-1 bg-white/10 transition-colors duration-300 group-hover:bg-lime/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
