"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextScramble } from "@/components/site/TextScramble";

const heroVisual = {
  image:
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
  alt: "Product design workspace with a laptop dashboard, tablet, and color swatches",
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Blur-to-sharp loading sequence (Dimaac-style) */
      const blurElements = sectionRef.current?.querySelectorAll("[data-blur-in]");
      if (blurElements?.length) {
        gsap.fromTo(
          blurElements,
          { filter: "blur(12px)", opacity: 0, y: 20 },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }

      /* Stats grid entrance */
      const statCells = sectionRef.current?.querySelectorAll("[data-stat-cell]");
      if (statCells?.length) {
        gsap.from(statCells, {
          opacity: 0,
          y: 30,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.8,
        });
      }

      /* Hero image scale-in */
      const heroImg = sectionRef.current?.querySelector("[data-hero-img]");
      if (heroImg) {
        gsap.from(heroImg, {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.6,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color="#d4ff00"
        size={0.4}
      />
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] z-[1]" />
      <div className="absolute inset-0 radial-glow z-[1]" />

      <div className="container-x relative z-[2]" data-hero-content>
        {/* Badge with BorderBeam */}
        <div data-blur-in className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          Now booking Q3 2026 — 2 slots open
          <BorderBeam
            size={50}
            duration={8}
            colorFrom="#d4ff00"
            colorTo="#8aff00"
            borderWidth={1}
          />
        </div>

        {/* Headline with Text Scramble */}
        <h1 data-blur-in className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[88px]">
          <TextScramble
            text="Software, web & mobile"
            speed={25}
            delay={400}
          />
          <br />
          <TextScramble
            text="built for "
            speed={25}
            delay={700}
          />
          <span className="italic text-lime">
            <TextScramble
              text="ambitious"
              speed={30}
              delay={900}
            />
          </span>
          <TextScramble
            text=" brands."
            speed={25}
            delay={1000}
          />
        </h1>

        <p data-blur-in className="mt-7 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We&apos;re John — a product studio of designers and engineers shipping high-craft digital
          products for venture-backed startups and global brands.
        </p>

        <div data-blur-in className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-lime-foreground transition-transform hover:scale-[1.03]"
          >
            Start your project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface"
          >
            See our work
          </a>
          <div className="ml-2 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-lime text-lime" />
              ))}
            </div>
            4.9 — 120+ launches
          </div>
        </div>

        <div data-hero-visual className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Stats with NumberTicker */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:self-end">
            {[
              { value: 12, suffix: "+", label: "Years shipping" },
              { value: 320, suffix: "", label: "Products launched" },
              { value: 48, suffix: "", label: "Countries served" },
              { value: 1.4, suffix: "B", prefix: "$", label: "Client funding raised", decimals: 1 },
            ].map((stat) => (
              <div key={stat.label} data-stat-cell className="bg-background p-6 md:p-8">
                <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {stat.prefix || ""}
                  <NumberTicker
                    value={stat.value}
                    className="text-foreground"
                    decimalPlaces={stat.decimals || 0}
                    delay={0.5}
                  />
                  {stat.suffix}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div data-hero-img className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 shadow-2xl shadow-lime/5">
            <Image
              src={heroVisual.image}
              alt={heroVisual.alt}
              width={1400}
              height={900}
              className="h-full w-full object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                Featured launch
              </div>
              <div className="mt-4 max-w-md">
                <div className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  A studio-grade product visual, not a placeholder.
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use this space to show the type of interfaces and product craft you ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
